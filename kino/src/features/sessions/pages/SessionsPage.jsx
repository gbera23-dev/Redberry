import useSessionsPage from "../hooks/useSessionsPage";
import FilterSideBar  from "../components/FilterSideBar";
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


  const hasIntersection = (ls1, ls2) => {
    for (const elem1 of ls1) {
      for (const elem2 of ls2) {
        console.log("elem1 %s, elem 2 %s", elem1, elem2); 
        if (elem1 === elem2) return true; 
      }
    }
    return false; 
  }

const survivesFiltering = (ls1, ls2) => {
  const hasNoContent = ls1==null || !ls1.some(item => item?.trim());  
  return hasNoContent || hasIntersection(ls1, ls2);
};

  const applyFilters = () => {
    return MOCK_SESSIONS.filter((mv) => 
      survivesFiltering(filters.languages, mv.sessions.map((s) => s.language)) && 
      survivesFiltering(filters.formats, mv.sessions.map((s) => s.format)) && 
      survivesFiltering(filters.times, mv.sessions.map((s) => s.time)) && 
      survivesFiltering(filters.venues, mv.sessions.map((s) => s.venue)) && 
      survivesFiltering(Array.of(selectedDate), mv.sessions.map((s) => s.date)));
  }

  const filteredSessions = applyFilters(); 

  const numMovies = filteredSessions.length;

  const session_chunk = (a, b) => {
    return filteredSessions.slice(a, b);
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
