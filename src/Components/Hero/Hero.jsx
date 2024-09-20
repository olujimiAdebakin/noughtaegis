import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Protect Your Firm <br /> Optimize Your IT.
      </h1>

      <div className="hero-paragraph">
        <p>
          DevCent provides expert cybersecurity and managed IT services,
          delivering tailored solutions to protect your digital assets. Secure
          your future with us today.
        </p>

        <div className="flex-hero">
          <button>Contact Us</button>
          <button>Learn More About Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default Hero