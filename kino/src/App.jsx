import Auth from "../src/features/auth/providers/Auth"
import Nav from "../src/shared/navigation/Navbar"
import SignupModal from "./features/auth/modals/SignUpModal";
import LoginModal from "./features/auth/modals/LoginModal";
import { populateFilterOptions } from "./shared/data/filterData";
import { useEffect } from "react" 

function App() {

  useEffect(() => {
    populateFilterOptions();
  }, []);

  return (
    <section>
      <Auth>
        <SignupModal />
        <LoginModal />
        <Nav>
        </Nav>
      </Auth>
    </section>
  ); 
}

export default App
