import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import Contacts from '../pages/Contacts';

export default function Modal({ isItalian, setIsItalian, isModalOpen, setIsModalOpen }) {

    const toggleCloseModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <>
            <div className="modal">
                <div className='close-btn'>
                    <span onClick={toggleCloseModal}><AiOutlineClose size={24}/> </span>
                </div>
                <div className='modal-content'>
                    <p>{isItalian ? 'Scrivimi un messaggio su qualsiasi cosa tu voglia! Ti risponderò il prima possibile!' : 'Shoot me a message! I will get to you as soon a possible!'}</p>
                    <img src="https://placehold.co/225x225" alt="" />
                </div>
            </div>
        </>
    )
}