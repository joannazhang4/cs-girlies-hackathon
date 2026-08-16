import { describe, expect, it } from 'vitest';
import { normalizeDrugName, normalizeMedicationList } from '../normalization';
import { checkInteractions, lookupInteraction } from '../interactionEngine';
import { buildInteractionGraph } from '../graph';
import { ratio, getCloseMatches } from '../similarity';
import { DRUG_ALIASES } from '../data/drugAliases';
import { INTERACTIONS_DB } from '../data/interactionsDb';

/**
 * These mirror the Python engine's pytest suite 1:1 so any divergence between
 * the two implementations shows up immediately.
 */

describe('normalization', () => {
  it('resolves a generic name by exact match', () => {
    const result = normalizeDrugName('ibuprofen');
    expect(result?.drug_id).toBe('ibuprofen');
    expect(result?.match_type).toBe('exact');
  });

  it('resolves a brand name to its generic', () => {
    const result = normalizeDrugName('Advil');
    expect(result?.drug_id).toBe('ibuprofen');
    expect(result?.generic_name).toBe('ibuprofen');
  });

  it('resolves a misspelling via fuzzy match', () => {
    const result = normalizeDrugName('ibuprofin');
    expect(result).not.toBeNull();
    expect(result?.drug_id).toBe('ibuprofen');
    expect(result?.match_type).toBe('fuzzy');
  });

  it('returns null for an unknown drug', () => {
    expect(normalizeDrugName('xyzzyplex9000')).toBeNull();
  });

  it('splits a list into resolved and unresolved', () => {
    const result = normalizeMedicationList(['Tylenol', 'zoloft', 'not_a_real_drug']);
    const ids = new Set(result.resolved.map((r) => r.drug_id));
    expect(ids).toEqual(new Set(['acetaminophen', 'sertraline']));
    expect(result.unresolved).toEqual(['not_a_real_drug']);
  });

  it('ignores case, punctuation and extra whitespace', () => {
    expect(normalizeDrugName('  ADVIL!  ')?.drug_id).toBe('ibuprofen');
  });

  it('echoes the raw input back so callers can map to their own ids', () => {
    const result = normalizeDrugName('Advil');
    expect(result?.input).toBe('Advil');
  });
});

describe('interaction engine', () => {
  it('looks up a pair regardless of argument order', () => {
    const a = lookupInteraction('warfarin', 'ibuprofen');
    const b = lookupInteraction('ibuprofen', 'warfarin');
    expect(a).not.toBeNull();
    expect(a).toEqual(b);
  });

  it('groups results by severity', () => {
    const result = checkInteractions(['Coumadin', 'Advil', 'Tylenol']);
    expect(result.totalPairsChecked).toBe(3);
    expect(result.interactions.high).toHaveLength(1);
    expect(['warfarin', 'ibuprofen']).toContain(result.interactions.high[0].drug_a);
  });

  it('handles unresolved names without crashing', () => {
    const result = checkInteractions(['Zoloft', 'not_a_real_drug']);
    expect(result.normalization.unresolved).toEqual(['not_a_real_drug']);
    expect(result.totalInteractionsFound).toBe(0);
  });

  it('deduplicates a drug listed twice under different names', () => {
    // "Advil" and "ibuprofen" are the same drug — one node, no self-interaction.
    const result = checkInteractions(['Advil', 'ibuprofen', 'Coumadin']);
    expect(result.totalPairsChecked).toBe(1);
    expect(result.interactions.high).toHaveLength(1);
  });

  it('returns nothing for a single medication', () => {
    const result = checkInteractions(['Advil']);
    expect(result.totalPairsChecked).toBe(0);
    expect(result.totalInteractionsFound).toBe(0);
  });

  it('finds the serotonin syndrome pair used in the demo', () => {
    const result = checkInteractions(['Zoloft', 'Ultram']);
    expect(result.interactions.high).toHaveLength(1);
    expect(result.interactions.high[0].severity).toBe('high');
  });
});

describe('graph', () => {
  it('builds nodes and edges', () => {
    const graph = buildInteractionGraph(['Coumadin', 'Advil', 'Tylenol']);
    expect(graph.nodes).toHaveLength(3);
    expect(graph.edges).toHaveLength(1);
    expect(graph.edges[0].severity).toBe('high');
  });

  it('does not duplicate nodes for aliases of the same drug', () => {
    const graph = buildInteractionGraph(['Advil', 'ibuprofen']);
    expect(graph.nodes).toHaveLength(1);
  });
});

describe('data integrity', () => {
  it('every interaction references a known drug_id', () => {
    for (const row of INTERACTIONS_DB) {
      expect(DRUG_ALIASES, `${row.drug_a} missing from aliases`).toHaveProperty(row.drug_a);
      expect(DRUG_ALIASES, `${row.drug_b} missing from aliases`).toHaveProperty(row.drug_b);
    }
  });

  it('has no duplicate interaction pairs', () => {
    const keys = INTERACTIONS_DB.map((r) =>
      r.drug_a < r.drug_b ? `${r.drug_a}|${r.drug_b}` : `${r.drug_b}|${r.drug_a}`
    );
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('every alias key matches its drug_id', () => {
    for (const [key, record] of Object.entries(DRUG_ALIASES)) {
      expect(record.drug_id).toBe(key);
    }
  });
});

describe('similarity (difflib parity)', () => {
  // Values below were produced by CPython's difflib.SequenceMatcher.
  it('matches CPython ratios', () => {
    expect(ratio('ibuprofen', 'ibuprofin')).toBeCloseTo(0.888888888888889, 12);
    expect(ratio('advil', 'advl')).toBeCloseTo(0.888888888888889, 12);
    expect(ratio('aspirin', 'asprin')).toBeCloseTo(0.9230769230769231, 12);
    expect(ratio('', '')).toBe(1.0);
  });

  it('respects the cutoff', () => {
    expect(getCloseMatches('ibuprofin', ['ibuprofen', 'advil'], 1, 0.8)).toEqual(['ibuprofen']);
    expect(getCloseMatches('xyzzyplex9000', ['ibuprofen', 'advil'], 1, 0.8)).toEqual([]);
  });
});
