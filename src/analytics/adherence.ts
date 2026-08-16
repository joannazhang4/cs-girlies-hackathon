/**
 * Adherence analytics — computed locally from the decrypted medication list
 * and dose logs already held in MedicationContext.
 *
 * Deliberately reuses `generateOccurrences` and `deriveStatus` from the
 * tracker's own utils rather than reimplementing them. If the two ever
 * disagree, the day view and the analytics dashboard would show contradictory
 * numbers — which is exactly the sort of thing that gets noticed on stage.
 */

import type { DoseDisplayStatus, DoseLog, Medication } from '../types';
import { generateOccurrences } from '../utils/schedule';
import { deriveStatus } from '../utils/doses';
import { todayISO } from '../utils/date';

export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export interface AdherenceReport {
  /** taken / (taken + skipped + missed). Null when nothing has resolved yet. */
  overall: number | null;
  byTimeOfDay: Record<TimeOfDay, number | null>;
  /** Keyed by Medication.id */
  byMedication: Record<string, number | null>;
  counts: {
    taken: number;
    skipped: number;
    missed: number;
    snoozed: number;
    pending: number;
    total: number;
  };
  /** Plain-language observations, most useful first. */
  insights: string[];
}

/**
 * Buckets a "HH:mm" time. Chosen to line up with how people actually describe
 * their day rather than even six-hour quarters.
 */
export function timeOfDay(time: string): TimeOfDay {
  const hour = Number(time.split(':')[0]);
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17) return 'evening';
  return 'night';
}

/**
 * A dose counts toward adherence only once it has resolved. Doses still
 * pending (due / upcoming) are excluded from the denominator — otherwise the
 * percentage sags through the day and looks broken.
 */
function isResolved(status: DoseDisplayStatus): boolean {
  return status === 'taken' || status === 'skipped' || status === 'missed';
}

function rate(taken: number, resolved: number): number | null {
  return resolved === 0 ? null : taken / resolved;
}

const TIME_LABEL: Record<TimeOfDay, string> = {
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'overnight',
};

/**
 * Compute adherence over a window ending today.
 *
 * @param windowDays How many days back to include (default 30). Doses
 *   scheduled in the future are always excluded regardless of this value.
 */
export function computeAdherence(
  medications: Medication[],
  doseLogs: DoseLog[],
  windowDays = 30
): AdherenceReport {
  const today = todayISO();
  const windowStart = shiftISO(today, -(windowDays - 1));

  // Index logs for O(1) lookup instead of scanning per dose.
  const logIndex = new Map<string, DoseLog>();
  for (const log of doseLogs) {
    logIndex.set(`${log.medicationId}|${log.date}|${log.time}`, log);
  }

  const counts = { taken: 0, skipped: 0, missed: 0, snoozed: 0, pending: 0, total: 0 };
  const byTod: Record<TimeOfDay, { taken: number; resolved: number }> = {
    morning: { taken: 0, resolved: 0 },
    afternoon: { taken: 0, resolved: 0 },
    evening: { taken: 0, resolved: 0 },
    night: { taken: 0, resolved: 0 },
  };
  const byMed = new Map<string, { taken: number; resolved: number }>();

  let totalTaken = 0;
  let totalResolved = 0;

  for (const med of medications) {
    byMed.set(med.id, { taken: 0, resolved: 0 });

    for (const occurrence of generateOccurrences(med)) {
      // Only the window, and never the future.
      if (occurrence.date < windowStart || occurrence.date > today) continue;

      const log = logIndex.get(`${med.id}|${occurrence.date}|${occurrence.time}`);
      const status = deriveStatus(occurrence.date, occurrence.time, log);

      counts.total++;
      if (status === 'taken') counts.taken++;
      else if (status === 'skipped') counts.skipped++;
      else if (status === 'missed') counts.missed++;
      else if (status === 'snoozed') counts.snoozed++;
      else counts.pending++;

      if (!isResolved(status)) continue;

      const wasTaken = status === 'taken' ? 1 : 0;
      totalTaken += wasTaken;
      totalResolved++;

      const bucket = byTod[timeOfDay(occurrence.time)];
      bucket.taken += wasTaken;
      bucket.resolved++;

      const medBucket = byMed.get(med.id)!;
      medBucket.taken += wasTaken;
      medBucket.resolved++;
    }
  }

  const byTimeOfDay = {
    morning: rate(byTod.morning.taken, byTod.morning.resolved),
    afternoon: rate(byTod.afternoon.taken, byTod.afternoon.resolved),
    evening: rate(byTod.evening.taken, byTod.evening.resolved),
    night: rate(byTod.night.taken, byTod.night.resolved),
  };

  const byMedication: Record<string, number | null> = {};
  for (const [id, b] of byMed) byMedication[id] = rate(b.taken, b.resolved);

  return {
    overall: rate(totalTaken, totalResolved),
    byTimeOfDay,
    byMedication,
    counts,
    insights: buildInsights(medications, byTimeOfDay, byTod, byMedication, totalResolved),
  };
}

function buildInsights(
  medications: Medication[],
  byTimeOfDay: Record<TimeOfDay, number | null>,
  byTod: Record<TimeOfDay, { taken: number; resolved: number }>,
  byMedication: Record<string, number | null>,
  totalResolved: number
): string[] {
  const insights: string[] = [];
  // Below this, differences are noise, not a pattern worth naming.
  const MIN_SAMPLE = 4;

  const candidates = (Object.keys(byTimeOfDay) as TimeOfDay[]).filter(
    (t) => byTimeOfDay[t] !== null && byTod[t].resolved >= MIN_SAMPLE
  );

  if (candidates.length >= 2) {
    const sorted = [...candidates].sort((a, b) => byTimeOfDay[a]! - byTimeOfDay[b]!);
    const worst = sorted[0];
    const best = sorted[sorted.length - 1];
    // Only call it a pattern if the gap is meaningful.
    if (byTimeOfDay[best]! - byTimeOfDay[worst]! >= 0.15) {
      insights.push(
        `You're most likely to miss ${TIME_LABEL[worst]} medications ` +
          `(${pct(byTimeOfDay[worst])} taken, versus ${pct(byTimeOfDay[best])} in the ${TIME_LABEL[best]}).`
      );
    }
  }

  const struggling = medications
    .filter((m) => byMedication[m.id] !== null && byMedication[m.id]! < 0.7)
    .sort((a, b) => byMedication[a.id]! - byMedication[b.id]!);

  if (struggling.length) {
    const m = struggling[0];
    insights.push(`${m.name} is your lowest-adherence medication at ${pct(byMedication[m.id])}.`);
  }

  if (totalResolved === 0) {
    insights.push('Not enough history yet — adherence appears once doses start being logged.');
  }

  return insights;
}

function pct(value: number | null): string {
  return value === null ? '—' : `${Math.round(value * 100)}%`;
}

/** Shift an ISO yyyy-mm-dd string by N days without pulling in a date library. */
function shiftISO(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
