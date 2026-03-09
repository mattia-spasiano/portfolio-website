import { useState } from "react";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

export default function Contacts({ isItalian, setIsItalian }) {

    const [isWIPModalOpen, setIsWIPModalOpen] = useState(false);

    const handleWIP = (e) => {
        e.preventDefault();
        setIsWIPModalOpen(true);

        setTimeout(() => {
            setIsWIPModalOpen(false);
        }, 2000);
    };

    return (
        <>
            <NavBar
                isItalian={isItalian}
                setIsItalian={setIsItalian} />
            <div className="section-title">
                <img src="../src/assets/contacts.svg" alt="" />
            </div>
            <div className="contacts-section">
                <div className="contacts-content">
                    <p className="contacts">{isItalian ? 'Vuoi contattarmi? Puoi trovarmi sulla maggior parte dei social! Scrivimi su LinkedIn oppure Instagram, se vuoi anche vedere i miei progetti!'
                        : 'You wanna get in touch? You can find me on most social media! Shoot me a message on LinkedIn or Instagram, if you wanna see my latest projects!'}</p>
                    <div className="socials-section">
                        <a href="" className="socials" onClick={handleWIP}>Instagram</a>
                        <a href="https://www.linkedin.com/in/mattia-spasiano-1ab950187" target="_blank" rel="noopener noreferrer" className="socials">LinkedIn</a>
                        <a href="mailto:mattia.dev01@gmail.com" className="socials">E-Mail</a>
                    </div>
                </div>
            </div>
            {isWIPModalOpen && <Modal />}
        </>
    )
}