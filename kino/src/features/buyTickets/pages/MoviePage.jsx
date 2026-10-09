import Header from "../../home/components/Header.jsx";
import Footer from "../../home/components/Footer.jsx";
import MovieHero from "../components/seatSelectionComponents/MovieHero.jsx";
import SessionsSection from "../components/seatSelectionComponents/SessionsSection.jsx";
import SeatSelectionModal from "../modals/SeatSelectionModal.jsx";
import BookingConfirmationModal from "../modals/BookingConfirmationModal.jsx";
import useMoviePage from "../hooks/useMoviePage.js";
import "./MoviePage.css";

export default function MoviePage({ slug }) {
  const { 
    selectedSession, 
    activeModal,
    handleOpenSeatModal, 
    handleOpenBookingModal,
    handleCloseModal, 
    totalPrice, 
    setTotalPrice, 
    movie, 
    dates, 
    details, 
    venues, 
    setCurrentDate, 
    currentDate,
  } = useMoviePage({ slug });

  return (
    <div className="movie-page">
      <Header />

      <main className="movie-page__main">
        <MovieHero movie={movie} />
        <SessionsSection
          dates={dates}
          venues={venues}
          movieDetails={details}
          onSlotClick={handleOpenSeatModal} 
          onDateCardClick={setCurrentDate}
          chosenDate={currentDate}
        />
      </main>

      {activeModal === "SEAT_MODAL" && selectedSession && (
        <SeatSelectionModal
          session={selectedSession}
          movieDetails={{
            title: movie?.title || "Untitled",
            hall: `${selectedSession.venue || ""} · ${selectedSession.hall || ""}`,
            dateTime: `${selectedSession.date || ""} · ${selectedSession.time || ""}`,
            posterUrl: movie?.posterUrl || "",
          }}
          onPay={handleOpenBookingModal}
          onClose={handleCloseModal}
          onSubtotalChange={(v) => setTotalPrice(v)}
        />
      )}

      {activeModal === "BOOKING_MODAL" && (
        <BookingConfirmationModal
          onViewTickets={() => console.log("view tickets :)")}
          onBackToHome={() => console.log("back to home :)")}
          onClose={handleCloseModal}
          totalPaid={totalPrice}
        />
      )}

      <Footer />
    </div>
  );
}