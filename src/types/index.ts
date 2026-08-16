// Core domain types for the medication tracker.
// Field names mirror the JSON payloads the backend expects/returns so the
// mock data layer (src/data) can be swapped for real API calls later.

/** Statuses that get persisted as a DoseLog. */
export type DoseStatus = 'taken' | 'skipped' | 'snoozed';

/**
 * Statuses shown in the UI. 'due' and 'upcoming' are derived on the fly
 * (no log exists yet) based on whether the scheduled time has passed.
 */
export type DoseDisplayStatus = DoseStatus | 'due' | 'upcoming' | 'missed';

/** One segment of a compound frequency, e.g. "every 6 hours till 08/16". */
export interface FrequencySegment {
  intervalHours: number;
  /** ISO yyyy-mm-dd — this segment applies through end of this date. */
  untilDate: string;
}

export interface Medication {
  id: string;
  name: string;
  dose: string;
  /** ISO yyyy-mm-dd */
  startDate: string;
  /** ISO yyyy-mm-dd */
  endDate: string;
  /** HH:mm, 24h — first dose of the day / doctor-assigned anchor time */
  firstTime: string;
  frequencySegments: FrequencySegment[];
  /** Human/backend-readable frequency string, derived from frequencySegments */
  frequencyText: string;
  color: string;
  notes?: string;
  createdAt: string;
}

export interface DoseLog {
  id: string;
  medicationId: string;
  /** ISO yyyy-mm-dd */
  date: string;
  /** HH:mm scheduled time */
  time: string;
  status: DoseStatus;
  takenAt?: string;
  /** ISO datetime the dose was snoozed to */
  snoozedUntil?: string;
}

/**
 * Placeholder shape for the interaction-checking teammate's output.
 * The UI is wired to render these wherever they appear; the real
 * implementation just needs to return this shape from checkInteractions().
 */
export interface InteractionWarning {
  id: string;
  medicationIds: string[];
  severity: 'low' | 'moderate' | 'high';
  description: string;
  suggestedTimeAdjustment?: string;
}

export interface NewMedicationInput {
  medication: string;
  dose: string;
  startDate: string;
  time: string;
  frequency: string;
  endDate: string;
  frequencySegments: FrequencySegment[];
  notes?: string;
}
