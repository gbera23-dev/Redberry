import { useState, useRef } from "react";
import { registerUser, loginUser, logoutUser } from "../../../shared/services/authService";
import { clearToken, tokenExists } from "../../../shared/utils/tokenUtils";

export function useAuthModal() {
    const [activeModal, setActiveModal] = useState(null);
    const [userIsAuthorized, setUserIsAuthorized] = useState(tokenExists()); 
    const pendingActionRef = useRef(null); 

    const openLogin = (action = null) => {
        setActiveModal("login");
        if (typeof action === "function") {
            pendingActionRef.current = action; 
        } else {
            pendingActionRef.current = null;
        }
    };
    
    const openRegister = () => {
        setActiveModal("register");
        pendingActionRef.current = null;
    };

    const closeModal = () => {
        setActiveModal(null);
        pendingActionRef.current = null;
    };

    async function wrapRegister({ payload }) {
        try {
            await registerUser(payload);
            setUserIsAuthorized(true);
            if (typeof pendingActionRef.current === "function") {
                await pendingActionRef.current(); 
            }
        } catch (error) {
            clearToken();
            alert(error.cleanMessage); 
        } finally {
            closeModal();
        }        
    }

    async function wrapLogin({ payload }) {
        try {
            await loginUser(payload); 
            setUserIsAuthorized(true);
            if (typeof pendingActionRef.current === "function") {
                await pendingActionRef.current(); 
            }
        } catch (error) {
            clearToken();
            alert(error.cleanMessage); 
        } finally {
            closeModal();
        }         
    }

    async function wrapLogout() {
        try {
            await logoutUser(); 
            setUserIsAuthorized(false);
        } catch (error) {
            alert(error.cleanMessage); 
        } finally {
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