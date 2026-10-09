import { useState, useEffect } from "react";
import "./SeatHeader.css";

export default function SeatHeader({ title, subtitle, expiresAt }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!expiresAt) return;

    const targetTime = new Date(expiresAt).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const difference = Math.max(0, Math.floor((targetTime - now) / 1000));
      setTimeLeft(difference);
    };

    updateTimer(); 
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const timer = formatTime(timeLeft);

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