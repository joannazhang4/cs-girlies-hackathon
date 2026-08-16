import { useMemo, useState } from 'react';
import { AlertTriangle, Info, Pill } from 'lucide-react';
import type { GraphEdge, InteractionGraph } from '../../engine/graph';
import type { Severity } from '../../engine/interactionEngine';
import { explainInteraction } from '../../analytics/explain';
import { SEVERITY_META } from '../../utils/severityStyles';
import { layoutGraph } from './forceLayout';

const WIDTH = 640;
const HEIGHT = 420;
const NODE_RADIUS = 9;

function title(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

function edgeKey(edge: GraphEdge): string {
  return edge.source < edge.target ? `${edge.source}|${edge.target}` : `${edge.target}|${edge.source}`;
}

export function InteractionGraphView({ graph }: { graph: InteractionGraph }) {
  const [hoverNodeId, setHoverNodeId] = useState<string | null>(null);
  const [activeEdge, setActiveEdge] = useState<GraphEdge | null>(null);

  const positioned = useMemo(
    () => layoutGraph(graph.nodes, graph.edges, WIDTH, HEIGHT),
    [graph.nodes, graph.edges]
  );
  const positionById = useMemo(() => new Map(positioned.map((n) => [n.id, n])), [positioned]);

  const connectedToHover = useMemo(() => {
    if (!hoverNodeId) return null;
    const ids = new Set<string>([hoverNodeId]);
    for (const edge of graph.edges) {
      if (edge.source === hoverNodeId) ids.add(edge.target);
      if (edge.target === hoverNodeId) ids.add(edge.source);
    }
    return ids;
  }, [hoverNodeId, graph.edges]);

  if (graph.nodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-16 text-center text-sm text-gray-400">
        <Pill size={22} className="text-gray-300" />
        Add a medication to see its interaction graph.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
        {(['high', 'moderate', 'low'] as Severity[]).map((severity) => (
          <span
            key={severity}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${SEVERITY_META[severity].badgeClass}`}
          >
            <AlertTriangle size={12} />
            {SEVERITY_META[severity].label}
          </span>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full"
          role="img"
          aria-label="Graph of interactions between your current medications"
        >
          {graph.edges.map((edge) => {
            const a = positionById.get(edge.source);
            const b = positionById.get(edge.target);
            if (!a || !b) return null;
            const dimmed = hoverNodeId !== null && !(hoverNodeId === edge.source || hoverNodeId === edge.target);
            const selected = activeEdge && edgeKey(activeEdge) === edgeKey(edge);
            return (
              <g key={edgeKey(edge)}>
                {/* Wide invisible hit area so thin lines stay easy to hover/tap. */}
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="transparent"
                  strokeWidth={16}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveEdge(edge)}
                  onClick={() => setActiveEdge(edge)}
                />
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={`${SEVERITY_META[edge.severity].strokeClass} pointer-events-none transition-opacity`}
                  strokeWidth={
                    selected ? SEVERITY_META[edge.severity].strokeWidth + 1.5 : SEVERITY_META[edge.severity].strokeWidth
                  }
                  strokeLinecap="round"
                  opacity={dimmed ? 0.15 : selected ? 1 : 0.75}
                />
              </g>
            );
          })}

          {positioned.map((node) => {
            const dimmed = connectedToHover !== null && !connectedToHover.has(node.id);
            return (
              <g
                key={node.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoverNodeId(node.id)}
                onMouseLeave={() => setHoverNodeId(null)}
                opacity={dimmed ? 0.3 : 1}
              >
                <circle cx={node.x} cy={node.y} r={NODE_RADIUS} className="fill-brand-500 stroke-white" strokeWidth={2.5} />
                <text
                  x={node.x}
                  y={node.y + NODE_RADIUS + 14}
                  textAnchor="middle"
                  className="fill-gray-700 text-[11px] font-medium"
                >
                  {title(node.label)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <InteractionDetailPanel edge={activeEdge} />
    </div>
  );
}

function InteractionDetailPanel({ edge }: { edge: GraphEdge | null }) {
  if (!edge) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-dashed border-gray-200 px-4 py-3 text-sm text-gray-400">
        <Info size={16} />
        Hover or tap a connection to see why it was flagged.
      </div>
    );
  }

  const explanation = explainInteraction({
    drug_a: edge.source,
    drug_b: edge.target,
    severity: edge.severity,
    mechanism: edge.mechanism,
    evidence: edge.evidence,
  });

  return (
    <div className={`rounded-xl border p-4 ${SEVERITY_META[edge.severity].badgeClass}`}>
      <div className="flex items-start gap-2.5">
        <AlertTriangle size={18} className="mt-0.5 shrink-0" />
        <div className="min-w-0 space-y-1.5">
          <p className="text-sm font-semibold">{explanation.headline}</p>
          <p className="text-sm">{explanation.plainLanguage}</p>
          <p className="text-xs opacity-80">Evidence: {explanation.evidence}</p>
          <p className="text-xs italic opacity-70">{explanation.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
