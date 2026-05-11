# Bank Churn Prediction App

A full-stack Machine Learning web application that predicts whether a bank customer is likely to churn using an Artificial Neural Network (ANN).

The project combines:

* TensorFlow/Keras for Deep Learning
* FastAPI for backend API development
* React + Vite for frontend UI
* Scikit-learn for preprocessing and scaling

This application allows users to enter customer information through a React frontend and receive real-time churn predictions from a trained ANN model served using FastAPI.

---

# Project Demo

## Features

* Customer churn prediction using ANN
* Real-time prediction through API integration
* React frontend with interactive form
* FastAPI backend with prediction endpoint
* One-hot encoding and label encoding support
* StandardScaler preprocessing
* REST API integration using Axios
* Swagger API documentation
* Full-stack ML deployment workflow

---

# Tech Stack

## Frontend

* React
* Vite
* Axios
* JavaScript
* CSS

## Backend

* FastAPI
* TensorFlow / Keras
* Scikit-learn
* Pandas
* NumPy
* Uvicorn
* Pydantic

---

# Project Architecture

```text
React Frontend
       ↓
Axios API Call
       ↓
FastAPI Backend
       ↓
TensorFlow ANN Model
       ↓
Prediction Response
       ↓
React UI Update
```

---

# Folder Structure

```text
bank-churn-prediction-app/
│
├── Backend/
│   ├── ann_model.h5
│   ├── label_encoder_gender.pkl
│   ├── one_hot_encoder_geography.pkl
│   ├── scaler.pkl
│   ├── main.py
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│
├── requirements.txt
├── README.md
```

---

# Machine Learning Workflow

## Data Preprocessing

The following preprocessing techniques were applied:

* Label Encoding for Gender
* One-Hot Encoding for Geography
* Feature Scaling using StandardScaler

## Deep Learning Model

An Artificial Neural Network (ANN) was trained using TensorFlow/Keras.

### Model Workflow

```text
Input Data
    ↓
Data Preprocessing
    ↓
ANN Model
    ↓
Probability Prediction
    ↓
Churn / No Churn
```

---

# Backend Development (FastAPI)

The backend was developed using FastAPI.

## Main Features

* Model loading
* Encoder loading
* Data preprocessing
* Prediction endpoint
* Input validation using Pydantic
* CORS support

## API Endpoint

### Predict Customer Churn

```http
POST /predict
```

### Sample Input

```json
{
  "CreditScore": 650,
  "Geography": "France",
  "Gender": "Female",
  "Age": 40,
  "Tenure": 5,
  "Balance": 60000,
  "NumOfProducts": 2,
  "HasCrCard": 1,
  "IsActiveMember": 1,
  "EstimatedSalary": 50000
}
```

### Sample Output

```json
{
  "churn_prediction": "Customer is not likely to churn",
  "probability": 0.23
}
```

---

# Frontend Development (React)

The frontend was built using React + Vite.

## Features

* Dynamic form handling
* React useState hooks
* Dropdown inputs
* API integration using Axios
* Real-time prediction display

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/bank-churn-prediction-app.git
```

---

# Backend Setup

## 2. Navigate to Project

```bash
cd bank-churn-prediction-app
```

## 3. Create Virtual Environment

### Windows

```bash
python -m venv env
```

## 4. Activate Virtual Environment

### Windows

```bash
env\Scripts\activate
```

---

## 5. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

## Backend Dependencies

```text
tensorflow
fastapi
uvicorn
pydantic
pandas
numpy
scikit-learn
```

---

## 6. Run FastAPI Server

Navigate into Backend folder:

```bash
cd Backend
```

Run server:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Open a NEW terminal.

## 7. Navigate to Frontend

```bash
cd Frontend
```

## 8. Install Frontend Dependencies

```bash
npm install
```

## 9. Install Axios

```bash
npm install axios
```

---

## Frontend Dependencies

```text
react
vite
axios
```

---

## 10. Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# CORS Configuration

The FastAPI backend uses CORSMiddleware to allow communication between React frontend and FastAPI backend.

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

# Key Concepts Learned

## Machine Learning

* Artificial Neural Networks
* TensorFlow/Keras
* Feature Scaling
* Label Encoding
* One-Hot Encoding
* Model Deployment

## Backend Development

* FastAPI
* REST APIs
* Pydantic Validation
* API Endpoints
* Model Serving

## Frontend Development

* React
* React Hooks
* useState
* Controlled Components
* API Integration
* Axios

---

# Future Improvements

* Add authentication
* Add database integration
* Deploy using Docker
* Improve UI/UX
* Add loading spinner
* Add prediction history
* Deploy frontend on Vercel
* Deploy backend on Render/Railway

---

# Screenshots

## Frontend UI
<img width="809" height="818" alt="image" src="https://github.com/user-attachments/assets/dc6fa9aa-bb8a-4bdc-ab38-2cfdc2982a17" />


## Swagger API Documentation

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/def4b92b-8f0e-4238-a13f-981cf4f9ed2c" />


---

# Author

## Urbeena  Rashid

BTech Computer Science Engineering


This project is open-source and available under the MIT License.
# bank-churn-prediction-app
