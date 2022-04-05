import api from '../../../../services/api';

export const showImpulsores = () =>
  api.get(`/categories/e8d7e3ca-6633-4224-85e2-25faf735f818`);

export const answerQuestions = ({ userId, choices }) =>
  api.post(`/answers`, { user_id: userId, choices });
