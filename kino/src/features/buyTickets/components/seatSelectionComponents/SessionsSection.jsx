import DateCard from "../seatSelectionComponents/cards/DateCard";
import HallCard from "../seatSelectionComponents/cards/HallCard";
import MovieDetails from "./MovieDetails";
import "./SessionsSection.css";

const MODAL_OPEN = {SeatModal : "SEAT_MODAL", BookingConfirmedModal : "BOOKING_MODAL"}

export default function SessionsSection({ dates = [], venues = [], movieDetails, onSlotClick, onDateCardClick, chosenDate }) {
  return (
    <section className="sessions-section">
      <div className="sessions-section__container">
        <div className="sessions-section__main">
          <h2 className="sessions-section__title">Sessions</h2>

          <div className="sessions-section__dates">
            {dates.map((item, idx) => (
              <DateCard
                key={idx}
                day={item.day}
                date={item.date}
                isActive={chosenDate==item.fullDate}
                onClick= {() => {onDateCardClick(item.fullDate)}}
              />
            ))}
          </div>

          <div className="sessions-section__venues">
            {venues.map((venue, idx) => (
              <div key={idx} className="sessions-section__venue">
                <h3 className="sessions-section__venue-name">{venue.name}</h3>
                <div className="sessions-section__halls">
                  {venue.hall.map((hall, hIdx) => (
                    <HallCard
                      key={hIdx}
                      hallName={hall.name}
                      slots={hall.slots}
                      onSlotClick={(hallName, slot) =>
                        onSlotClick({ openModal: MODAL_OPEN.SeatModal ,venue: venue.name, hall: hallName, ...slot })
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <MovieDetails movieDetails={movieDetails} />
      </div>
    </section>
  );
}