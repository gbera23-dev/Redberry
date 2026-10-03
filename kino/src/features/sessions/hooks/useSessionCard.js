import { useState } from "react";

export default function useSessionCard(session, onSelectSession) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!session.isSoldOut && onSelectSession) {
      onSelectSession(session);
    }
  };

  return {
    isHovered,
    setIsHovered,
    handleClick,
  };
}