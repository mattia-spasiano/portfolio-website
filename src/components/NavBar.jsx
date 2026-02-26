import Navigation from "./Navigation";
import { useLocation } from 'react-router-dom';

export default function NavBar({ isItalian, setIsItalian }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/'


    return (
        <> 
            <nav className="navbar">
                <div className="nav-title">
                    <strong>Portfolio</strong>
                </div>
                {isHomePage ? '' : <Navigation isItalian={isItalian} />}
            </nav>
        </>
    )
}