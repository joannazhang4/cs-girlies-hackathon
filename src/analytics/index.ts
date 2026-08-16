/**
 * Safety intelligence + analytics — the Person 3 layer.
 *
 * Everything here is a pure, synchronous function over data the app already
 * holds in memory after decryption. There is no fetch, no service worker, no
 * telemetry. Grep this directory for `fetch(` and you should find nothing —
 * that's the property the privacy claim rests on, so keep it that way.
 */

import type { DoseLog, Medication } from '../types';
import { checkInteractions, type EngineResult } from '../engine/interactionEngine';
import { computeAdherence, type AdherenceReport } from './adherence';
import { computeRisk, type RiskReport } from './risk';
import { computeChanges, activeOn, type ChangeReport } from './changes';
import { explainAll, type Explanation } from './explain';
import { todayISO } from '../utils/date';

export type { AdherenceReport } from './adherence';
export type { RiskReport } from './risk';
export type { ChangeReport } from './changes';
export type { Explanation } from './explain';
export { DISCLAIMER } from './explain';

export interface Insights {
  engine: EngineResult;
  adherence: AdherenceReport;
  risk: RiskReport;
  changes: ChangeReport;
  explanations: Explanation[];
  /** Names the engine could not resolve — surface these so users can correct typos. */
  unresolvedMedications: string[];
  generatedAt: string;
}

export interface InsightsOptions {
  /** Days of history included in adherence. Default 30. */
  adherenceWindowDays?: number;
  /** Date to treat as "now". Default today. Useful for tests and demos. */
  asOf?: string;
}

export function computeInsights(
  medications: Medication[],
  doseLogs: DoseLog[],
  options: InsightsOptions = {}
): Insights {
  const { adherenceWindowDays = 30, asOf = todayISO() } = options;

  // Only medications actually active today should drive interaction checking —
  // a course of antibiotics that finished last month shouldn't raise warnings.
  const active = activeOn(medications, asOf);
  const engine = checkInteractions(active.map((m) => m.name));

  return {
    engine,
    adherence: computeAdherence(medications, doseLogs, adherenceWindowDays),
    risk: computeRisk(engine.interactions),
    changes: computeChanges(medications, asOf),
    explanations: explainAll([
      ...engine.interactions.high,
      ...engine.interactions.moderate,
      ...engine.interactions.low,
    ]),
    unresolvedMedications: engine.normalization.unresolved,
    generatedAt: new Date().toISOString(),
  };
}

export { computeAdherence, computeRisk, computeChanges, explainAll, activeOn };
