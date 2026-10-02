import { formatDuration } from '../../../shared/utils/format.js';
import { BellIcon } from './Icons.jsx';
import './ComingSoonMovieCard.css';
import useMovie from "../hooks/useMovie.js";

export default function ComingSoonMovieCard({ slug }) {
  const { movie, loading } = useMovie(slug);

  const onNotify = () => console.log("notify"); 

  if (loading) return <div className="coming-movie-card coming-movie-card--loading">Loading movie...</div>;
  
  if (!movie) return <div className="coming-movie-card coming-movie-card--error">Movie not found.</div>;

  const genreList = Array.isArray(movie.genres)
    ? movie.genres.map((g) => (typeof g === 'object' ? g.name : g)).join(', ')
    : '';

  const duration = formatDuration ? formatDuration(movie.runtimeMinutes) : `${movie.runtimeMinutes} min`;

  const formattedReleaseDate = movie.releaseDate
    ? new Date(movie.releaseDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
      }).toUpperCase()
    : '';

  return (
    <article className="coming-movie-card">
      <div className="coming-movie-card__poster">
        <img src={movie.posterUrl} alt={movie.title} loading="lazy" />
      </div>

      <div className="coming-movie-card__body">
        <div className="coming-movie-card__header">
          {formattedReleaseDate && (
            <span className="coming-movie-card__status">
              IN CINEMAS {formattedReleaseDate}
            </span>
          )}
          <h3 className="coming-movie-card__title">{movie.title}</h3>
          <p className="coming-movie-card__meta">
            {genreList} · {duration}
          </p>
        </div>

        {movie.ageRating?.code && (
          <div className="coming-movie-card__age-badge">
            {movie.ageRating.code}
          </div>
        )}

        <div className="coming-movie-card__footer">
          <button 
            type="button" 
            className={`coming-movie-card__notify-btn ${movie.isNotified ? 'coming-movie-card__notify-btn--active' : ''}`}
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