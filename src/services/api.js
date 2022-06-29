import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mindset-api.mrootx.xyz/',
});

export default api;
