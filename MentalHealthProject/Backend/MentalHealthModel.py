from xgboost import XGBRegressor
import numpy as np
import joblib
encoders = joblib.load("encoders.pkl")
def preprocess_input(data):
    return np.array([[
        data["Age"],
        encoders["Gender"].transform([data["Gender"]])[0],
        encoders["Academic_Level"].transform([data["Academic_Level"]])[0],
        encoders["Country"].transform([data["Country"]])[0],
        data["Avg_Daily_Usage_Hours"],
        encoders["Most_Used_Platform"].transform([data["Most_Used_Platform"]])[0],
        encoders["Affects_Academic_Performance"].transform([data["Affects_Academic_Performance"]])[0],
        data["Sleep_Hours_Per_Night"]
    ]])

def mental_health_prediction(inputData):
    model = XGBRegressor()
    model.load_model("model.json")
    sample = preprocess_input(inputData)
    result = model.predict(sample)

    return {
        "prediction": float(result[0])  
    }

    
