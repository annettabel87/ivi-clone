import { axiosApiInstance } from './axios-api-instance';
import { API_ENDPOINTS } from '@/shared/constants/api';
import { ILoginResponseData, IUserData } from '@/shared/Interfaces/authInterfaces';
import { ILoginData, IRegistrationData } from '@/shared/Interfaces/authInterfaces';

export const userApi = {
  async registerUser(data: IRegistrationData) {
    const response = await axiosApiInstance.post(API_ENDPOINTS.REGISTRATION, { ...data });
    return response.data;
  },
  async getUser() {
    const response = await axiosApiInstance.get<IUserData>(API_ENDPOINTS.ME);
    return response.data;
  },
};

export const loginApi = {
  async createToken(login: ILoginData) {
    const response = await axiosApiInstance.post<ILoginResponseData>(API_ENDPOINTS.LOGIN, {
      ...login,
      withCredentials: true,
    });
    return response.data;
  },
};
