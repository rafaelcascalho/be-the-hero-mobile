import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL || 'https://be-the-hero-be-api.herokuapp.com/api/v1',
  responseType: 'json',
});

export default api;
