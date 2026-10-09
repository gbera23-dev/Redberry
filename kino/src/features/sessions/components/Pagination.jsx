import "./Pagination.css";

export const Pagination = ({ currentPage, onPageChange }) => {
  const numPages = 10;
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  const shiftLeft = () => {
    onPageChange(currentPage === 1 ? numPages : currentPage - 1);
  };

  const shiftRight = () => {
    onPageChange(currentPage === numPages ? 1 : currentPage + 1);
  };

  return (
    <div className="pagination">
      <button className="page-arrow" onClick={shiftLeft}>
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`page-num ${currentPage === p ? "active" : ""}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      <button className="page-arrow" onClick={shiftRight}>
        ›
      </button>
    </div>
  );
};