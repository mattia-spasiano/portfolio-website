import React from 'react'
import { useLocation } from "react-router-dom"
import NavBar from "../components/NavBar"
import ProjectList from "../components/ProjectList"

export default function Projects({ isItalian, setIsItalian }) {

    return (
        <>
            <NavBar
                isItalian={isItalian}
                setIsItalian={setIsItalian} />
            <div className="section-title">
                    <img src="../src/assets/projects.svg" alt="" />
            </div>
            <div className="content g-1 flex">
                <div className="w-5">
                    <p className="fs-2">{isItalian ? 'Benvenuto nei miei progetti!' : 'Welcome to my projects!'}</p>
                    <p className="fs-2">{isItalian ? 'Qui puoi trovare tutti i progetti a cui ho fatto parte, sia per privati che per aziende. Volendo, puoi anche vedere ogni progetto cliccandoci sopra!' : 'Here you can see all the projects I have done for both private people and companies. If you want, you can also view them by clicking on them!'}</p>
                </div>
                <ProjectList
                    isItalian={isItalian}
                    />
            </div>
        </>
    )
}