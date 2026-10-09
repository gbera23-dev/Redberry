import "./SeatGrid.css";

export default function SeatGrid({
  sections,
  selectedSeats = [],
  toggleSeat,
  isSeatSold,
  isSeatHeldByOther,
}) {

  return (
    <div className="seat-map">
      {sections.map((section, secIdx) => (
        <div key={section.name || secIdx} className="seat-section">
          {section.name && (
            <div className="seat-map__label">{section.name.toUpperCase()}</div>
          )}

          <div className="seat-grid">
            {section.rows?.map((row) => (
              <div key={row.label} className="seat-row">
                <span className="seat-row__label">{row.label}</span>
                
                <div className="seat-row__seats">
                  {row.seats?.map((seat) => {
                    const seatId = seat.code || `${row.label}${seat.label}`;
                    const isSelected = selectedSeats.includes(seatId);
                    const isSold = seat.state === "sold" || isSeatSold(row.label, seat.label);
                    const isHeld = seat.state === "held" || isSeatHeldByOther(row.label, seat.label);

                    let modifier = "seat-node--available";
                    if (isSelected) modifier = "seat-node--selected";
                    else if (isSold) modifier = "seat-node--sold";
                    else if (isHeld) modifier = "seat-node--held";

                    return (
                      <button
                        key={seat.id || seatId}
                        type="button"
                        className={`seat-node ${modifier} ${
                          seat.aisleAfter ? "seat-node--aisle" : ""
                        }`}
                        disabled={isSold || isHeld}
                        aria-label={`Row ${row.label} Seat ${seat.label}`}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {seat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}