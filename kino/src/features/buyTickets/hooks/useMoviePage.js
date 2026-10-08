import { useState, useEffect } from "react";
import { catalogueService } from "../../../shared/services/catalogueService";

export default function useMoviePage({ slug }) {
  const [selectedSession, setSelectedSession] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [movieData, setMovieData] = useState(null);
  const [venues, setVenues] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchMovieData() {
      try {
        const res = await catalogueService.getMovieBySlug(slug);
        setMovieData(res);
        const currDate = currentDate || res.dates[0].fullDate
        setCurrentDate(currDate)
        const venues = await catalogueService.getMovieSessions(slug, currDate)
        console.log("venues: ")
        console.log(venues)
        setVenues(venues)
      } catch (err) {
        setError(err.message || "Failed to load movie");
      }
    }

    fetchMovieData();
  }, [slug, currentDate]);

  const handleOpenModal = (sessionInfo) => {
    setSelectedSession(sessionInfo.openModal);
  };

  const handleCloseModal = () => {
    setSelectedSession(null);
  };

  return {
    selectedSession,
    handleOpenModal,
    handleCloseModal,
    totalPrice,
    setTotalPrice,
    movie: movieData?.movie || null,
    dates: movieData?.dates || [],
    details: movieData?.details || null,
    venues: venues || null, 
    setCurrentDate,
    currentDate,
    error,
  };
}