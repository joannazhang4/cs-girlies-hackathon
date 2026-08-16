/**
 * Pairwise interaction detection over a list of medication names.
 *
 * Pure, synchronous, local. Given N medications this checks all N*(N-1)/2
 * pairs — trivial for realistic regimen sizes (a 20-medication regimen is
 * 190 map lookups).
 */

import { INTERACTIONS_DB, type Interaction, type Severity } from './data/interactionsDb';
import { normalizeMedicationList, type NormalizationResult } from './normalization';

export type { Interaction, Severity };

export interface GroupedInteractions {
  high: Interaction[];
  moderate: Interaction[];
  low: Interaction[];
}

export interface EngineResult {
  normalization: NormalizationResult;
  interactions: GroupedInteractions;
  totalPairsChecked: number;
  totalInteractionsFound: number;
}

/** Order-independent key for a drug pair. */
function pairKey(a: string, b: string): string {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

const INTERACTION_LOOKUP = new Map<string, Interaction>();
for (const row of INTERACTIONS_DB) {
  INTERACTION_LOOKUP.set(pairKey(row.drug_a, row.drug_b), row);
}

/** Look up a single pair. Order of arguments does not matter. */
export function lookupInteraction(drugIdA: string, drugIdB: string): Interaction | null {
  return INTERACTION_LOOKUP.get(pairKey(drugIdA, drugIdB)) ?? null;
}

/**
 * Normalize the given raw medication names, then check every distinct pair.
 * Results are grouped by severity.
 */
export function checkInteractions(medicationNames: string[]): EngineResult {
  const normalization = normalizeMedicationList(medicationNames);

  // Distinct drug_ids, sorted — mirrors the Python engine's
  // `combinations(sorted(set(drug_ids)), 2)` so pair ordering is deterministic.
  const drugIds = Array.from(new Set(normalization.resolved.map((r) => r.drug_id))).sort();

  const interactions: GroupedInteractions = { high: [], moderate: [], low: [] };
  let found = 0;

  for (let i = 0; i < drugIds.length; i++) {
    for (let j = i + 1; j < drugIds.length; j++) {
      const interaction = lookupInteraction(drugIds[i], drugIds[j]);
      if (interaction) {
        interactions[interaction.severity].push({ ...interaction });
        found++;
      }
    }
  }

  const n = drugIds.length;
  return {
    normalization,
    interactions,
    totalPairsChecked: (n * (n - 1)) / 2,
    totalInteractionsFound: found,
  };
}

/** Flatten grouped interactions into a single high -> moderate -> low list. */
export function flattenInteractions(grouped: GroupedInteractions): Interaction[] {
  return [...grouped.high, ...grouped.moderate, ...grouped.low];
}
