// ShotokanUnited_frontend/frontend/src/utils/auth.js
import axios from 'axios';

// Create an axios instance with custom configuration
const auth = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token to requests
auth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
auth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh the token
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await auth.post('/api/auth/refresh', {
            refresh_token: refreshToken,
          });

          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            auth.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            return auth(originalRequest);
          }
        }
      } catch (refreshError) {
        // If refresh fails, clear tokens and redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }

    // Handle 403 Forbidden errors
    if (error.response?.status === 403) {
      // Clear tokens and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      window.location.href = '/auth/login';
    }

    return Promise.reject(error);
  }
);

// Helper methods for common auth operations
const authHelpers = {
  login: async (credentials) => {
    const response = await auth.post('/api/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      if (response.data.refresh_token) {
        localStorage.setItem('refreshToken', response.data.refresh_token);
      }
      auth.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
    return response;
  },

  logout: async () => {
    try {
      await auth.post('/api/auth/logout');
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      delete auth.defaults.headers.common['Authorization'];
    }
  },

  register: async (userData) => {
    return await auth.post('/api/auth/register', userData);
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  // Method to handle file uploads with progress tracking
  upload: async (url, formData, onProgress) => {
    return await auth.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentCompleted);
        }
      },
    });
  },
};

// Combine the axios instance with helper methods
const authService = {
  ...auth,
  ...authHelpers,
};

export default authService;