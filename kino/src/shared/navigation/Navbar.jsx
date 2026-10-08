import { createContext, useContext, useState } from "react";
import HomePage from "../../features/home/pages/HomePage";
import ProfilePage from "../../features/profile/pages/ProfilePage"
import MoviePage from "../../features/buyTickets/pages/MoviePage"
import SessionsPage from '../../features/sessions/pages/SessionsPage'

/**
 * All the frontend side URLS per page 
 */
export const NAV_HOMEPAGE = "/"
export const NAV_PROFILEPAGE = "/profile"
export const NAV_MOVIEPAGE = "/buy-tickets"
export const NAV_SESSIONSPAGE = "/sessions"

const NavContext = createContext(null);

export default function Nav() {

    const [currentPageUrl, setCurrentPageUrl] = useState("/") //initially default url   
    const [argsForPage, setArgsForPage] = useState(null) //for passsing context to a page from changePage

    const changePage = ({url, args}) => {
        setCurrentPageUrl(url) 
        setArgsForPage(args)
        window.history.pushState({}, "", url)
    }

    const goToHomePage = () => {
        changePage({url:NAV_HOMEPAGE})
    }

    const goToProfilePage = () => {
        changePage({url:NAV_PROFILEPAGE})
    }

    const goToMoviePage = (movieSlug) => {
        changePage({url:NAV_MOVIEPAGE, args:movieSlug})
    }

    const goToSessionsPage = () => {
        changePage({url:NAV_SESSIONSPAGE})
    }

    const nav = {currentPageUrl, changePage, goToHomePage, goToProfilePage, goToSessionsPage, goToMoviePage} 
    console.log(currentPageUrl)
    return (
        <NavContext.Provider value={nav}>
            {currentPageUrl==NAV_HOMEPAGE && 
            <HomePage />   
            }
            {currentPageUrl==NAV_PROFILEPAGE && 
            <ProfilePage />
            }
            {currentPageUrl==NAV_MOVIEPAGE &&
            <MoviePage 
            slug={argsForPage} 
            />
            }
            {currentPageUrl==NAV_SESSIONSPAGE && 
            <SessionsPage />
            }
        </NavContext.Provider>
    )
}

export const useNavbar = () => useContext(NavContext);