import axios from 'axios';

const rawBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: rawBaseUrl.endsWith('/api') ? rawBaseUrl : `${rawBaseUrl}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
