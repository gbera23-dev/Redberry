import { sessionsApi } from "../api/sessionsApi";
import { mapApiResponseToSessions, mapFiltersToApiRequest, mapApiResponseToFilters,
    generateDateOptions
 } from "../mappers/sessionsMapper";

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
    console.log("api request args")
    console.log(apiRequestArgs)
    const result = await sessionsApi.getSessions(apiRequestArgs);
    console.log("sessions request sent")
    return mapApiResponseToSessions(result);
}

async function getSingleSession(sessionId) {
    const result = await sessionsApi.getSingleSession(sessionId);
    return result;
}

async function getSessionSeats(sessionId) {
    const result = await sessionsApi.getSessionSeats(sessionId);
    return result;
}

export { getFilterOptions, getSessions, getSingleSession, getSessionSeats };