import Header from '../components/Header.jsx'
import HeroSlider from '../components/HeroSlider.jsx'
import NowPlaying from '../components/NowPlaying.jsx'
import ComingSoon from '../components/ComingSoon.jsx'
import Footer from '../components/Footer.jsx'
import LoginModal from "../../auth/modals/LoginModal.jsx"
import SignUpModal from "../../auth/modals/SignUpModal.jsx"
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__top">
        <Header />
        <HeroSlider />
      </div>

      <main>
        <NowPlaying />
        <ComingSoon />
      </main>

      <LoginModal />
      <SignUpModal />
      <Footer />
    </div>
  )
}
