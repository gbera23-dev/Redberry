import ComingSoonMovieCard from './ComingSoonMovieCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import './ComingSoon.css'
import { catalogueService } from "../../../shared/services/catalogueService.js";
import useMovies from "../hooks/useMovies.js"


export default function ComingSoon() { 

  const onNotify = async (slug) => {
    try { 
      await catalogueService.notifyOnMovieTitle(slug)
    } catch(err) {
      console.log("error happened during sending notify")
      console.log(err)
    }
  }

  const { movies, loading, error, goToSessionsPage } = useMovies( catalogueService.getComingSoon );

  if (loading) return <div className="coming-soon__loading">Loading...</div>;

  if (error) return <div className="coming-soon__error">{error}</div>;

  return (
    <section className="coming-soon">
            <SectionHeader 
              title="COMING SOON..." 
              actionLabel="See all" 
              navFn = {goToSessionsPage}
            />
      <div className="coming-soon__row">
        {movies.map((movie) => (
          <ComingSoonMovieCard key={movie.id} slug={movie.slug} movie={movie} onNotify={onNotify} />
        ))}
      </div>
    </section>
  )
}
