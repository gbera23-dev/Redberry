//Temporary page for testing modals
import LoginModal from "../../auth/modals/LoginModal";
import SignUpModal from "../../auth/modals/SignUpModal";
import { useAuth } from "../../auth/providers/Auth"

function Test() {

    const { openRegister, openLogin } = useAuth();

    return (
        <section>
            <div>
                <h1>Hello!</h1>
            </div>
            <button type="button" className="auth-register" f="register" onClick={openRegister}>
            <svg width="32" height="16">
            </svg>
            register
            </button>

             <button type="button" className="auth-login" aria-label="login" onClick={openLogin}>
            <svg width="32" height="16">
            </svg>
            login
            </button>
            <SignUpModal />
            <LoginModal />
        </section>
    );
}


export default Test 