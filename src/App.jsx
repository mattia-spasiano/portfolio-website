import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [isItalian, setIsItalian] = useState(true);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  const toggleLanguage = () => {
    setIsItalian(!isItalian);
  }


  return (
    <>
      <div className='app-wrapper'>
        <div className="options">
          {/* <div onClick={toggleDarkMode} className='drkmode'>
            DARKMODE
          </div> 
          Will implement darkmode in the future*/} 
          <div onClick={toggleLanguage} className="lang">
            {isItalian ? 'IT' : 'EN'}
          </div>
        </div>
        <div className='app-container'>
          <Routes>
            <Route
              path='/'
              element={<HomePage
                isItalian={isItalian}
                setIsItalian={setIsItalian} />} />
            <Route
              path='/About'
              element={<About
                isItalian={isItalian}
                setIsItalian={setIsItalian} />} />
            <Route
              path='/Contacts'
              element={<Contacts
                isItalian={isItalian}
                setIsItalian={setIsItalian} />} />
            <Route
              path='/Projects'
              element={<Projects
                isItalian={isItalian}
                setIsItalian={setIsItalian} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App