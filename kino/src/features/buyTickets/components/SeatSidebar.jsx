import "./SeatSidebar.css"
import useSidebarState from "../hooks/useSidebarState"
import SelectedSeatItem from "../components/SelectedSeatItem"

export default function SeatSidebar({ 
    selectedSeats, maxSeats = 3, 
    subtotal = 0, canProceed = false, onProceed, onRemoveSeat }) {

    const { getTicketType, handleSelectTicketType, calculateSeatPrice } = useSidebarState();

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
        {selectedSeats.map((seat) => (
          <SelectedSeatItem
            key={seat}
            seat={seat}
            basePrice={calculateSeatPrice(seat)}
            selectedType={getTicketType(seat)}
            onSelectType={handleSelectTicketType}
            onRemove={onRemoveSeat}
          />
        ))}
      </div>

      <div className="seat-sidebar__footer">
        <div className="seat-sidebar__subtotal">
          <span>SUBTOTAL</span>
          <strong className="seat-sidebar__price">₾ {subtotal}</strong>
        </div>

        <button
          type="button"
          className="seat-sidebar__submit"
          disabled={!canProceed}
          onClick={onProceed}
        >
          Next: Checkout
        </button>
      </div>
    </aside>
  );
}