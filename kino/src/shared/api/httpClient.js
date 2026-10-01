import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { clearToken, getToken } from "../utils/tokenUtils";

/**
 * Variable holding new axios instance that allows us to send http requests to public API
 */
const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Each time http client sends the http request, if authentication token is available, it will
 * automatically add a Authorization header.
 */
httpClient.interceptors.request.use((config) => {
  const token = getToken(); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * If on client's API request, API returns 401, which means that user is not authenticated, 
 * stored token becomes useless, it is either expired or corrupted, therefore we clear it.   
 */
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response && error.response.status === 401) {
      clearToken(); 
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);



export default httpClient 


