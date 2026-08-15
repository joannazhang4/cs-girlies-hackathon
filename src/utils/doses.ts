import type { DoseDisplayStatus, DoseLog, Medication } from '../types';
import { occurrencesForDate } from './schedule';
import { todayISO } from './date';

export interface DayDose {
  medication: Medication;
  date: string;
  time: string;
  status: DoseDisplayStatus;
  log?: DoseLog;
  /** Past-day doses that have resolved (taken/skipped/not-taken) are read-only. */
  locked: boolean;
}

export function deriveStatus(date: string, time: string, log?: DoseLog): DoseDisplayStatus {
  const now = new Date();

  if (log) {
    // A snooze that has elapsed goes back to "due" so it resurfaces as actionable.
    if (log.status === 'snoozed' && log.snoozedUntil && new Date(log.snoozedUntil) <= now) {
      return 'due';
    }
    return log.status;
  }

  const today = todayISO();
  if (date > today) return 'upcoming';
  if (date < today) return 'missed';

  // same day — compare against current time
  const [h, m] = time.split(':').map(Number);
  const scheduled = new Date();
  scheduled.setHours(h, m, 0, 0);
  return scheduled <= now ? 'due' : 'upcoming';
}

/** All doses (scheduled + status) for a given day, across active medications, sorted by time. */
export function getDayDoses(medications: Medication[], doseLogs: DoseLog[], dateISO: string): DayDose[] {
  const occurrences = occurrencesForDate(medications, dateISO);
  const medById = new Map(medications.map((m) => [m.id, m]));

  const today = todayISO();
  const doses: DayDose[] = [];
  for (const o of occurrences) {
    const medication = medById.get(o.medicationId);
    if (!medication) continue;
    const log = doseLogs.find(
      (l) => l.medicationId === o.medicationId && l.date === o.date && l.time === o.time
    );
    const status = deriveStatus(o.date, o.time, log);
    // A dose is locked once its day has passed and it's no longer an active,
    // resolvable item — i.e. it's not sitting "due" or "snoozed" right now.
    // That exemption is what lets a dose snoozed past midnight stay editable.
    const locked = o.date < today && status !== 'due' && status !== 'snoozed';
    doses.push({
      medication,
      date: o.date,
      time: o.time,
      status,
      log,
      locked,
    });
  }
  return doses.sort((a, b) => a.time.localeCompare(b.time));
}

/** Adherence summary for a day: counts by status, used for calendar dots. */
export function summarizeDay(doses: DayDose[]) {
  return {
    total: doses.length,
    taken: doses.filter((d) => d.status === 'taken').length,
    skipped: doses.filter((d) => d.status === 'skipped').length,
    missed: doses.filter((d) => d.status === 'missed').length,
    snoozed: doses.filter((d) => d.status === 'snoozed').length,
    pending: doses.filter((d) => d.status === 'due' || d.status === 'upcoming').length,
  };
}
