import "./SessionTimeSlot.css";

export default function SessionTimeSlot({ time, price, lang, format, seatsLeft, onClick }) {
  return (
    <button type="button" className="session-slot" onClick={onClick}>
      <div className="session-slot__main">
        <span className="session-slot__time">{time}</span>
        <div className="session-slot__meta">
          <span>{lang}</span>
          <span>{format}</span>
        </div>
      </div>
      <div className="session-slot__side">
        <span className="session-slot__price">₾ {price}</span>
        <span className="session-slot__seats">◆ {seatsLeft} left</span>
      </div>
    </button>
  );
}