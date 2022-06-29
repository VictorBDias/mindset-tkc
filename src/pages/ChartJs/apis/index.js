import api from '../../../services/api';

export const getUserFeedbackAPI = ({ category, userId }) =>
  api.get(`users/reports/${category}`, {
    params: { user_id: userId },
  });
