import { useState } from "react";
import { registerUser, loginUser, logoutUser, getUserProfile } from "../../../shared/services/authService"
import { clearToken } from "../../../shared/utils/tokenUtils"

export function useAuthModal() {
    const [activeModal, setActiveModal] = useState(null);

    const openLogin = () => setActiveModal("login");
    const openRegister = () => setActiveModal("register");
    const closeModal = () => setActiveModal(null);


    async function wrapRegister(payload) {
        try {
            registerUser(payload)
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
            loginUser(payload); 
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
            logoutUser(); 
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
            getUserProfile();
        }
        catch (error) {
            console.log("Authorization error");
            console.log(error); 
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
        wrapMe,
    };
}
