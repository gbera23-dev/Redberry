import { useState } from "react";

export function useAuthModal() {
    const [activeModal, setActiveModal] = useState(null);

    const openLogin = () => setActiveModal("login");
    const openRegister = () => setActiveModal("register");
    const closeModal = () => setActiveModal(null);

    return {
        activeModal,
        openLogin,
        openRegister,
        closeModal
    };
}
