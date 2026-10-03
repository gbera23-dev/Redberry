

const hasIntersection = (ls1, ls2, compFunct) => {
    for (const elem1 of ls1) {
      for (const elem2 of ls2) {
        console.log("elem1 %s, elem 2 %s", elem1, elem2); 
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
    console.log("morning %s", dayTime);
    return hour < 12; 
  }
  if (dayTime == "afternoon") {
    console.log("afternoon %s", dayTime);
    return hour >= 12 && hour <= 18; 
  }
  if (dayTime == "evening") {
    console.log("evening %s", dayTime);
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