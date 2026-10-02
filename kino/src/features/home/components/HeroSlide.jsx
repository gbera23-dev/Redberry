import { formatDuration } from '../../../shared/utils/format.js';
import { ClockIcon, TicketIcon } from './Icons.jsx';

export default function HeroSlide({ slide, isActive, onBuyTickets, onAllSessions }) {
  if (!slide) return null;

  const ageRatingCode = slide.ageRating?.code;
  const duration = formatDuration 
    ? formatDuration(slide.runtimeMinutes) 
    : `${slide.runtimeMinutes} min`;

  const genresList = Array.isArray(slide.genres)
    ? slide.genres.map((g) => (typeof g === 'object' ? g.name : g))
    : [];

  const tagBadge = slide.tagline || slide.formats?.[0]?.name;

  return (
    <>
      <div
        className={`hero__bg ${isActive ? 'is-active' : ''}`}
        style={{ backgroundImage: `url(${slide.backdropUrl || slide.backdrop})` }}
        aria-hidden="true"
      />
      
      {isActive && (
        <div className="hero__content" key={slide.id}>
          {tagBadge && <span className="hero__tag">{tagBadge}</span>}
          <h1 className="hero__title">{slide.title}</h1>

          <ul className="hero__meta">
            {duration && (
              <li>
                <ClockIcon width={11} height={11} />
                {duration}
              </li>
            )}
            {ageRatingCode && <li>{ageRatingCode}</li>}
            {genresList.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>

          {(slide.synopsis || slide.description) && (
            <p className="hero__description">{slide.synopsis || slide.description}</p>
          )}

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => onBuyTickets?.(slide)}>
              <TicketIcon width={13} height={13} />
              Buy tickets
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => onAllSessions?.(slide)}>
              All sessions
            </button>
          </div>
        </div>
      )}
    </>
  );
}