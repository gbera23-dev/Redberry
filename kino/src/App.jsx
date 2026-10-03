import Auth from "../src/features/auth/providers/Auth"
import HomePage from "../src/features/home/pages/HomePage"
import SignupModal from "./features/auth/modals/SignUpModal";
import LoginModal from "./features/auth/modals/LoginModal";
import ProfilePage from "./features/profile/pages/ProfilePage"

function App() {
  return (
    <section>
      <Auth>
        <ProfilePage />
        <SignupModal />
        <LoginModal />
      </Auth>
    </section>
  ); 
}

export default App
