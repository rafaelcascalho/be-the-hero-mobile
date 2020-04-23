import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-the-hero-be-api.herokuapp.com/api/v1',
  responseType: 'json',
});

export default api;
