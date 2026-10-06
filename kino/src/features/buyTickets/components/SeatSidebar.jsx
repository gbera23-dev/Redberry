import "./SeatSidebar.css"

export default function SeatSidebar({ maxSeats, subtotal, canProceed, onProceed }) {
  return (
    <aside className="seat-sidebar">
      <div className="seat-sidebar__body">
        <h3 className="seat-sidebar__title">Your seats · Max {maxSeats}</h3>
        <p className="seat-sidebar__subtitle">
          Pick up to {maxSeats} seats from the map. Each seat can carry its own ticket type.
        </p>
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