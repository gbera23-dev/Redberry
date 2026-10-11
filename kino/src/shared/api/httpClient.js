import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { getToken } from "../utils/tokenUtils";
import { handleApiError } from './errorHandler';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  handleApiError
);

export default httpClient;