from app.graph import build_interaction_graph


def test_graph_has_nodes_for_all_resolved_drugs():
    graph = build_interaction_graph(["Coumadin", "Advil", "Tylenol"])
    node_ids = {n["id"] for n in graph["nodes"]}
    assert node_ids == {"warfarin", "ibuprofen", "acetaminophen"}


def test_graph_edges_reflect_known_interaction():
    graph = build_interaction_graph(["Coumadin", "Advil"])
    assert len(graph["edges"]) == 1
    edge = graph["edges"][0]
    assert {edge["source"], edge["target"]} == {"warfarin", "ibuprofen"}
    assert edge["severity"] == "high"
