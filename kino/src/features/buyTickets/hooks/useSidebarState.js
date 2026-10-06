import { useState } from "react";

const TICKET_MULTIPLIERS = {
  "Child 50%": 0.5,
  "Student 75%": 0.75,
  "Adult 100%": 1.0,
};

export default function useSidebarState({ basePrice = 16 } = {}) {
  const [ticketTypes, setTicketTypes] = useState({});

  const handleSelectTicketType = (seatId, typeLabel) => {
    setTicketTypes((prev) => ({
      ...prev,
      [seatId]: typeLabel,
    }));
  };

  const getTicketType = (seatId) => ticketTypes[seatId] || "Adult 100%";

  const calculateSeatPrice = (seatId) => {
    const type = getTicketType(seatId);
    const multiplier = TICKET_MULTIPLIERS[type] ?? 1.0;
    return basePrice * multiplier;
  };

  return {
    getTicketType,
    handleSelectTicketType,
    calculateSeatPrice,
  };
}