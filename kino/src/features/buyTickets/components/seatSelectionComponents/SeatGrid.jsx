import "./SeatGrid.css"


const ROWS = ["A", "B", "C", "D"];
const SEATS_PER_ROW = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function SeatGrid({ selectedSeats, toggleSeat, isSeatSold, isSeatHeldByOther }) {
  return (
    <div className="seat-map">
      <div className="seat-map__label">STALLS · ROWS A-E</div>
      <div className="seat-grid">
        {ROWS.map((row) => (
          <div key={row} className="seat-row">
            <span className="seat-row__label">{row}</span>
            <div className="seat-row__seats">
              {SEATS_PER_ROW.map((num) => {
                const seatId = `${row}${num}`;
                const isSelected = selectedSeats.includes(seatId);
                const isSold = isSeatSold(row, num);
                const isHeld = isSeatHeldByOther(row, num);

                let modifier = "seat-node--available";
                if (isSelected) modifier = "seat-node--selected";
                else if (isSold) modifier = "seat-node--sold";
                else if (isHeld) modifier = "seat-node--held";

                return (
                  <button
                    key={seatId}
                    type="button"
                    className={`seat-node ${modifier} ${num === 5 ? "seat-node--aisle" : ""}`}
                    disabled={isSold || isHeld}
                    aria-label={`Row ${row} Seat ${num}`}
                    onClick={() => toggleSeat(seatId)}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}