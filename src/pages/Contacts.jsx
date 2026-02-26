import { useState } from "react";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

export default function Contacts({ isItalian, setIsItalian }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleCode = () => {
        setIsModalOpen(!isModalOpen);
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
                {isModalOpen ? 
                <Modal
                    isItalian={isItalian}
                    setIsItalian={setIsItalian}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}/> : ''}
                <div className="contacts-content">
                    <p className="contacts">{isItalian ? 'Vuoi contattarmi? Puoi trovarmi sulla maggior parte dei social! Scrivimi su LinkedIn oppure Instagram, se vuoi anche vedere i miei progetti! Oppure scannerizza il QR Code di WhatsApp: più semplice e veloce!'
                        : 'You wanna get in touch? You can find me on most social media! Shoot me a message on LinkedIn or Instagram, if you wanna see my latest projects! Or scan the QR Code to write me on WhatsApp, fast and simple!'}</p>
                    <div className="socials-section">
                        <button className="btn">Instagram</button>
                        <button className="btn">LinkedIn</button>
                        <button className="btn">E-Mail</button>
                        <button className="btn" onClick={toggleCode}>WhatsApp</button>
                    </div>
                </div>
            </div>
        </>
    )
}