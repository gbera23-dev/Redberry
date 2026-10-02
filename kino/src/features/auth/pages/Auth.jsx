//Temporary page for testing auth modals
import { useAuthModal } from "../hooks/useAuthModal";
import LoginModal from "../modals/LoginModal";
import SignUpModal from "../modals/SignUpModal";

function Auth() {

    const {activeModal,
        openLogin,
        openRegister,
        closeModal,
        wrapRegister,
        wrapLogin,
        wrapLogout,
        wrapMe,
    } = useAuthModal();

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

            <button type="button" className="auth-logout" aria-label="logout" onClick={wrapLogout}>
            <svg width="32" height="16">
            </svg>
            logout
            </button>

            <button type="button" className="me" aria-label="me" onClick={wrapMe}>
            <svg width="32" height="16">
            </svg>
            me
            </button>
            <SignUpModal
                onClose={closeModal} 
                onSwitch={openLogin}
                onSubmit={wrapRegister}
                active={activeModal}
            />

            <LoginModal
                onClose={closeModal} 
                onSwitch={openRegister}
                onSubmit={wrapLogin}
                active={activeModal}
            />
        </section>
    );
}


export default Auth 