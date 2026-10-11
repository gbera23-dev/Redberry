

const hasIntersection = (ls1, ls2, compFunct) => {
    for (const elem1 of ls1) {
      for (const elem2 of ls2) {
        if (compFunct(elem1, elem2)) return true; 
      }
    }
    return false; 
  }

const survivesFiltering = (ls1, ls2, compFunct) => {
  const hasNoContent = ls1==null || !ls1.some(item => item?.trim());  
  return hasNoContent || hasIntersection(ls1, ls2, compFunct);
};

const compTimeFunct = (dayTime, time) => {
  const hour = parseInt(time.split(":")[0]);
  if (dayTime === "morning") {
    return hour < 12; 
  }
  if (dayTime == "afternoon") {
    return hour >= 12 && hour <= 18; 
  }
  if (dayTime == "evening") {
    return hour > 18;
  }
  return false; 
}

const equalsFunct = (a, b) => {return a === b;} 

const applyFilters = (data, filters, selectedDate) => {
    return data.filter((mv) => 
      survivesFiltering(filters.languages, mv.sessions.map((s) => s.language), equalsFunct) && 
      survivesFiltering(filters.formats, mv.sessions.map((s) => s.format), equalsFunct) && 
      survivesFiltering(filters.times, mv.sessions.map((s) => s.time), compTimeFunct) && 
      survivesFiltering(filters.venues, mv.sessions.map((s) => s.venue), equalsFunct) && 
      survivesFiltering(Array.of(selectedDate), mv.sessions.map((s) => s.date), equalsFunct));
}

export default applyFilters; 