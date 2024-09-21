
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200, 
      easing: "ease-in-out", 
      once: true,
    }); 
  }, []);

  return (
    <>
      <div className="app">
        {/* <meta name="color-scheme" content="dark" /> */}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App
