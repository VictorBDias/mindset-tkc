import api from '~/services/api';

export const createUserAPI = ({
  name,
  email,
  birth_date,
  daily_workload,
  retirement,
  token,
}) =>
  api.post('/users', {
    name,
    email,
    code: token,
    birth_date,
    daily_workload,
    retirement,
  });
