/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const baseUrl = "https://shotokanunitedkenya.org/backend/";
const baseUrl2 = "ws://shotokanunitedkenya.org";
// const baseUrl = "http://localhost:8000/backend/";
// const baseUrl2 = "ws://localhost:8000"


const api = axios.create({
  baseURL: baseUrl,
});

const auth = axios.create({
  baseURL: baseUrl,
});

//it's work is just to set tokens in the local storage
export const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

//it's work is just to remove tokens from the local storage
export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userData");
};

// check if the token is valid
export const checkTokenIsValid = async () => {
  if (!getAccessToken()) {
    return false;
  }
  const res = await auth.post("auth/jwt/verify/", { token: getAccessToken() });
  return res.data.code === "token_not_valid" ? false : true;
};

// intercept request and modify headers
api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      redirectToLogin();
      return;
    }
    if (accessToken) {
      config.headers["Authorization"] = "JWT " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      redirectToLogin();
      return;
      // handle error: inform user, go to login, etc
    } else {
      return Promise.reject(error);
    }
  }
);

// Response interceptor to handle token expiration and refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers["Authorization"] = "JWT " + newAccessToken;
        return api(originalRequest); // Retry the original request with the new token
      } catch (refreshError) {
        removeTokens();
        redirectToLogin();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

//get my data incase there is a refresh
export const whoami = async () => {
  const response = await api.get("auth/users/me/");
  localStorage.setItem('userData', JSON.stringify(response.data));
  return response.data;
};

// user activation endpoint or activation resend endpoint
export const ActivateUser = async (c) => {
  // console.log(c);
  const res = await auth.post("auth/users/activation/", c);

  return res.data;
};

// login handler
export const GET_AUTH = async (credentials) => {
  const response = await auth.post("auth/jwt/create/", credentials);
  return response.data;
};

// Register handler
export const CREATE_NEW_USER = async (credentials) => {
  // Check if token needs refreshing before making the request
  const response = await auth.post("auth/users/", credentials);
  return response.data;
};
// Password reset handler
export const RESET_PASSWORD = async (data) => {
  const response = await auth.post("auth/users/reset_password_confirm/", data);
  return response.data;
};

//RESET USER PASSWORD sending only the email the rest is in the email
export const RESET_USER_PASSWORD = async (email) => {
  const response = await auth.post(`auth/users/reset_password/`, email);
  return response.data;
};
// redirect to login
export const redirectToLogin = () => {
  // Implement your logic to redirect to the login page
  // window.location.href = "/auth/login";
};

// get access token
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

// Function to refresh the access token using the refresh token
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error("Refresh token not available");
  }

  try {
    const response = await auth.post("auth/jwt/refresh/", { refresh: refreshToken });
    setTokens(response.data.access, refreshToken); // Assuming the refresh token remains the same
    return response.data.access;
  } catch (error) {
    throw new Error("Unable to refresh token");
  }
};

// Function to get refresh token from local storage
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export {
  api,
  auth,
  baseUrl2,
}