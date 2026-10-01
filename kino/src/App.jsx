import SignUpModal from "../src/features/auth/modals/SignUpModal"
import LoginModal from "../src/features/auth/modals/LoginModal"
function App() {
  return (
    <section>
      <LoginModal
        onClose={() => console.log("close")} 
        onSwitch= {() => console.log("switch")}
        onSubmit= {() => console.log("submit")}
      >
      </LoginModal>
    </section>
  ); 
}

export default App
