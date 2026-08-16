import { useMemo } from 'react';
import { useMedications } from '../context/MedicationContext';
import { buildInteractionGraph } from '../engine/graph';
import { checkInteractions } from '../engine/interactionEngine';
import { computeRisk } from '../analytics/risk';
import { activeOn } from '../analytics/changes';
import { todayISO } from '../utils/date';
import { InteractionGraphView } from '../components/graph/InteractionGraphView';

export function InteractionsPage() {
  const { medications } = useMedications();

  const activeNames = useMemo(
    () => activeOn(medications, todayISO()).map((m) => m.name),
    [medications]
  );

  const graph = useMemo(() => buildInteractionGraph(activeNames), [activeNames]);
  const engineResult = useMemo(() => checkInteractions(activeNames), [activeNames]);
  const risk = useMemo(() => computeRisk(engineResult.interactions), [engineResult]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Interaction graph</h1>
        <p className="mt-1 text-sm text-gray-500">{risk.headline}</p>
      </div>

      <InteractionGraphView graph={graph} />

      {engineResult.normalization.unresolved.length > 0 && (
        <p className="text-xs text-gray-400">
          Couldn't identify: {engineResult.normalization.unresolved.join(', ')}. Double-check the spelling on those
          medications.
        </p>
      )}
    </div>
  );
}
