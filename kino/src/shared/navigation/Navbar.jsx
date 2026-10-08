import { createContext, useContext, useState } from "react";
import HomePage from "../../features/home/pages/HomePage";
import ProfilePage from "../../features/profile/pages/ProfilePage"
import MoviePage from "../../features/buyTickets/pages/MoviePage"
import SessionsPage from '../../features/sessions/pages/SessionsPage'
import {NAV_HOMEPAGE, NAV_PROFILEPAGE, NAV_MOVIEPAGE, NAV_SESSIONSPAGE} from "../../config"

const NavContext = createContext(null);

export default function Nav() {

    const [currentPageUrl, setCurrentPageUrl] = useState("/") //initially default url   
    const [argsForPage, setArgsForPage] = useState(null) //for passsing context to a page from changePage

    const changePage = ({url, args}) => {
        setCurrentPageUrl(url) 
        setArgsForPage(args)
        window.history.pushState({}, "", url)
    }

    const nav = {currentPageUrl, changePage} 
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
            <MoviePage />
            }
            {currentPageUrl==NAV_SESSIONSPAGE && 
            <SessionsPage />
            }
        </NavContext.Provider>
    )
}

export const useNavbar = () => useContext(NavContext);