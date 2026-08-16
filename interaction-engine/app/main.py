"""Person 2 — Interaction Engine + Medical Data API.

Exposes the API contract consumed by Person 1 (medication tracker) and
Person 3 (safety intelligence / analytics):

    GET  /interactions/{user_id}          -> {"high": [...], "moderate": [...], "low": [...]}

Plus supporting endpoints for normalization, ad-hoc checks, and graph data.
"""
from fastapi import FastAPI, HTTPException

from app.graph import build_interaction_graph
from app.interaction_engine import check_interactions
from app.models import MedicationListRequest, NormalizeRequest, SetUserMedicationsRequest
from app.normalization import normalize_medication_list

app = FastAPI(title="MedGuard Interaction Engine", version="0.1.0")

# In-memory demo store: user_id -> list of raw medication names.
# Person 1's tracker pushes each user's current medication list here.
_USER_MEDICATIONS: dict[str, list[str]] = {}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/normalize")
def normalize(req: NormalizeRequest):
    return normalize_medication_list(req.names)


@app.post("/interactions/check")
def interactions_check(req: MedicationListRequest):
    return check_interactions(req.medications)


@app.post("/interactions/graph")
def interactions_graph(req: MedicationListRequest):
    return build_interaction_graph(req.medications)


@app.post("/users/{user_id}/medications")
def set_user_medications(user_id: str, req: SetUserMedicationsRequest):
    _USER_MEDICATIONS[user_id] = req.medications
    return {"user_id": user_id, "medications": req.medications}


@app.get("/interactions/{user_id}")
def get_user_interactions(user_id: str):
    medications = _USER_MEDICATIONS.get(user_id)
    if medications is None:
        raise HTTPException(status_code=404, detail="No medications on file for this user")
    result = check_interactions(medications)
    return result["interactions"]
