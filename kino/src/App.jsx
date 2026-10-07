import Auth from "../src/features/auth/providers/Auth"
import HomePage from "../src/features/home/pages/HomePage"
import SignupModal from "./features/auth/modals/SignUpModal";
import LoginModal from "./features/auth/modals/LoginModal";
import ProfilePage from "./features/profile/pages/ProfilePage"
import SessionsPage from "./features/sessions/pages/SessionsPage"; 
import SeatSelectionModal from "./features/buyTickets/modals/SeatSelectionModal";
import BookingConfirmationModal from "./features/buyTickets/modals/BookingConfirmationModal"
import MoviePage from "./features/buyTickets/pages/MoviePage";

function App() {
  return (
    <section>
      <Auth>
        <SignupModal />
        <LoginModal />
        <MoviePage />
      </Auth>
    </section>
  ); 
}

export default App
