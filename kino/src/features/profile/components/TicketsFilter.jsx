import "./TicketsFilter.css";

export default function TicketFilters({ activeSubTab, onSelectTab, upcomingCount, pastCount }) {
  return (
    <div className="tickets-filters">
      <button
        type="button"
        className={`tickets-filters__btn ${
          activeSubTab === "upcoming" ? "tickets-filters__btn--active" : ""
        }`}
        onClick={() => onSelectTab("upcoming")}
      >
        Upcoming <span className="tickets-filters__count">{upcomingCount}</span>
      </button>

      <button
        type="button"
        className={`tickets-filters__btn ${
          activeSubTab === "past" ? "tickets-filters__btn--active" : ""
        }`}
        onClick={() => onSelectTab("past")}
      >
        Past <span className="tickets-filters__count">{pastCount}</span>
      </button>
    </div>
  );
}