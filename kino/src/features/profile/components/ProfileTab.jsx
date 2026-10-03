import "./ProfileTab.css";

export default function ProfileTab({ activate, active, count }) {
    return  (
    <div className="profile__tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={active === "info"}
          className={`profile__tab ${active === "info" ? "profile__tab--active" : ""}`}
          onClick={() => activate("info")}
        >
          Personal Information
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "tickets"}
          className={`profile__tab ${active === "tickets" ? "profile__tab--active" : ""}`}
          onClick={() => activate("tickets")}
        >
          My Tickets
          {count > 0 && <span className="profile__badge">{count}</span>}
        </button>
      </div>);
}