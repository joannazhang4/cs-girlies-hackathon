import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { AuthLayout, authButtonClass, authErrorClass, authInputClass, authLabelClass } from './AuthLayout';

export function ResetPasswordPage() {
  const { completeRecovery, signOut } = useAuth();
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setSubmitting(true);
    try {
      await completeRecovery(recoveryPhrase, newPassword);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter the recovery phrase you saved at sign-up. It's the only way to keep your existing medication history — without it, the old data can't be recovered."
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className={authLabelClass}>Recovery phrase</label>
          <input
            required
            className={`${authInputClass} font-mono`}
            placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"
            value={recoveryPhrase}
            onChange={(e) => setRecoveryPhrase(e.target.value)}
          />
        </div>
        <div>
          <label className={authLabelClass}>New password</label>
          <input
            type="password"
            required
            minLength={8}
            className={authInputClass}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label className={authLabelClass}>Confirm new password</label>
          <input
            type="password"
            required
            className={authInputClass}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className={authErrorClass}>{error}</p>}
        <button type="submit" disabled={submitting} className={authButtonClass}>
          {submitting ? 'Resetting…' : 'Reset password'}
        </button>
      </form>
      <button onClick={() => signOut()} className="mt-4 w-full text-center text-xs text-gray-400 hover:underline">
        Cancel and sign out
      </button>
    </AuthLayout>
  );
}
