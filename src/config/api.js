import axios from 'axios';

const rawBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: rawBaseUrl.endsWith('/api') ? rawBaseUrl : `${rawBaseUrl}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

let requestCount = 0;

api.interceptors.request.use(config => {
  requestCount++;
  window.dispatchEvent(new CustomEvent('globalLoader', { detail: true }));
  return config;
});

api.interceptors.response.use(response => {
  requestCount--;
  if (requestCount <= 0) { 
    requestCount = 0; 
    window.dispatchEvent(new CustomEvent('globalLoader', { detail: false })); 
  }
  return response;
}, error => {
  requestCount--;
  if (requestCount <= 0) { 
    requestCount = 0; 
    window.dispatchEvent(new CustomEvent('globalLoader', { detail: false })); 
  }
  return Promise.reject(error);
});

export default api;
