
/* VocalAI backend configuration */
window.APP_CONFIG = {
  API_BASE: ["localhost", "127.0.0.1", ""].includes(location.hostname)
    ? "http://127.0.0.1:8000"
    : "https://vocalai-api.onrender.com",
  MAX_UPLOAD_MB: 25,
  MAX_AUDIO_SECONDS: 300
};
