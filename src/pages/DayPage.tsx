import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addDays } from 'date-fns';
import { ChevronLeft, ChevronRight, PillBottle } from 'lucide-react';
import { useMedications } from '../context/MedicationContext';
import { getDayDoses, summarizeDay } from '../utils/doses';
import { checkInteractions } from '../data/interactions';
import { DoseCard } from '../components/DoseCard';
import { InteractionBanner } from '../components/InteractionBanner';
import { formatLongDate, parseISODate, toISODate, todayISO } from '../utils/date';

export function DayPage() {
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const { medications, doseLogs } = useMedications();

  const dateISO = date ?? todayISO();
  const isToday = dateISO === todayISO();

  const doses = useMemo(() => getDayDoses(medications, doseLogs, dateISO), [medications, doseLogs, dateISO]);
  const warnings = useMemo(() => checkInteractions(medications), [medications]);
  const summary = useMemo(() => summarizeDay(doses), [doses]);

  const goToDate = (d: string) => navigate(`/day/${d}`);
  const shiftDay = (delta: number) => goToDate(toISODate(addDays(parseISODate(dateISO), delta)));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <button
          onClick={() => shiftDay(-1)}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Previous day"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">
            {isToday ? "Today's Medications" : formatLongDate(dateISO)}
          </h1>
          {isToday ? (
            <p className="text-xs text-gray-400">{formatLongDate(dateISO)}</p>
          ) : (
            <button onClick={() => goToDate(todayISO())} className="text-xs text-brand-600 hover:underline">
              Jump to today
            </button>
          )}
        </div>

        <button
          onClick={() => shiftDay(1)}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Next day"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <InteractionBanner warnings={warnings} />

      {summary.total > 0 && (
        <div className="flex flex-wrap gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs text-gray-500">
          <span className="font-medium text-gray-700">{summary.total} scheduled</span>
          {summary.taken > 0 && <span className="text-taken-600">{summary.taken} taken</span>}
          {summary.skipped > 0 && <span className="text-skip-600">{summary.skipped} skipped</span>}
          {summary.missed > 0 && <span className="text-skip-600">{summary.missed} not taken</span>}
          {summary.snoozed > 0 && <span className="text-snooze-600">{summary.snoozed} snoozed</span>}
          {summary.pending > 0 && <span className="text-gray-400">{summary.pending} pending</span>}
        </div>
      )}

      {doses.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white py-14 text-center">
          <PillBottle size={28} className="text-gray-300" />
          <p className="text-sm text-gray-500">No medications scheduled for this day.</p>
          <button
            onClick={() => navigate('/medications/new')}
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Add a medication
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {doses.map((d) => (
            <DoseCard key={`${d.medication.id}-${d.time}`} dose={d} />
          ))}
        </div>
      )}
    </div>
  );
}
