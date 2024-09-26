import React, { useEffect, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";
import Marqee from "../../Reusable/Marqee/Marqee";

const Hero = () => {
    const heroRef = useRef(null);
   const spotlightRefs = useRef([]);

   useEffect(() => {
     spotlightRefs.current.forEach((spotlight) => {
       gsap.to(spotlight, {
         x: `${Math.random() * 400}%`,
         y: `${Math.random() * 100}%`,
         duration: Math.random() * 6 + 2,
         repeat: -1,
         yoyo: true,
         ease: "power2.inOut",
       });
     });
   }, []);

   
   const addSpotlight = (el) => {
     if (el && !spotlightRefs.current.includes(el)) {
       spotlightRefs.current.push(el);
     }
   };

  return (
    <div className="hero" data-aos="fade-up-right" ref={heroRef}>
      {/* <div className="spotlight" ref={spotlightRef}></div> */}
      <div className="spotlight" ref={addSpotlight}></div>
      <div className="spotlight" ref={addSpotlight}></div>
      <div className="spotlight" ref={addSpotlight}></div>
      <div className="spotlight" ref={addSpotlight}></div>
      <div className="hero-design">
        <div className="hero-flex">
          <span> Protect </span>

          <span> Your Firm</span>
        </div>
        <div className="hero-optimize">
          <span>Optimize Your IT.</span>
        </div>
        <div className="hero-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
          </svg>
        </div>
      </div>

      <div className="hero-paragraph">
        <p>DevCent: The intersection of innovation and cybersecurity.</p>
      </div>
      <div className="flex-hero">
        <button>
          Get in Touch <IoIosArrowRoundForward style={{ fontSize: "23px" }} />
        </button>
        {/* <button>Learn More About Our Services</button> */}
        <Marqee />
      </div>
    </div>
  );
};

export default Hero;
