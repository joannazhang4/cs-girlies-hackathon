import type { DoseLog, Medication } from '../types';
import { getDayDoses } from './doses';
import { todayISO } from './date';

const NOTIFIED_KEY = 'mtrack.notified';
/** Don't nag about a dose that's already hours overdue every time the tab checks in. */
const MAX_MINUTES_LATE_TO_NOTIFY = 120;

export function notificationsSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export function getNotificationPermission(): NotificationPermission | 'unsupported' {
  if (!notificationsSupported()) return 'unsupported';
  return Notification.permission;
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  console.log(
    '[MedTrack] requestNotificationPermission called. supported =',
    notificationsSupported(),
    'current permission =',
    notificationsSupported() ? Notification.permission : 'n/a',
    'isSecureContext =',
    window.isSecureContext
  );

  if (!notificationsSupported()) {
    console.warn('[MedTrack] Notification API not available in this browser.');
    return 'denied';
  }

  try {
    const result = await Notification.requestPermission();
    console.log('[MedTrack] Notification.requestPermission() resolved with:', result);
    return result;
  } catch (err) {
    console.error('[MedTrack] Notification.requestPermission() threw:', err);
    throw err;
  }
}

/** Fires an immediate notification so the user can confirm permission actually results in a visible alert. */
export function sendTestNotification(): { ok: boolean; error?: string } {
  console.log('[MedTrack] sendTestNotification called. permission =', getNotificationPermission());
  if (!notificationsSupported()) {
    return { ok: false, error: 'This browser does not support the Notification API.' };
  }
  if (Notification.permission !== 'granted') {
    return { ok: false, error: `Permission is "${Notification.permission}", not "granted".` };
  }
  try {
    const n = new Notification('MedTrack test notification', {
      body: 'If you can see this, reminders are working.',
    });
    console.log('[MedTrack] Test Notification object created:', n);
    return { ok: true };
  } catch (err) {
    console.error('[MedTrack] Failed to construct Notification:', err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

function getNotifiedSet(): Set<string> {
  try {
    const raw = localStorage.getItem(NOTIFIED_KEY);
    return new Set<string>(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function saveNotifiedSet(set: Set<string>): void {
  localStorage.setItem(NOTIFIED_KEY, JSON.stringify([...set]));
}

/**
 * Fires a browser notification for any dose that is currently "due" (scheduled
 * time has passed, doctor-assigned) and hasn't been logged or already notified.
 * Safe to call frequently — it's idempotent per dose via a localStorage set.
 */
export function checkAndFireReminders(medications: Medication[], doseLogs: DoseLog[]): void {
  if (!notificationsSupported() || Notification.permission !== 'granted') {
    console.log(
      '[MedTrack] checkAndFireReminders skipped — supported:',
      notificationsSupported(),
      'permission:',
      getNotificationPermission()
    );
    return;
  }

  const doses = getDayDoses(medications, doseLogs, todayISO());
  console.log(
    '[MedTrack] checkAndFireReminders running —',
    doses.filter((d) => d.status === 'due').length,
    'due dose(s) out of',
    doses.length
  );
  const notified = getNotifiedSet();
  const now = new Date();
  let changed = false;

  for (const dose of doses) {
    if (dose.status !== 'due') continue;
    const key = `${dose.medication.id}|${dose.date}|${dose.time}`;
    if (notified.has(key)) continue;

    const [h, m] = dose.time.split(':').map(Number);
    const scheduled = new Date();
    scheduled.setHours(h, m, 0, 0);
    const minutesLate = (now.getTime() - scheduled.getTime()) / 60000;
    if (minutesLate > MAX_MINUTES_LATE_TO_NOTIFY) continue;

    new Notification(`Time for ${dose.medication.name}`, {
      body: `${dose.medication.dose} — scheduled for ${dose.time}`,
      tag: key,
    });
    notified.add(key);
    changed = true;
  }

  if (changed) saveNotifiedSet(notified);
}
