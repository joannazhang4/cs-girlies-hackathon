"""Interaction graph representation: drugs as nodes, interactions as edges."""
from app.interaction_engine import check_interactions


def build_interaction_graph(medication_names: list[str]) -> dict:
    """Build a node/edge graph for visualization by the frontend (e.g. force-directed graph).

    nodes: [{id, label}]
    edges: [{source, target, severity, mechanism, evidence}]
    """
    result = check_interactions(medication_names)
    resolved = result["normalization"]["resolved"]

    nodes = [{"id": r["drug_id"], "label": r["generic_name"]} for r in resolved]

    edges = []
    for severity_group in result["interactions"].values():
        for interaction in severity_group:
            edges.append({
                "source": interaction["drug_a"],
                "target": interaction["drug_b"],
                "severity": interaction["severity"],
                "mechanism": interaction["mechanism"],
                "evidence": interaction["evidence"],
            })

    return {"nodes": nodes, "edges": edges}
