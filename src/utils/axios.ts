// utils/axios.ts
import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://localhost:7043/api',  // Replace with your API URL
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['X-App-Id'] = 'KYCTY';  // App Key for added security
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
