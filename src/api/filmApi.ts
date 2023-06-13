import { IFilm } from '@/shared/Interfaces/FilmPageInterfaces';
import { axiosApiInstance } from './axios-api-instance';
import { API_ENDPOINTS } from '@/shared/constants/api';

export const filmApi = {
  async getFilm(id: string) {
    const response = await axiosApiInstance.get<IFilm>(`${API_ENDPOINTS.FILM}${id}`);
    return response.data;
  },
};
