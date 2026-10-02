import Auth from "../src/features/auth/providers/Auth"
import Test from "../src/features/home/pages/Test"

function App() {
  return (
    <section>
      <Auth>
        <Test />
      </Auth>
    </section>
  ); 
}

export default App
