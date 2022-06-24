import api from '~/services/api';

export const generateTokenAPI = () =>
  api.get(`/tokens/generate`, {
    params: {
      size: 6,
      amount: 1,
    },
  });

export const createTokenAPI = code =>
  api.post(`/tokens`, {
    name: 'Promo Code',
    code: code[0],
    is_lifetime: true,
  });
