import axios, { AxiosInstance } from "axios";

/* This TypeScript code snippet is defining a module that handles building API URLs and axios client setup. */
const rawApiBaseUrl =
  process.env.NEXT_PUBLIC_FRONTEND_URL ?? process.env.BACKEND_URL ?? "";

export const BACK_API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, "");

// Create and export axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: BACK_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to attach auth token
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      if (typeof window !== "undefined") {
        window.location.href = "/auth";
      }
    }
    return Promise.reject(error);
  },
);
