import "./DateCard.css";

export default function DateCard({ day, date, isActive = false }) {
  return (
    <div className={`date-card ${isActive ? "date-card--active" : ""}`}>
      <span className="date-card__day">{day}</span>
      <span className="date-card__date">{date}</span>
    </div>
  );
}