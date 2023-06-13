import { axiosAuthApiInstance } from './axios-api-instance';
import { API_ENDPOINTS } from '@/shared/constants/api';
import {
  ILoginGoogleResponseData,
  ILoginResponseData,
  ILoginVKResponseData,
  IUserData,
} from '@/shared/Interfaces/authInterfaces';
import { ILoginData, IRegistrationData } from '@/shared/Interfaces/authInterfaces';
import { ICode } from '@/store/reducers/authReducer';
import { authUser } from './auth-user';

export const userApi = {
  async registerUser(data: IRegistrationData) {
    const response = await axiosAuthApiInstance.post(API_ENDPOINTS.REGISTRATION, { ...data });
    return response.data;
  },
  async getUser(token: string) {
    const response = await axiosAuthApiInstance.get<IUserData>(API_ENDPOINTS.ME, {
      headers: { Authorization: authUser(token) },
    });
    return response.data;
  },
};

export const loginApi = {
  async createToken(login: ILoginData) {
    const response = await axiosAuthApiInstance.post<ILoginResponseData>(API_ENDPOINTS.LOGIN, {
      ...login,
      withCredentials: true,
    });
    return response.data;
  },

  async vkLogin(code: ICode) {
    const response = await axiosAuthApiInstance.post<ILoginVKResponseData>(API_ENDPOINTS.LOGIN_VK, {
      ...code,
    });

    return response.data;
  },

  async googleLogin(code: ICode) {
    const response = await axiosAuthApiInstance.post<ILoginGoogleResponseData>(
      API_ENDPOINTS.LOGIN_GOOGLE,
      {
        ...code,
      }
    );
    return response.data;
  },
};
