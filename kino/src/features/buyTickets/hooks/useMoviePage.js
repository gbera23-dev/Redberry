import { useState, useEffect } from "react";
import { catalogueService } from "../../../shared/services/catalogueService";

export default function useMoviePage({ slug }) {
  const [selectedSession, setSelectedSession] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchMovieData() {
      try {
        const res = await catalogueService.getMovieBySlug(slug);
        setMovieData(res);
      } catch (err) {
        setError(err.message || "Failed to load movie");
      }
    }

    fetchMovieData();
  }, [slug]);

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
    venues: movieData?.venues || [],
    details: movieData?.details || null,
    error,
  };
}