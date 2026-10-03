import Auth from "../src/features/auth/providers/Auth"
import HomePage from "../src/features/home/pages/HomePage"
import ProfilePage from "./features/profile/pages/ProfilePage"

function App() {
  return (
    <section>
      <Auth>
        <ProfilePage />
      </Auth>
    </section>
  ); 
}

export default App
