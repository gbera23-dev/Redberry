import Header from "../components/Header"
import LoginModal from "../../auth/modals/LoginModal"
import SignUpModal from "../../auth/modals/SignUpModal"
import Footer from "../components/Footer"
import NowPlaying from "../components/NowPlaying"
import ComingSoon from "../components/ComingSoon"

function Test() {
  return (
    <div className="layout">
      <Header />
      <NowPlaying />
      <ComingSoon />
      <Footer />
      <LoginModal />
      <SignUpModal />
    </div>
  )
}

export default Test