import Header from "../components/Header"
import LoginModal from "../../auth/modals/LoginModal"
import SignUpModal from "../../auth/modals/SignUpModal"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import ComingMovieCard from "../components/ComingMovieCard"

function Test() {
  return (
    <div className="layout">
      <Header />
      <MovieCard 
        slug = "buddy-1514026"
      />
      <ComingMovieCard
        slug = "buddy-1514026"   
      />
      <Footer />
      <LoginModal />
      <SignUpModal />
    </div>
  )
}

export default Test