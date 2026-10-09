
import { getFilterOptions } from "../services/sessionsService";


var VENUES = []

var DATES = []

var FORMATS = []

var LANGUAGES = [];

var TIMES = [];

var arePopulated = false 

export async function populateFilterOptions() {
  if (arePopulated) {
    console.log("filter options are already populated")
    return; 
  } 
  try {
    const optionsResult = await getFilterOptions() 
    console.log("option results")
    console.log(optionsResult)
    VENUES=optionsResult.VENUES
    DATES=optionsResult.DATES
    FORMATS=optionsResult.FORMATS
    LANGUAGES=optionsResult.LANGUAGES
    TIMES=optionsResult.TIMES
    arePopulated = true 
  } catch(err) {
    console.log("could not populate filter options")
    console.log(err)
  }
}


export { VENUES, DATES, FORMATS, LANGUAGES, TIMES }