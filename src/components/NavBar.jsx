import React from 'react'
import { useState } from "react";
import Navigation from "./Navigation";
import { useLocation } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi'

export default function NavBar({ isItalian, setIsItalian }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/'

    const handleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    console.log(isMenuOpen);
    return (
        <> 
            <nav className="navbar">
                {isHomePage ? '' 
                : 
                <div className="desktop icon" onClick={handleMobileMenu}>
                    <HiOutlineMenu size={35}/>
                </div>}
                <div className="nav-title">
                    <strong>Portfolio</strong>
                </div>
                {isHomePage ? '' 
                : 
                <Navigation 
                 isItalian={isItalian}
                 isMenuOpen={isMenuOpen}
                 setIsMenuOpen={setIsMenuOpen} />}
            </nav>
        </>
    )
}