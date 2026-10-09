import useSessionsPage from "../hooks/useSessionsPage";
import FilterSideBar  from "../components/FilterSideBar";
import { MovieSessionRow } from "../components/MovieSessionRow";
import { Pagination } from "../components/Pagination";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import "./SessionsPage.css";

export default function SessionsPage() {
  const {
    selectedDate,
    setSelectedDate,
    sortOrder,
    setSortOrder,
    filters,
    setFilters,
    currentPage,
    setCurrentPage, 
    sessions, 
  } = useSessionsPage();

  const changePage = (p) => {
    console.log("changing page to %d", p); 
    setCurrentPage(p);
  };

  const numMovies = sessions.length;

  return (
    <div className="sessions-page">
    <Header /> 
    <main className="sessions-container">
      <div className="page-heading">
        <h1>Sessions</h1>
        <p>Browse showtimes across all venues</p>
      </div>

      <div className="sessions-content">
        <FilterSideBar
          filters={filters}
          setFilters={setFilters}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <section className="main-sessions-view">

          <div className="sessions-top-bar">
            <span className="sessions-count">Showing {numMovies} sessions</span>
            <div className="sort-dropdown">
              <span>Sort:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="time_asc">Showtime: earliest first</option>
                <option value="time_desc">Showtime: latest first</option>
              </select>
            </div>
          </div> 

          <div className="movies-list">
            {sessions.map((movie) => (
              <MovieSessionRow key={movie.id} movie={movie} />
            ))}
          </div>

          <Pagination 
            currentPage={ currentPage }
            onPageChange={ changePage }
          />
        </section>
      </div>
    </main>
    <Footer />
    </div>
  );
};