import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { AuthLayout, authButtonClass } from './AuthLayout';

export function RecoveryPhraseRevealPage() {
  const { pendingRecoveryPhrase, confirmRecoveryPhraseSaved } = useAuth();
  const [confirmed, setConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!pendingRecoveryPhrase) return;
    try {
      await navigator.clipboard.writeText(pendingRecoveryPhrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — the phrase is still visible to select/copy manually.
    }
  };

  return (
    <AuthLayout
      title="Save your recovery phrase"
      subtitle="This is the only way back into your account if you forget your password. We can't see it, and we can't recover it for you."
    >
      <div className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-center font-mono text-sm tracking-wide text-brand-800">
        {pendingRecoveryPhrase}
      </div>
      <button
        onClick={copy}
        className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? 'Copied' : 'Copy to clipboard'}
      </button>

      <label className="mt-5 flex items-start gap-2 text-xs text-gray-600">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-0.5"
        />
        I've saved this phrase somewhere safe (password manager, printed copy). I understand MedTrack cannot recover
        it for me.
      </label>

      <button onClick={confirmRecoveryPhraseSaved} disabled={!confirmed} className={`mt-4 ${authButtonClass}`}>
        Continue
      </button>
    </AuthLayout>
  );
}
