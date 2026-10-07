import "./SearchResultCard.css";

export default function SearchResultCard({
  title,
  type = "Film",
  ageRating = "12+",
  duration = "134 min",
  poster,
  priceFrom,
  isComingSoon,
  onClick,
}) {
  return (
    <div className="search-result-card" onClick={onClick}>
      <img
        src={poster}
        alt={title}
        className="search-result-card__poster"
      />
      <div className="search-result-card__details">
        <h4 className="search-result-card__title">{title}</h4>
        <span className="search-result-card__meta">
          {type} · {ageRating} · {duration}
        </span>
      </div>
      <div className="search-result-card__action">
        {isComingSoon ? (
          <span className="search-result-card__status search-result-card__status--coming-soon">
            Coming Soon
          </span>
        ) : (
          <span className="search-result-card__price">
            from {priceFrom}
          </span>
        )}
      </div>
    </div>
  );
}