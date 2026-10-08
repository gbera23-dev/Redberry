import { SearchIcon } from "./Icons.jsx"
import "./Header.css"
import { BRAND_NAME, BRAND_NUMBER } from "../../../config.js"
import UserProfileModal from "../../auth/modals/UserProfileModal.jsx"
import UserProfileTrigger from "../../profile/components/UserProfileTrigger.jsx"
import SearchOverlay from "../../home/components/SearchOverlay.jsx"
import useHeader from "../hooks/useHeader.js"

export default function Header() {
  const { query, setQuery, isProfileOpen, setIsProfileOpen, isSearchOpen, setIsSearchOpen,
        profileRef, searchRef, openRegister, openLogin, wrapLogout, userIsAuthorized, 
        onSearch, handleSubmit, toggleProfile, handleClearSearch, goToHomePage, goToSessionsPage } = useHeader()
  return (
    <header className="header">
      <div className="header__left">
        <a className="header__brand" onClick={goToHomePage}>
          {BRAND_NAME}
          <span>{BRAND_NUMBER}</span>
        </a>
        <nav className="header__nav">
          <a onClick={goToSessionsPage}>SESSIONS</a>
        </nav>
      </div>

      <div className="header__search-container" ref={searchRef}>
        <form className="header__search" onSubmit={handleSubmit}>
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            placeholder="Search films and live events"
            aria-label="Search films"
          />
          {query && (
            <button
              type="button"
              className="header__search-clear"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </form>

        {isSearchOpen && (
          <div className="header__search-dropdown">
            <SearchOverlay
              query={query}
              onBrowseAll={() => setIsSearchOpen(false)}
              onSelectMovie={() => setIsSearchOpen(false)}
            />
          </div>
        )}
      </div>

      {!userIsAuthorized ? (
        <div className="header__actions">
          <button type="button" className="btn btn--primary" onClick={openRegister}>
            Sign up
          </button>
          <button type="button" className="btn btn--light" onClick={openLogin}>
            Log in
          </button>
        </div>
      ) : (
        <div className="header__actions" ref={profileRef}>
          <UserProfileTrigger onClick={toggleProfile} isOpen={isProfileOpen} />

          {isProfileOpen && (
            <div className="header__profile-dropdown">
              <UserProfileModal 
              handleLogout = {() => { 
                wrapLogout()
                setIsProfileOpen(false)
              }
              }
              />
            </div>
          )}
        </div>
      )}
    </header>
  )
}