import { useState, useEffect } from "react";
import { getSessions } from "../../../shared/services/sessionsService";
import { useNavbar } from "../../../shared/navigation/Navbar";

export default function useSessionsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [sortOrder, setSortOrder] = useState("time_asc"); 
  const [filters, setFilters] = useState({
    venues: [],
    formats: [],
    languages: [],
    times: [],
  });
  const [sessions, setSessions] = useState([])
  const [currentPage, setCurrentPage] = useState(1); 
  const { goToSessionsPage } = useNavbar();
  useEffect(() => {
  
      async function fetchMovieData() {
        try {
          const res = await getSessions({filters, sortOrder, currentPage, selectedDate}) 
          setSessions(res)
          console.log(res)
        } catch (err) {
          console.log("err happened")
          console.log(err.errors)
        }
      }
  
      fetchMovieData();
    }, [filters, sortOrder, currentPage, selectedDate]);


  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.venues?.length) params.set("venue", filters.venues.join(","));
    if (selectedDate) params.set("date", selectedDate);
    if (filters.formats?.length) params.set("format", filters.formats.join(","));
    if (filters.languages?.length) params.set("language", filters.languages.join(","));
    if (filters.times?.length) params.set("time", filters.times.join(","));

    goToSessionsPage({ searchString: params.toString() });
}, [filters, selectedDate]);

  return {
    selectedDate,
    setSelectedDate,
    sortOrder,
    setSortOrder,
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    sessions 
  };
}