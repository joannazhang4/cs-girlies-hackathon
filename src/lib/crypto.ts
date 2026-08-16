// Client-side envelope encryption. A random master encryption key (MEK)
// encrypts all medication data; the MEK itself is wrapped by two
// independently-derived keys — one from the user's password, one from a
// one-time recovery phrase — so either can unlock the same data. The MEK,
// and all plaintext, only ever exist in this browser's memory. Nothing here
// is ever sent to Supabase.

const PBKDF2_ITERATIONS = 300_000;
const RECOVERY_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no ambiguous chars (I, L, O, 0, 1)

function toBase64(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = '';
  for (const b of arr) binary += String.fromCharCode(b);
  return btoa(binary);
}

function fromBase64(b64: string): Uint8Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function randomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

export function generateSaltB64(): string {
  return toBase64(randomBytes(16));
}

/** A random, human-typeable recovery phrase — shown once, never stored anywhere in plaintext. */
export function generateRecoveryPhrase(): string {
  const bytes = randomBytes(20); // 160 bits of entropy
  let chars = '';
  for (const b of bytes) chars += RECOVERY_ALPHABET[b % RECOVERY_ALPHABET.length];
  return chars.match(/.{1,4}/g)!.join('-');
}

function normalizeRecoveryPhrase(phrase: string): string {
  return phrase.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}

async function deriveKeyFromSecret(secret: string, saltB64: string): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: fromBase64(saltB64) as BufferSource,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

export function deriveKeyFromPassword(password: string, saltB64: string): Promise<CryptoKey> {
  return deriveKeyFromSecret(password, saltB64);
}

export function deriveKeyFromRecoveryPhrase(phrase: string, saltB64: string): Promise<CryptoKey> {
  return deriveKeyFromSecret(normalizeRecoveryPhrase(phrase), saltB64);
}

/** Generates the random master key all medication data is encrypted with. */
export function generateMasterKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
}

async function encryptBytes(key: CryptoKey, data: Uint8Array): Promise<{ ciphertext: string; iv: string }> {
  const iv = randomBytes(12);
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv as BufferSource },
    key,
    data as BufferSource
  );
  return { ciphertext: toBase64(ciphertext), iv: toBase64(iv) };
}

async function decryptBytes(key: CryptoKey, ciphertextB64: string, ivB64: string): Promise<Uint8Array> {
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromBase64(ivB64) as BufferSource },
    key,
    fromBase64(ciphertextB64) as BufferSource
  );
  return new Uint8Array(plain);
}

/** Wraps (encrypts) the master key's raw bytes with a derived key — for storing per-password/per-recovery-phrase copies. */
export async function wrapMasterKey(
  mek: CryptoKey,
  wrappingKey: CryptoKey
): Promise<{ wrapped: string; iv: string }> {
  const raw = await crypto.subtle.exportKey('raw', mek);
  const { ciphertext, iv } = await encryptBytes(wrappingKey, new Uint8Array(raw));
  return { wrapped: ciphertext, iv };
}

/** Unwraps (decrypts) the master key's raw bytes back into a usable AES-GCM key. */
export async function unwrapMasterKey(
  wrappedB64: string,
  ivB64: string,
  wrappingKey: CryptoKey
): Promise<CryptoKey> {
  const raw = await decryptBytes(wrappingKey, wrappedB64, ivB64);
  return crypto.subtle.importKey('raw', raw as BufferSource, { name: 'AES-GCM', length: 256 }, true, [
    'encrypt',
    'decrypt',
  ]);
}

/** Encrypts an arbitrary JSON-serializable value with the master key. */
export async function encryptJSON(mek: CryptoKey, value: unknown): Promise<{ ciphertext: string; iv: string }> {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  return encryptBytes(mek, bytes);
}

/** Decrypts a value previously produced by encryptJSON. */
export async function decryptJSON<T>(mek: CryptoKey, ciphertextB64: string, ivB64: string): Promise<T> {
  const bytes = await decryptBytes(mek, ciphertextB64, ivB64);
  return JSON.parse(new TextDecoder().decode(bytes)) as T;
}
