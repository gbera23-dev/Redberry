import "./TicketCard.css";

export default function TicketCard({ ticket, onRefund, isUpcoming }) {
  return (
    <div className="ticket-card">
      <img src={ticket.poster} alt={ticket.title} className="ticket-card__poster" />

      <div className="ticket-card__content">
        <div className="ticket-card__header">
          <h3 className="ticket-card__title">{ticket.title}</h3>
          {ticket.ageRating && <span className="ticket-card__age">{ticket.ageRating}</span>}
          {ticket.duration && <span className="ticket-card__duration">{ticket.duration}</span>}
        </div>

        <div className="ticket-card__details-grid">
          <div className="ticket-card__detail-item">
            <span className="ticket-card__detail-label">DATE</span>
            <span className="ticket-card__detail-value">{ticket.date}</span>
          </div>

          <div className="ticket-card__detail-item">
            <span className="ticket-card__detail-label">VENUE</span>
            <span className="ticket-card__detail-value">{ticket.venue}</span>
          </div>

          <div className="ticket-card__detail-item">
            <span className="ticket-card__detail-label">FORMAT</span>
            <span className="ticket-card__detail-value">{ticket.format}</span>
          </div>
        </div>

        <div className="ticket-card__seats">
          <span className="ticket-card__detail-label">SEATS</span>
          <div className="ticket-card__seats-list">
            {ticket.seats.map((seat, seatIdx) => (
              <span key={seatIdx} className="ticket-card__seat-badge">
                {seat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="ticket-card__right">
        <div className="ticket-card__order-info">
          <span className="ticket-card__order-label">ORDER</span>
          <span className="ticket-card__order-id">#{ticket.id}</span>
        </div>

        <div className="ticket-card__price-row">
          <span className="ticket-card__price-label">Total paid</span>
          <span className="ticket-card__price-value">{ticket.totalPaid}</span>
        </div>

        {isUpcoming && <div className="ticket-card__actions">
          <button
            type="button"
            className="ticket-card__refund-btn"
            onClick={() => onRefund?.(ticket.id)}
          >
            Refund
          </button>
          {ticket.refundableUntil && (
            <span className="ticket-card__refund-note">
              Refundable until {ticket.refundableUntil}
            </span>
          )}
        </div>}

      </div>
    </div>
  );
}