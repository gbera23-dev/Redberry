import { useState, useEffect } from "react";


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
        const mockResults = [
          {
            id: 1,
            title: "The Odyssey",
            type: "Film",
            ageRating: "12+",
            duration: "134 min",
            poster: "https://via.placeholder.com/48x68",
            priceFrom: "₾16",
            isComingSoon: false,
          },
          {
            id: 2,
            title: "The Father",
            type: "Film",
            ageRating: "12+",
            duration: "134 min",
            poster: "https://via.placeholder.com/48x68",
            priceFrom: "₾12",
            isComingSoon: false,
          },
          {
            id: 3,
            title: "The Batman",
            type: "Film",
            ageRating: "12+",
            duration: "134 min",
            poster: "https://via.placeholder.com/48x68",
            priceFrom: null,
            isComingSoon: true,
          },
          {
            id: 4,
            title: "The Brutalist",
            type: "Film",
            ageRating: "12+",
            duration: "134 min",
            poster: "https://via.placeholder.com/48x68",
            priceFrom: "₾16",
            isComingSoon: false,
          },
        ].filter((item) =>
          item.title.toLowerCase().includes(trimmedQuery.toLowerCase())
        );

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