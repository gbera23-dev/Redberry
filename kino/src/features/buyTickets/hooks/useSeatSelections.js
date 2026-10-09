import { useState, useEffect } from "react";
import { getSessionSeats } from "../../../shared/services/sessionsService"; 

export default function useSeatSelection({ 
  sessionId, 
  onSubtotalChange, 
  maxSeats = 3, 
  pricePerSeat 
} = {}) {
  const [activeTab, setActiveTab] = useState("SEATS"); 
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);
  const [seatLayout, setSeatLayout] = useState({ sections: [], soldSeats: [], heldSeats: [] });

  useEffect(() => {
    if (!sessionId) return;

    async function getSeatLayout() {
    try {
      const res = await getSessionSeats(sessionId);
      console.log("res")
      console.log(res)
      setSeatLayout(res)
    }
    catch(err) {
      console.log("error")
      console.log(err)
    }
  }
  getSeatLayout()
  }, [sessionId]
  );

  const isSeatSold = (row, num) => {
    const seatCode = `${row}${num}`;
    return seatLayout.soldSeats.includes(seatCode);
  };

  const isSeatHeldByOther = (row, num) => {
    const seatCode = `${row}${num}`;
    return seatLayout.heldSeats.includes(seatCode);
  };

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {
      let nextSeats;
      if (prev.includes(seatId)) {
        nextSeats = prev.filter((s) => s !== seatId);
      } else if (prev.length < maxSeats) {
        nextSeats = [...prev, seatId];
      } else {
        nextSeats = prev;
      }
      return nextSeats;
    });
  };

  const removeSeat = (seatId) => {
    setSelectedSeats((prev) => {
      const nextSeats = prev.filter((s) => s !== seatId);
      return nextSeats;
    });
  };

  useEffect(() => {
  if (onSubtotalChange) {
    onSubtotalChange(selectedSeats.length * pricePerSeat);
  }
  }, [selectedSeats, pricePerSeat, onSubtotalChange]);

  const handleFormDataChange = (data) => {
    console.log("trying to purchase tickets, data is %s", data); 
    setCheckoutData(data);
  };

  const subTotal = selectedSeats.length * pricePerSeat;
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
    subTotal,
    canProceed,
    handleFormDataChange,
    sections: seatLayout.sections,
  };
}