import { authApi } from "../api/authApi"
import { setToken } from "../utils/tokenUtils"

    var userProfileRes = null 

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
    //invalidate cache due to logout
    async function logoutUser() {
        const result = await authApi.logout(); 
        console.log("logout complete!"); 
        console.log(result);  
        userProfileRes = null; 
    }

    //we can cache user profile so that each request does not resend api call 
    async function getUserProfile() {
        if (userProfileRes) {
            return userProfileRes
        }
        const result = await authApi.me(); 
        userProfileRes = result 
        return result
    }


export {registerUser, loginUser, logoutUser, getUserProfile}