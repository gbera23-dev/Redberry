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

async function getMovie(slug) {
    const response = await httpClient.get(`${BASE_PATH}/${slug}`)
    return response.data; 
}

async function movieSessions(slug, date) {
    const response = await httpClient.get(`${BASE_PATH}/${slug}/sessions`, { params : { date } })
    return response.data; 
}

async function notifyOnTitle(slug) {
    const response = await httpClient.post(`${BASE_PATH}/${slug}/notify`);
    return response.data; 
}

export const catalogueApi = { search, nowPlaying, comingSoon, featured, 
    getMovie, movieSessions, notifyOnTitle
 };