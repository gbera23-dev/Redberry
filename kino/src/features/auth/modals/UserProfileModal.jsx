import useUserProfileModal from "../hooks/useUserProfileModal";
import "./UserProfileModal.css";
    
export default function UserProfileModal({ handleLogout }) {
  const {
    user,
    isLoading,
    handleNavigateProfile,
    handleNavigateTickets,
  } = useUserProfileModal();

  if (isLoading) {
    return (
      <div className="profile-modal profile-modal--loading">
        <div className="profile-modal__spinner" />
      </div>
    );
  }

  if (!user){
    return null;
  }
  
  const displayName = user.displayName || "Guest User";

  return (
    <div className="profile-modal">
      <div className="profile-modal__user-info">
        <div className="profile-modal__avatar-container">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={displayName}
              className="profile-modal__avatar-img"
            />
          ) : (
            <div className="profile-modal__avatar-fallback">
              {user.initials}
            </div>
          )}
          <span
            className={`profile-modal__status-dot ${
              user.isProfileComplete
                ? "profile-modal__status-dot--success"
                : "profile-modal__status-dot--warning"
            }`}
          />
        </div>

        <div className="profile-modal__details">
          <h4 className="profile-modal__name">{displayName}</h4>
          <span className="profile-modal__email">{user.email || "No email provided"}</span>
        </div>
      </div>

      {user.isProfileComplete ? (
        <div className="profile-modal__banner profile-modal__banner--complete">
          <span className="profile-modal__banner-title">
            Profile Complete
          </span>
          <svg
            className="profile-modal__check-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      ) : (
        <div className="profile-modal__banner profile-modal__banner--incomplete">
          <span className="profile-modal__banner-title">
            Profile incomplete
          </span>
          <p className="profile-modal__banner-desc">
            Please complete your profile to enable booking
          </p>
        </div>
      )}

      <nav className="profile-modal__nav">
        <button
          type="button"
          className="profile-modal__nav-item"
          onClick={handleNavigateProfile}
        >
          <svg
            className="profile-modal__nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          My Profile
        </button>

        <button
          type="button"
          className="profile-modal__nav-item"
          onClick={handleNavigateTickets}
        >
          <svg
            className="profile-modal__nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
          </svg>
          My Tickets
        </button>
      </nav>

      <div className="profile-modal__footer">
        <button
          type="button"
          className="profile-modal__logout-btn"
          onClick={handleLogout}
        >
          <svg
            className="profile-modal__logout-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Log out
        </button>
      </div>
    </div>
  );
}