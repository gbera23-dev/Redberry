import useUserProfileTrigger from "../hooks/useUserProfileTrigger";
import "./UserProfileTrigger.css";

export default function UserProfileTrigger({ onClick, isOpen }) {
  const { user, displayName, initials, isLoading } = useUserProfileTrigger();

  if (isLoading) {
    return (
      <div className="user-trigger user-trigger--loading">
        <div className="user-trigger__avatar-skeleton" />
        <div className="user-trigger__name-skeleton" />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`user-trigger ${isOpen ? "user-trigger--active" : ""}`}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <div className="user-trigger__avatar">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={displayName}
            className="user-trigger__avatar-img"
          />
        ) : (
          <span className="user-trigger__initials">{initials}</span>
        )}
        <span
          className={`user-trigger__status-dot ${
            user?.profileComplete
              ? "user-trigger__status-dot--complete"
              : "user-trigger__status-dot--incomplete"
          }`}
        />
      </div>

      <span className="user-trigger__name">{displayName}</span>

      <svg
        className={`user-trigger__arrow ${
          isOpen ? "user-trigger__arrow--open" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}