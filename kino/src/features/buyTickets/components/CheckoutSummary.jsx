import "./CheckoutSummary.css";

export default function CheckoutSummary({
    movieDetails,
    ticketSummary,
    seats = [],
    totalPaid = 0, 
    isConfirmedPage=false
}) {
  const formattedSeats = seats.length > 0 ? seats.join(", ") : "None";

  const title = movieDetails?.title || "THE ODYSSEY";

  const subtitle =
    movieDetails?.subtitle ||
    "Galleria Tbilisi · Hall B · Tuesday 15 September · 16:30 · Standard · Original + Subtitles";

  return (
    <div className="checkout-summary">
      <h4 className="checkout-summary__heading">Summary</h4>
      <div className="checkout-summary__card">
        <div className="checkout-summary__title">{title}</div>
        <div className="checkout-summary__info">{subtitle}</div>

        <div className="checkout-summary__details">
          <div className="checkout-summary__row">
            <span className="checkout-summary__label">Seats</span>
            <span className="checkout-summary__value">{formattedSeats}</span>
          </div>
          <div className="checkout-summary__row">
            <span className="checkout-summary__label">Tickets</span>
            <span className="checkout-summary__value">{ticketSummary}</span>
          </div>

          {isConfirmedPage && (
            <div className="checkout-summary__row checkout-summary__row--total">
              <span className="checkout-summary__label checkout-summary__label--total">
                TOTAL PAID
              </span>
              <span className="checkout-summary__value checkout-summary__value--total">
                ₾ {totalPaid}
              </span>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}