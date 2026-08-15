import { NavLink, Outlet } from 'react-router-dom';
import { CalendarDays, ListChecks, LogOut, Pill, Plus, X } from 'lucide-react';
import { todayISO } from '../utils/date';
import { ReminderBanner } from './ReminderBanner';
import { useMedications } from '../context/MedicationContext';
import { useAuth } from '../context/AuthContext';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
  }`;

export function Layout() {
  const { loading, error, clearError } = useMedications();
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <NavLink to={`/day/${todayISO()}`} className="flex items-center gap-2 text-brand-700">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
              <Pill size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">MedTrack</span>
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavLink to={`/day/${todayISO()}`} className={navLinkClass} end={false}>
              <ListChecks size={16} />
              <span className="hidden sm:inline">Today</span>
            </NavLink>
            <NavLink to="/calendar" className={navLinkClass}>
              <CalendarDays size={16} />
              <span className="hidden sm:inline">Calendar</span>
            </NavLink>
            <NavLink to="/medications" className={navLinkClass}>
              <Pill size={16} />
              <span className="hidden sm:inline">Medications</span>
            </NavLink>
            <NavLink
              to="/medications/new"
              className="ml-1 flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-600"
            >
              <Plus size={16} />
              <span className="hidden sm:inline">Add</span>
            </NavLink>
            <button
              onClick={() => signOut()}
              title="Sign out"
              className="ml-1 flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
            >
              <LogOut size={16} />
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6">
        {error && (
          <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-skip-500/30 bg-skip-50 px-4 py-3 text-sm text-skip-700">
            <span>{error}</span>
            <button onClick={clearError} className="shrink-0 text-skip-400 hover:text-skip-600" title="Dismiss">
              <X size={16} />
            </button>
          </div>
        )}
        <ReminderBanner />
        {loading ? (
          <div className="flex justify-center py-20 text-sm text-gray-400">Loading your medications…</div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
