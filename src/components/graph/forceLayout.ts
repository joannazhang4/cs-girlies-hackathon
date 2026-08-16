/**
 * A small, dependency-free force-directed layout.
 *
 * Deliberately not a continuous simulation: it runs a fixed number of
 * relaxation steps synchronously and returns final positions, so the graph
 * renders once, settled, with no animation loop or extra render cost.
 * Fine for the node counts a medication regimen actually produces (single
 * digits to low tens) — this is an O(n^2) repulsion pass per iteration.
 */
import type { GraphEdge, GraphNode } from '../../engine/graph';

export interface PositionedNode extends GraphNode {
  x: number;
  y: number;
}

const ITERATIONS = 300;
const REPULSION = 14000;
const SPRING_LENGTH = 130;
const SPRING_K = 0.02;
const CENTER_K = 0.012;
const DAMPING = 0.82;

export function layoutGraph(
  nodes: GraphNode[],
  edges: GraphEdge[],
  width: number,
  height: number
): PositionedNode[] {
  if (nodes.length === 0) return [];

  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.32;

  const state = new Map<string, { x: number; y: number; vx: number; vy: number }>();
  nodes.forEach((node, i) => {
    // Seed on a circle rather than randomly — deterministic layout for the
    // same regimen, so the graph doesn't jump around on every re-render.
    const angle = (2 * Math.PI * i) / nodes.length;
    state.set(node.id, {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      vx: 0,
      vy: 0,
    });
  });

  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = state.get(nodes[i].id)!;
        const b = state.get(nodes[j].id)!;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = Math.max(dx * dx + dy * dy, 1);
        const dist = Math.sqrt(distSq);
        const force = REPULSION / distSq;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      }
    }

    for (const edge of edges) {
      const a = state.get(edge.source);
      const b = state.get(edge.target);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
      const force = (dist - SPRING_LENGTH) * SPRING_K;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      a.vx += fx;
      a.vy += fy;
      b.vx -= fx;
      b.vy -= fy;
    }

    for (const node of nodes) {
      const p = state.get(node.id)!;
      p.vx += (cx - p.x) * CENTER_K;
      p.vy += (cy - p.y) * CENTER_K;
      p.vx *= DAMPING;
      p.vy *= DAMPING;
      p.x += p.vx;
      p.y += p.vy;
    }
  }

  const margin = 44;
  return nodes.map((node) => {
    const p = state.get(node.id)!;
    return {
      ...node,
      x: Math.max(margin, Math.min(width - margin, p.x)),
      y: Math.max(margin, Math.min(height - margin, p.y)),
    };
  });
}
