import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { AuthLayout, authButtonClass, authErrorClass, authInputClass, authLabelClass } from './AuthLayout';

export function UnlockPage() {
  const { unlock, signOut, session } = useAuth();
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await unlock(password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Enter your password"
      subtitle={
        session?.user.email
          ? `Signed in as ${session.user.email}. Your password is needed again to decrypt your data.`
          : 'Your password is needed again to decrypt your data.'
      }
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className={authLabelClass}>Password</label>
          <input
            type="password"
            required
            autoFocus
            className={authInputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={authErrorClass}>{error}</p>}
        <button type="submit" disabled={submitting} className={authButtonClass}>
          {submitting ? 'Unlocking…' : 'Unlock'}
        </button>
      </form>
      <button onClick={() => signOut()} className="mt-4 w-full text-center text-xs text-gray-400 hover:underline">
        Not you? Sign out
      </button>
    </AuthLayout>
  );
}
