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
            await registerUser(payload)
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
            await getUserProfile();
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
