import axios from 'axios';
import { API_IVI_APP } from '@/shared/constants/api';
import { authUser } from './auth-user';
import { ILoginResponseData } from '@/shared/Interfaces/authInterfaces';
import { localStorageActions } from '@/utils/localStorageActions';

export const axiosApiInstance = axios.create({
  baseURL: API_IVI_APP,
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = authUser();
    config.headers.ContentType = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosApiInstance.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status == 401 && error.config && !error.config._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//         localStorageActions.removeToken();
//         // const login = localStorageActions.getLoginData();
//         // const response = await axios.post<ILoginResponseData>(`${API_ENDPOINTS.LOGIN}`, {
//         //   ...login,
//         //   withCredentials: true,
//         // });
//         // localStorage.setItem('token', response.data.token);
//         // return axiosApiInstance.request(originalRequest);
//       } catch (e) {
//         Promise.reject(e);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
