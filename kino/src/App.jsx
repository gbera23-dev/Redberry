import Auth from "../src/features/auth/providers/Auth"
import HomePage from "../src/features/home/pages/HomePage"

function App() {
  return (
    <section>
      <Auth>
        <HomePage />
      </Auth>
    </section>
  ); 
}

export default App
