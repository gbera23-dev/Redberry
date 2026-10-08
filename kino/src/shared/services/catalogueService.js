import { catalogueApi } from "../api/catalogueApi";
import { transformMovieData, transformSessionsData } from "../mappers/movieMapper";

//used to cache often fetched movies, home page loads slowly, this will speed it up 
var nowPlayingCache = new Map()
var comingSoonCache = new Map() 
var currentMovieCache = new Map()
var movieSessionsCache = new Map() 
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
    nowPlayingCache.set(limit, result)
    return result;
}

async function getComingSoon(limit) {
    if (comingSoonCache.has(limit)) {
        return comingSoonCache.get(limit)
    }
    const result = await catalogueApi.comingSoon(limit);
    comingSoonCache.set(limit, result)
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

async function getMovieBySlug(slug) {
    if (currentMovieCache.has(slug)) {
        return currentMovieCache.get(slug)
    }
    const result = await catalogueApi.getMovie(slug);
    currentMovieCache.set(slug, transformMovieData(result.data)) 
    return currentMovieCache.get(slug)
}

async function getMovieSessions(slug, date) {
    const key = slug+date; 
    if (movieSessionsCache.has(key)) {
        return movieSessionsCache.get(key)
    }
    const result = await catalogueApi.movieSessions(slug, date);
    movieSessionsCache.set(key, transformSessionsData(result))
    return movieSessionsCache.get(key)
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
    getMovieBySlug,
    getMovieSessions,
    notifyOnMovieTitle
};