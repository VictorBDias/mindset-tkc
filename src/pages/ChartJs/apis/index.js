import api from '../../../services/api';

export const getUserFeedbackAPI = ({ category, userId }) =>
  api.get(`users/reports/${category}`, {
    params: { user_id: userId },
  });

export const sendEmailAPI = ({ userId }) => {
  api.get(`/mailer/send/${userId} `);
};
