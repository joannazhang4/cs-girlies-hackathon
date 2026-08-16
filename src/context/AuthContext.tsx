import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../data/supabaseClient';
import {
  deriveKeyFromPassword,
  deriveKeyFromRecoveryPhrase,
  generateMasterKey,
  generateRecoveryPhrase,
  generateSaltB64,
  unwrapMasterKey,
  wrapMasterKey,
} from '../lib/crypto';

export type AuthStatus = 'loading' | 'logged-out' | 'locked' | 'reveal-recovery' | 'recovery' | 'unlocked';

interface Profile {
  id: string;
  pdk_salt: string;
  rdk_salt: string;
  wrapped_key_password: string;
  wrapped_key_password_iv: string;
  wrapped_key_recovery: string;
  wrapped_key_recovery_iv: string;
}

interface AuthContextValue {
  status: AuthStatus;
  session: Session | null;
  /** The unwrapped data-encryption key. Lives only in memory — never persisted. */
  masterKey: CryptoKey | null;
  /** Set only right after sign-up, while status === 'reveal-recovery'. */
  pendingRecoveryPhrase: string | null;
  signUp: (email: string, password: string) => Promise<void>;
  confirmRecoveryPhraseSaved: () => void;
  logIn: (email: string, password: string) => Promise<void>;
  unlock: (password: string) => Promise<void>;
  signOut: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  completeRecovery: (recoveryPhrase: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle();
  if (error) throw error;
  return data;
}

/** Generates a fresh master key + recovery phrase and writes the wrapped copies to `profiles`. */
async function createProfileAndKey(
  userId: string,
  password: string
): Promise<{ mek: CryptoKey; recoveryPhrase: string }> {
  const mek = await generateMasterKey();
  const pdkSalt = generateSaltB64();
  const rdkSalt = generateSaltB64();
  const pdk = await deriveKeyFromPassword(password, pdkSalt);
  const recoveryPhrase = generateRecoveryPhrase();
  const rdk = await deriveKeyFromRecoveryPhrase(recoveryPhrase, rdkSalt);

  const wrappedByPassword = await wrapMasterKey(mek, pdk);
  const wrappedByRecovery = await wrapMasterKey(mek, rdk);

  const { error: insertError } = await supabase.from('profiles').insert({
    id: userId,
    pdk_salt: pdkSalt,
    rdk_salt: rdkSalt,
    wrapped_key_password: wrappedByPassword.wrapped,
    wrapped_key_password_iv: wrappedByPassword.iv,
    wrapped_key_recovery: wrappedByRecovery.wrapped,
    wrapped_key_recovery_iv: wrappedByRecovery.iv,
  });
  if (insertError) throw insertError;

  return { mek, recoveryPhrase };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading');
  const [session, setSession] = useState<Session | null>(null);
  const [masterKey, setMasterKey] = useState<CryptoKey | null>(null);
  const [pendingRecoveryPhrase, setPendingRecoveryPhrase] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setStatus(data.session ? 'locked' : 'logged-out');
    });

    const { data: sub } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
      if (!newSession) {
        setMasterKey(null);
        setStatus('logged-out');
      } else if (event === 'PASSWORD_RECOVERY') {
        setStatus('recovery');
      } else {
        // Don't downgrade an in-progress reveal/unlocked state on unrelated auth events.
        setStatus((prev) => (prev === 'unlocked' || prev === 'reveal-recovery' ? prev : 'locked'));
      }
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const unlockWithPassword = async (password: string) => {
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    if (!userId) throw new Error('No active session.');
    const profile = await fetchProfile(userId);

    if (!profile) {
      // The Supabase auth account exists but sign-up never finished writing the
      // profile row (e.g. it failed partway through). Complete it now, using the
      // password just entered — same result as a fresh sign-up would have had.
      const { mek, recoveryPhrase } = await createProfileAndKey(userId, password);
      setMasterKey(mek);
      setPendingRecoveryPhrase(recoveryPhrase);
      setStatus('reveal-recovery');
      return;
    }

    const pdk = await deriveKeyFromPassword(password, profile.pdk_salt);
    let mek: CryptoKey;
    try {
      mek = await unwrapMasterKey(profile.wrapped_key_password, profile.wrapped_key_password_iv, pdk);
    } catch {
      throw new Error('Incorrect password.');
    }
    setMasterKey(mek);
    setStatus('unlocked');
  };

  const signUp = async (email: string, password: string) => {
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) throw signUpError;
    const userId = data.user?.id;
    if (!userId) throw new Error('Sign-up did not return a user id.');

    const { mek, recoveryPhrase } = await createProfileAndKey(userId, password);
    setMasterKey(mek);
    setPendingRecoveryPhrase(recoveryPhrase);
    setStatus('reveal-recovery');
  };

  const confirmRecoveryPhraseSaved = () => {
    setPendingRecoveryPhrase(null);
    setStatus('unlocked');
  };

  const logIn = async (email: string, password: string) => {
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) throw signInError;
    await unlockWithPassword(password);
  };

  const unlock = async (password: string) => {
    await unlockWithPassword(password);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setMasterKey(null);
    setStatus('logged-out');
  };

  const sendPasswordReset = async (email: string) => {
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (resetError) throw resetError;
  };

  const completeRecovery = async (recoveryPhrase: string, newPassword: string) => {
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    if (!userId) throw new Error('No active recovery session — use the link from your email.');
    const profile = await fetchProfile(userId);
    if (!profile) throw new Error('No profile found for this account.');

    const rdk = await deriveKeyFromRecoveryPhrase(recoveryPhrase, profile.rdk_salt);
    let mek: CryptoKey;
    try {
      mek = await unwrapMasterKey(profile.wrapped_key_recovery, profile.wrapped_key_recovery_iv, rdk);
    } catch {
      throw new Error('That recovery phrase is incorrect.');
    }

    const { error: updateAuthError } = await supabase.auth.updateUser({ password: newPassword });
    if (updateAuthError) throw updateAuthError;

    const newPdkSalt = generateSaltB64();
    const newPdk = await deriveKeyFromPassword(newPassword, newPdkSalt);
    const wrapped = await wrapMasterKey(mek, newPdk);

    const { error: updateProfileError } = await supabase
      .from('profiles')
      .update({
        pdk_salt: newPdkSalt,
        wrapped_key_password: wrapped.wrapped,
        wrapped_key_password_iv: wrapped.iv,
      })
      .eq('id', userId);
    if (updateProfileError) throw updateProfileError;

    setMasterKey(mek);
    setStatus('unlocked');
  };

  return (
    <AuthContext.Provider
      value={{
        status,
        session,
        masterKey,
        pendingRecoveryPhrase,
        signUp,
        confirmRecoveryPhraseSaved,
        logIn,
        unlock,
        signOut,
        sendPasswordReset,
        completeRecovery,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
