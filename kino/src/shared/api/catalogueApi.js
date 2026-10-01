import httpClient from "./httpClient";

const BASE_PATH = "/movies"

async function search(q) {
    const response = await httpClient.get("/search", { params : { q } }); 
    return response.data; 
}

async function nowPlaying(limit) {
    const response = await httpClient.get(`${BASE_PATH}/now-playing`, { params : { limit } })
    return response.data; 
}

async function comingSoon(limit) {
    const response = await httpClient.get(`${BASE_PATH}/coming-soon`, { params : { limit } })
    return response.data; 
}

async function featured() {
    const response = await httpClient.get(`${BASE_PATH}/featured`);
    return response.data; 
}

async function getMovie(movie) {
    const response = await httpClient.get(`${BASE_PATH}/${movie}`)
    return response.data; 
}

async function movieSessions(movie, date) {
    const response = await httpClient.get(`${BASE_PATH}/${movie}/sessions`, { params : { date } })
    return response.data; 
}

async function notifyOnTitle(movie) {
    const response = await httpClient.post(`${BASE_PATH}/${movie}/notify`);
    return response.data; 
}