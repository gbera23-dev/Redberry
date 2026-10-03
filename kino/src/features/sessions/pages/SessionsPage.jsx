import useSessionsPage from "../hooks/useSessionsPage";
// import { FilterSidebar } from "./FilterSidebar";
// import { MovieSessionRow } from "./MovieSessionRow";
// import { Pagination } from "./Pagination";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import SessionCard from "../components/SessionCard";
import SimpleMovieCard from "../components/SimpleMovieCard";
import { MOCK_SESSIONS } from "../../../shared/data/ticketsData";
import "./SessionsPage.css";

export const SessionsPage = () => {
  const {
    selectedDate,
    setSelectedDate,
    sortOrder,
    setSortOrder,
    filters,
    setFilters,
  } = useSessionsPage();

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
          {/* Just a simple session+movie card addition for test */}
          <SimpleMovieCard 
            poster = {MOCK_SESSIONS[0].poster}
            title = {MOCK_SESSIONS[0].title}
            ageRating = {MOCK_SESSIONS[0].ageRating}
            runtime= {MOCK_SESSIONS[0].runtime}
          />
        {MOCK_SESSIONS[0].sessions.map(session => 
          <SessionCard
            key={session.id}
            session={session}
            onSelectSession={() => console.log("select session")}
          />
        )}

          {/* <div className="sessions-top-bar">
            <span className="sessions-count">Showing 12 sessions</span>
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
          </div> */}

          {/* <div className="movies-list">
            {MOCK_SESSIONS.map((movie) => (
              <MovieSessionRow key={movie.id} movie={movie} />
            ))}
          </div> */}

          {/* <Pagination /> */}
        </section>
      </div>
    </main>
    <Footer />
    </div>
  );
};

export default SessionsPage;