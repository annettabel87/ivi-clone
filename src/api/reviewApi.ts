import { ICommentData, IReview, IReviewData } from '@/shared/Interfaces/FilmPageInterfaces';
import { axiosApiInstance } from './axios-api-instance';
import { API_ENDPOINTS } from '@/shared/constants/api';

export const reviewApi = {
  async getReviews() {
    const response = await axiosApiInstance.get<IReview[]>(API_ENDPOINTS.REVIEWS);
    return response.data;
  },
  async addReview(review: IReviewData) {
    const response = await axiosApiInstance.post('', { ...review });
    return response.data;
  },
  async addComment(comment: ICommentData) {
    const response = await axiosApiInstance.post('', { ...comment });
    return response.data;
  },
};
