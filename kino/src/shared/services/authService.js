import { authApi } from "../api/authApi"
import { setToken } from "../utils/tokenUtils"

    export var userProfileRes = null 

    async function registerUser(payload) {
        const result = await authApi.register(payload); 
        setToken(result.data.token);
    }

    async function loginUser(payload) {
        const result = await authApi.login(payload); 
        setToken(result.data.token); 
    }
    //invalidate cache due to logout
    async function logoutUser() {
        const result = await authApi.logout(); 
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

    //unique function that clears out all the cache for the use of other services 
    export function invalidateCaches() {
        userProfileRes=null; 
    }

    //checks that user's profile is complete or not(depends on the cache)
    export async function isProfileComplete() {
        if(!userProfileRes) {
            await getUserProfile();
        }
        return userProfileRes.profileComplete; 
    }
    
    //finds user age 
    export async function getUserAge() {
        if(!userProfileRes) {
            await getUserProfile();
        }
        return userProfileRes.data.age; 
    }


export {registerUser, loginUser, logoutUser, getUserProfile}