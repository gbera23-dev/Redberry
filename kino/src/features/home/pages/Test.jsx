import Header from "../components/Header"
import LoginModal from "../../auth/modals/LoginModal"
import SignUpModal from "../../auth/modals/SignUpModal"
import Footer from "../components/Footer"

function Test() {
  return (
    <div className="layout">
      <Header />
      <Footer />
      <LoginModal />
      <SignUpModal />
    </div>
  )
}

export default Test