import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.88.128:3333',
});

export default api;
