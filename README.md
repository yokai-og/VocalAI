# VocalAI — AI-Powered Speech Transcription

VocalAI is a web-based speech-to-text application that converts uploaded audio recordings and live microphone speech into text. It combines Python speech-recognition technologies with a modern, responsive interface.

The application supports Google Web Speech and locally hosted OpenAI Whisper through a FastAPI backend.

## Features

- **Audio transcription:** Upload WAV, MP3, M4A, OGG, FLAC, or WEBM files.
- **Live transcription:** Transcribe microphone speech in near real time using WebSockets.
- **Multiple transcription engines:**
  - Google Web Speech through Python's `SpeechRecognition` library.
  - OpenAI Whisper through `faster-whisper` running on the server.
- **Automatic fallback:** The backend can fall back to Whisper when Google transcription fails.
- **Transcription controls:** Copy text, download `.txt` files, and view timestamps.
- **Live controls:** Language selection, audio-level meter, and session timer.
- **Modern interface:** Dark navy theme with violet and cyan accents.

## Technology Stack

| Component | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, FastAPI |
| Speech Recognition | SpeechRecognition, Google Web Speech |
| AI Transcription | OpenAI Whisper, faster-whisper |
| Audio Processing | PyAV, PCM AudioWorklet |
| Communication | REST API, WebSockets |
| Deployment | Render, Vercel |

## Architecture

```text
VocalAI/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── config.js
│   └── pcm-worklet.js
│
├── backend/
│   ├── app.py
│   ├── transcriber.py
│   ├── streaming.py
│   ├── connections.py
│   ├── database.py
│   ├── schema.py
│   ├── cli.py
│   ├── benchmark.py
│   ├── prefetch_model.py
│   └── requirements.txt
│
├── samples/
├── README.md
├── PROJECT_PHASES.md
└── render.yaml
```

### Audio Processing Workflow

**Uploaded audio**

1. The user uploads an audio file through the frontend.
2. The frontend sends it to the FastAPI backend.
3. The backend decodes and processes the audio.
4. The selected speech-recognition engine generates the transcription.
5. The backend returns the result to the frontend.

**Live microphone transcription**

1. The browser captures microphone audio.
2. AudioWorklet processes the audio into PCM chunks.
3. The chunks are transmitted through a WebSocket connection.
4. The backend processes speech segments using voice activity detection.
5. Completed transcriptions are sent back to the frontend.

## Running Locally

### Requirements

- Python 3.12
- VS Code or another code editor
- Google Chrome or another supported Chromium-based browser for live microphone functionality

### 1. Clone the repository

```powershell
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd VocalAI
```

### 2. Create a virtual environment

```powershell
python -m venv .venv
```

Activate it:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 3. Install backend dependencies

```powershell
pip install -r backend/requirements.txt
```

### 4. Start the backend

```powershell
cd backend
uvicorn app:app --host 127.0.0.1 --port 8000
```

The backend API will be available at:

- API: `http://127.0.0.1:8000`
- API documentation: `http://127.0.0.1:8000/docs`
- Health check: `http://127.0.0.1:8000/health`

### 5. Start the frontend

Open a second terminal from the project root:

```powershell
python -m http.server 5500 --directory frontend
```

Open the application at:

`http://127.0.0.1:5500`

The local frontend configuration automatically connects to the backend at `http://127.0.0.1:8000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API information |
| GET | `/health` | Backend health status |
| GET | `/docs` | Interactive API documentation |
| POST | `/api/transcribe` | Upload and transcribe audio |
| WebSocket | `/ws/stream` | Live microphone transcription |

## Deployment

VocalAI uses separate frontend and backend deployments.

### Backend — Render

The backend can be deployed using the included `render.yaml` blueprint.

- Runtime: Python
- Framework: FastAPI
- Server: Uvicorn
- Health check: `/health`

### Frontend — Vercel

The frontend is a static website and does not require a build step.

- Framework: Other
- Root directory: `frontend`
- Build command: Not required
- Output directory: `.`

After deployment, configure the frontend API URL and backend CORS settings with your actual deployment domains.

## Project Information

**Project name:** VocalAI  
**Category:** Artificial Intelligence / Speech Recognition  
**Type:** Web Application

### Credits and Attribution

VocalAI is a modified and rebranded version of the original SPEECH project, adapted with permission from its original developer.

Original repository: https://github.com/Darkstrike03/SPEECH

Original license and any required attribution notices should be retained.

---

**VocalAI — Turning Speech into Text.**