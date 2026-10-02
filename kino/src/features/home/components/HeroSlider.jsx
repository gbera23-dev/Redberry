import { useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons.jsx';
import HeroSlide from './HeroSlide.jsx';
import useFeaturedMovies from '../hooks/useFeaturedMovies.js';
import './HeroSlider.css';

const SLIDE_DURATION_MS = 5000;

export default function HeroSlider() {

  const onBuyTickets = () => console.log("buy tickets");
  const onAllSessions = () => console.log("all sessions"); 

  const { index, setIndex, slides = [], loading, error } = useFeaturedMovies();

  const total = slides.length;

  const goTo = useCallback((next) => {
    if (total > 0) {
      setIndex((next + total) % total);
    }
  }, [total, setIndex]);

  if (loading) {
    return (
      <section className="hero hero--loading">
        <div className="hero__loading-text">Loading featured movies...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero hero--error">
        <div className="hero__error-text">{error}</div>
      </section>
    );
  }

  if (!total) return null;

  return (
    <section className="hero">
      {slides.map((item, i) => (
        <HeroSlide
          key={item.id}
          slide={item}
          isActive={i === index}
          onBuyTickets={onBuyTickets}
          onAllSessions={onAllSessions}
        />
      ))}

      <div className="hero__shade" />

      <div className="hero__controls">
        <div className="hero__progress">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className="hero__segment"
              onClick={() => goTo(i)}
              aria-label={`Show ${item.title}`}
            >
              <span className="hero__track">
                <i
                  className={`hero__bar ${i < index ? 'is-done' : ''} ${i === index ? 'is-running' : ''}`}
                  style={{ animationDuration: `${SLIDE_DURATION_MS}ms` }}
                  onAnimationEnd={() => goTo(index + 1)}
                />
              </span>
            </button>
          ))}
        </div>

        <div className="hero__arrows">
          <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous slide">
            <ChevronLeftIcon />
          </button>
          <button type="button" onClick={() => goTo(index + 1)} aria-label="Next slide">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}