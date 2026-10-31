# VocalAI 🎙️
### AI-Powered Speech Transcription

VocalAI is a web-based speech transcription application that converts spoken audio into text using Google Web Speech recognition and OpenAI Whisper. It supports both audio file uploads and real-time microphone transcription through a simple, modern interface.

## 🌐 Live Demo

- **Frontend:** https://vocalai-one.vercel.app/
- **Backend API:** https://vocalai-api.onrender.com/
- **API Documentation:** https://vocalai-api.onrender.com/docs
- **Backend Health Check:** https://vocalai-api.onrender.com/health

## ✨ Features

- **Audio File Transcription:** Upload audio files and convert speech into text.
- **Live Transcription:** Transcribe speech directly through your microphone.
- **Multiple Speech Engines:** Supports Google Web Speech and Whisper.
- **Whisper Integration:** Uses the faster-whisper implementation for speech recognition.
- **Real-Time Processing:** Supports live audio streaming through WebSockets.
- **Transcription Results:** View and copy generated transcripts.
- **Responsive Interface:** Clean, modern interface designed for ease of use.
- **Audio Validation:** Configurable upload size and audio duration limits.

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Web Audio API
- AudioWorklet

### Backend
- Python
- FastAPI
- Uvicorn
- WebSockets
- SpeechRecognition
- faster-whisper
- PyAV

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Version Control:** Git and GitHub

## 🏗️ Project Architecture

VocalAI uses a separate frontend and backend architecture.

1. The frontend provides the interface for uploading audio or recording through a microphone.
2. Audio data is sent to the FastAPI backend.
3. The backend processes the audio using the selected transcription engine.
4. The generated transcript is returned to the frontend.
5. For live transcription, audio is streamed using WebSockets.

## 📁 Project Structure

```text
VocalAI/
│
├── backend/
│   ├── app.py
│   ├── transcriber.py
│   ├── streaming.py
│   ├── benchmark.py
│   ├── cli.py
│   ├── prefetch_model.py
│   ├── connections.py
│   ├── database.py
│   ├── schema.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── config.js
│   └── pcm-worklet.js
│
├── samples/
├── LICENSE
├── README.md
├── render.yaml
└── .gitignore
```

## ⚙️ Run Locally

### Prerequisites

- Python 3.12
- Git
- A modern web browser

### 1. Clone the Repository

```bash
git clone https://github.com/yokai-og/VocalAI.git
cd VocalAI
```

### 2. Set Up the Backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment.

**Windows PowerShell:**

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory using `.env.example` as a reference.

Configure any required environment variables before starting the backend.

### 4. Start the Backend

```bash
uvicorn app:app --reload --host 127.0.0.1 --port 8000
```

Backend URL:

`http://127.0.0.1:8000`

API documentation:

`http://127.0.0.1:8000/docs`

### 5. Start the Frontend

Open another terminal from the project root:

```bash
cd frontend
python -m http.server 5500
```

Open the application:

`http://localhost:5500`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API information |
| GET | `/health` | Backend health status |
| GET | `/docs` | Interactive API documentation |
| POST | `/api/transcribe` | Audio transcription |
| WebSocket | `/ws/stream` | Real-time audio transcription |

## 🚀 Deployment

VocalAI uses separate deployment platforms for its frontend and backend.

- **Frontend:** Deployed on Vercel.
- **Backend:** Deployed on Render.
- **Configuration:** The frontend API URL is configured in `frontend/config.js`.
- **Backend deployment:** Configured through `render.yaml`.

## 🔒 License and Attribution

This project is distributed under the MIT License.

Copyright (c) 2026 Darkstrike03

VocalAI is based on the original [SPEECH repository](https://github.com/Darkstrike03/SPEECH). The original copyright and license notice are retained in accordance with the MIT License.

## 👨‍💻 Project

**VocalAI** — AI-powered speech transcription application.

Repository: https://github.com/yokai-og/VocalAI

Live Application: https://vocalai-one.vercel.app/
