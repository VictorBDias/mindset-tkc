import api from '../../../services/api';

export const answerQuestionsAPI = ({ userId, choices }) =>
  api.post(`/answers`, {
    user_id: '6d3c72f9-bb17-4eb0-af48-289b0acfb48a',
    choices,
  });

export const listQuestionsAPI = category => api.get(`/questions/${category}`);
