//Temporary page for testing auth modals
import { useAuthModal } from "../hooks/useAuthModal";
import LoginModal from "../modals/LoginModal";
import SignUpModal from "../modals/SignUpModal";
import { authApi } from "../../../shared/api/authApi"
import { setToken, getToken, clearToken } from "../../../shared/utils/tokenUtils"

function Auth() {

    const {activeModal,
        openLogin,
        openRegister,
        closeModal} = useAuthModal();

    async function wrapRegister(payload) {
        try {
            const result = await authApi.register(payload); 
            console.log("registration complete!"); 
            console.log(result);
            setToken(result.data.token);
        }
        catch (error) {
            clearToken();
            console.log("Authorization error"); 
            console.log(error); 
        }
        finally {
            closeModal()
        }
    }

    async function wrapLogin(payload) {
        try {
            const result = await authApi.login(payload); 
            console.log("authorization complete!"); 
            console.log(result); 
            setToken(result.data.token); 
        }
        catch (error) {
            clearToken();
            console.log("Authorization error");
            console.log(error); 
        }
        finally {
            closeModal();
        } 
    }

    async function wrapLogout() {
        try {
            const result = await authApi.logout(); 
            console.log("logout complete!"); 
            console.log(result);  
        }
        catch (error) {
            console.log("Authorization error");
            console.log(error); 
        }
        finally {
            clearToken();
        } 
    }

    async function wrapMe() {
        try {
            const result = await authApi.me(); 
            console.log("profile data retrieved!"); 
            console.log(result);  
        }
        catch (error) {
            console.log("Authorization error");
            console.log(error); 
        }
    }

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
            {/* Uses short - circuiting technique to render data if condition is satisfied */}
            {activeModal === "register" && (
                <SignUpModal
                    onClose={closeModal} 
                    onSwitch={openLogin}
                    onSubmit={wrapRegister}
                />
            )}

            {activeModal === "login" && (
                <LoginModal
                    onClose={closeModal} 
                    onSwitch={openRegister}
                    onSubmit={wrapLogin}
                />
            )}
        </section>
    );
}


export default Auth 