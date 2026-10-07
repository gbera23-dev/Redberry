import "./BookingConfirmationModal.css";
import CheckoutSummary from "../components/bookingConfirmationComponents/CheckoutSummary";

export default function BookingConfirmationModal({
  orderNumber = "KX-48291",
  movieDetails = {
    title: "THE ODYSSEY",
    hall: "Galleria Tbilisi · Hall B",
    dateTime: "Tue 15 Sep · 16:30",
    posterUrl: "",
  },
  seats = ["B3", "B4", "B5"],
  ticketSummary = "2 x Adult, 1 x Child",
  totalPaid = 32,
  onViewTickets,
  onBackToHome,
  onClose = () => console.log("closing")
}) {
  return (
    <div className="booking-confirm-modal-overlay" onClick={onClose}>
    <div className="booking-confirm-modal">
      <div className="booking-confirm-modal__content">
        <div className="booking-confirm-modal__header">
          <div className="booking-confirm-modal__check-circle">
            <svg
              className="booking-confirm-modal__check-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="booking-confirm-modal__title">Booking confirmed!</h2>
          <p className="booking-confirm-modal__subtitle">
            Your tickets are ready. We've sent the confirmation to your email.
          </p>
          <div className="booking-confirm-modal__order-badge">
            ORDER #{orderNumber}
          </div>
        </div>

        <div className="booking-confirm-modal__summary-wrapper">
          <CheckoutSummary
            movieDetails={movieDetails}
            ticketSummary={ticketSummary}
            seats={seats}
            totalPaid={totalPaid}
            isConfirmedPage={true}
          />
        </div>

        <div className="booking-confirm-modal__actions">
          <button
            type="button"
            className="booking-confirm-modal__btn booking-confirm-modal__btn--primary"
            onClick={onViewTickets}
          >
            View my tickets
          </button>
          <button
            type="button"
            className="booking-confirm-modal__btn booking-confirm-modal__btn--secondary"
            onClick={onBackToHome}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}