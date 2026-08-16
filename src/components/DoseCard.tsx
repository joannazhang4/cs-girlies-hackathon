import { useState } from 'react';
import { Check, Clock, Lock, Pill, RotateCcw, X } from 'lucide-react';
import type { DayDose } from '../utils/doses';
import { useMedications } from '../context/MedicationContext';
import { STATUS_META } from '../utils/statusStyles';
import { formatTime } from '../utils/date';

const SNOOZE_OPTIONS = [
  { label: '15 min', minutes: 15 },
  { label: '30 min', minutes: 30 },
  { label: '1 hour', minutes: 60 },
];

export function DoseCard({ dose }: { dose: DayDose }) {
  const { setDoseStatus, clearDoseStatus } = useMedications();
  const [snoozeOpen, setSnoozeOpen] = useState(false);
  const meta = STATUS_META[dose.status];

  // Fire-and-forget: MedicationContext already surfaces failures via its
  // shared `error` state (rendered in Layout), so swallow the rejection here
  // rather than letting it become an unhandled promise rejection.
  const take = () =>
    setDoseStatus(dose.medication.id, dose.date, dose.time, 'taken', {
      takenAt: new Date().toISOString(),
    }).catch(() => {});
  const skip = () => setDoseStatus(dose.medication.id, dose.date, dose.time, 'skipped').catch(() => {});
  const snooze = (minutes: number) => {
    const until = new Date(Date.now() + minutes * 60000).toISOString();
    setDoseStatus(dose.medication.id, dose.date, dose.time, 'snoozed', { snoozedUntil: until }).catch(() => {});
    setSnoozeOpen(false);
  };
  const undo = () => clearDoseStatus(dose.medication.id, dose.date, dose.time).catch(() => {});

  const actionable = !dose.locked && dose.status === 'due';
  const isLogged =
    !dose.locked &&
    (dose.status === 'taken' || dose.status === 'skipped' || dose.status === 'snoozed');

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
        style={{ backgroundColor: `${dose.medication.color}1a` }}
      >
        <Pill size={22} color={dose.medication.color} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
          <Clock size={12} />
          {formatTime(dose.time)}
        </div>
        <div className="truncate text-base font-semibold text-gray-900">{dose.medication.name}</div>
        <div className="text-sm text-gray-500">{dose.medication.dose}</div>
        {dose.medication.notes && (
          <div className="mt-0.5 truncate text-xs text-gray-400" title={dose.medication.notes}>
            {dose.medication.notes}
          </div>
        )}
        {dose.status === 'snoozed' && dose.log?.snoozedUntil && (
          <div className="mt-0.5 text-xs text-snooze-600">
            Snoozed until {new Date(dose.log.snoozedUntil).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
          </div>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {actionable && (
          <>
            <button
              onClick={take}
              className="flex items-center gap-1 rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-600"
            >
              <Check size={15} />
              Take
            </button>
            <button
              onClick={skip}
              title="Skip"
              className="flex items-center justify-center rounded-lg border border-gray-200 p-1.5 text-gray-400 transition hover:border-skip-500/40 hover:text-skip-600"
            >
              <X size={15} />
            </button>
            <div className="relative">
              <button
                onClick={() => setSnoozeOpen((v) => !v)}
                title="Snooze"
                className="flex items-center justify-center rounded-lg border border-gray-200 p-1.5 text-gray-400 transition hover:border-snooze-500/40 hover:text-snooze-600"
              >
                <Clock size={15} />
              </button>
              {snoozeOpen && (
                <div className="absolute right-0 top-9 z-10 w-32 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                  {SNOOZE_OPTIONS.map((opt) => (
                    <button
                      key={opt.minutes}
                      onClick={() => snooze(opt.minutes)}
                      className="block w-full px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {!actionable && (
          <span
            className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${meta.badgeClass}`}
          >
            {dose.locked && <Lock size={11} />}
            {meta.label}
          </span>
        )}

        {isLogged && (
          <button
            onClick={undo}
            title="Undo"
            className="flex items-center justify-center rounded-lg p-1.5 text-gray-300 transition hover:text-gray-500"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
