# Social Media Mental Health Predictor

This full-stack application leverages machine learning to analyze social media usage patterns and predict potential mental health indicators. The project integrates a high-performance **XGBoost** model with a **FastAPI** backend and a responsive **Next.js** frontend, all fully containerized for seamless deployment.



## Demo
Watch the application in action: [View Demo Video](https://youtu.be/P-IIM5gznRc)

---

## Features
*   **Predictive Analysis:** Uses an XGBoost classifier trained on a curated Kaggle dataset to evaluate mental health metrics based on user behavior.
*   **Real-time Inference:** Fast and lightweight API responses via FastAPI.
*   **Modern UI:** A clean, intuitive dashboard built with Next.js and Tailwind CSS.
*   **Containerized Architecture:** Fully Dockerized components for consistent environments across development and production.

---

## Tech Stack
*   **Frontend:** Next.js, React, Tailwind CSS
*   **Backend:** FastAPI (Python)
*   **Machine Learning:** XGBoost, Scikit-learn, Pandas, Numpy
*   **DevOps:** Docker, Docker Compose

---

## Installation & Setup

### 1. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
The frontend will be available at `http://127.0.0.1:8000`.

### 2. Backend & Model Setup
The backend is served via FastAPI and runs inside a Docker container.
```bash
cd Backend
docker compose up --build
```
This command builds the backend image and starts the inference service at `http://127.0.0.1:8000`.

---

## 🧠 Machine Learning Workflow
The predictive engine was built using an **XGBoost** (Extreme Gradient Boosting) model. The workflow involved:
1.  **Data Sourcing:** Utilizing a comprehensive social media usage dataset from Kaggle.
2.  **Preprocessing:** Feature engineering and normalization of usage metrics (e.g., screen time, platform engagement, sleep patterns).
3.  **Training:** Hyperparameter tuning to optimize the XGBoost classifier for high precision and recall.
4.  **Deployment:** Exporting the model for real-time consumption by the FastAPI service.

---

## 📂 Project Structure
```text
├── Frontend/           # Next.js application
├── Backend/            # FastAPI, Model logic, and Dockerfile
│   ├── model/          # Trained XGBoost model artifacts
│   └── MentalHealth.py         # API endpoints
├── docker-compose.yml  # Orchestration for the full stack
└── README.md
```

---

## 📝 Usage
1.  Ensure both the Frontend and Backend services are running.
2.  Navigate to the web interface.
3.  Input the relevant social media usage data.
4.  View the generated prediction and insights based on the ML model's analysis.
