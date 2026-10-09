
export const mapApiResponseToSessions = (apiResponse) => {
  if (!apiResponse || !Array.isArray(apiResponse.data)) {
    return [];
  }

  return apiResponse.data.map((item) => {
    const movie = item.movie || {};
    const apiSessions = item.sessions || [];

    return {
      id: String(movie.id ?? ""),
      title: movie.title ?? "",
      ageRating: movie.ageRating?.code 
        ? (movie.ageRating.minAge ? `${movie.ageRating.minAge}+` : movie.ageRating.code)
        : "12+",
      runtime: movie.runtimeMinutes ? `${movie.runtimeMinutes} min` : "",
      poster: movie.posterUrl ?? "",
      sessions: apiSessions.map((session) => ({
        id: String(session.id ?? ""),
        time: session.time ?? "",
        date: session.date ?? "",
        venue: session.venue?.name ?? session.hall?.venue?.name ?? "",
        location: session.venue?.city ?? session.hall?.venue?.city ?? "",
        hall: session.hall?.name ? `Hall ${session.hall.name}` : "",
        format: session.format?.name ?? "Standard",
        language: session.language?.name ?? "",
        price: session.price !== undefined ? `₾${session.price}` : "",
        seatsLeft: session.seatsLeft ?? 0,
        isSoldOut: Boolean(session.isSoldOut)
      }))
    };
  });
};

export function mapFiltersToApiRequest({ filters, sortOrder, currentPage, search, date }) {
    const requestData = {
        venues: filters.venues, 
        formats: filters.formats,
        languages: filters.languages,
        bands: filters.times,
        search: search, 
        sort: sortOrder,
        page: currentPage,
        date: date 
    }
    return requestData
}


export const mapApiResponseToFilters = (apiResponse) => {
  const data = apiResponse?.data || {};

  return {
    VENUES: (data.venues || []).map((venue) => ({
      id: venue.name ?? "",
      label: venue.name ?? "",
      city: venue.city ?? ""
    })),

    FORMATS: (data.formats || []).map((fmt) => fmt.slug ?? ""),

    LANGUAGES: (data.languages || []).map((lang) => {
      return lang.slug ?? "";
    }),

    TIMES: (data.timeBands || []).map((tb) => {
      let info = "";
      if (tb.id === "morning") info = "before 12:00";
      else if (tb.id === "afternoon") info = "12:00–18:00";
      else if (tb.id === "evening") info = "after 18:00";

      const label = tb.label ? tb.label.split(" ")[0] : "";

      return {
        id: tb.id,
        label,
        info
      };
    })
  };
};


export const generateDateOptions = (daysAhead = 7, startDate = new Date()) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return Array.from({ length: daysAhead }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const dayNum = String(d.getDate()).padStart(2, "0");

    return {
      day: dayNames[d.getDay()],
      date: dayNum,
      full: `${year}-${month}-${dayNum}`
    };
  });
};