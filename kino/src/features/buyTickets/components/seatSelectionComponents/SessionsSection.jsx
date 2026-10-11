import DateCard from "../seatSelectionComponents/cards/DateCard";
import HallCard from "../seatSelectionComponents/cards/HallCard";
import MovieDetails from "./MovieDetails";
import { populateFilterOptions } from "../../../../shared/data/filterOptions";
import { getUserAge } from "../../../../shared/services/authService";
import { useState } from "react";
import "./SessionsSection.css";

export default function SessionsSection({ dates = [], venues = [], movieDetails, onSlotClick, onDateCardClick, chosenDate,
 }) {

  const [ isAgeAppropriate, setIsAgeAppropriate ]  = useState(false)
  
  populateFilterOptions().then(async (data) => {
      const userAge = await getUserAge();
      const minMovieAgeReq =  movieDetails?.ageRating
      setIsAgeAppropriate(userAge >= minMovieAgeReq)
    }
    ); 

  return (
    <section className="sessions-section">
      <div className="sessions-section__container">
        {isAgeAppropriate && 
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
                      onSlotClick={onSlotClick}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
          }

        {!isAgeAppropriate && 
          
          <div className="age-restriction-notice">
          <div className="age-restriction-notice__icon" role="img" aria-label="Restricted">
          🔞
          </div>
          <div className="age-restriction-notice__content">
          <h4 className="age-restriction-notice__title">Access Restricted</h4>
          <p className="age-restriction-notice__text">
          This movie contains age-restricted content and sessions are not available for your current profile settings.
          </p>
          </div>
        </div>
          }
        <MovieDetails movieDetails={movieDetails} />
      </div>
    </section>
  );
}