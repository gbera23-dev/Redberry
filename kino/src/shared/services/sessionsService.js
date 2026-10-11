import { sessionsApi } from "../api/sessionsApi";
import { mapApiResponseToSessions, mapFiltersToApiRequest, mapApiResponseToFilters,
    generateDateOptions, mapSessionDetailResponse, mapSeatLayoutResponse
 } from "../mappers/sessionsMapper";

var sessionCache = new Map() 
var sessionSeatCache = new Map() 
var filterOptionsCache = null;  

async function getFilterOptions() {
    if (filterOptionsCache) {
        return filterOptionsCache
    }
    const result = await sessionsApi.filterOptions();
    filterOptionsCache = {...mapApiResponseToFilters(result),
        DATES: generateDateOptions(),
    }
    return filterOptionsCache;
}

async function getSessions({ filters, sortOrder, currentPage, selectedDate }) {
    const apiRequestArgs = mapFiltersToApiRequest({ filters:filters, sortOrder:sortOrder, currentPage:currentPage, search:"",
        date:selectedDate
    })
    const result = await sessionsApi.getSessions(apiRequestArgs);
    return mapApiResponseToSessions(result);
}

async function getSingleSession(sessionId) {
    if (sessionCache.has(sessionId)) {
        return sessionCache.get(sessionId)
    }
    const result = await sessionsApi.getSingleSession(sessionId);
    sessionCache.set(sessionId, mapSessionDetailResponse(result))
    return sessionCache.get(sessionId);
}

async function getSessionSeats(sessionId) {
    if (sessionSeatCache.has(sessionId)) {
        return sessionSeatCache.get(sessionId)
    }
    const result = await sessionsApi.getSessionSeats(sessionId);
    sessionSeatCache.set(sessionId, mapSeatLayoutResponse(result))
    return sessionSeatCache.get(sessionId);
}

export { getFilterOptions, getSessions, getSingleSession, getSessionSeats };