import { useState, useEffect } from "react";
import { getSessions } from "../../../shared/services/sessionsService";

export default function useSessionsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [sortOrder, setSortOrder] = useState("time_asc"); //for now
  const [filters, setFilters] = useState({
    venues: [],
    formats: [],
    languages: [],
    times: [],
  });
  const [sessions, setSessions] = useState([])
  const [currentPage, setCurrentPage] = useState(1); 

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