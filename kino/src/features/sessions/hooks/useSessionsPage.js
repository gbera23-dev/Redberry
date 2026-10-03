import { useState } from "react";

export default function useSessionsPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [sortOrder, setSortOrder] = useState("earliest");
  const [filters, setFilters] = useState({
    venues: [],
    formats: [],
    languages: [],
    times: [],
  });

  const [currentPage, setCurrentPage] = useState(1); 

  return {
    selectedDate,
    setSelectedDate,
    sortOrder,
    setSortOrder,
    filters,
    setFilters,
    currentPage,
    setCurrentPage
  };
}