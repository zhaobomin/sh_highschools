import axios, { type AxiosRequestConfig, AxiosError } from 'axios';

// Define unified error structure
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface ApiResponse<T = any> {
  data: T;
  meta?: any;
}

const api = axios.create({
  baseURL: '/api/v1', // Relative path as per rules
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for Auth
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for Error Handling
api.interceptors.response.use(
  (response) => {
    return response.data; // Return data directly
  },
  async (error: AxiosError) => {
    // Handle 401/403
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem('token');
      // Redirect to login
      if (window.location.pathname !== '/login') {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
        // 阻止后续代码执行，避免重定向被中止
        return new Promise(() => {}); // 永远不会解析的Promise
      }
    }

    // Normalize error
    const apiError: ApiError = {
      code: (error.response?.data as any)?.code || 'UNKNOWN_ERROR',
      message: (error.response?.data as any)?.message || error.message || 'An unknown error occurred',
      details: (error.response?.data as any)?.details,
    };

    return Promise.reject(apiError);
  }
);

// Unified Fetcher Wrapper
export const fetcher = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => api.get(url, config) as Promise<T>,
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => api.post(url, data, config) as Promise<T>,
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => api.put(url, data, config) as Promise<T>,
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => api.delete(url, config) as Promise<T>,
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => api.patch(url, data, config) as Promise<T>,
};

export default fetcher;
