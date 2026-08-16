import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { DoseLog, DoseStatus, Medication, NewMedicationInput } from '../types';
import * as store from '../data/storage';
import { useAuth } from './AuthContext';

interface MedicationContextValue {
  medications: Medication[];
  doseLogs: DoseLog[];
  loading: boolean;
  error: string | null;
  clearError: () => void;
  addMedication: (input: NewMedicationInput) => Promise<void>;
  updateMedication: (id: string, updates: Partial<Medication>) => Promise<void>;
  deleteMedication: (id: string) => Promise<void>;
  setDoseStatus: (
    medicationId: string,
    date: string,
    time: string,
    status: DoseStatus,
    extra?: Partial<Pick<DoseLog, 'takenAt' | 'snoozedUntil'>>
  ) => Promise<void>;
  clearDoseStatus: (medicationId: string, date: string, time: string) => Promise<void>;
}

const MedicationContext = createContext<MedicationContextValue | null>(null);

// AuthGate only ever mounts this provider once status === 'unlocked', so masterKey
// is guaranteed non-null for the provider's lifetime — it's re-mounted fresh on
// every sign-in, so there's no null → non-null transition to handle here.
export function MedicationProvider({ children }: { children: ReactNode }) {
  const { masterKey } = useAuth();
  const [medications, setMedications] = useState<Medication[]>([]);
  const [doseLogs, setDoseLogs] = useState<DoseLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!masterKey) return;
    let cancelled = false;
    setLoading(true);
    Promise.all([store.getMedications(masterKey), store.getDoseLogs(masterKey)])
      .then(([meds, logs]) => {
        if (cancelled) return;
        setMedications(meds);
        setDoseLogs(logs);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load your data.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [masterKey]);

  const value = useMemo<MedicationContextValue>(() => {
    const mek = masterKey;
    if (!mek) {
      const noop = async () => {};
      return {
        medications: [],
        doseLogs: [],
        loading: true,
        error: null,
        clearError: () => {},
        addMedication: noop,
        updateMedication: noop,
        deleteMedication: noop,
        setDoseStatus: noop,
        clearDoseStatus: noop,
      };
    }

    return {
      medications,
      doseLogs,
      loading,
      error,
      clearError: () => setError(null),

      addMedication: async (input) => {
        try {
          const med = await store.addMedication(mek, input, medications.length);
          setMedications((prev) => [...prev, med]);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to save medication.');
          throw err;
        }
      },

      updateMedication: async (id, updates) => {
        const current = medications.find((m) => m.id === id);
        if (!current) return;
        const { id: _ignored, ...rest } = { ...current, ...updates };
        try {
          await store.updateMedication(mek, id, rest);
          setMedications((prev) => prev.map((m) => (m.id === id ? { id, ...rest } : m)));
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to save changes.');
          throw err;
        }
      },

      deleteMedication: async (id) => {
        try {
          await store.deleteMedication(id);
          setMedications((prev) => prev.filter((m) => m.id !== id));
          setDoseLogs((prev) => prev.filter((l) => l.medicationId !== id));
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to delete medication.');
          throw err;
        }
      },

      setDoseStatus: async (medicationId, date, time, status, extra) => {
        try {
          const log = await store.setDoseStatus(mek, doseLogs, medicationId, date, time, status, extra);
          setDoseLogs((prev) => {
            const idx = prev.findIndex((l) => l.id === log.id);
            if (idx >= 0) {
              const next = [...prev];
              next[idx] = log;
              return next;
            }
            return [...prev, log];
          });
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to update dose status.');
          throw err;
        }
      },

      clearDoseStatus: async (medicationId, date, time) => {
        try {
          await store.clearDoseStatus(doseLogs, medicationId, date, time);
          setDoseLogs((prev) =>
            prev.filter((l) => !(l.medicationId === medicationId && l.date === date && l.time === time))
          );
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to update dose status.');
          throw err;
        }
      },
    };
  }, [masterKey, medications, doseLogs, loading, error]);

  return <MedicationContext.Provider value={value}>{children}</MedicationContext.Provider>;
}

export function useMedications(): MedicationContextValue {
  const ctx = useContext(MedicationContext);
  if (!ctx) throw new Error('useMedications must be used within MedicationProvider');
  return ctx;
}
