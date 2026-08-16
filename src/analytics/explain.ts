/**
 * Plain-language explanation layer.
 *
 * SAFETY CONTRACT — read before changing anything in this file:
 *
 * This module *rephrases* the `mechanism` and `evidence` fields that already
 * exist in our own interaction database. It does not generate medical claims,
 * does not infer, and does not recommend. Every sentence it produces can be
 * traced back to a field in `engine/data/interactionsDb.ts`.
 *
 * That constraint is what makes the feature defensible. If you later swap this
 * for a language model, the model must be given the mechanism and evidence
 * text and instructed to rewrite only that — never to add, diagnose, or advise
 * on stopping or changing a medication. Anything else is out of scope for a
 * consumer health tool.
 *
 * It is also why this runs locally: no interaction data, drug names, or
 * regimen details are transmitted to produce an explanation.
 */

import type { Interaction, Severity } from '../engine/interactionEngine';

export interface Explanation {
  /** Stable id: the two drug_ids joined, alphabetically. */
  pairId: string;
  drugA: string;
  drugB: string;
  severity: Severity;
  /** One-line summary suitable for a card header. */
  headline: string;
  /** Why this was flagged, in plain language. */
  plainLanguage: string;
  /** The underlying evidence, surfaced verbatim so the claim is auditable. */
  evidence: string;
  /** Always shown. Non-negotiable. */
  disclaimer: string;
}

export const DISCLAIMER =
  'This is informational only and is not medical advice. Talk to your doctor or ' +
  'pharmacist before changing how you take any medication.';

const SEVERITY_FRAMING: Record<Severity, string> = {
  high: 'This combination is generally avoided, and is worth raising with your doctor or pharmacist promptly.',
  moderate: 'This combination is usually manageable, but is worth mentioning at your next appointment.',
  low: 'This is a minor interaction that many people take without issue.',
};

const SEVERITY_HEADLINE: Record<Severity, string> = {
  high: 'Worth asking your doctor about',
  moderate: 'Worth mentioning to your doctor',
  low: 'Good to know',
};

function title(drugId: string): string {
  return drugId.charAt(0).toUpperCase() + drugId.slice(1);
}

/** Ensure a sentence ends with terminal punctuation before we join it to another. */
function sentence(text: string): string {
  const trimmed = text.trim();
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

export function explainInteraction(interaction: Interaction): Explanation {
  const [a, b] =
    interaction.drug_a < interaction.drug_b
      ? [interaction.drug_a, interaction.drug_b]
      : [interaction.drug_b, interaction.drug_a];

  const plainLanguage = [
    `${title(a)} and ${title(b)} were flagged together.`,
    sentence(interaction.mechanism),
    SEVERITY_FRAMING[interaction.severity],
  ].join(' ');

  return {
    pairId: `${a}+${b}`,
    drugA: a,
    drugB: b,
    severity: interaction.severity,
    headline: `${title(a)} + ${title(b)} — ${SEVERITY_HEADLINE[interaction.severity]}`,
    plainLanguage,
    evidence: sentence(interaction.evidence),
    disclaimer: DISCLAIMER,
  };
}

export function explainAll(interactions: Interaction[]): Explanation[] {
  return interactions.map(explainInteraction);
}
