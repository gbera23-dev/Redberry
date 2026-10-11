import { createContext, useContext, useState, useEffect } from "react";
import HomePage from "../../features/home/pages/HomePage";
import ProfilePage from "../../features/profile/pages/ProfilePage"
import MoviePage from "../../features/buyTickets/pages/MoviePage"
import SessionsPage from '../../features/sessions/pages/SessionsPage'
import { BookingProvider } from "../../features/buyTickets/context/BookingContext";

export const NAV_HOMEPAGE = "/"
export const NAV_PROFILEPAGE = "/profile"
export const NAV_MOVIEPAGE = "/buy-tickets"
export const NAV_SESSIONSPAGE = "/sessions"

const NavContext = createContext(null);

export default function Nav() {
    const [currentPageUrl, setCurrentPageUrl] = useState("/")   
    const [argsForPage, setArgsForPage] = useState(null) 

    const changePage = ({url, args, search}) => {
        if (url === NAV_SESSIONSPAGE && search !== undefined) {
            const fullUrl = search ? `${url}?${search}` : url;
            setCurrentPageUrl(url);
            setArgsForPage(null);
            window.history.pushState({}, "", fullUrl);
            return;
        }

        const toAddToUrl = args != null ? "/"+args : "" 
        setCurrentPageUrl(url+toAddToUrl) 
        setArgsForPage(args)
        window.history.pushState({}, "", url+toAddToUrl)
    }

    const goToHomePage = () => {
        changePage({url:NAV_HOMEPAGE})
    }

    const goToProfilePage = (whichTab) => {
        changePage({url:NAV_PROFILEPAGE, args:whichTab})
    }

    const goToMoviePage = (movieSlug) => {
        changePage({url:NAV_MOVIEPAGE, args:movieSlug})
    }

    const goToSessionsPage = ({filters, searchString}) => {
        let search = searchString;
        if (!search && filters) {
            const params = new URLSearchParams();
            Object.entries(filters).forEach(([key, value]) => {
                if (Array.isArray(value) && value.length > 0) {
                    params.set(key, value.join(","));
                } else if (value) {
                    params.set(key, value);
                }
            });
            search = params.toString();
        }
        changePage({url: NAV_SESSIONSPAGE, search});
    }

    const nav = {currentPageUrl, changePage, goToHomePage, goToProfilePage, goToSessionsPage, goToMoviePage}

    useEffect(() => {
        setCurrentPageUrl(window.location.pathname)
    }, [window.location.pathname]);

    return (
        <NavContext.Provider value={nav}>
            <BookingProvider>
            {currentPageUrl==NAV_HOMEPAGE && 
            <HomePage />   
            }
            {currentPageUrl==(NAV_PROFILEPAGE+"/"+argsForPage) && 
            <ProfilePage 
            whichTab={argsForPage}
            />
            }
            {currentPageUrl==(NAV_MOVIEPAGE+"/"+argsForPage) &&
            <MoviePage 
            slug={argsForPage} 
            />
            }
            {currentPageUrl.startsWith(NAV_SESSIONSPAGE) && 
            <SessionsPage />
            }
            </BookingProvider>
        </NavContext.Provider>
    )
}

export const useNavbar = () => useContext(NavContext);