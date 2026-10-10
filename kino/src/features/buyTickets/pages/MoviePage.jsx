import Header from "../../home/components/Header.jsx";
import Footer from "../../home/components/Footer.jsx";
import MovieHero from "../components/seatSelectionComponents/MovieHero.jsx";
import SessionsSection from "../components/seatSelectionComponents/SessionsSection.jsx";
import useMoviePage from "../hooks/useMoviePage.js";
import { useBooking } from "../context/BookingContext.jsx"; 
import "./MoviePage.css";

export default function MoviePage({ slug }) {
  const { 
    movie, 
    dates, 
    details, 
    venues, 
    setCurrentDate, 
    currentDate,
  } = useMoviePage({ slug });

  const { openBooking } = useBooking();

  return (
    <div className="movie-page">
      <Header />

      <main className="movie-page__main">
        <MovieHero movie={movie} />
        <SessionsSection
          dates={dates}
          venues={venues}
          movieDetails={details}
          onSlotClick={(session) => openBooking({ sessionId: session.id, slug: slug })} 
          onDateCardClick={setCurrentDate}
          chosenDate={currentDate}
        />
      </main>

      <Footer />
    </div>
  );
}