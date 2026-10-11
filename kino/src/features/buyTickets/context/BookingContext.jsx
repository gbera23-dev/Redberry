import { createContext, useContext, useState, useEffect } from "react";
import { getSingleSession } from "../../../shared/services/sessionsService"; 
import { catalogueService } from "../../../shared/services/catalogueService";
import { payAndCompleteOrder } from "../../../shared/services/bookingService"; 
import SeatSelectionModal from "../modals/SeatSelectionModal";
import BookingConfirmationModal from "../modals/BookingConfirmationModal";
import { isProfileComplete as checkIsProfileComplete } from "../../../shared/services/authService";
import { useNavbar } from "../../../shared/navigation/Navbar";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [selectedMovieSlug, setSelectedMovieSlug] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [activeModal, setActiveModal] = useState(null); 
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmationData, setConfirmationData] = useState(null);
  const { goToProfilePage } = useNavbar(); 

  useEffect(() => {
    async function fetchData() {
      if (!selectedSessionId) {
        setSelectedSession(null);
        setMovieData(null);
        return;
      }
      try {
        const sessionRes = await getSingleSession(selectedSessionId);
        setSelectedSession(sessionRes);

        if (selectedMovieSlug) {
          const movieRes = await catalogueService.getMovieBySlug(selectedMovieSlug);
          setMovieData(movieRes);
        }
      } catch (err) {
        alert(err.cleanMessage);
      }
    }
    fetchData();
  }, [selectedSessionId, selectedMovieSlug]);

  const openBooking = async ({ sessionId, slug }) => {
    try {
      const complete = await checkIsProfileComplete();
      if (complete) {
        setSelectedSessionId(sessionId);
        setSelectedMovieSlug(slug);
        setActiveModal("SEAT_MODAL");
      } else {
        alert("Your profile is not complete, please, complete it and then try to book a ticket");
        goToProfilePage("info");
      }
    } catch (err) {
      alert(err.cleanMessage);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSelectedSessionId(null);
    setSelectedMovieSlug(null);
    setMovieData(null);
    setConfirmationData(null);
  };

  const payForTickets = async ({ holdData, formData }) => {
    try {
      const res = await payAndCompleteOrder({ holdData, formData });
      setConfirmationData(res);
      setActiveModal("BOOKING_MODAL");
    } catch (err) {
      alert(err.cleanMessage);
    }
  };

  const movie = movieData?.movie || null;
  const details = movieData?.details || null;

  return (
    <BookingContext.Provider value={{ openBooking, handleCloseModal }}>
      {children}

      {activeModal === "SEAT_MODAL" && selectedSession && (
        <SeatSelectionModal
          session={selectedSession}
          movieDetails={{
            title: movie?.title || "Untitled",
            subtitle: details ? `${details.duration || ""} · ${details.ratingNote || ""}` : "",
            hall: `${selectedSession.venue || ""} · ${selectedSession.hall || ""}`,
            dateTime: `${selectedSession.date || ""} · ${selectedSession.time || ""}`,
            posterUrl: movie?.posterUrl || "",
          }}
          onPay={payForTickets}
          onClose={handleCloseModal}
          onSubtotalChange={(v) => setTotalPrice(v)}
        />
      )}

      {activeModal === "BOOKING_MODAL" && confirmationData && (
        <BookingConfirmationModal
          onClose={handleCloseModal}
          totalPaid={confirmationData.totalPaid}
          orderNumber={confirmationData.orderNumber}
          movieDetails={confirmationData.movieDetails}
          seats={confirmationData.seats}
          ticketSummary={confirmationData.ticketSummary}
        />
      )}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);