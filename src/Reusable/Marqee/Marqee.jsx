import React, { useEffect, useRef, useState } from 'react'
import './Marqee.css'

const Marqee = () => {

      const [offset, setOffset] = useState(0);
    const marqueeRef = useRef(null);
    
     useEffect(() => {
       const marqueeWidth = marqueeRef.current.offsetWidth;
       const containerWidth = marqueeRef.current.parentElement.offsetWidth;

       const scrollSpeed = 1; // Adjust this value for faster/slower scrolling
       const intervalId = setInterval(() => {
         setOffset((prevOffset) => {
           const resetPosition = -marqueeWidth;
           if (prevOffset <= resetPosition) {
             return 0;
           }
           return prevOffset - scrollSpeed;
         });
       }, 17);
       return () => clearInterval(intervalId); // Cleanup interval on component unmount
     }, []);

  return (
    <>
      <div className="marqee">
        <div
          className="marqee-content"
          ref={marqueeRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <h1>
            Welcome to NoughtAegis - Your Gateway to Tech Excellence in
            Cybersecurity! | Protect Your Digital World with Advanced Security
            Solutions | Stay One Step Ahead of Cyber Threats with Our
            Cutting-Edge Cybersecurity Courses and Certifications | Empower Your
            Future in Cybersecurity Today!
          </h1>

          <h1>
            Our Services - Safeguard Your Business with NoughtAegis! | Cyber
            Risk Assessments | Network Security | Cloud Security | Incident
            Response | Compliance & Regulatory Solutions | Vulnerability
            Management | Stay Secure and Compliant with Industry-Leading
            Cybersecurity Services from NoughtAegis!
          </h1>

          <h1>
            Industries We Serve - Tailored Cybersecurity Solutions for Every
            Sector | Finance | Healthcare | Retail | Government | Technology |
            Manufacturing | Defense | Whether You’re a Startup or a Global
            Enterprise, NoughtAegis Protects Your Critical Infrastructure and
            Data!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Marqee