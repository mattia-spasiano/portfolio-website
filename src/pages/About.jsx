import HomePage from "./HomePage";
import NavBar from "../components/NavBar";

export default function About({ isItalian, setIsItalian }) {

    return (
        <>

            <NavBar
                isItalian={isItalian}
                setIsItalian={setIsItalian} />
            <div className="section-title">
                <img src="../src/assets/about.png" alt="" />
            </div>
            <div className="about-section content flex-col">
                <p className="presentation">{isItalian ? 'Come sai mi chiamo Mattia! Se vuoi sapere qualcosa su di me, sappi che sono un nerd. Videogiochi, anime, qualsiasi cosa da nerd che tu possa pensare, probabilmente mi interessa!'
                    : 'If you wanna know more about me, take a look at my resume! You can see my experiences, my education and everything you my need about my Career!'}</p>
                <p><strong>{isItalian ? 'Ma se vuoi sapere di più sulle mie skill, allora clicca qui sotto!' : ''}</strong></p>
                <div className="cta">
                    <img src="../src/assets/link icon.svg" alt="" />
                    <button className="btn"><strong>{isItalian ? 'Curriculum' : 'Resume'}</strong></button>
                </div>
            </div>
        </>
    )
}