import { sessionsApi } from "../api/sessionsApi";

async function getFilterOptions() {
    const result = await sessionsApi.filterOptions();
    return result;
}

async function getSessions(params) {
    const result = await sessionsApi.getSessions(params);
    return result;
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