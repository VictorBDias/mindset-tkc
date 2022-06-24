import api from '../../../services/api';

export const answerQuestionsAPI = ({ userId, choices }) =>
  api.post(`/answers`, {
    user_id: 'c8888d3f-ba58-499e-8392-931e1a409624',
    choices,
  });

export const listQuestionsAPI = category => api.get(`/questions/${category}`);
