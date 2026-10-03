import Auth from "../src/features/auth/providers/Auth"
import HomePage from "../src/features/home/pages/HomePage"
import SignupModal from "./features/auth/modals/SignUpModal";
import LoginModal from "./features/auth/modals/LoginModal";
import ProfilePage from "./features/profile/pages/ProfilePage"
import SessionsPage from "./features/sessions/pages/SessionsPage"; 

function App() {
  return (
    <section>
      <Auth>
        <SessionsPage />
        <SignupModal />
        <LoginModal />
      </Auth>
    </section>
  ); 
}

export default App
