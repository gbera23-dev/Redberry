import SimpleMovieCard from "../components/SimpleMovieCard";
import SessionCard from "../components/SessionCard";
import "./MovieSessionRow.css";

export const MovieSessionRow = ({ movie }) => {

  const onSelectSession = () => console.log("select session"); 

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
            onSelectSession={onSelectSession}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSessionRow;