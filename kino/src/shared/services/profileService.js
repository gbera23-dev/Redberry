import { profileApi } from "../api/profileApi";
import { mapFormToPayload } from "../mappers/profileMapper";
import { invalidateCaches } from "./authService";

async function updateProfile(form) {
    const payload = mapFormToPayload({form})
    const result = await profileApi.profile(payload); 
    invalidateCaches()
    return result;
}

export { updateProfile };