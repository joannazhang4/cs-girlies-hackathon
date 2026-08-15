import { supabase } from './supabaseClient';
import { decryptJSON, encryptJSON } from '../lib/crypto';
import type { DoseLog, DoseStatus, FrequencySegment, Medication, NewMedicationInput } from '../types';

const MED_COLORS = [
  '#26a690', // brand teal
  '#3b82f6', // blue
  '#f59e0b', // amber
  '#a855f7', // purple
  '#ef4444', // red
  '#0891b2', // cyan
  '#ec4899', // pink
];

// What's actually encrypted per medication row — everything except the row id,
// which is just an opaque UUID and meaningless without the ciphertext.
interface MedicationPayload {
  name: string;
  dose: string;
  startDate: string;
  endDate: string;
  firstTime: string;
  frequencySegments: FrequencySegment[];
  frequencyText: string;
  color: string;
  notes?: string;
  createdAt: string;
}

interface DoseLogPayload {
  date: string;
  time: string;
  status: DoseStatus;
  takenAt?: string;
  snoozedUntil?: string;
}

function medicationFromRow(id: string, payload: MedicationPayload): Medication {
  return { id, ...payload };
}

// ---------- Medications ----------

export async function getMedications(mek: CryptoKey): Promise<Medication[]> {
  const { data, error } = await supabase.from('medications').select('*').order('created_at', { ascending: true });
  if (error) throw error;

  const meds: Medication[] = [];
  for (const row of data ?? []) {
    const payload = await decryptJSON<MedicationPayload>(mek, row.ciphertext, row.iv);
    meds.push(medicationFromRow(row.id, payload));
  }
  return meds;
}

export async function addMedication(
  mek: CryptoKey,
  input: NewMedicationInput,
  existingMedicationCount: number
): Promise<Medication> {
  const payload: MedicationPayload = {
    name: input.medication,
    dose: input.dose,
    startDate: input.startDate,
    endDate: input.endDate,
    firstTime: input.time,
    frequencySegments: input.frequencySegments,
    frequencyText: input.frequency,
    color: MED_COLORS[existingMedicationCount % MED_COLORS.length],
    notes: input.notes,
    createdAt: new Date().toISOString(),
  };

  const { ciphertext, iv } = await encryptJSON(mek, payload);
  const { data, error } = await supabase.from('medications').insert({ ciphertext, iv }).select().single();
  if (error) throw error;

  return medicationFromRow(data.id, payload);
}

/** Takes the fully merged medication (current fields + updates already applied by the caller). */
export async function updateMedication(mek: CryptoKey, id: string, merged: Omit<Medication, 'id'>): Promise<void> {
  const { ciphertext, iv } = await encryptJSON(mek, merged);
  const { error } = await supabase.from('medications').update({ ciphertext, iv }).eq('id', id);
  if (error) throw error;
}

export async function deleteMedication(id: string): Promise<void> {
  // dose_logs for this medication cascade-delete server-side (FK ON DELETE CASCADE).
  const { error } = await supabase.from('medications').delete().eq('id', id);
  if (error) throw error;
}

// ---------- Dose logs ----------

export async function getDoseLogs(mek: CryptoKey): Promise<DoseLog[]> {
  const { data, error } = await supabase.from('dose_logs').select('*');
  if (error) throw error;

  const logs: DoseLog[] = [];
  for (const row of data ?? []) {
    const payload = await decryptJSON<DoseLogPayload>(mek, row.ciphertext, row.iv);
    logs.push({ id: row.id, medicationId: row.medication_id, ...payload });
  }
  return logs;
}

/**
 * date/time live inside the encrypted payload, so the database can't enforce
 * "one log per medication/date/time" itself — matching against the
 * already-decrypted logs already held client-side is how we find the
 * existing row to update instead of inserting a duplicate.
 */
export async function setDoseStatus(
  mek: CryptoKey,
  existingLogs: DoseLog[],
  medicationId: string,
  date: string,
  time: string,
  status: DoseStatus,
  extra?: Partial<Pick<DoseLog, 'takenAt' | 'snoozedUntil'>>
): Promise<DoseLog> {
  const existing = existingLogs.find(
    (l) => l.medicationId === medicationId && l.date === date && l.time === time
  );
  const payload: DoseLogPayload = { date, time, status, ...extra };
  const { ciphertext, iv } = await encryptJSON(mek, payload);

  if (existing) {
    const { error } = await supabase.from('dose_logs').update({ ciphertext, iv }).eq('id', existing.id);
    if (error) throw error;
    return { id: existing.id, medicationId, ...payload };
  }

  const { data, error } = await supabase
    .from('dose_logs')
    .insert({ medication_id: medicationId, ciphertext, iv })
    .select()
    .single();
  if (error) throw error;
  return { id: data.id, medicationId, ...payload };
}

export async function clearDoseStatus(
  existingLogs: DoseLog[],
  medicationId: string,
  date: string,
  time: string
): Promise<void> {
  const existing = existingLogs.find(
    (l) => l.medicationId === medicationId && l.date === date && l.time === time
  );
  if (!existing) return;
  const { error } = await supabase.from('dose_logs').delete().eq('id', existing.id);
  if (error) throw error;
}
