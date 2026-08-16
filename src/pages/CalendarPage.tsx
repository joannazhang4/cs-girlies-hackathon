import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday as isTodayFn,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMedications } from '../context/MedicationContext';
import { getDayDoses, summarizeDay } from '../utils/doses';
import { toISODate, todayISO } from '../utils/date';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function CalendarPage() {
  const navigate = useNavigate();
  const { medications, doseLogs } = useMedications();
  const [cursor, setCursor] = useState(() => new Date());

  const days = useMemo(() => {
    const monthStart = startOfMonth(cursor);
    const monthEnd = endOfMonth(cursor);
    const gridStart = startOfWeek(monthStart);
    const gridEnd = endOfWeek(monthEnd);
    return eachDayOfInterval({ start: gridStart, end: gridEnd });
  }, [cursor]);

  const today = todayISO();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCursor((c) => subMonths(c, 1))}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">{format(cursor, 'MMMM yyyy')}</h1>
        <button
          onClick={() => setCursor((c) => addMonths(c, 1))}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Next month"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
          {WEEKDAYS.map((w) => (
            <div key={w} className="py-2 text-center text-xs font-medium text-gray-400">
              {w}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((day) => {
            const dateISO = toISODate(day);
            const inMonth = isSameMonth(day, cursor);
            const doses = getDayDoses(medications, doseLogs, dateISO);
            const summary = summarizeDay(doses);

            return (
              <button
                key={dateISO}
                onClick={() => navigate(`/day/${dateISO}`)}
                className={`flex h-20 flex-col items-center justify-start gap-1.5 border-b border-r border-gray-100 p-2 text-left transition hover:bg-brand-50 ${
                  inMonth ? 'bg-white' : 'bg-gray-50/60'
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                    dateISO === today
                      ? 'bg-brand-500 font-semibold text-white'
                      : inMonth
                        ? 'text-gray-700'
                        : 'text-gray-300'
                  }`}
                >
                  {day.getDate()}
                </span>
                <div className="flex flex-wrap items-center justify-center gap-0.5">
                  {summary.total === 0
                    ? null
                    : Array.from({ length: Math.min(summary.total, 4) }).map((_, i) => {
                        let dotColor = 'bg-gray-300';
                        if (i < summary.taken) dotColor = 'bg-taken-500';
                        else if (i < summary.taken + summary.skipped + summary.missed) dotColor = 'bg-skip-500';
                        else if (i < summary.taken + summary.skipped + summary.missed + summary.snoozed)
                          dotColor = 'bg-snooze-500';
                        return <span key={i} className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />;
                      })}
                </div>
                {isTodayFn(day) && summary.total > 0 && (
                  <span className="text-[10px] text-gray-400">
                    {summary.taken}/{summary.total}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
        <Legend color="bg-taken-500" label="Taken" />
        <Legend color="bg-skip-500" label="Skipped / not taken" />
        <Legend color="bg-snooze-500" label="Snoozed" />
        <Legend color="bg-gray-300" label="Pending" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </div>
  );
}
