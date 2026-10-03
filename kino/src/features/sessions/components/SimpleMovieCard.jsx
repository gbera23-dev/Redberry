import "./SimpleMovieCard.css";

export const SimpleMovieCard = ({ poster, title, ageRating, runtime }) => {
  return (
    <div className="simple-movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">
          {title} {ageRating && <span className="age-badge">{ageRating}</span>}
        </h2>
        <span className="movie-runtime">{runtime}</span>
      </div>
    </div>
  );
};

export default SimpleMovieCard;