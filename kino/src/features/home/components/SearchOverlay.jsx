import useSearchOverlay from "./hooks/useSearchOverlay";
import SearchResultCard from "../components/SearchResultCard";
import "./SearchOverlay.css";

export default function SearchOverlay({ query = "", onBrowseAll, onSelectMovie }) {
  const { results, isLoading } = useSearchOverlay(query);
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return (
      <div className="search-overlay search-overlay--prompt">
        <div className="search-overlay__icon-circle">
          <svg
            className="search-overlay__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <h3 className="search-overlay__title">What do you want to watch?</h3>
        <p className="search-overlay__subtitle">
          Search by title, director or cast
        </p>
        <button
          type="button"
          className="search-overlay__browse-btn"
          onClick={onBrowseAll}
        >
          Browse all sessions
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="search-overlay search-overlay--loading">
        <div className="search-overlay__spinner" />
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="search-overlay search-overlay--empty">
        <div className="search-overlay__icon-circle">
          <svg
            className="search-overlay__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h3 className="search-overlay__title">
          No results for "{trimmedQuery}"
        </h3>
        <p className="search-overlay__subtitle">
          Check the spelling or try another film or live event.
        </p>
        <button
          type="button"
          className="search-overlay__browse-btn"
          onClick={onBrowseAll}
        >
          Browse all sessions
        </button>
      </div>
    );
  }

  return (
    <div className="search-overlay search-overlay--results">
      <div className="search-overlay__header">
        <span className="search-overlay__section-title">FILMS & EVENTS</span>
        <span className="search-overlay__count">{results.length} results</span>
      </div>
      <div className="search-overlay__list">
        {results.map((movie) => (
          <SearchResultCard
            key={movie.id}
            {...movie}
            onClick={() => onSelectMovie?.(movie)}
          />
        ))}
      </div>
    </div>
  );
}