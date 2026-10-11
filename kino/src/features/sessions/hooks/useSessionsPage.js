import { useState, useEffect } from "react";
import { getSessions } from "../../../shared/services/sessionsService";
import { useNavbar } from "../../../shared/navigation/Navbar";

const getInitialUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    venues: params.get("venue") ? params.get("venue").split(",") : [],
    formats: params.get("format") ? params.get("format").split(",") : [],
    languages: params.get("language") ? params.get("language").split(",") : [],
    times: params.get("time") ? params.get("time").split(",") : [],
    date: params.get("date") || null,
    sort: params.get("sort") || "price_asc", 
    page: parseInt(params.get("page") || "1", 10),
  };
};


export default function useSessionsPage() {
  const initialParams = getInitialUrlParams();

  const [selectedDate, setSelectedDate] = useState(initialParams.date);
  const [sortOrder, setSortOrder] = useState(initialParams.sort);
  const [currentPage, setCurrentPage] = useState(initialParams.page);
  const [filters, setFilters] = useState({
    venues: initialParams.venues,
    formats: initialParams.formats,
    languages: initialParams.languages,
    times: initialParams.times,
  });
  const [sessions, setSessions] = useState([])
  const { goToSessionsPage } = useNavbar();
  useEffect(() => {
  
      async function fetchMovieData() {
        try {
          const res = await getSessions({filters, sortOrder, currentPage, selectedDate}) 
          setSessions(res)
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
    if (sortOrder) params.set("sort", sortOrder)
    if (currentPage) params.set("page", currentPage)

    goToSessionsPage({ filters:filters, searchString: params.toString() });
}, [filters, selectedDate, currentPage, sortOrder]);

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