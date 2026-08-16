/**
 * Medication name normalization: brand name / generic name / misspelling
 * resolved to a standardized drug_id.
 *
 * Runs entirely in the browser. Nothing is transmitted.
 */

import { DRUG_ALIASES } from './data/drugAliases';
import { getCloseMatches } from './similarity';

export interface ResolvedDrug {
  /** The exact raw string that was passed in — used to map back to a Medication.id. */
  input: string;
  drug_id: string;
  generic_name: string;
  match_type: 'exact' | 'fuzzy';
}

export interface NormalizationResult {
  resolved: ResolvedDrug[];
  unresolved: string[];
}

/** Lowercased name (generic or brand) -> drug_id. Built once at module load. */
const LOOKUP = new Map<string, string>();
for (const [drugId, record] of Object.entries(DRUG_ALIASES)) {
  LOOKUP.set(record.generic_name.toLowerCase(), drugId);
  for (const brand of record.brand_names) {
    LOOKUP.set(brand.toLowerCase(), drugId);
  }
}

const KNOWN_NAMES = Array.from(LOOKUP.keys());

/** Lowercase, collapse whitespace, strip anything that isn't a-z/0-9/space. */
function clean(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9 ]/g, '');
}

/**
 * Resolve one raw medication name to a standardized drug record.
 * Returns null if no exact, alias, or close-enough fuzzy match is found.
 */
export function normalizeDrugName(rawName: string, fuzzyCutoff = 0.8): ResolvedDrug | null {
  const cleaned = clean(rawName);
  if (!cleaned) return null;

  let drugId = LOOKUP.get(cleaned);
  let matchType: 'exact' | 'fuzzy' = 'exact';

  if (drugId === undefined) {
    const close = getCloseMatches(cleaned, KNOWN_NAMES, 1, fuzzyCutoff);
    if (close.length) {
      drugId = LOOKUP.get(close[0]);
      matchType = 'fuzzy';
    }
  }

  if (drugId === undefined) return null;

  const record = DRUG_ALIASES[drugId];
  return {
    input: rawName,
    drug_id: drugId,
    generic_name: record.generic_name,
    match_type: matchType,
  };
}

/** Normalize a list of raw medication names into resolved / unresolved buckets. */
export function normalizeMedicationList(names: string[]): NormalizationResult {
  const resolved: ResolvedDrug[] = [];
  const unresolved: string[] = [];

  for (const name of names) {
    const result = normalizeDrugName(name);
    if (result) resolved.push(result);
    else unresolved.push(name);
  }

  return { resolved, unresolved };
}
