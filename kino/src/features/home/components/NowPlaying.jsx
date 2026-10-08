import MovieCard from './MovieCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import './NowPlaying.css'
import useMovies from "../hooks/useMovies.js"
import { catalogueService } from "../../../shared/services/catalogueService.js";

export default function NowPlaying() {

  const { movies, loading, error, goToMoviePage, goToSessionsPage } = useMovies( catalogueService.getNowPlaying );

  const onBuy = (slug) => {
    goToMoviePage(null)
    console.log("buy %s", slug) 
  }

  if (loading) return <div className="now-playing__loading">Loading...</div>;

  if (error) return <div className="now-playing__error">{error}</div>;

  return (
    <section className="now-playing">
            <SectionHeader 
            title="NOW PLAYING" 
            actionLabel="See all" 
            navFn = {goToSessionsPage}
           />
      <div className="now-playing__row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} slug={movie.slug} movie={movie} onBuy={onBuy} />
        ))}
      </div>
    </section>
  )
}