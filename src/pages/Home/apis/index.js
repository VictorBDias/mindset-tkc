import api from '../../../services/api';

export const validateTokenAPI = token => api.get(`/tokens/validate/${token}`);
