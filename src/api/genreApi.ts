import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import { axiosApiInstance } from './axios-api-instance';
import { API_ENDPOINTS } from '@/shared/constants/api';

export const genreApi = {
  async getGenres() {
    const response = await axiosApiInstance.get<IGenre[]>(API_ENDPOINTS.GENRES);
    return response.data;
  },

  async getGenreEng(name: string) {
    const response = await axiosApiInstance.get<IGenre>(`${API_ENDPOINTS.GENRES}${name}`);
    return response.data;
  },

  async updateGenre(data: IGenre) {
    const response = await axiosApiInstance.put<IGenre>(`${API_ENDPOINTS.GENRES}${data.genreEng}`, {
      ...data,
    });
    return response.data;
  },
};
