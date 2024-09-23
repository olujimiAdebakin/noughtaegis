import React from 'react'
import './Solution.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Services from '../../Components/Services/Services'
import packett from '../../assets/packett.webp'
import { Link } from 'react-router-dom'
import Slide from '../../Reusable/Slide'

const Solution = () => {
  return (
    <>
      <Navbar />
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

      <Services />
      <div className="industries-roles">
        <h2>Industries & Roles We Help</h2>
        <div className="industries-roles-flex">
          <div className="industries-left">
            <h3>Roles We Work With</h3>
            <ul>
              <li>Executive</li>
              <li>Security Program Leader</li>
              <li>Web/App Development Agency</li>
              <li>IT Professional</li>
              <li>Lawyers</li>
              <li>Managed Service Provider</li>
              <li>Procurement</li>
            </ul>
          </div>
          <div className="industries-right">
            <h3>Industries We&apos;ve Helped</h3>
            <ul>
              <li>Retail/Ecommerce</li>
              <li>Government</li>
              <li>Finance</li>
              <li>Utilities/Energy</li>
              <li>Technology</li>
              <li>Education</li>
              <li>HealthCare</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="partner-program">
        <div className="partner-flex">
          <img src={packett} alt="" />
          <div className="partner-right">
            <h2>Partner Program</h2>
            <p>
              Together with our trusted partners, we forge lasting bonds,
              driving world-class cybersecurity that surpasses mere compliance
              and delivers true protection.
            </p>
            <Link to="/contactform">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Slide/> */}
      <Footer />
    </>
  );
}

export default Solution