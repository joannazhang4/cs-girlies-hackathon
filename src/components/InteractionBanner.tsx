import { AlertTriangle } from 'lucide-react';
import type { InteractionWarning } from '../types';
import { SEVERITY_META } from '../utils/severityStyles';

/**
 * Renders whatever the interaction-checking engine returns.
 * Currently always empty (see src/data/interactions.ts) until that piece is merged in.
 */
export function InteractionBanner({ warnings }: { warnings: InteractionWarning[] }) {
  if (!warnings.length) return null;

  return (
    <div className="space-y-2">
      {warnings.map((w) => (
        <div key={w.id} className={`rounded-xl border p-4 ${SEVERITY_META[w.severity].badgeClass}`}>
          <div className="flex items-start gap-2.5">
            <AlertTriangle size={18} className="mt-0.5 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-medium">{w.description}</p>
              {w.suggestedTimeAdjustment && (
                <p className="mt-1 text-xs opacity-80">Suggested: {w.suggestedTimeAdjustment}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
