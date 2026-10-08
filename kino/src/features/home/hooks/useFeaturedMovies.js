import { useState, useEffect } from "react";
import { catalogueService } from "../../../shared/services/catalogueService";
import { useNavbar } from "../../../shared/navigation/Navbar"

export default function useFeaturedMovies() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  const { goToHomePage, goToProfilePage, goToSessionsPage, goToMoviePage } = useNavbar();

  useEffect(() => {
    let isMounted = true;

    async function fetchFeatured() {
      try {
        setLoading(true);
        const response = await catalogueService.getFeatured();
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


  const onBuyTickets = () => goToMoviePage(null) //null for now, will replace it later
  const onAllSessions = () => goToSessionsPage()

  return { index, setIndex, slides, loading, error, onBuyTickets, onAllSessions };
}