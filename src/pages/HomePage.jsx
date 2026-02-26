import NavBar from "../components/NavBar";
import Navigation from "../components/Navigation";

export default function HomePage({isItalian, setIsItalian}) {

    return (
        <>
            <NavBar
                isItalian={isItalian}
                setIsItalian={setIsItalian} />
            <div className="section-title">
                    <img src="../src/assets/home.svg" alt="" />
            </div>
            <div className="content g-2 flex">
                <div className="left-side">
                    <p>{isItalian ? 'Ciao! Il mio nome è ' : 'Hi! My name is '}
                        <strong>Mattia!</strong>
                        {isItalian ? ' Ma se vuoi puoi chiamarmi Matt.' : ' But if you wish you can call me Matt' }
                    </p>
                    <p>{isItalian ? 'Sono un designer Italiano, appassionato di videogiochi e del mondo digitale. La mia specializzazione?' :
                         'I am an italian designer with a passion for videogames and the digital world. I mainly focus on'}
                         <strong>{isItalian ? ' UI/UX Design e Sviluppo Web!' : ' UI/UX Design & Web Development!'}</strong>
                        {isItalian ? ' Se ti va di saperne di più, allora esplora il mio sito web!' :
                         ' If you wish to know more about me, explore my website!'}
                    </p>
                </div>
                <div className="right-side">
                    <Navigation 
                        isItalian={isItalian}
                        setIsItalian={setIsItalian}/>
                </div>
            </div>
        </>
    )
}