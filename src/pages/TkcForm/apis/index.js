import api from '../../../services/api';

export const answerQuestionsAPI = ({ userId, choices }) =>
  api.post(`/answers`, { user_id: userId, choices });

export const showCategoryAPI = categoryId =>
  api.get(`/categories/${categoryId}`);
