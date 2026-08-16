/**
 * "What Changed?" — compares the regimen active on one date against another.
 *
 * Note there is no stored history here, and deliberately so. A medication's
 * own `startDate` / `endDate` already tell us exactly which drugs were active
 * on any given day, so the diff is *derived* rather than persisted. That means:
 *   - nothing extra is written to disk or to Supabase,
 *   - the feature works on first load rather than needing a prior session,
 *   - and it stays correct if the user backdates a medication.
 */

import type { Medication } from '../types';
import { checkInteractions, type Interaction } from '../engine/interactionEngine';
import { todayISO } from '../utils/date';
import { bySeverity } from './risk';

export interface ChangeReport {
  /** drug_ids newly active as of `date` */
  added: string[];
  /** drug_ids active on `comparedTo` but no longer active */
  removed: string[];
  /** Interactions that involve at least one newly added drug. */
  newInteractions: Interaction[];
  /** Interactions that are no longer present. */
  resolvedInteractions: Interaction[];
  summary: string;
  hasChanges: boolean;
}

/** Medications whose date range covers the given ISO date. */
export function activeOn(medications: Medication[], dateISO: string): Medication[] {
  return medications.filter((m) => m.startDate <= dateISO && dateISO <= m.endDate);
}

function drugIdsFor(medications: Medication[]): Set<string> {
  const result = checkInteractions(medications.map((m) => m.name));
  return new Set(result.normalization.resolved.map((r) => r.drug_id));
}

function interactionKey(i: Interaction): string {
  return i.drug_a < i.drug_b ? `${i.drug_a}|${i.drug_b}` : `${i.drug_b}|${i.drug_a}`;
}

function allInteractions(medications: Medication[]): Interaction[] {
  const { interactions } = checkInteractions(medications.map((m) => m.name));
  return [...interactions.high, ...interactions.moderate, ...interactions.low];
}

/**
 * Diff the regimen on `date` against the regimen on `comparedTo`.
 * Defaults to today vs. yesterday.
 */
export function computeChanges(
  medications: Medication[],
  date: string = todayISO(),
  comparedTo: string = shiftISO(todayISO(), -1)
): ChangeReport {
  const currentMeds = activeOn(medications, date);
  const previousMeds = activeOn(medications, comparedTo);

  const current = drugIdsFor(currentMeds);
  const previous = drugIdsFor(previousMeds);

  // Compared by drug_id, so "Advil" -> "ibuprofen" doesn't register as a change.
  const added = [...current].filter((d) => !previous.has(d)).sort();
  const removed = [...previous].filter((d) => !current.has(d)).sort();

  const addedSet = new Set(added);
  const previousKeys = new Set(allInteractions(previousMeds).map(interactionKey));
  const currentKeys = new Set(allInteractions(currentMeds).map(interactionKey));

  const newInteractions = allInteractions(currentMeds)
    .filter((i) => !previousKeys.has(interactionKey(i)))
    .filter((i) => addedSet.has(i.drug_a) || addedSet.has(i.drug_b))
    .sort(bySeverity);

  const resolvedInteractions = allInteractions(previousMeds)
    .filter((i) => !currentKeys.has(interactionKey(i)))
    .sort(bySeverity);

  const hasChanges = added.length > 0 || removed.length > 0;

  return {
    added,
    removed,
    newInteractions,
    resolvedInteractions,
    summary: buildSummary(added, removed, newInteractions, resolvedInteractions),
    hasChanges,
  };
}

function buildSummary(
  added: string[],
  removed: string[],
  newInteractions: Interaction[],
  resolvedInteractions: Interaction[]
): string {
  if (!added.length && !removed.length) return 'No changes to your regimen.';

  const parts: string[] = [];

  if (added.length) {
    parts.push(`${list(added)} ${added.length === 1 ? 'was' : 'were'} added.`);
  }
  if (removed.length) {
    parts.push(`${list(removed)} ${removed.length === 1 ? 'was' : 'were'} removed.`);
  }

  if (newInteractions.length) {
    const n = newInteractions.length;
    const highCount = newInteractions.filter((i) => i.severity === 'high').length;
    const detail = highCount ? ` ${highCount} of them high severity.` : '';
    parts.push(
      `This introduced ${n} new potential interaction${n === 1 ? '' : 's'}.${detail}`
    );
  } else if (added.length) {
    parts.push('No new interactions were introduced.');
  }

  if (resolvedInteractions.length) {
    const n = resolvedInteractions.length;
    parts.push(`${n} previous interaction${n === 1 ? '' : 's'} no longer applies.`);
  }

  return parts.join(' ');
}

function list(drugIds: string[]): string {
  const titled = drugIds.map((d) => d.charAt(0).toUpperCase() + d.slice(1));
  if (titled.length === 1) return titled[0];
  if (titled.length === 2) return `${titled[0]} and ${titled[1]}`;
  return `${titled.slice(0, -1).join(', ')}, and ${titled[titled.length - 1]}`;
}

function shiftISO(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
