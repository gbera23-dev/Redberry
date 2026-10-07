import { authApi } from "../api/authApi"
import { setToken } from "../utils/tokenUtils"

    async function registerUser(payload) {
        const result = await authApi.register(payload); 
        console.log("registration complete!"); 
        console.log(result);
        setToken(result.data.token);
    }

    async function loginUser(payload) {
        const result = await authApi.login(payload); 
        console.log("authorization complete!"); 
        console.log(result); 
        setToken(result.data.token); 
    }

    async function logoutUser() {
        const result = await authApi.logout(); 
        console.log("logout complete!"); 
        console.log(result);  
    }

    async function getUserProfile() {
        const result = await authApi.me(); 
        console.log("profile data retrieved!"); 
        console.log(result);  
        return result
    }


export {registerUser, loginUser, logoutUser, getUserProfile}