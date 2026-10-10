import "./SelectedSeatItem.css";
import { TICKET_TYPES } from "../../../../shared/data/filterOptions";

export default function SelectedSeatItem({ seat, basePrice = 16, selectedType = "Adult 100%", onSelectType, onRemove }) {
  const seatCode = typeof seat === "object" ? seat.code : seat;

  const ticketTypesList = Array.isArray(TICKET_TYPES) 
    ? [...TICKET_TYPES].sort((a, b) => (a.priceRatio ?? 1) - (b.priceRatio ?? 1))
    : [];

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
          </button>
        </div>
      </div>

      <div className="selected-seat-card__pills">
        {ticketTypesList.map((type) => {
          const labelText = `${type.name} ${Math.round(type.priceRatio * 100)}%`;
          const isActive = selectedType === labelText || selectedType === type.name;
          
          return (
            <button
              key={type.slug || type.name}
              type="button"
              className={`selected-seat-card__pill ${
                isActive ? "selected-seat-card__pill--active" : ""
              }`}
              onClick={() => onSelectType(labelText)}
            >
              {labelText}
            </button>
          );
        })}
      </div>
    </div>
  );
}