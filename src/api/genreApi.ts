import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import { axiosApiInstance } from './axios-api-instance';
import { API_ENDPOINTS } from '@/shared/constants/api';

export const genreApi = {
  async getGenres() {
    const response = await axiosApiInstance.get<IGenre[]>(API_ENDPOINTS.GENRES);
    return response.data;
  },

  async getGenresEng(name: string) {
    const response = await axiosApiInstance.get<IGenre>(`${API_ENDPOINTS.GENRES}${name}`);
    return response.data;
  },
};
