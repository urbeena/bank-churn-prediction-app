from fastapi import FastAPI
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pandas as pd
import pickle

from pydantic import BaseModel

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#load model and encoder and scaler

model = load_model('ann_model.h5')


with open('label_encoder_gender.pkl', 'rb') as f:
    label_encoder_gender= pickle.load(f)

with open('one_hot_encoder_georaphy.pkl', 'rb') as f:
    one_hot_encoder_geography= pickle.load(f)

with open('scalor.pkl', 'rb') as f:
    scaler= pickle.load(f)

#home
@app.get('/')
def home():
    return "Welcome to the Bank Churn Prediction API"

###validate and accept input data
class CustomerData(BaseModel):
    CreditScore: int
    Geography: str
    Gender:str
    Age: int
    Tenure:int
    Balance:float
    NumOfProducts:int
    HasCrCard:int
    IsActiveMember:int
    EstimatedSalary:float
#predict endpoint
@app.post('/predict')
def predict_churn(input_data:CustomerData):
    
    ###encodeing
    input_data= pd.DataFrame([input_data.dict()])
    ##encode Gender
    input_data['Gender'] =label_encoder_gender.transform(input_data['Gender'])
    ##encode geography
    one_hot_encoder_geo=one_hot_encoder_geography.transform(input_data[['Geography']]).toarray()
    geo_df=pd.DataFrame(one_hot_encoder_geo, columns=one_hot_encoder_geography.get_feature_names_out(['Geography']))

    ##concat
    input_data=pd.concat([input_data.drop("Geography",axis=1),geo_df],axis=1)

    ###standardize
    input_scaled=scaler.transform(input_data)

    prediction= model.predict(input_scaled)

    prediction_probablity= prediction[0][0]
    
    if prediction_probablity > 0.5:
        return {"churn_prediction": "Customer is likely to churn ", "probability": float(prediction_probablity)}
    else:
        return {"churn_prediction": "Customer is not likely to churn ", "probability": float(prediction_probablity)}
