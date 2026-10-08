import { profileApi } from "../api/profileApi";

async function updateProfile(payload) {
    const result = await profileApi.profile(payload);
    return result;
}

export { updateProfile };