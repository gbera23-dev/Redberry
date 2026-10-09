import { useState, useEffect } from "react";
import { getSessionSeats } from "../../../shared/services/sessionsService"; 
import { holdSessionSeats, releaseHold } from "../../../shared/services/bookingService";

export default function useSeatSelection({ 
  sessionId, 
  onSubtotalChange, 
  maxSeats = 3, 
  pricePerSeat = 15,
} = {}) {
  const [activeTab, setActiveTab] = useState("SEATS"); 
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatLayout, setSeatLayout] = useState({ sections: [], soldSeats: [], heldSeats: [] });
  const [holdData, setHoldData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchSeatLayout = async () => {
    if (!sessionId) return;
    try {
      const res = await getSessionSeats(sessionId);
      setSeatLayout(res);
    } catch (err) {
      console.error("Failed to fetch seat layout:", err);
    }
  };

  useEffect(() => {
    fetchSeatLayout();
  }, [sessionId]);

  useEffect(() => {
    if (!sessionId || selectedSeats.length === 0) {
      if (holdData?.holdId) {
        releaseHold(holdData.holdId).catch(() => {});
      }
      
      setHoldData(null);
      return;
    }

    async function holdSeats() {
      const payload = {
        seats: selectedSeats.map((seatItem) => ({
          seatId: seatItem.id || seatItem.code,
          ticketType: seatItem?.ticketType || "adult",
        })),
      };

      try {
        const res = await holdSessionSeats(sessionId, payload);
        const responseData = res?.data?.expiresAt ? res.data : res;
        setHoldData(responseData); 
        setErrorMessage(null);
      } catch (err) {
        console.error("Hold failed:", err);
      }
    }

    holdSeats();
  }, [sessionId, selectedSeats]);

  useEffect(() => {
    if (!holdData?.expiresAt) {
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const expiry = new Date(holdData.expiresAt).getTime();
      if (expiry - now <= 0) {
        clearInterval(interval);
        handleExpire();
        alert("Your seat hold has expired. Please select your seats again.");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [holdData?.expiresAt]);

  const handleExpire = () => {
    setSelectedSeats([]);
    setHoldData(null);
    setActiveTab("SEATS");
    fetchSeatLayout();
  };

  const isSeatSold = (row, num) => {
    const seatCode = `${row}${num}`;
    return seatLayout.soldSeats.includes(seatCode);
  };

  const isSeatHeldByOther = (row, num) => {
    const seatCode = `${row}${num}`;
    return seatLayout.heldSeats.includes(seatCode);
  };

  const toggleSeat = (code, seatId) => {
    setSelectedSeats((prev) => {
      const exists = prev.some(
        (s) => (typeof s === "object" ? (s.id === seatId || s.code === code) : s === code)
      );

      if (exists) {
        return prev.filter(
          (s) => (typeof s === "object" ? (s.id !== seatId && s.code !== code) : s !== code)
        );
      } else if (prev.length < maxSeats) {
        return [...prev, { id: seatId, code: code, ticketType: "adult" }];
      }
      return prev;
    });
  };

  const updateTicketType = (seatIdentifier, ticketType) => {
    setSelectedSeats((prev) =>
      prev.map((s) =>
        s.id === seatIdentifier || s.code === seatIdentifier
          ? { ...s, ticketType }
          : s
      )
    );
  };

  const removeSeat = (identifier) => {
    setSelectedSeats((prev) =>
      prev.filter(
        (s) => (typeof s === "object" ? (s.id !== identifier && s.code !== identifier) : s !== identifier)
      )
    );
  };

  const subTotal = selectedSeats.length * pricePerSeat;

  useEffect(() => {
    if (onSubtotalChange) {
      onSubtotalChange(subTotal);
    }
  }, [subTotal, onSubtotalChange]);

  const canProceed = selectedSeats.length > 0 && !!holdData;

  return {
    activeTab,
    setActiveTab,
    selectedSeats,
    toggleSeat,
    removeSeat,
    updateTicketType,
    isSeatSold,
    isSeatHeldByOther,
    maxSeats,
    subTotal,
    canProceed,
    errorMessage,
    expiresAt: holdData?.expiresAt,
    handleExpire,
    sections: seatLayout.sections,
  };
}