import { useState, useEffect } from "react";
import { getUserProfile } from "../../../shared/services/authService";

export default function useUserProfileTrigger() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchUserData() {
      try {
        setIsLoading(true);

        const res = await getUserProfile()
        
        if (isMounted && res?.data) {
          setUser(res.data);
        }
      } catch (err) {
        console.error("Failed to load header user trigger data", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayName = user?.fullName?.split(" ")[0] || user?.username || "User";

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user?.username?.slice(0, 2).toUpperCase() || "U";

  return {
    user,
    displayName,
    initials,
    isLoading,
  };
}