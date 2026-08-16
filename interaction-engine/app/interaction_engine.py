"""Pairwise interaction detection over a list of medications."""
import json
from itertools import combinations
from pathlib import Path

from app.normalization import normalize_medication_list

DATA_PATH = Path(__file__).parent / "data" / "interactions_db.json"

with open(DATA_PATH) as f:
    _INTERACTIONS: list[dict] = json.load(f)

_INTERACTION_LOOKUP: dict[frozenset, dict] = {
    frozenset((row["drug_a"], row["drug_b"])): row for row in _INTERACTIONS
}


def lookup_interaction(drug_id_a: str, drug_id_b: str) -> dict | None:
    return _INTERACTION_LOOKUP.get(frozenset((drug_id_a, drug_id_b)))


def check_interactions(medication_names: list[str]) -> dict:
    """Given raw medication names, normalize then check all pairs.

    Returns a structured result grouped by severity, plus normalization info.
    """
    normalized = normalize_medication_list(medication_names)
    drug_ids = [r["drug_id"] for r in normalized["resolved"]]

    found: list[dict] = []
    for drug_a, drug_b in combinations(sorted(set(drug_ids)), 2):
        interaction = lookup_interaction(drug_a, drug_b)
        if interaction:
            found.append(dict(interaction))

    grouped = {"high": [], "moderate": [], "low": []}
    for interaction in found:
        grouped.setdefault(interaction["severity"], []).append(interaction)

    return {
        "normalization": normalized,
        "interactions": grouped,
        "total_pairs_checked": len(list(combinations(set(drug_ids), 2))),
        "total_interactions_found": len(found),
    }
