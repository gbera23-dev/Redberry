import { formatDuration, formatPrice } from '../../../shared/utils/format.js';
import './MovieCard.css';
import useMovie from "../hooks/useMovie.js"

const CURRENCY = "₾"; 

export default function MovieCard( { slug, movie, onBuy } ) {

  const { movie: fetchedMovie, loading } = useMovie(movie ? null : slug);

  if (fetchedMovie != null) {
    movie = fetchedMovie;
  }

  if (loading && !movie) {
    return <div className="movie-card-loading">Loading movie...</div>;
  }

  if (!movie) {
    return <div className="movie-card-error">Movie not found.</div>;
  }

  const genreList = Array.isArray(movie.genres) 
    ? movie.genres.map((g) => (typeof g === 'object' ? g.name : g)).join(', ')
    : '';

  return (
    <article className="movie-card">
      <a className="movie-card__poster">
        <img src={movie.posterUrl} alt={movie.title} loading="lazy" />
      </a>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__meta">
          {genreList} · {formatDuration ? formatDuration(movie.runtimeMinutes) : `${movie.runtimeMinutes} min`}
        </p>

        {movie.ageRating?.code && (
          <div className="movie-card__age-badge">
            {movie.ageRating.code}
          </div>
        )}

        <div className="movie-card__footer">
          <span className="movie-card__price">
            From {CURRENCY} {movie.fromPrice}
          </span>
          <button type="button" className="btn btn--primary" onClick={() => onBuy?.(movie.id)}>
            Buy Ticket
          </button>
        </div>
      </div>
    </article>
  );
}