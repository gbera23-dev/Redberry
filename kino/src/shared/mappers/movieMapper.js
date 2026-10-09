export function transformMovieData(apiData) {
    const movie = {
        title: apiData.title,
        synopsis: apiData.synopsis,
        duration: `${apiData.runtimeMinutes} Min`,
        format: apiData.formats?.[0]?.name || "",
        posterUrl: apiData.posterUrl,
        backdropUrl: apiData.backdropUrl,
    };

    const dates = (apiData.availableDates || []).map((dateStr) => {
        const dateObj = new Date(dateStr);
        return {
            day: dateObj.toLocaleDateString("en-US", { weekday: "short" }),
            date: String(dateObj.getDate()),
            fullDate: dateStr,
        };
    });

    const castArray = typeof apiData.cast === "string" 
        ? apiData.cast.split(",").map((item) => item.trim()) 
        : [];

    const formattedReleaseDate = apiData.releaseDate 
        ? new Date(apiData.releaseDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "";

    const details = {
        director: apiData.director,
        cast: castArray,
        duration: `${apiData.runtimeMinutes} minutes`,
        releaseDate: formattedReleaseDate,
        formats: (apiData.formats || []).map((f) => f.name),
        priceFrom: apiData.fromPrice,
        ratingNote: apiData.ageRating?.description 
            ? `${apiData.ageRating.code} ${apiData.ageRating.description}`
            : "",
    };

    return { movie, dates, venues: [], details };
}


export function transformSessionsData(apiResponse) {
    if (!apiResponse?.data) return [];

  return apiResponse.data.map((item) => {
    const hallsMap = item.sessions.reduce((acc, session) => {
      const hallId = session.hall.id;

      if (!acc[hallId]) {
        acc[hallId] = {
          id: hallId,
          name: session.hall.name,
          slots: [],
        };
      }

      acc[hallId].slots.push({
        id: session.id,
        time: session.time,
        startsAt: session.startsAt,
        price: session.price,
        seatsLeft: session.seatsLeft,
        isSoldOut: session.isSoldOut,
        format: session.format?.name || "",    
        language: session.language?.code || "",  
      });

      return acc;
    }, {});

    return {
      id: item.venue.id,
      name: item.venue.name,
      slug: item.venue.slug,
      city: item.venue.city,
      hall: Object.values(hallsMap),
    };
  });    
}


export const mapSearchResponseToResults = (apiResponse) => {
  if (!apiResponse || !Array.isArray(apiResponse.data)) {
    return [];
  }

  return apiResponse.data.map((movie) => {
    const typeFormatted = movie.kind
      ? movie.kind.charAt(0).toUpperCase() + movie.kind.slice(1)
      : "Film";

    return {
      id: movie.id ?? null,
      title: movie.title ?? "",
      type: typeFormatted,
      ageRating: movie.ageRating?.code 
        ? (movie.ageRating.minAge ? `${movie.ageRating.minAge}+` : movie.ageRating.code)
        : "12+",
      duration: movie.runtimeMinutes ? `${movie.runtimeMinutes} min` : "",
      poster: movie.posterUrl ?? "",
      priceFrom: movie.fromPrice !== null && movie.fromPrice !== undefined 
        ? `₾${movie.fromPrice}` 
        : null,
      isComingSoon: Boolean(movie.isComingSoon),
      slug: movie.slug
    };
  });
};