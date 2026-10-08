import Header from "../../home/components/Header.jsx";
import Footer from "../../home/components/Footer.jsx";
import MovieHero from "../components/seatSelectionComponents/MovieHero.jsx";
import SessionsSection from "../components/seatSelectionComponents/SessionsSection.jsx";
import SeatSelectionModal from "../modals/SeatSelectionModal.jsx";
import BookingConfirmationModal from "../modals/BookingConfirmationModal.jsx"
import useMoviePage from "../hooks/useMoviePage.js"
import "./MoviePage.css";


const MODAL_OPEN = {SeatModal : "SEAT_MODAL", BookingConfirmedModal : "BOOKING_MODAL"}

export default function MoviePage({slug}) {
  console.log(slug)
  const { selectedSession, handleOpenModal, handleCloseModal, totalPrice, setTotalPrice, movie, dates, venues, 
    details
   } = 
  useMoviePage({ slug })

  return (
    <div className="movie-page">
      <Header />

      <main className="movie-page__main">
        <MovieHero movie={movie} />
        <SessionsSection
          dates={dates}
          venues={venues}
          movieDetails={details}
          onSlotClick={handleOpenModal}
        />
      </main>

      {selectedSession==MODAL_OPEN.SeatModal && (
        <SeatSelectionModal
          movieDetails={{
            title: movie.title,
            hall: `${selectedSession.venue} · ${selectedSession.hall}`,
            dateTime: `Mon 15 Sep · ${selectedSession.time}`,
            posterUrl: movie.posterUrl,
          }}
          onPay={() => handleOpenModal({openModal: MODAL_OPEN.BookingConfirmedModal})}
          onClose={handleCloseModal}
          onSubtotalChange = {(v) => setTotalPrice(v)}
        />
      )}

      {selectedSession==MODAL_OPEN.BookingConfirmedModal && (
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