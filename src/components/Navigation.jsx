import { useLocation, Link } from "react-router-dom"

export default function Navigation({ isItalian }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    console.log('isItalian', isItalian)

    return(
        <div className={isHomePage ? 'home-menu' : 'navigation-menu'}> {/*Da aggiungere la classe condizionale per la sidebar*/}
            <ul>
                {isHomePage ? '' :
                <li>
                    <Link to="/">
                        HOME
                    </Link>
                </li>}
                <li>
                    <Link to="/About">
                        {isHomePage ? '• ' : ''}{isItalian ? 'CHI SONO' : 'ABOUT'}
                    </Link>
                </li>
                <li>
                    <Link to="/Contacts">
                        {isHomePage ? '• ' : ''}{isItalian ? 'SCRIVIMI' : 'CONTACTS'}
                    </Link>
                </li>
                <li>
                    <Link to="/Projects">
                        {isHomePage ? '• ' : ''}{isItalian ? 'PROGETTI' : 'PROJECTS'}
                    </Link>
                </li>
            </ul>
        </div>
    )
}