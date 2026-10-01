import axios from 'axios';
import { API_BASE_URL } from '../../config';

/**
 * Variable holding new axios instance that allows us to send http requests to public API
 */
const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

export default httpClient 


