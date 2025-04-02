import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          const decoded = jwtDecode(storedToken);
          // Check if token is expired
          if (decoded.exp * 1000 < Date.now()) {
            await logout();
          } else {
            setToken(storedToken);
            const userResponse = await axios.get(
              `${process.env.REACT_APP_API_URL}/api/auth/me`,
              { headers: { Authorization: `Bearer ${storedToken}` } }
            );
            setUser(userResponse.data);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        await logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      setUser(user);

      // Store last login timestamp
      localStorage.setItem('lastLogin', new Date().toISOString());

      return user;
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        userData
      );

      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (token) {
        // Notify backend about logout
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/logout`,
          {},
          { headers: getAuthHeaders() }
        );
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage and state
      localStorage.removeItem('token');
      localStorage.removeItem('lastLogin');
      setToken(null);
      setUser(null);
      navigate('/login');
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/refresh-token`,
        {},
        { headers: getAuthHeaders() }
      );

      const { token: newToken } = response.data;
      localStorage.setItem('token', newToken);
      setToken(newToken);

      return newToken;
    } catch (error) {
      console.error('Token refresh error:', error);
      await logout();
      throw error;
    }
  };

  const updateProfile = async (profileData) => {
    try {
      setError(null);
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/auth/profile`,
        profileData,
        { headers: getAuthHeaders() }
      );

      setUser(response.data);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Profile update failed');
      throw error;
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      setError(null);
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/auth/change-password`,
        { currentPassword, newPassword },
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      setError(error.response?.data?.message || 'Password change failed');
      throw error;
    }
  };

  const forgotPassword = async (email) => {
    try {
      setError(null);
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/forgot-password`,
        { email }
      );
    } catch (error) {
      setError(error.response?.data?.message || 'Password reset request failed');
      throw error;
    }
  };

  const resetPassword = async (token, newPassword) => {
    try {
      setError(null);
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/reset-password`,
        { token, newPassword }
      );
    } catch (error) {
      setError(error.response?.data?.message || 'Password reset failed');
      throw error;
    }
  };

  const verifyEmail = async (token) => {
    try {
      setError(null);
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/verify-email`,
        { token }
      );
    } catch (error) {
      setError(error.response?.data?.message || 'Email verification failed');
      throw error;
    }
  };

  const getAuthHeaders = useCallback(() => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, [token]);

  // Axios interceptor for token refresh
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await refreshToken();
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axios(originalRequest);
          } catch (refreshError) {
            await logout();
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [refreshToken]);

  // Check token expiration periodically
  useEffect(() => {
    if (!token) return;

    const checkTokenExpiration = async () => {
      try {
        const decoded = jwt_decode(token);
        if (decoded.exp * 1000 < Date.now()) {
          await logout();
        }
      } catch (error) {
        console.error('Token check error:', error);
        await logout();
      }
    };

    const interval = setInterval(checkTokenExpiration, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [token]);

  const value = {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    forgotPassword,
    resetPassword,
    verifyEmail,
    getAuthHeaders,
    isAuthenticated: !!token,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
