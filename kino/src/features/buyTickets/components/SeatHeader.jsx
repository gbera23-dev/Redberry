import "./SeatHeader.css"

//To be implemented 
export default function SeatHeader({ title, subtitle, timer = "7:48" }) {
  return (
    <div className="seat-header">
      <div>
        <h2 id="seat-modal-title" className="seat-title">
          {title}
        </h2>
        <p className="seat-subtitle">{subtitle}</p>
      </div>
      <div className="seat-timer">
        <span className="seat-timer__label">SEATS HELD</span>
        <strong className="seat-timer__value">{timer}</strong>
      </div>
    </div>
  );
}