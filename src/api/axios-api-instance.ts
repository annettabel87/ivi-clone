import axios from 'axios';
import { API_IVI_APP, API_IVI_APP_AUTH } from '@/shared/constants/api';

export const axiosAuthApiInstance = axios.create({
  baseURL: API_IVI_APP_AUTH,
});

export const axiosApiInstance = axios.create({
  baseURL: API_IVI_APP,
});

axiosAuthApiInstance.interceptors.request.use(
  async (config) => {
    //config.headers.Authorization = authUser();
    config.headers.ContentType = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuthApiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
      } catch (e) {
        Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers.ContentType = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
