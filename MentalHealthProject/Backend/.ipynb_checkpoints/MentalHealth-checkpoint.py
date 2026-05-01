from fastapi import FastAPI
from MentalHealthModel import mental_health_prediction
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


class MentalHealthInput(BaseModel):
    Age: int
    Gender: str
    Academic_Level: str
    Country: str
    Avg_Daily_Usage_Hours: float
    Most_Used_Platform: str
    Affects_Academic_Performance: str
    Sleep_Hours_Per_Night: float

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for now (dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def read_root():
    return {"Welcome to the Mental Health Calculator API"}

['Age',
 'Gender',
 'Academic_Level',
 'Country',
 'Avg_Daily_Usage_Hours',
 'Most_Used_Platform',
 'Affects_Academic_Performance',
 'Sleep_Hours_Per_Night']

@app.post("/predict")
def calculate_mental_health_score(data: MentalHealthInput):
    inputData = data.dict()

    result = mental_health_prediction(inputData)

    return result