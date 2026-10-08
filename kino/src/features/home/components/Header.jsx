import { useState, useRef, useEffect } from "react"
import { SearchIcon } from "./Icons.jsx"
import "./Header.css"
import { useAuth } from "../../auth/providers/Auth.jsx"
import { BRAND_NAME, BRAND_NUMBER } from "../../../config.js"
import UserProfileModal from "../../auth/modals/UserProfileModal.jsx"
import UserProfileTrigger from "../../profile/components/UserProfileTrigger.jsx"
import SearchOverlay from "../../home/components/SearchOverlay.jsx"

export default function Header() {
  const [query, setQuery] = useState('')
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const profileRef = useRef(null)
  const searchRef = useRef(null)

  const { openRegister, openLogin, wrapLogout, userIsAuthorized } = useAuth();

  const onSearch = () => console.log(query);

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.(query.trim())
  }

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev)
  }

  const handleClearSearch = () => {
    setQuery('')
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsSearchOpen(false)
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <header className="header">
      <div className="header__left">
        <a className="header__brand">
          {BRAND_NAME}
          <span>{BRAND_NUMBER}</span>
        </a>
        <nav className="header__nav">
          <a>SESSIONS</a>
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