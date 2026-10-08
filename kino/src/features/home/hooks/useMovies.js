
import {useState, useEffect} from "react"
import { useNavbar } from "../../../shared/navigation/Navbar";
const DISPLAY_LIMIT = 6; 

export default function useMovies( apiCall ) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { goToHomePage, goToProfilePage, goToMoviePage, goToSessionsPage } = useNavbar()
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await apiCall(DISPLAY_LIMIT); 
        const data = response?.data || response || [];
        setMovies(data);
      } catch (err) {
        console.error('Failed to fetch movies:', err);
        setError('Failed to load movies.');
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);    
  return {movies, loading, error, goToHomePage, goToProfilePage, goToMoviePage, goToSessionsPage}; 
}