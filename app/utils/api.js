import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 60000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const params = { ...config.params, token };
  return { ...config, params };
});

export default api;
