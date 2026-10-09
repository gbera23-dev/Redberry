import SessionTimeSlot from "../SessionTimeSlot";
import "./HallCard.css";

export default function HallCard({ hallName, slots = [], onSlotClick }) {
  return (
    <div className="hall-card">
      <span className="hall-card__name">{hallName}</span>
      <div className="hall-card__slots">
        {slots.map((slot, index) => (
          <SessionTimeSlot
            key={index}
            time={slot.time}
            price={slot.price}
            lang={slot.lang}
            format={slot.format}
            seatsLeft={slot.seatsLeft}
            onClick={() => onSlotClick(slot)}
          />
        ))}
      </div>
    </div>
  );
}