import useSessionsPage from "../hooks/useSessionsPage";
// import { FilterSidebar } from "./FilterSidebar";
import { MovieSessionRow } from "../components/MovieSessionRow";
import { Pagination } from "../components/Pagination";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import { MOCK_SESSIONS } from "../../../shared/data/ticketsData";
import "./SessionsPage.css";

const MOVIES_PER_PAGE = 4; 

export default function SessionsPage() {
  const {
    selectedDate,
    setSelectedDate,
    sortOrder,
    setSortOrder,
    filters,
    setFilters,
    currentPage,
    setCurrentPage
  } = useSessionsPage();

  const changePage = (p) => {
    console.log("changing page to %d", p); 
    setCurrentPage(p);
  };

  const numMovies = MOCK_SESSIONS.length;

  const session_chunk = (a, b) => {
    return MOCK_SESSIONS.slice(a, b);
  }

  return (
    <div className="sessions-page">
    <Header /> 
    <main className="sessions-container">
      <div className="page-heading">
        <h1>Sessions</h1>
        <p>Browse showtimes across all venues</p>
      </div>

      <div className="sessions-content">
        {/* <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        /> */}

        <section className="main-sessions-view">

          <div className="sessions-top-bar">
            <span className="sessions-count">Showing {numMovies} sessions</span>
            <div className="sort-dropdown">
              <span>Sort:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="earliest">Showtime: earliest first</option>
                <option value="latest">Showtime: latest first</option>
              </select>
            </div>
          </div> 

          <div className="movies-list">
            {session_chunk(MOVIES_PER_PAGE*(currentPage - 1), MOVIES_PER_PAGE*currentPage).map((movie) => (
              <MovieSessionRow key={movie.id} movie={movie} />
            ))}
          </div>

          <Pagination 
          currentPage={ currentPage }
          onPageChange={ changePage }
          numMovies = {numMovies}
          />
        </section>
      </div>
    </main>
    <Footer />
    </div>
  );
};
