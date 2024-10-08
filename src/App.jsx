
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Solution from './Pages/Solutions/Solution';
import ContactForm from './Pages/ContactForm/ContactForm';
import WhyDevcent from './Pages/WhyDevcent/WhyDevcent';
import Career from './Pages/Career/Career';
import CyberServices from './Pages/Services-sub/CyberServices';
import ItServices from './Pages/Services-sub/ItServices';
import CloudService from './Pages/Services-sub/CloudService';
import CyberAwareness from './Pages/Services-sub/CyberAwareness';
import ItStrategy from "./Pages/Services-sub/ItSrategy"
import ProffesionalServices from './Pages/Services-sub/ProffesionalServices';
import TailoredSolutions from './Pages/Services-sub/TailoredSolutions';
import HealthCare from './Pages/Industries-sub/HealthCare';
import NonProfit from './Pages/Industries-sub/NonProfit';
import ManuFacturing from './Pages/Industries-sub/ManuFacturing';
import LawFirm from './Pages/Industries-sub/LawFirm';


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

          {/* PAGES */}

          <Route path="/solutions" element={<Solution />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/whydevcent" element={<WhyDevcent />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contactform" element={<ContactForm />} />

          {/* services-Sub-pages */}

          <Route path="/Cyber-awareness" element={<CyberAwareness />} />
          <Route path="/Cyber-services" element={<CyberServices />} />
          <Route path="/It-services" element={<ItServices />} />
          <Route path="/it-strategy" element={<ItStrategy />} />
          <Route
            path="/proffessional-services"
            element={<ProffesionalServices />}
          />
          <Route path="/tailored-solutions" element={<TailoredSolutions />} />
          <Route path="/cloud-services" element={<CloudService />} />

          {/* Industries-sub-pages */}

          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/non-profit" element={<NonProfit />} />
          <Route path="/manufacturing" element={<ManuFacturing />} />
          <Route path="/law-firm" element={<LawFirm/>} />
        </Routes>
      </div>
    </>
  );
}

export default App
