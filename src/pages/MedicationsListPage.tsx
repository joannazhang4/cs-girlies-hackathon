import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Pill, Plus, Trash2 } from 'lucide-react';
import { useMedications } from '../context/MedicationContext';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { formatShortDate, formatTime, todayISO } from '../utils/date';
import type { Medication } from '../types';

export function MedicationsListPage() {
  const navigate = useNavigate();
  const { medications, deleteMedication } = useMedications();
  const [deletingMed, setDeletingMed] = useState<Medication | null>(null);
  const today = todayISO();

  const active = medications.filter((m) => m.endDate >= today).sort((a, b) => a.name.localeCompare(b.name));
  const past = medications.filter((m) => m.endDate < today).sort((a, b) => b.endDate.localeCompare(a.endDate));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Medications</h1>
        <button
          onClick={() => navigate('/medications/new')}
          className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          <Plus size={16} />
          Add medication
        </button>
      </div>

      {medications.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white py-14 text-center">
          <Pill size={28} className="text-gray-300" />
          <p className="text-sm text-gray-500">No medications yet.</p>
          <button onClick={() => navigate('/medications/new')} className="text-sm font-medium text-brand-600 hover:underline">
            Add your first medication
          </button>
        </div>
      ) : (
        <>
          <MedSection title="Active" meds={active} onEdit={(m) => navigate(`/medications/${m.id}/edit`)} onDelete={setDeletingMed} />
          {past.length > 0 && (
            <MedSection title="Past" meds={past} onEdit={(m) => navigate(`/medications/${m.id}/edit`)} onDelete={setDeletingMed} />
          )}
        </>
      )}

      {deletingMed && (
        <ConfirmDialog
          title="Delete medication?"
          message={`This removes ${deletingMed.name} and its dose history. This can't be undone.`}
          confirmLabel="Delete"
          danger
          onCancel={() => setDeletingMed(null)}
          onConfirm={() => {
            deleteMedication(deletingMed.id).catch(() => {});
            setDeletingMed(null);
          }}
        />
      )}
    </div>
  );
}

function MedSection({
  title,
  meds,
  onEdit,
  onDelete,
}: {
  title: string;
  meds: Medication[];
  onEdit: (m: Medication) => void;
  onDelete: (m: Medication) => void;
}) {
  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{title}</h2>
      <div className="space-y-2">
        {meds.map((m) => (
          <div
            key={m.id}
            onClick={() => onEdit(m)}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${m.color}1a` }}
            >
              <Pill size={18} color={m.color} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="truncate font-semibold text-gray-900">{m.name}</span>
                <span className="text-sm text-gray-500">{m.dose}</span>
              </div>
              <div className="truncate text-xs text-gray-400">
                {formatShortDate(m.startDate)} – {formatShortDate(m.endDate)} · starts {formatTime(m.firstTime)} ·{' '}
                {m.frequencyText}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(m);
                }}
                className="rounded-lg p-2 text-gray-300 hover:bg-gray-50 hover:text-brand-600"
                title="Edit"
              >
                <Pencil size={15} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(m);
                }}
                className="rounded-lg p-2 text-gray-300 hover:bg-gray-50 hover:text-skip-600"
                title="Delete"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
