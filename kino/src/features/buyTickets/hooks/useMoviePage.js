import { useState, useEffect } from "react";
import { catalogueService } from "../../../shared/services/catalogueService";

export default function useMoviePage({ slug }) {
  const [movieData, setMovieData] = useState(null);
  const [venues, setVenues] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchMovieData() {
      try {
        const res = await catalogueService.getMovieBySlug(slug);
        setMovieData(res);
        const currDate = currentDate || res.dates[0]?.fullDate;
        setCurrentDate(currDate);
        const venuesData = await catalogueService.getMovieSessions(slug, currDate);
        setVenues(venuesData);
      } catch (err) {
        alert(err.cleanMessage)
      }
    }

    fetchMovieData();
  }, [slug, currentDate]);


  return {
    movie: movieData?.movie || null,
    dates: movieData?.dates || [],
    details: movieData?.details || null,
    venues: venues || [], 
    setCurrentDate,
    currentDate,
  };
}