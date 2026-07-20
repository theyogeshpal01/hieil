import axios from 'axios';

const rawBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const api = axios.create({
  baseURL: rawBaseUrl.endsWith('/api') ? rawBaseUrl : `${rawBaseUrl}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add the auth token header to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 Unauthorized errors (e.g., token expired)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Don't redirect if it's the login request itself failing
      if (error.config && !error.config.url.includes('/auth/login')) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('isAuthenticated');
        window.location.href = '/admin';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
