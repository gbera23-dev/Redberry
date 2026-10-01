import httpClient from "./httpClient";

const BASE_PATH = "/api/auth"

async function register(payload) {
  const response = await httpClient.post(`${BASE_PATH}/register`, payload);
  return response.data;
}

async function login(credentials) {
  const response = await httpClient.post(`${BASE_PATH}/login`, credentials);
  return response.data;
}

async function logout() {
    const response = await httpClient.post(`${BASE_PATH}/logout`);
    //To be implemented: clearing a saved token
    return response.data;  
}

async function me() {
    const response = await httpClient.get();
    return response.data; 
}