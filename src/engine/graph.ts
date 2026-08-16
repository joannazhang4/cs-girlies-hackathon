/**
 * Interaction graph: drugs as nodes, interactions as edges.
 * Feed this straight into a force-directed graph component for the demo.
 */

import { checkInteractions, flattenInteractions, type Severity } from './interactionEngine';

export interface GraphNode {
  id: string;
  label: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  severity: Severity;
  mechanism: string;
  evidence: string;
}

export interface InteractionGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export function buildInteractionGraph(medicationNames: string[]): InteractionGraph {
  const result = checkInteractions(medicationNames);

  // De-duplicate by drug_id: two entries ("Advil" and "ibuprofen") are one node.
  const seen = new Set<string>();
  const nodes: GraphNode[] = [];
  for (const r of result.normalization.resolved) {
    if (seen.has(r.drug_id)) continue;
    seen.add(r.drug_id);
    nodes.push({ id: r.drug_id, label: r.generic_name });
  }

  const edges: GraphEdge[] = flattenInteractions(result.interactions).map((i) => ({
    source: i.drug_a,
    target: i.drug_b,
    severity: i.severity,
    mechanism: i.mechanism,
    evidence: i.evidence,
  }));

  return { nodes, edges };
}
