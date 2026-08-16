import { format, parseISO } from 'date-fns';

export const ISO_DATE = 'yyyy-MM-dd';

export function toISODate(d: Date): string {
  return format(d, ISO_DATE);
}

export function todayISO(): string {
  return toISODate(new Date());
}

export function parseISODate(s: string): Date {
  return parseISO(s);
}

/** Format an ISO date (yyyy-MM-dd) as "August 14, 2026". */
export function formatLongDate(iso: string): string {
  return format(parseISO(iso), 'MMMM d, yyyy');
}

/** Format an ISO date as "Fri, Aug 14". */
export function formatShortDate(iso: string): string {
  return format(parseISO(iso), 'EEE, MMM d');
}

/** Format "HH:mm" 24h time as "8:00 AM". */
export function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const d = new Date(2000, 0, 1, h, m);
  return format(d, 'h:mm a');
}

/** Format an MM/dd/yyyy input-style string to ISO. Accepts already-ISO input too. */
export function toISOFromUS(dateStr: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  const [mm, dd, yyyy] = dateStr.split('/');
  return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
}
