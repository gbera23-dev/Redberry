import Header from "../components/Header"
import LoginModal from "../../auth/modals/LoginModal"
import SignUpModal from "../../auth/modals/SignUpModal"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import ComingSoonMovieCard from "../components/ComingSoonMovieCard"
import NowPlaying from "../components/NowPlaying"

function Test() {
  return (
    <div className="layout">
      <Header />
      <NowPlaying />
      <Footer />
      <LoginModal />
      <SignUpModal />
    </div>
  )
}

export default Test