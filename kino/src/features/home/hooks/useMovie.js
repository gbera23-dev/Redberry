import {useState, useEffect} from "react"
import {catalogueApi} from "../../../shared/api/catalogueApi"

export default function useMovie(slug) {

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  async function wrapFetchMovie(slug) { 
    try {
      const response = await catalogueApi.getMovie(slug);
      return response?.data || response; 
    } catch (error) {
      console.error("Failed to fetch movie:", error); 
      return null;
    }
  }

  useEffect(() => {
    
    if (!slug) {
      setLoading(false);
      return;
    }

    async function handleData() {
      const data = await wrapFetchMovie(slug);
      setMovie(data);
      setLoading(false);
    }
    
    handleData();
  }, []);

  return {movie, loading}; 
}