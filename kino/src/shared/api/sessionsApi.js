import httpClient from "./httpClient";

const BASE_PATH = "/sessions"

async function filterOptions() {
    const response = await httpClient.get("/filter-options"); 
    return response.data; 
}

async function getSessions(params) {
    const response = await httpClient.get(BASE_PATH, { params });
    return response.data;
}

async function getSingleSession(session) {
    const response = await httpClient.get(`${BASE_PATH}/${session}`);
    return response.data; 
}

async function getSessionSeats(session) {
    const response = await httpClient.get(`${BASE_PATH}/${session}/seats`);
    return response.data; 
}

export const sessionsApi = { filterOptions, getSessions, getSingleSession, getSessionSeats };