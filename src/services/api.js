import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.86.24.251:8080/',
});

export default api;
