import type { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginPage } from '../pages/auth/LoginPage';
import { SignupPage } from '../pages/auth/SignupPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from '../pages/auth/ResetPasswordPage';
import { RecoveryPhraseRevealPage } from '../pages/auth/RecoveryPhraseRevealPage';
import { UnlockPage } from '../pages/auth/UnlockPage';

function CenteredMessage({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen items-center justify-center bg-gray-50 text-sm text-gray-400">{children}</div>;
}

/**
 * Top-level switch on auth status. Only renders the real app (children) once
 * the user is fully authenticated AND the data-encryption key has been
 * unwrapped in memory for this session ('unlocked').
 */
export function AuthGate({ children }: { children: ReactNode }) {
  const { status } = useAuth();

  if (status === 'loading') return <CenteredMessage>Loading…</CenteredMessage>;
  if (status === 'reveal-recovery') return <RecoveryPhraseRevealPage />;
  if (status === 'recovery') return <ResetPasswordPage />;
  if (status === 'locked') return <UnlockPage />;

  if (status === 'logged-out') {
    return (
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<CenteredMessage>Verifying your recovery link…</CenteredMessage>} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    );
  }

  return <>{children}</>;
}
