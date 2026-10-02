import { useState } from "react"
import { SearchIcon } from "./Icons.jsx"
import "./Header.css"
import { useAuth } from "../../auth/providers/Auth.jsx"
import { BRAND_NAME, BRAND_ACCENT } from "../../../config.js"

export default function Header() {
  const [query, setQuery] = useState('')

  const { openRegister, openLogin } = useAuth();

  const onSearch = () => console.log(query);

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch?.(query.trim())
  }

  return (
    <header className="header">
      <div className="header__left">
        <a className="header__brand">
          {BRAND_NAME}
          <span>{BRAND_ACCENT}</span>
        </a>
        <nav className="header__nav">
          <a>Showtimes</a>
        </nav>
      </div>

      <form className="header__search" onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search films and keywords"
          aria-label="Search films"
        />
      </form>

      <div className="header__actions">
        <button type="button" className="btn btn--primary" onClick={openRegister}>
          Sign up
        </button>
        <button type="button" className="btn btn--light" onClick={openLogin}>
          Log in
        </button>
      </div>
    </header>
  )
}
