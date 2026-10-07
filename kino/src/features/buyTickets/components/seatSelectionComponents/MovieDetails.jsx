import "./MovieDetails.css";

export default function MovieDetails({ movieDetails }) {
  if (!movieDetails) return null;

  return (
    <aside className="movie-movieDetails">
      <h3 className="movie-details__heading">Details</h3>

      <div className="movie-details__group">
        <span className="movie-details__label">DIRECTOR</span>
        <span className="movie-details__value">{movieDetails.director}</span>
      </div>

      <div className="movie-details__group">
        <span className="movie-details__label">MAIN CAST</span>
        <span className="movie-details__value">{movieDetails.cast.join(", ")}</span>
      </div>

      <div className="movie-details__group">
        <span className="movie-details__label">DURATION</span>
        <span className="movie-details__value">{movieDetails.duration}</span>
      </div>

      <div className="movie-details__group">
        <span className="movie-details__label">RELEASE DATE</span>
        <span className="movie-details__value">{movieDetails.releaseDate}</span>
      </div>

      <div className="movie-details__group">
        <span className="movie-details__label">FORMATS</span>
        <span className="movie-details__value">{movieDetails.formats.join(", ")}</span>
      </div>

      <div className="movie-details__group">
        <span className="movie-details__label">FROM</span>
        <span className="movie-details__value">₾ {movieDetails.priceFrom}</span>
      </div>

      {movieDetails.ratingNote && (
        <div className="movie-details__rating-box">
          <span className="movie-details__rating-title">RATING NOTE</span>
          <p className="movie-details__rating-text">{movieDetails.ratingNote}</p>
        </div>
      )}
    </aside>
  );
}