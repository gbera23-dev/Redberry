import { catalogueApi } from "../api/catalogueApi";

//used to cache often fetched movies, home page loads slowly, this will speed it up 
var nowPlayingCache = new Map()
var comingSoonCache = new Map() 
var featuredCache = null

async function searchMovies(query) {
    const result = await catalogueApi.search(query);
    return result;
}

async function getNowPlaying(limit) {
    if (nowPlayingCache.has(limit)) {
        return nowPlayingCache.get(limit)
    }
    const result = await catalogueApi.nowPlaying(limit);
    nowPlayingCache.set(result)
    return result;
}

async function getComingSoon(limit) {
    if (comingSoonCache.has(limit)) {
        return comingSoonCache.get(limit)
    }
    const result = await catalogueApi.comingSoon(limit);
    comingSoonCache.set(result)
    return result;
}

async function getFeatured() {
    if (featuredCache) {
        return featuredCache
    }
    const result = await catalogueApi.featured();
    featuredCache = result
    return result;
}

async function getMovieById(slug) {
    const result = await catalogueApi.getMovie(slug);
    return result;
}

async function getMovieSessions(slug, date) {
    const result = await catalogueApi.movieSessions(slug, date);
    return result;
}

async function notifyOnMovieTitle(slug) {
    const result = await catalogueApi.notifyOnTitle(slug);
    return result;
}

export const catalogueService = {
    searchMovies,
    getNowPlaying,
    getComingSoon,
    getFeatured,
    getMovieById,
    getMovieSessions,
    notifyOnMovieTitle
};