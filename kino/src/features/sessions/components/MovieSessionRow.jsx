import SimpleMovieCard from "../components/SimpleMovieCard";
import SessionCard from "../components/SessionCard";
import "./MovieSessionRow.css";
import { useBooking } from "../../buyTickets/context/BookingContext"; 
import { useAuth } from "../../auth/providers/Auth";

export const MovieSessionRow = ({ movie }) => {

  const { openBooking } = useBooking();
  const { userIsAuthorized, openLogin } = useAuth();
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
              if(userIsAuthorized) {
                openBooking({sessionId: session.id, slug: movie.slug})
              }
              else {
                openLogin()
              }
            }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSessionRow;