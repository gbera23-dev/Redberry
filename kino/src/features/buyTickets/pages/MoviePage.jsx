import Header from "../../home/components/Header.jsx";
import Footer from "../../home/components/Footer.jsx";
import MovieHero from "../components/seatSelectionComponents/MovieHero.jsx";
import SessionsSection from "../components/seatSelectionComponents/SessionsSection.jsx";
import SeatSelectionModal from "../modals/SeatSelectionModal.jsx";
import BookingConfirmationModal from "../modals/BookingConfirmationModal.jsx"
import useMoviePage from "../hooks/useMoviePage.js"
import "./MoviePage.css";


const MODAL_OPEN = {SeatModal : "SEAT_MODAL", BookingConfirmedModal : "BOOKING_MODAL"}

export default function MoviePage({
  movie = {
    title: "THE ODYSSEY",
    synopsis: "While her husband maps a coast he will never sail, she keeps a second atlas of the places he leaves out, and it becomes the more accurate of the two.",
    duration: "134 Min",
    format: "PANORAMA",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/ytoLEl5yDaxB8AtZ52uKWjaQ9ql.jpg",
  },
  dates = [
    { day: "Mon", date: "15" },
    { day: "Tue", date: "16" },
    { day: "Wed", date: "17" },
    { day: "Thu", date: "18" },
    { day: "Fri", date: "19" },
    { day: "Sat", date: "20" },
    { day: "Sun", date: "21" },
  ],
  venues = [
    {
      name: "Galleria Tbilisi",
      halls: [
        {
          name: "Hall A",
          slots: [
            { time: "12:00", price: 16, lang: "ENG", format: "MAX", seatsLeft: 45 },
            { time: "12:00", price: 16, lang: "ENG", format: "MAX", seatsLeft: 45 },
          ],
        },
        {
          name: "Hall B",
          slots: [
            { time: "12:00", price: 16, lang: "ENG", format: "MAX", seatsLeft: 45 },
            { time: "12:00", price: 16, lang: "ENG", format: "MAX", seatsLeft: 45 },
          ],
        },
      ],
    },
    {
      name: "Vake Park",
      halls: [
        {
          name: "Hall A",
          slots: [
            { time: "12:00", price: 16, lang: "ENG", format: "MAX", seatsLeft: 45 },
            { time: "12:00", price: 16, lang: "ENG", format: "MAX", seatsLeft: 45 },
          ],
        },
      ],
    },
  ],
  details = {
    director: "Elene Kapanadze",
    cast: ["David Merabishvili", "Ana Lomidze", "Giorgi Tskhadadze", "Mariam Beridze"],
    duration: "109 minutes",
    releaseDate: "4 September 2026",
    formats: ["MAX", "MOTION", "ATMOS"],
    priceFrom: 16,
    ratingNote: "18+ Not recommended for under-18s. Tickets require an account aged 18 or over.",
  },
}) {

  const { selectedSession, handleOpenModal, handleCloseModal, totalPrice, setTotalPrice } = useMoviePage()

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