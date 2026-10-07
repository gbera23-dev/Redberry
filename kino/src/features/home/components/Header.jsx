import { useState, useRef, useEffect } from "react"
import { SearchIcon } from "./Icons.jsx"
import "./Header.css"
import { useAuth } from "../../auth/providers/Auth.jsx"
import { BRAND_NAME, BRAND_NUMBER } from "../../../config.js"
import { tokenExists } from "../../../shared/utils/tokenUtils.js"
import UserProfileModal from "../../auth/modals/UserProfileModal.jsx"
import UserProfileTrigger from "../../profile/components/UserProfileTrigger.jsx"
import { logoutUser } from "../../../shared/services/authService.js"

export default function Header() {
  const [query, setQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dropdownRef = useRef(null)

  const { openRegister, openLogin } = useAuth();

  const onSearch = () => console.log(query);

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.(query.trim())
  }

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
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

      <form className="header__search" onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search films and live events"
          aria-label="Search films"
        />
      </form>

      {!tokenExists() ? (
        <div className="header__actions">
          <button type="button" className="btn btn--primary" onClick={openRegister}>
            Sign up
          </button>
          <button type="button" className="btn btn--light" onClick={openLogin}>
            Log in
          </button>
        </div>
      ) : (
        <div className="header__actions" ref={dropdownRef}>
          <UserProfileTrigger onClick={toggleModal} isOpen={isModalOpen} />

          {isModalOpen && (
            <div className="header__profile-dropdown">
              <UserProfileModal 
              handleLogout={()=> {
                console.log("logging out user");
                logoutUser()
                setIsModalOpen(false)
                window.location.href = "/"
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