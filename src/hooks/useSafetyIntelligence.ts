import { useMemo } from 'react';
import { useMedications } from '../context/MedicationContext';
import { computeInsights, type Insights, type InsightsOptions } from '../analytics';

/**
 * The full safety-intelligence layer for the currently signed-in user.
 *
 * Synchronous by design — everything is local computation over data already in
 * memory, so there's no loading state, no error state, and no network failure
 * mode to handle. It recomputes only when medications or dose logs change.
 *
 * Usage:
 *   const { risk, adherence, changes, explanations } = useSafetyIntelligence();
 */
export function useSafetyIntelligence(options: InsightsOptions = {}): Insights {
  const { medications, doseLogs } = useMedications();
  const { adherenceWindowDays, asOf } = options;

  return useMemo(
    () => computeInsights(medications, doseLogs, { adherenceWindowDays, asOf }),
    [medications, doseLogs, adherenceWindowDays, asOf]
  );
}
