import SimpleMovieCard from "../components/SimpleMovieCard";
import SessionCard from "../components/SessionCard";
import "./MovieSessionRow.css";
import { useBooking } from "../../buyTickets/context/BookingContext"; 

export const MovieSessionRow = ({ movie }) => {

  const { openBooking } = useBooking();

  return (
    <div className="movie-session-row">
      <SimpleMovieCard
        poster={movie.poster}
        title={movie.title}
        ageRating={movie.ageRating}
        runtime={movie.runtime}
      />

      <div className="sessions-grid">
        {movie.sessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            onSelectSession={() => {
              openBooking({sessionId: session.id, slug: movie.slug})
            }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSessionRow;