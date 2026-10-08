import { useAuthModal } from "../hooks/useAuthModal";
import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export default function Auth( { children } ) {

    const auth = useAuthModal();
    
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);