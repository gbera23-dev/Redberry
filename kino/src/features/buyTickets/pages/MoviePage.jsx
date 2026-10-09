import Header from "../../home/components/Header.jsx";
import Footer from "../../home/components/Footer.jsx";
import MovieHero from "../components/seatSelectionComponents/MovieHero.jsx";
import SessionsSection from "../components/seatSelectionComponents/SessionsSection.jsx";
import SeatSelectionModal from "../modals/SeatSelectionModal.jsx";
import BookingConfirmationModal from "../modals/BookingConfirmationModal.jsx";
import useMoviePage from "../hooks/useMoviePage.js";
import { useNavbar } from "../../../shared/navigation/Navbar.jsx";
import "./MoviePage.css";

export default function MoviePage({ slug }) {
  const { 
    selectedSession, 
    activeModal,
    handleOpenSeatModal, 
    payForTickets,
    handleCloseModal, 
    totalPrice, 
    setTotalPrice, 
    movie, 
    dates, 
    details, 
    venues, 
    setCurrentDate, 
    currentDate,
    confirmationData,
  } = useMoviePage({ slug });

  const { goToProfilePage, goToHomePage } = useNavbar()

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
          onPay={payForTickets}
          onClose={handleCloseModal}
          onSubtotalChange={(v) => setTotalPrice(v)}
        />
      )}

      {activeModal === "BOOKING_MODAL" && (
        <BookingConfirmationModal
          onViewTickets={goToProfilePage}
          onBackToHome={goToHomePage}
          onClose={handleCloseModal}
          totalPaid={confirmationData.totalPaid}
          orderNumber={confirmationData.orderNumber}
          movieDetails={confirmationData.movieDetails}
          seats={confirmationData.seats}
          ticketSummary={confirmationData.ticketSummary}
        />
      )}

      <Footer />
    </div>
  );
}