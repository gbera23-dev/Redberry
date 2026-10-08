import { useState, useRef, useEffect } from "react"
import { useAuth } from "../../auth/providers/Auth.jsx"
import { useNavbar } from "../../../shared/navigation/Navbar.jsx"

export default function useHeader() {
      const [query, setQuery] = useState('')
      const [isProfileOpen, setIsProfileOpen] = useState(false)
      const [isSearchOpen, setIsSearchOpen] = useState(false)
    
      const profileRef = useRef(null)
      const searchRef = useRef(null)
    
      const { openRegister, openLogin, wrapLogout, userIsAuthorized } = useAuth();
      const { goToHomePage, goToSessionsPage, goToMoviePage } = useNavbar();
    
      const onSearch = () => goToMoviePage(null) //null for now 
    
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
      return {
        query, setQuery, isProfileOpen, setIsProfileOpen, isSearchOpen, setIsSearchOpen,
        profileRef, searchRef, openRegister, openLogin, wrapLogout, userIsAuthorized, 
        onSearch, handleSubmit, toggleProfile, handleClearSearch, goToHomePage, goToSessionsPage
      }
}