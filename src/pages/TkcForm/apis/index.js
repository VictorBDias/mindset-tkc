import api from '../../../services/api';

export const answerQuestionsAPI = ({ userId, choices }) =>
  api.post(`/answers`, {
    user_id: 'dfd1fb74-3e4a-4b9c-87d8-d39235d5fe80',
    choices,
  });

export const listQuestionsAPI = category => api.get(`/questions/${category}`);
