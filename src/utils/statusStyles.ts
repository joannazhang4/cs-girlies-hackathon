import type { DoseDisplayStatus } from '../types';

export const STATUS_META: Record<
  DoseDisplayStatus,
  { label: string; badgeClass: string; dotClass: string }
> = {
  taken: {
    label: 'Taken',
    badgeClass: 'bg-taken-50 text-taken-600 border border-taken-500/30',
    dotClass: 'bg-taken-500',
  },
  due: {
    label: 'Due now',
    badgeClass: 'bg-upcoming-50 text-upcoming-600 border border-upcoming-500/30',
    dotClass: 'bg-upcoming-500',
  },
  upcoming: {
    label: 'Upcoming',
    badgeClass: 'bg-gray-100 text-gray-500 border border-gray-300',
    dotClass: 'bg-gray-300',
  },
  skipped: {
    label: 'Skipped',
    badgeClass: 'bg-skip-50 text-skip-600 border border-skip-500/30',
    dotClass: 'bg-skip-500',
  },
  snoozed: {
    label: 'Snoozed',
    badgeClass: 'bg-snooze-50 text-snooze-600 border border-snooze-500/30',
    dotClass: 'bg-snooze-500',
  },
  missed: {
    label: 'Not taken',
    badgeClass: 'bg-skip-50 text-skip-600 border border-skip-500/30',
    dotClass: 'bg-skip-500',
  },
};
