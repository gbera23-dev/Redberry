import { useState, useEffect } from "react";
import { getUserProfile, logoutUser } from "../../../shared/services/authService";

export default function useUserProfileModal() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUserData() {
      try {
        setIsLoading(true);

        const apiRes = await getUserProfile()
        if (isMounted && apiRes?.data) {
          const raw = apiRes.data;
          const initials = raw.fullName
            ? raw.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)
            : raw.username?.slice(0, 2).toUpperCase() || "U";

          setUser({
            id: raw.id,
            displayName: raw.fullName || raw.username,
            email: raw.email,
            avatarUrl: raw.avatar,
            initials: initials,
            isProfileComplete: raw.profileComplete,
          });
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load profile");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleNavigateProfile = () => {
    console.log("Navigating to My Profile...");
  };

  const handleNavigateTickets = () => {
    console.log("Navigating to My Tickets...");
  };

  return {
    user,
    isLoading,
    error,
    handleNavigateProfile,
    handleNavigateTickets,
  };
}