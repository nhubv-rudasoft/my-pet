import axios from 'axios';

const apiURL = process.env.VITE_API_BASE_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: apiURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor
api.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response?.data || error.message)
);

export default api;