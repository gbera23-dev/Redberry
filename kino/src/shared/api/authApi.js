import httpClient from "./httpClient";

async function register(payload) {
  const response = await httpClient.post("/register", payload);
  return response.data;
}

async function login(credentials) {
  const response = await httpClient.post("/login", credentials);
  return response.data;
}

async function logout() {
    const response = await httpClient.post("/logout");
    //To be implemented: clearing a saved token
    return response.data;  
}

async function me() {
    const response = await httpClient.get("/me");
    return response.data; 
}

export const authApi = { register, login, logout, me };