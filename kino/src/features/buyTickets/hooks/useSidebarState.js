import { useState, useEffect } from "react";
import { populateFilterOptions } from "../../../shared/data/filterOptions";

export default function useSidebarState({ basePrice, selectedSeats }) {
  const [ticketTypesMap, setTicketTypesMap] = useState({
    "Adult 100%": 1.0,
    "Student 75%": 0.75,
    "Child 50%": 0.5,
  });
  const [ticketTypes, setTicketTypes] = useState({});
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let isMounted = true;
    populateFilterOptions().then((data) => {

      if (isMounted && data?.TICKET_TYPES) {
        const newMultipliers = {};
        data.TICKET_TYPES.forEach((type) => {
          const percentage = Math.round((type.priceRatio ?? 1) * 100);
          const label = `${type.name} ${percentage}%`;
          newMultipliers[label] = type.priceRatio ?? 1;
        });
        if (Object.keys(newMultipliers).length > 0) {
          setTicketTypesMap(newMultipliers);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  

  useEffect(() => {
    calculateTotalPrice()
  }, [selectedSeats.length, ticketTypes]
  )

  const handleSelectTicketType = (seatId, typeLabel) => {
    setTicketTypes((prev) => ({
      ...prev,
      [seatId]: typeLabel,
    }));
  };

  const getTicketType = (seatId) => ticketTypes[seatId] || "Adult 100%";

  const calculateTotalPrice = () => {
    let total = 0;
    selectedSeats.forEach((seat) => total += calculateSeatPrice(seat.id));
    setTotalPrice(Number(total.toFixed(2)));
  };

  const calculateSeatPrice = (seatId) => {
    const type = getTicketType(seatId);
    const multiplier = ticketTypesMap[type] ?? 1.0;
    return Number((basePrice * multiplier).toFixed(2));
  };

  return {
    getTicketType,
    handleSelectTicketType,
    calculateSeatPrice,
    totalPrice,
  };
}