import "./SeatSidebar.css";
import useSidebarState from "../../hooks/useSidebarState";
import SelectedSeatItem from "./SelectedSeatItem";
import CheckoutSummary from "../bookingConfirmationComponents/CheckoutSummary";

const POSSIBLE_TABS = { Seats: "SEATS", Checkout: "CHECKOUT" };

export default function SeatSidebar({ 
  selectedSeats, 
  maxSeats = 3, 
  subtotal, 
  canProceed = false, 
  onProceed, 
  canPay = false, 
  onPay, 
  onRemoveSeat, 
  activeTab, 
  movieDetails 
}) {
  const { getTicketType, handleSelectTicketType, calculateSeatPrice } = useSidebarState();

  const formatTicketSummary = () => {
    const counts = {};

    selectedSeats.forEach((seat) => {
      const seatKey = seat.id || seat.code;
      const type = getTicketType(seatKey) || "Adult"; 
      counts[type] = (counts[type] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([type, count]) => `${count} x ${type}`)
      .join(", ");
  };

  return (
    <aside className="seat-sidebar">
      <div className="seat-sidebar__body">
        <h3 className="seat-sidebar__title">Your seats · Max {maxSeats}</h3>
        {selectedSeats.length === 0 && (
          <p className="seat-sidebar__desc">
            Pick up to {maxSeats} seats from the map. Each seat can carry its own ticket type.
          </p>
        )}
      </div>

      <div className="seat-sidebar__list">
        {activeTab === POSSIBLE_TABS.Seats &&
          selectedSeats.map((seat) => {
            const seatKey = seat.id || seat.code;
            return (
              <SelectedSeatItem
                key={seatKey}
                seat={seat}
                basePrice={calculateSeatPrice(seatKey)}
                selectedType={getTicketType(seatKey)}
                onSelectType={(typeLabel) => handleSelectTicketType(seatKey, typeLabel)}
                onRemove={() => onRemoveSeat(seatKey)}
              />
            );
          })}
        {activeTab === POSSIBLE_TABS.Checkout && (
          <CheckoutSummary 
            movieDetails={movieDetails}
            ticketSummary={formatTicketSummary()}
            seats={selectedSeats}
          />
        )}
      </div>

      <div className="seat-sidebar__footer">
        <div className="seat-sidebar__subtotal">
          <span>SUBTOTAL</span>
          <strong className="seat-sidebar__price">₾ {subtotal}</strong>
        </div>

        {activeTab === POSSIBLE_TABS.Seats && (
          <button
            type="button"
            className="seat-sidebar__submit"
            disabled={!canProceed}
            onClick={onProceed}
          >
            Next: Checkout
          </button>
        )}
        {activeTab === POSSIBLE_TABS.Checkout && (
          <button
            type="button"
            className="seat-sidebar__submit"
            disabled={!canPay}
            onClick={onPay}
          >
            Pay: Complete order
          </button>
        )}
      </div>
    </aside>
  );
}