import "./SelectedSeatItem.css";

const TICKET_TYPES = [
  { label: "Child 50%", discount: 0.5 },
  { label: "Student 75%", discount: 0.75 },
  { label: "Adult 100%", discount: 1.0 },
];

export default function SelectedSeatItem({ seat, basePrice = 16, selectedType = "Adult 100%", onSelectType, onRemove }) {
  const seatCode = typeof seat === "object" ? seat.code : seat;

  return (
    <div className="selected-seat-card">
      <div className="selected-seat-card__header">
        <span className="selected-seat-card__label">Seat {seatCode}</span>
        <div className="selected-seat-card__actions">
          <span className="selected-seat-card__price">₾ {basePrice}</span>
          <button
            type="button"
            className="selected-seat-card__remove"
            aria-label={`Remove seat ${seatCode}`}
            onClick={onRemove}
          >
            ×
          </button>
        </div>
      </div>

      <div className="selected-seat-card__pills">
        {TICKET_TYPES.map((type) => {
          const isActive = selectedType === type.label;
          return (
            <button
              key={type.label}
              type="button"
              className={`selected-seat-card__pill ${
                isActive ? "selected-seat-card__pill--active" : ""
              }`}
              onClick={() => onSelectType(type.label)}
            >
              {type.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}