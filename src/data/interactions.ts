import type { InteractionWarning, Medication } from '../types';
import { checkInteractions as runEngine } from '../engine/interactionEngine';
import { activeOn } from '../analytics/changes';
import { explainInteraction } from '../analytics/explain';
import { bySeverity } from '../analytics/risk';
import { todayISO } from '../utils/date';

/**
 * Interaction checking — runs entirely on-device.
 *
 * The engine (normalization tables, interaction database, and matching logic)
 * is bundled into the app rather than reached over the network. Medication
 * names are decrypted in memory, checked here, and never transmitted. This
 * function stays synchronous, so the existing `useMemo` call sites need no
 * changes.
 *
 * See `src/engine/` for the engine itself and `src/analytics/` for the
 * risk/adherence/explanation layer built on top of it.
 */
export function checkInteractions(medications: Medication[]): InteractionWarning[] {
  // Finished courses shouldn't raise warnings.
  const active = activeOn(medications, todayISO());
  if (active.length < 2) return [];

  const result = runEngine(active.map((m) => m.name));

  // The engine works in drug_ids ("ibuprofen"); the UI needs Medication.ids.
  // `normalization.resolved[].input` echoes back the exact name we passed in,
  // which is what bridges the two. Note this is a one-to-many map: a user can
  // legitimately have two entries that normalize to the same drug (e.g. both
  // "Advil" and "ibuprofen"), and both should be highlighted.
  const nameToMedIds = new Map<string, string[]>();
  for (const m of active) {
    const list = nameToMedIds.get(m.name) ?? [];
    list.push(m.id);
    nameToMedIds.set(m.name, list);
  }

  const drugIdToMedIds = new Map<string, string[]>();
  for (const r of result.normalization.resolved) {
    const medIds = nameToMedIds.get(r.input);
    if (!medIds) continue;
    const list = drugIdToMedIds.get(r.drug_id) ?? [];
    for (const id of medIds) if (!list.includes(id)) list.push(id);
    drugIdToMedIds.set(r.drug_id, list);
  }

  const all = [
    ...result.interactions.high,
    ...result.interactions.moderate,
    ...result.interactions.low,
  ].sort(bySeverity);

  return all.map((interaction) => {
    const explanation = explainInteraction(interaction);
    return {
      id: explanation.pairId,
      medicationIds: [
        ...(drugIdToMedIds.get(interaction.drug_a) ?? []),
        ...(drugIdToMedIds.get(interaction.drug_b) ?? []),
      ],
      severity: interaction.severity,
      description: explanation.plainLanguage,
    };
  });
}
