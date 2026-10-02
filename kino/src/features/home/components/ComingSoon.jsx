import ComingSoonMovieCard from './ComingSoonMovieCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import './ComingSoon.css'
import { catalogueApi } from "../../../shared/api/catalogueApi";
import useMovies from "../hooks/useMovies.js"


export default function ComingSoon() { 

  const onNotify = () => console.log("notify"); 

  const { movies, loading, error } = useMovies( catalogueApi.comingSoon );

  if (loading) return <div className="coming-soon__loading">Loading...</div>;

  if (error) return <div className="coming-soon__error">{error}</div>;

  return (
    <section className="coming-soon">
            <SectionHeader 
              title="COMING SOON..." 
              actionLabel="See all" 
              actionHref="" 
            />
      <div className="coming-soon__row">
        {movies.map((movie) => (
          <ComingSoonMovieCard key={movie.id} slug={movie.slug} movie={movie} onNotify={onNotify} />
        ))}
      </div>
    </section>
  )
}
