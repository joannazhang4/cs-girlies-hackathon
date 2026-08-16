import { addHours, endOfDay, format, parseISO } from 'date-fns';
import type { Medication } from '../types';

export interface ScheduledDose {
  medicationId: string;
  date: string; // yyyy-MM-dd
  time: string; // HH:mm
}

const MAX_OCCURRENCES = 3000; // safety guard against malformed segments

/**
 * Expands a medication's start time + frequency segments into individual
 * scheduled doses, from startDate/firstTime through endDate.
 *
 * Segments are applied in order of their `untilDate`; once a segment's
 * date is passed the next segment's interval takes over. This lets a
 * medication taper, e.g. "every 6 hours till 08/16, every 15 hours till 08/20".
 */
export function generateOccurrences(med: Medication): ScheduledDose[] {
  if (!med.frequencySegments.length) return [];

  const segments = [...med.frequencySegments].sort((a, b) =>
    a.untilDate.localeCompare(b.untilDate)
  );

  const occurrences: ScheduledDose[] = [];
  let current = parseISO(`${med.startDate}T${med.firstTime}`);
  const hardEnd = endOfDay(parseISO(med.endDate));

  let guard = 0;
  while (current <= hardEnd && guard < MAX_OCCURRENCES) {
    guard++;
    const dateStr = format(current, 'yyyy-MM-dd');
    occurrences.push({
      medicationId: med.id,
      date: dateStr,
      time: format(current, 'HH:mm'),
    });

    const seg = segments.find((s) => dateStr <= s.untilDate) ?? segments[segments.length - 1];
    if (!seg || seg.intervalHours <= 0) break;
    current = addHours(current, seg.intervalHours);
  }

  return occurrences;
}

/** All scheduled doses for a specific day, across all given medications. */
export function occurrencesForDate(meds: Medication[], dateISO: string): ScheduledDose[] {
  return meds
    .flatMap((m) => generateOccurrences(m))
    .filter((o) => o.date === dateISO)
    .sort((a, b) => a.time.localeCompare(b.time));
}

/** Builds a human-readable frequency summary from segments, e.g. matching the backend format. */
export function summarizeFrequency(segments: Medication['frequencySegments']): string {
  if (!segments.length) return '';
  return segments
    .map((s) => `every ${s.intervalHours} hour${s.intervalHours === 1 ? '' : 's'} till ${formatUS(s.untilDate)}`)
    .join(', ');
}

function formatUS(iso: string): string {
  const [, m, d] = iso.split('-');
  return `${m}/${d}`;
}
