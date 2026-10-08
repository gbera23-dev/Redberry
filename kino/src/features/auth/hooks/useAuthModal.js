import { useState } from "react";
import { registerUser, loginUser, logoutUser } from "../../../shared/services/authService"
import { clearToken, tokenExists } from "../../../shared/utils/tokenUtils"

export function useAuthModal() {
    const [activeModal, setActiveModal] = useState(null);
    const [userIsAuthorized, setUserIsAuthorized] = useState(tokenExists()); 

    const openLogin = () => setActiveModal("login");
    const openRegister = () => setActiveModal("register");
    const closeModal = () => setActiveModal(null);


    async function wrapRegister(payload) {
        try {
            await registerUser(payload)
            setUserIsAuthorized(true)
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
            await loginUser(payload); 
            setUserIsAuthorized(true)
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
            await logoutUser(); 
            setUserIsAuthorized(false)
        }
        catch (error) {
            console.log("Authorization error");
            console.log(error); 
        }
        finally {
            clearToken();
        }         
    }

    return {
        activeModal,
        openLogin,
        openRegister,
        closeModal,
        wrapRegister,
        wrapLogin,
        wrapLogout,
        userIsAuthorized,
    };
}
