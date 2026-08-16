import type { InteractionWarning, Medication } from '../types';

/**
 * INTEGRATION POINT — a teammate owns the real interaction-checking engine.
 *
 * Replace this stub with the real implementation (or call their API here).
 * Contract: given the user's active medications, return any interaction
 * warnings between them. The UI already renders whatever this returns
 * (see components/InteractionBanner.tsx) and shows `suggestedTimeAdjustment`
 * as a chip the user can tap to accept, so no UI changes should be needed
 * to wire in the real engine — just swap the function body below.
 */
export function checkInteractions(_medications: Medication[]): InteractionWarning[] {
  return [];
}
