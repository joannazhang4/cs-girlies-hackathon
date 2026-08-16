/**
 * Risk prioritization — turns a flat list of detected interactions into a
 * ranked, countable summary the UI can lead with.
 */

import type { GroupedInteractions, Interaction, Severity } from '../engine/interactionEngine';
import { flattenInteractions } from '../engine/interactionEngine';

export interface RiskReport {
  counts: Record<Severity, number>;
  /** 0–100. A blunt heuristic for sorting and at-a-glance display, not a clinical score. */
  score: number;
  /** Highest-severity interaction, or null when the regimen is clear. */
  topConcern: Interaction | null;
  /** All interactions, high severity first. */
  ranked: Interaction[];
  headline: string;
}

/**
 * Weights are chosen so that a single high-severity interaction outranks any
 * number of low-severity ones. These are presentation weights, not clinical
 * ones — do not describe them as a medical risk score.
 */
const WEIGHTS: Record<Severity, number> = {
  high: 40,
  moderate: 15,
  low: 4,
};

const SEVERITY_RANK: Record<Severity, number> = { high: 0, moderate: 1, low: 2 };

export function computeRisk(interactions: GroupedInteractions): RiskReport {
  const counts: Record<Severity, number> = {
    high: interactions.high.length,
    moderate: interactions.moderate.length,
    low: interactions.low.length,
  };

  const rawScore =
    counts.high * WEIGHTS.high + counts.moderate * WEIGHTS.moderate + counts.low * WEIGHTS.low;
  const score = Math.min(100, rawScore);

  const ranked = flattenInteractions(interactions).sort(
    (a, b) => SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity]
  );

  return {
    counts,
    score,
    topConcern: ranked[0] ?? null,
    ranked,
    headline: buildHeadline(counts),
  };
}

function buildHeadline(counts: Record<Severity, number>): string {
  const total = counts.high + counts.moderate + counts.low;
  if (total === 0) return 'No known interactions found between your current medications.';

  const parts: string[] = [];
  if (counts.high) parts.push(`${counts.high} high`);
  if (counts.moderate) parts.push(`${counts.moderate} moderate`);
  if (counts.low) parts.push(`${counts.low} low`);

  const noun = total === 1 ? 'interaction' : 'interactions';
  return `${total} potential ${noun} found: ${parts.join(', ')}.`;
}

/** Severity ordering helper, exported so UI components can sort consistently. */
export function bySeverity(a: { severity: Severity }, b: { severity: Severity }): number {
  return SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity];
}
