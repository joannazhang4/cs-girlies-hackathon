from app.normalization import normalize_drug_name, normalize_medication_list


def test_generic_name_exact_match():
    result = normalize_drug_name("ibuprofen")
    assert result["drug_id"] == "ibuprofen"
    assert result["match_type"] == "exact"


def test_brand_name_resolves_to_generic():
    result = normalize_drug_name("Advil")
    assert result["drug_id"] == "ibuprofen"
    assert result["generic_name"] == "ibuprofen"


def test_misspelling_resolves_via_fuzzy_match():
    result = normalize_drug_name("ibuprofin")
    assert result is not None
    assert result["drug_id"] == "ibuprofen"
    assert result["match_type"] == "fuzzy"


def test_unknown_drug_returns_none():
    assert normalize_drug_name("xyzzyplex9000") is None


def test_normalize_medication_list_splits_resolved_and_unresolved():
    result = normalize_medication_list(["Tylenol", "zoloft", "not_a_real_drug"])
    resolved_ids = {r["drug_id"] for r in result["resolved"]}
    assert resolved_ids == {"acetaminophen", "sertraline"}
    assert result["unresolved"] == ["not_a_real_drug"]
