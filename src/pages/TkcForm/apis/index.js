import api from '../../../services/api';

export const answerQuestionsAPI = ({ userId, choices }) =>
  api.post(`/answers`, {
    user_id: userId,
    choices,
  });

export const listQuestionsAPI = category => api.get(`/questions/${category}`);
