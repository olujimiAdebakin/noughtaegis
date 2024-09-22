import React from 'react'
import './Solution.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Services from '../../Components/Services/Services'

const Solution = () => {
  return (
    <>
      <div className="solution-hero" data-aos="fade-up-right">
        <div className="solution-hero-design">
          <div className="solution-hero-flex">
            <span> Cyber Attack </span>

            <span>Simulation</span>
          </div>
          <div className="solution-hero-optimize">
            <span>and Defense Testing.</span>
          </div>
          <div className="solution-hero-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
            </svg>
          </div>
        </div>
        <div className="solution-hero-paragraph">
          <p>
            Our solutions are designed with one goal in mind—enhancing your
            security. Rest assured, our thorough testing methods uncover even
            the most elusive vulnerabilities, highlighting their potential risks
            to safeguard your systems.
          </p>
        </div>
      </div>

      <Navbar />
      <Services />
      <Footer />
    </>
  );
}

export default Solution