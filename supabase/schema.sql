-- MedTrack schema — run this once in the Supabase SQL editor
-- (Project → SQL Editor → New query → paste → Run)
--
-- Every table only ever stores encrypted blobs or key-wrapping material —
-- no medication name, dose, time, or note is ever stored in plaintext here.
-- Row Level Security ensures a user can only ever read/write their own rows,
-- enforced by Postgres itself, not by application code.

-- One row per user: holds the key-wrapping material needed to unwrap the
-- master encryption key (MEK) from either the user's password or their
-- one-time recovery phrase. None of these values are secret on their own —
-- salts are public by design, and the wrapped keys are ciphertext.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  pdk_salt text not null,              -- salt for password-derived key (PBKDF2)
  rdk_salt text not null,              -- salt for recovery-phrase-derived key (PBKDF2)
  wrapped_key_password text not null,  -- MEK encrypted with the password-derived key
  wrapped_key_password_iv text not null,
  wrapped_key_recovery text not null,  -- MEK encrypted with the recovery-phrase-derived key
  wrapped_key_recovery_iv text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "users manage their own profile"
  on public.profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- One encrypted row per medication.
create table public.medications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  ciphertext text not null,   -- AES-GCM encrypted JSON: name, dose, dates, frequency, notes, color, etc.
  iv text not null,           -- per-row nonce, unique to this ciphertext
  created_at timestamptz not null default now()
);

alter table public.medications enable row level security;

create policy "users manage their own medications"
  on public.medications for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- One encrypted row per logged dose (taken/skipped/snoozed).
create table public.dose_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  medication_id uuid not null references public.medications (id) on delete cascade,
  ciphertext text not null,   -- AES-GCM encrypted JSON: date, time, status, takenAt/snoozedUntil
  iv text not null,
  created_at timestamptz not null default now()
);

alter table public.dose_logs enable row level security;

create policy "users manage their own dose logs"
  on public.dose_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index dose_logs_medication_id_idx on public.dose_logs (medication_id);
