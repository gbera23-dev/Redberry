import { useState, useEffect } from "react";
import { catalogueService } from "../../../shared/services/catalogueService";
import { getSingleSession } from "../../../shared/services/sessionsService"; 

export default function useMoviePage({ slug }) {
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [activeModal, setActiveModal] = useState(null); 
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
        const currDate = currentDate || res.dates[0]?.fullDate;
        setCurrentDate(currDate);
        const venuesData = await catalogueService.getMovieSessions(slug, currDate);
        setVenues(venuesData);
      } catch (err) {
        setError(err.message || "Failed to load movie");
      }
    }

    fetchMovieData();
  }, [slug, currentDate]);

  useEffect(() => {

    async function getSessionData() {
    if (!selectedSessionId) {
      setSelectedSession(null);
      return;
    }
    try {
      const res = await getSingleSession(selectedSessionId)
      console.log(res)
      setSelectedSession(res)
    } catch(err) {
      console.log("err")
      console.log(err)
    } 
  }
  getSessionData()
  }, [selectedSessionId]);

  const handleOpenSeatModal = (sessionParam) => {
    const id = sessionParam.id
    console.log(id)
    setSelectedSessionId(id);
    setActiveModal("SEAT_MODAL");
  };

  const handleOpenBookingModal = () => {
    setActiveModal("BOOKING_MODAL");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSelectedSessionId(null);
  };

  return {
    selectedSessionId,
    selectedSession,
    activeModal:activeModal,
    handleOpenSeatModal,
    handleOpenBookingModal,
    handleCloseModal,
    totalPrice,
    setTotalPrice,
    movie: movieData?.movie || null,
    dates: movieData?.dates || [],
    details: movieData?.details || null,
    venues: venues || [], 
    setCurrentDate,
    currentDate,
    error,
  };
}