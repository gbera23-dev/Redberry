import { useState } from "react";


export default function useSeatSelection({ maxSeats = 3, pricePerSeat = 15 } = {}) {
  const [activeTab, setActiveTab] = useState("SEATS"); 
  const [selectedSeats, setSelectedSeats] = useState([]);

  const isSeatSold = (row, num) =>
    (row === "B" && [6, 7, 8, 9].includes(num)) || (row === "D" && num === 2);

  const isSeatHeldByOther = (row, num) =>
    (row === "A" && num === 8) || (row === "C" && num === 2) || (row === "D" && [6, 7].includes(num));

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((s) => s !== seatId);
      }
      if (prev.length < maxSeats) {
        return [...prev, seatId];
      }
      return prev;
    });
  };

  const removeSeat = (seatId) => {
    setSelectedSeats((prev) => prev.filter((s) => s !== seatId));  
  }

  const subtotal = selectedSeats.length * pricePerSeat;
  const canProceed = selectedSeats.length > 0;

  return {
    activeTab,
    setActiveTab,
    selectedSeats,
    toggleSeat,
    removeSeat, 
    isSeatSold,
    isSeatHeldByOther,
    maxSeats,
    subtotal,
    canProceed,
  };
}