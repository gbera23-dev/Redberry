import "./Pagination.css";

const MOVIES_PER_PAGE = 4; 

export const Pagination = ({ currentPage, onPageChange, numMovies }) => {

  const numPages = Math.ceil(numMovies / MOVIES_PER_PAGE);
  const pages = [1, 2, "...", numPages];

  const shiftLeft = () => {
    onPageChange(currentPage == 1 ? numPages : (currentPage - 1))
  }

  const shiftRight = () => {
    onPageChange(currentPage == numPages ? 1 : (currentPage + 1))
  }

  return (
    <div className="pagination">
      <button className="page-arrow" onClick={shiftLeft}>
        ‹
      </button>

      {pages.map((p, i) =>
        typeof p === "number" ? (
          <button
            key={i}
            className={`page-num ${currentPage === p ? "active" : ""}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ) : (
          <span key={i} className="page-dots">
            {p}
          </span>
        )
      )}

      <button className="page-arrow" onClick={shiftRight}>›</button>
    </div>
  );
};