import { useLocation, Link } from "react-router-dom"
import { IoClose } from 'react-icons/io5'

export default function Navigation({ isItalian, isMenuOpen, setIsMenuOpen }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    console.log('isItalian', isItalian)
    const handleCloseMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <div className={`${isHomePage ? 'home-menu' : 'navigation-menu'} ${isMenuOpen ? 'open' : ''}`}> {/*Da aggiungere la classe condizionale per la sidebar*/}
            <ul>
                {/* {isMenuOpen ? 
                <li className="icon-close" onClick={handleCloseMenu}>
                    <IoClose size={30} />            
                </li>
                : ''} */}
                <li className={`${isMenuOpen ? 'close-visible' : 'close-hidden'} desktop`}>
                    <IoClose size={35} onClick={handleCloseMenu}/> 
                </li>
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