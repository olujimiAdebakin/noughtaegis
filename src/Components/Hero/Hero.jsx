import React from 'react'
import './Hero.css'
import backgroundVideo from '../../assets/bg-video.mp4'

const Hero = () => {
  return (
    <div className="hero" data-aos="fade-up-right">
      {/* <div className="bg-video">
        <video autoPlay muted loop className="hero-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div> */}

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
        <p>
          DevCent provides expert cybersecurity and managed IT services,
          delivering tailored solutions to protect your digital assets. Secure
          your future with us today.
        </p>

        <div className="flex-hero">
          <button className='buttonn'>Contact Us</button>
          <button>Learn More About Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default Hero