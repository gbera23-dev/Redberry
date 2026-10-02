import { useState, useEffect } from "react";
import { catalogueApi } from "../../../shared/api/catalogueApi";

export default function useFeaturedMovies() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function fetchFeatured() {
      try {
        setLoading(true);
        const response = await catalogueApi.featured();
        const data = response?.data || response || [];
        if (isMounted) {
          setSlides(data);
        }
      } catch (err) {
        console.error("Failed to fetch featured movies:", err);
        if (isMounted) {
          setError("Failed to load featured movies.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchFeatured();

    return () => {
      isMounted = false;
    };
  }, []);

  return { index, setIndex, slides, loading, error };
}