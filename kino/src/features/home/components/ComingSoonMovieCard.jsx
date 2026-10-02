import { formatDuration } from '../../../shared/utils/format.js';
import { BellIcon } from './Icons.jsx';
import './ComingSoonMovieCard.css';
import useMovie from "../hooks/useMovie.js";

export default function ComingSoonMovieCard({ slug, movie, onNotify }) {

  const { movie: fetchedMovie, loading } = useMovie(movie ? null : slug);

  if (fetchedMovie != null) {
    movie = fetchedMovie;
  }
  
  if (loading && !movie) {
    return <div className="coming-soon-movie-card coming-soon-movie-card--loading">Loading movie...</div>;
  }

  if (!movie) {
    return <div className="coming-soon-movie-card coming-soon-movie-card--error">Movie not found.</div>;
  }

  //decided to take just first genre, because notify button moves weirdly up and down
  const firstGenre = movie.genres?.[0]
    ? (typeof movie.genres[0] === 'object' ? movie.genres[0].name : movie.genres[0])
    : '';

  const duration = formatDuration ? formatDuration(movie.runtimeMinutes) : `${movie.runtimeMinutes} min`;

  const formattedReleaseDate = movie.releaseDate
    ? new Date(movie.releaseDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
      }).toUpperCase()
    : '';

  return (
    <article className="coming-soon-movie-card">
      <div className="coming-soon-movie-card__poster">
        <img src={movie.posterUrl} alt={movie.title} loading="lazy" />
      </div>

      <div className="coming-soon-movie-card__body">
        <div className="coming-soon-movie-card__header">
          {formattedReleaseDate && (
            <span className="coming-soon-movie-card__status">
              IN CINEMAS {formattedReleaseDate}
            </span>
          )}
          <h3 className="coming-soon-movie-card__title">{movie.title}</h3>
          <p className="coming-soon-movie-card__meta">
            {firstGenre} · {duration}
          </p>
        </div>

        {movie.ageRating?.code && (
          <div className="coming-soon-movie-card__age-badge">
            {movie.ageRating.code}
          </div>
        )}

        <div className="coming-soon-movie-card__footer">
          <button 
            type="button" 
            className={`coming-soon-movie-card__notify-btn ${
              movie.isNotified ? 'coming-soon-movie-card__notify-btn--active' : ''
            }`}
            onClick={() => onNotify?.(movie.id)}
          >
            <BellIcon />
            <span>{movie.isNotified ? 'Notified' : 'Notify Me'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}