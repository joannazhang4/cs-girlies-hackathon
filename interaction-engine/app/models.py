from pydantic import BaseModel


class MedicationListRequest(BaseModel):
    medications: list[str]


class NormalizeRequest(BaseModel):
    names: list[str]


class SetUserMedicationsRequest(BaseModel):
    medications: list[str]
