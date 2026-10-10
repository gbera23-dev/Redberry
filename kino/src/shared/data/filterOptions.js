import { getFilterOptions } from "../services/sessionsService";

var VENUES = [];
var DATES = [];
var FORMATS = [];
var LANGUAGES = [];
var TIMES = [];
var SORTS = [];
var TICKET_TYPES = [];
var AGE_RATINGS = [];
var MAX_SEATS_PER_ORDER = null;
var HOLD_MINUTES = null;
var arePopulated = false;


export async function populateFilterOptions(initialData = null) {

  if (arePopulated && !initialData) {
    console.log("filter options are already populated");
    return;
  } 
  try {
    const rawData = initialData || await getFilterOptions();
    
    const payload = rawData?.data || rawData;

    VENUES = payload.VENUES || payload.venues || [];
    DATES = payload.DATES || payload.dates || [];
    FORMATS = payload.FORMATS || payload.formats || [];
    LANGUAGES = payload.LANGUAGES || payload.languages || [];
    TIMES = payload.TIMES || payload.timeBands || payload.times || [];
    SORTS = payload.SORTS || payload.sorts || [];
    TICKET_TYPES = payload.TICKET_TYPES || payload.ticketTypes || [];
    AGE_RATINGS = payload.AGE_RATINGS || payload.ageRatings || [];
    
    MAX_SEATS_PER_ORDER = payload.MAX_SEATS_PER_ORDER !== undefined 
      ? payload.MAX_SEATS_PER_ORDER 
      : (payload.maxSeatsPerOrder ?? null);
      
    HOLD_MINUTES = payload.HOLD_MINUTES !== undefined 
      ? payload.HOLD_MINUTES 
      : (payload.holdMinutes ?? null);

    arePopulated = true;
  } catch (err) {
    console.log("could not populate filter options");
    console.log(err);
  }
}

export { 
  VENUES, 
  DATES, 
  FORMATS, 
  LANGUAGES, 
  TIMES, 
  SORTS, 
  TICKET_TYPES, 
  AGE_RATINGS, 
  MAX_SEATS_PER_ORDER, 
  HOLD_MINUTES 
};