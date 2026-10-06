import "./MovieHero.css";

export default function MovieHero({ movie }) {
  if (!movie) return null;

  return (
    <div className="movie-hero">
      <div
        className="movie-hero__backdrop"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <div className="movie-hero__overlay" />
      </div>

      <div className="movie-hero__container">
        <div className="movie-hero__poster-wrapper">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="movie-hero__poster"
          />
        </div>

        <div className="movie-hero__content">
          <span className="movie-hero__tag">NOW SHOWING</span>
          <h1 className="movie-hero__title">{movie.title}</h1>
          <p className="movie-hero__synopsis">{movie.synopsis}</p>

          <div className="movie-hero__badges">
            <span className="movie-hero__badge movie-hero__badge--duration">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {movie.duration}
            </span>
            <span className="movie-hero__badge">{movie.format}</span>
          </div>
        </div>
      </div>
    </div>
  );
}