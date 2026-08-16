from app.interaction_engine import check_interactions, lookup_interaction


def test_lookup_interaction_is_order_independent():
    a = lookup_interaction("warfarin", "ibuprofen")
    b = lookup_interaction("ibuprofen", "warfarin")
    assert a is not None
    assert a == b


def test_check_interactions_groups_by_severity():
    result = check_interactions(["Coumadin", "Advil", "Tylenol"])
    assert result["total_pairs_checked"] == 3
    assert len(result["interactions"]["high"]) == 1
    assert result["interactions"]["high"][0]["drug_a"] in ("warfarin", "ibuprofen")


def test_check_interactions_handles_unresolved_names():
    result = check_interactions(["Zoloft", "not_a_real_drug"])
    assert result["normalization"]["unresolved"] == ["not_a_real_drug"]
    assert result["total_interactions_found"] == 0
