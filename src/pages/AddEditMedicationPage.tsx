import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';
import { useMedications } from '../context/MedicationContext';
import type { FrequencySegment } from '../types';
import { summarizeFrequency } from '../utils/schedule';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { todayISO } from '../utils/date';

const FREQUENCY_PRESETS = [
  { label: 'Once daily', hours: 24 },
  { label: 'Twice daily', hours: 12 },
  { label: '3x daily', hours: 8 },
  { label: 'Every 4 hrs', hours: 4 },
  { label: 'Every 6 hrs', hours: 6 },
  { label: 'Every 12 hrs', hours: 12 },
];

const inputClass =
  'w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100';
const labelClass = 'mb-1 block text-xs font-medium text-gray-500';

export function AddEditMedicationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { medications, addMedication, updateMedication, deleteMedication } = useMedications();
  const editing = id ? medications.find((m) => m.id === id) : undefined;

  useEffect(() => {
    if (id && !editing) navigate('/medications', { replace: true });
  }, [id, editing, navigate]);

  const [name, setName] = useState(editing?.name ?? '');
  const [dose, setDose] = useState(editing?.dose ?? '');
  const [startDate, setStartDate] = useState(editing?.startDate ?? todayISO());
  const [endDate, setEndDate] = useState(editing?.endDate ?? '');
  const [firstTime, setFirstTime] = useState(editing?.firstTime ?? '08:00');
  const [notes, setNotes] = useState(editing?.notes ?? '');
  const [segments, setSegments] = useState<FrequencySegment[]>(
    editing?.frequencySegments ?? [{ intervalHours: 24, untilDate: '' }]
  );
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Keep a single segment's "until" date synced to the overall end date for the common case.
  useEffect(() => {
    setSegments((prev) => (prev.length === 1 ? [{ ...prev[0], untilDate: endDate }] : prev));
  }, [endDate]);

  const applyPreset = (hours: number) => {
    setSegments([{ intervalHours: hours, untilDate: endDate }]);
  };

  const updateSegment = (idx: number, patch: Partial<FrequencySegment>) => {
    setSegments((prev) => prev.map((s, i) => (i === idx ? { ...s, ...patch } : s)));
  };

  const addSegment = () => {
    setSegments((prev) => [...prev, { intervalHours: 24, untilDate: endDate }]);
  };

  const removeSegment = (idx: number) => {
    setSegments((prev) => prev.filter((_, i) => i !== idx));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !dose.trim() || !startDate || !endDate || !firstTime) {
      setError('Please fill in medication name, dose, start date, end date, and first dose time.');
      return;
    }
    if (endDate < startDate) {
      setError('End date must be on or after the start date.');
      return;
    }
    if (segments.some((s) => !s.untilDate || s.intervalHours <= 0)) {
      setError('Every frequency step needs a valid interval and an "until" date.');
      return;
    }

    const payload = {
      medication: name.trim(),
      dose: dose.trim(),
      startDate,
      time: firstTime,
      endDate,
      frequencySegments: segments,
      frequency: summarizeFrequency(segments),
      notes: notes.trim() || undefined,
    };

    setSubmitting(true);
    try {
      if (editing) {
        await updateMedication(editing.id, {
          name: payload.medication,
          dose: payload.dose,
          startDate: payload.startDate,
          firstTime: payload.time,
          endDate: payload.endDate,
          frequencySegments: payload.frequencySegments,
          frequencyText: payload.frequency,
          notes: payload.notes,
        });
      } else {
        await addMedication(payload);
      }
      navigate('/medications');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <h1 className="text-xl font-semibold text-gray-900">
        {editing ? 'Edit medication' : 'Add a medication'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className={labelClass}>Medication name</label>
            <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ibuprofen" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className={labelClass}>Dose</label>
            <input className={inputClass} value={dose} onChange={(e) => setDose(e.target.value)} placeholder="200 mg" />
          </div>

          <div>
            <label className={labelClass}>Start date</label>
            <input type="date" className={inputClass} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>First dose time</label>
            <input type="time" className={inputClass} value={firstTime} onChange={(e) => setFirstTime(e.target.value)} />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label className={labelClass}>End date</label>
            <input type="date" className={inputClass} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Frequency</label>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {FREQUENCY_PRESETS.map((p) => (
              <button
                type="button"
                key={p.label}
                onClick={() => applyPreset(p.hours)}
                className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                  segments.length === 1 && segments[0].intervalHours === p.hours
                    ? 'border-brand-400 bg-brand-50 text-brand-700'
                    : 'border-gray-200 text-gray-500 hover:border-brand-300 hover:text-brand-600'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {segments.map((seg, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs text-gray-400">every</span>
                <input
                  type="number"
                  min={1}
                  className={`${inputClass} w-16 text-center`}
                  value={seg.intervalHours}
                  onChange={(e) => updateSegment(idx, { intervalHours: Number(e.target.value) })}
                />
                <span className="text-xs text-gray-400">hours, until</span>
                <input
                  type="date"
                  className={`${inputClass} flex-1`}
                  value={seg.untilDate}
                  onChange={(e) => updateSegment(idx, { untilDate: e.target.value })}
                />
                {segments.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSegment(idx)}
                    className="shrink-0 rounded-lg p-1.5 text-gray-300 hover:text-skip-500"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addSegment}
            className="mt-2 flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline"
          >
            <Plus size={13} />
            Add a taper step (e.g. slower dosing later)
          </button>

          {segments.length > 0 && segments.every((s) => s.untilDate) && (
            <p className="mt-2 text-xs text-gray-400">Sent to backend as: “{summarizeFrequency(segments)}”</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Notes (optional)</label>
          <textarea
            className={`${inputClass} min-h-16 resize-none`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Take with food, avoid alcohol, etc."
          />
        </div>

        {error && <p className="text-sm text-skip-600">{error}</p>}

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          {editing ? (
            <button
              type="button"
              onClick={() => setConfirmingDelete(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-skip-600 hover:underline"
            >
              <Trash2 size={15} />
              Delete
            </button>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Saving…' : editing ? 'Save changes' : 'Add medication'}
            </button>
          </div>
        </div>
      </form>

      {confirmingDelete && editing && (
        <ConfirmDialog
          title="Delete medication?"
          message={`This removes ${editing.name} and its dose history. This can't be undone.`}
          confirmLabel="Delete"
          danger
          onCancel={() => setConfirmingDelete(false)}
          onConfirm={() => {
            deleteMedication(editing.id)
              .then(() => navigate('/medications'))
              .catch(() => setConfirmingDelete(false));
          }}
        />
      )}
    </div>
  );
}
