import { getFilterOptions } from "../services/sessionsService";

export let VENUES = [];
export let DATES = [];
export let FORMATS = [];
export let LANGUAGES = [];
export let TIMES = [];
export let SORTS = [];
export let TICKET_TYPES = [];
export let AGE_RATINGS = [];
export let MAX_SEATS_PER_ORDER = null;
export let HOLD_MINUTES = null;

let fetchPromise = null;

export async function populateFilterOptions() {
  if (fetchPromise) {
    return fetchPromise; 
  }

  fetchPromise = (async () => {
    try {
      const rawData = await getFilterOptions();
      const payload = rawData?.data || rawData;

      VENUES.length = 0;
      VENUES.push(...(payload.VENUES || payload.venues || []));

      DATES.length = 0;
      DATES.push(...(payload.DATES || payload.dates || []));

      FORMATS.length = 0;
      FORMATS.push(...(payload.FORMATS || payload.formats || []));

      LANGUAGES.length = 0;
      LANGUAGES.push(...(payload.LANGUAGES || payload.languages || []));

      TIMES.length = 0;
      TIMES.push(...(payload.TIMES || payload.timeBands || payload.times || []));

      SORTS.length = 0;
      SORTS.push(...(payload.SORTS || payload.sorts || []));

      TICKET_TYPES.length = 0;
      TICKET_TYPES.push(...(payload.TICKET_TYPES || payload.ticketTypes || []));

      AGE_RATINGS.length = 0;
      AGE_RATINGS.push(...(payload.AGE_RATINGS || payload.ageRatings || []));

      MAX_SEATS_PER_ORDER = payload.MAX_SEATS_PER_ORDER !== undefined 
        ? payload.MAX_SEATS_PER_ORDER 
        : (payload.maxSeatsPerOrder ?? null);
        
      HOLD_MINUTES = payload.HOLD_MINUTES !== undefined 
        ? payload.HOLD_MINUTES 
        : (payload.holdMinutes ?? null);

      return {
        VENUES, DATES, FORMATS, LANGUAGES, TIMES, SORTS, TICKET_TYPES, AGE_RATINGS
      };
    } catch (err) {
      console.error("Could not populate filter options", err);
      fetchPromise = null; 
      throw err;
    }
  })();

  return fetchPromise;
}