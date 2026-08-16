# Person 2 — Interaction Engine + Medical Data

Owns the "smart" part of MedGuard: turning a list of medication names into
normalized drug IDs, detecting pairwise interactions, and exposing that as
structured data (and a graph) for Person 1 (tracker/UI) and Person 3
(safety intelligence/analytics) to consume.

## Setup

```bash
cd person2-interaction-engine
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8010
```

Run tests:

```bash
pip install pytest
python -m pytest -q
```

## Modules

- `app/normalization.py` — brand name / generic name / misspelling ->
  standardized `drug_id` (exact match on `app/data/drug_aliases.json`,
  falls back to fuzzy matching via `difflib`).
- `app/interaction_engine.py` — given a medication list, normalizes it then
  checks every pair against `app/data/interactions_db.json`, grouping
  results by severity (`high` / `moderate` / `low`).
- `app/graph.py` — builds a `{nodes, edges}` graph representation for
  frontend visualization (e.g. force-directed graph of drug interactions).
- `app/main.py` — FastAPI app wiring it all together.

## API

- `POST /normalize` — `{"names": ["Advil", "ibuprofin"]}` -> resolved/unresolved drug list.
- `POST /interactions/check` — `{"medications": [...]}` -> full normalization + severity-grouped interactions.
- `POST /interactions/graph` — `{"medications": [...]}` -> `{nodes, edges}` graph.
- `POST /users/{user_id}/medications` — Person 1's tracker pushes a user's current medication list here.
- `GET /interactions/{user_id}` — **contract endpoint** consumed by Person 3:

  ```json
  {
    "high": [],
    "moderate": [],
    "low": []
  }
  ```

  Each entry: `{"drug_a": "...", "drug_b": "...", "severity": "...", "mechanism": "...", "evidence": "..."}`.

## Extending the data

- Add new drugs/brand names to `app/data/drug_aliases.json`.
- Add new interaction pairs to `app/data/interactions_db.json` (drug IDs must match the aliases file).

## Stretch goals (not yet built)

- Supplement normalization (currently prescription drugs only).
- Swap the JSON files for a real drug interaction database/API (e.g. RxNorm, DrugBank).
- Persist `_USER_MEDICATIONS` (currently in-memory, resets on restart).
