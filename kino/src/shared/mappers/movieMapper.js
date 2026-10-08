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