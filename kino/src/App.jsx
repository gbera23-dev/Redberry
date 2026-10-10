import Auth from "../src/features/auth/providers/Auth"
import Nav from "../src/shared/navigation/Navbar"
import SignupModal from "./features/auth/modals/SignUpModal";
import LoginModal from "./features/auth/modals/LoginModal";
import { populateFilterOptions } from "./shared/data/filterOptions";
import { useEffect } from "react" 
import { BookingProvider } from "./features/buyTickets/context/BookingContext";

function App() {

  useEffect(() => {
    populateFilterOptions();
  }, []);

  return (
    <section>
      <Auth>
        <SignupModal />
        <LoginModal />
        <Nav />
      </Auth>
    </section>
  ); 
}

export default App
