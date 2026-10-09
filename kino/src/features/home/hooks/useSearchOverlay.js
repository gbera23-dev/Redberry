import { useState, useEffect } from "react";
import { catalogueService } from "../../../shared/services/catalogueService";

const DEBOUNCE_TIME = 300 

export default function useSearchOverlay(query) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trimmedQuery = query?.trim();

    if (!trimmedQuery) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const res = await catalogueService.searchMovies(trimmedQuery)
        setResults(res)
        if (isMounted) {
          setResults(mockResults);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || "Search failed");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }, DEBOUNCE_TIME); 

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [query]);

  return { results, isLoading, error };
}