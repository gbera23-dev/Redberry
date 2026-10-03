import useSessionCard from "../hooks/useSessionCard";
import "./SessionCard.css"

export const SessionCard = ({ session, onSelectSession }) => {
  const { isHovered, setIsHovered, handleClick } = useSessionCard(
    session,
    onSelectSession
  );

  return (
    <div
      className={`session-card ${session.isSoldOut ? "sold-out" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="session-card-top">
        <span className="session-time">{session.time}</span>
        <span className="session-format">{session.format}</span>
      </div>

      <div className="session-card-middle">
        <span className="session-lang">{session.language}</span>
        {!session.isSoldOut ? (
          <span className={`seat-badge ${session.seatsLeft <= 5 ? "low" : "ok"}`}>
            ♦ {session.seatsLeft} left
          </span>
        ) : (
          <span className="seat-badge sold">Sold out</span>
        )}
      </div>

      <div className="session-card-bottom">
        <span className="session-venue">
          {session.venue} · {session.hall}
        </span>
        <span className="session-price">{session.price}</span>
      </div>
    </div>
  );
};

export default SessionCard;