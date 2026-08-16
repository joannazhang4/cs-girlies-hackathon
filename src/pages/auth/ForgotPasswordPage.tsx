import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthLayout, authButtonClass, authErrorClass, authInputClass, authLabelClass } from './AuthLayout';

export function ForgotPasswordPage() {
  const { sendPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await sendPasswordReset(email);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent a password reset link. You'll need your recovery phrase from sign-up to finish resetting — without it, your existing encrypted data can't be recovered."
      >
        <Link to="/login" className="text-sm font-medium text-brand-600 hover:underline">
          Back to login
        </Link>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Forgot password"
      subtitle="We'll email you a reset link. Have your recovery phrase ready — you'll need it to keep access to your existing data."
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className={authLabelClass}>Email</label>
          <input
            type="email"
            required
            className={authInputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className={authErrorClass}>{error}</p>}
        <button type="submit" disabled={submitting} className={authButtonClass}>
          {submitting ? 'Sending…' : 'Send reset link'}
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-gray-500">
        <Link to="/login" className="hover:underline">
          Back to login
        </Link>
      </p>
    </AuthLayout>
  );
}
