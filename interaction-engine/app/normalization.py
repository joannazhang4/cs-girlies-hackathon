"""Medication name normalization: brand/generic/misspelling -> standardized drug_id."""
import difflib
import json
import re
from pathlib import Path
from typing import Optional

DATA_PATH = Path(__file__).parent / "data" / "drug_aliases.json"

with open(DATA_PATH) as f:
    _ALIASES: dict = json.load(f)

_LOOKUP: dict[str, str] = {}
for drug_id, record in _ALIASES.items():
    _LOOKUP[record["generic_name"].lower()] = drug_id
    for brand in record.get("brand_names", []):
        _LOOKUP[brand.lower()] = drug_id

_KNOWN_NAMES = list(_LOOKUP.keys())


def _clean(name: str) -> str:
    name = name.strip().lower()
    name = re.sub(r"\s+", " ", name)
    name = re.sub(r"[^a-z0-9 ]", "", name)
    return name


def normalize_drug_name(raw_name: str, fuzzy_cutoff: float = 0.8) -> Optional[dict]:
    """Resolve a raw medication name to a standardized drug record.

    Returns None if no reasonable match is found (exact, alias, or fuzzy).
    """
    cleaned = _clean(raw_name)
    if not cleaned:
        return None

    drug_id = _LOOKUP.get(cleaned)
    match_type = "exact"

    if drug_id is None:
        close = difflib.get_close_matches(cleaned, _KNOWN_NAMES, n=1, cutoff=fuzzy_cutoff)
        if close:
            drug_id = _LOOKUP[close[0]]
            match_type = "fuzzy"

    if drug_id is None:
        return None

    record = _ALIASES[drug_id]
    return {
        "input": raw_name,
        "drug_id": drug_id,
        "generic_name": record["generic_name"],
        "match_type": match_type,
    }


def normalize_medication_list(names: list[str]) -> dict:
    """Normalize a list of raw medication names.

    Returns {"resolved": [...], "unresolved": [...]}
    """
    resolved = []
    unresolved = []
    for name in names:
        result = normalize_drug_name(name)
        if result:
            resolved.append(result)
        else:
            unresolved.append(name)
    return {"resolved": resolved, "unresolved": unresolved}
