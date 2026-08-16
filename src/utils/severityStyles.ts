import type { Severity } from '../engine/interactionEngine';

export const SEVERITY_META: Record<
  Severity,
  { label: string; badgeClass: string; strokeClass: string; strokeWidth: number }
> = {
  high: {
    label: 'High risk',
    badgeClass: 'bg-skip-50 border-skip-500/30 text-skip-600',
    strokeClass: 'stroke-skip-500',
    strokeWidth: 3.5,
  },
  moderate: {
    label: 'Moderate',
    badgeClass: 'bg-snooze-50 border-snooze-500/30 text-snooze-600',
    strokeClass: 'stroke-snooze-500',
    strokeWidth: 2.5,
  },
  low: {
    label: 'Low',
    badgeClass: 'bg-upcoming-50 border-upcoming-500/30 text-upcoming-600',
    strokeClass: 'stroke-upcoming-500',
    strokeWidth: 1.75,
  },
};
