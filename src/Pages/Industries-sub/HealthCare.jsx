import React from 'react'
import './healthcare.css'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Health from '../../assets/health.jpg'
import Slide from '../../Reusable/Slide';
import Certification from '../../Components/Certification/Certification';
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp"
import Footer from '../../Components/Footer/Footer';

const HealthCare = () => {
  return (
    <div>
      <Navbar />

      <div className="healthcare-container" data-aos="fade-up-right">
        <div className="healthcare-text">
          <p>PROFICIENT HEALTHCARE</p>
          <h2>
            Revolutionary <span className='care'>Healthcare</span> IT Management and
            Cybersecurity Solutions
          </h2>
          <p>
            In the rapidly evolving healthcare industry, effective IT management
            and robust cybersecurity are not just beneficial—they are important.
            As healthcare organizations handle sensitive data, including
            personal health information, the stakes for IT security and
            efficiency are exceptionally high. Nouthaegis stands at the
            forefront of providing visionary IT and cybersecurity solutions that
            cater specifically to the needs of the healthcare sector.
          </p>
        </div>
      </div>

      <Testimonial />

      <div className="evolving" data-aos="fade-up-right">
        <div className="evolving-text">
          <h1>Evolving Healthcare IT Landscape</h1>
          <p>
            Healthcare organizations are embracing digital transformation,
            leveraging technologies like electronic health records (EHRs) to
            telemedicine platforms to improve healthcare delivery. This digital
            shift, while enhancing the capability and efficiency of healthcare
            services, also introduces significant cybersecurity challenges.
            According to recent studies, the healthcare industry experienced a
            55% increase in cyberattacks last year alone, this highlight an
            urgent need for advanced cybersecurity solution to save guard
            patient data and maintain operational integrity
          </p>
        </div>
        <div className="evolving-image">
          <img src={Health} alt="" />
        </div>
      </div>

      <div className="challenge-container" data-aos="fade-up-right">
        <h1>Medical IT Hurdles</h1>
        <p>The primary hurdles in healthcare IT management include</p>

        <div className="challenge-box">
          <div className="challenge-card">
            <h2>Compliance</h2>
            <p>
              Adhering to stringent regulations such as NHA in Nigeria, which
              mandates the protection of patient data.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Data Security</h2>
            <p>
              Ensuring the scurity, integrity, and accessibility of patient data
              across platforms.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Operational Continuity</h2>
            <p>
              Maintaining uninterrupted operations despite IT disruptions,
              system downtimes, or cyber attacks.Ensuring Minimal impact on
              business peformance and customer experience.
            </p>
          </div>
        </div>
      </div>

      {/* <Certification /> */}

      <div className="health-role-content" data-aos="fade-up-right">
        <h1>
          Noughtaegis : Pioneering Next-Generation Healthcare IT Solutions
        </h1>
        <p>
          Noughtaegis provides encompassing IT and cybersecurity innovations
          that address these challenges head-on. Our approach integrates the
          following key strategies
        </p>

        <div className="health-role-box">
          <div className="health-role-card">
            <h2>Data Compliance Assurance</h2>
            <p>
              Offering tools and expertise to ensure continuous compliance with
              healthcare regulations
            </p>
          </div>

          <div className="health-role-card">
            <h2>Advanced Threat Protection</h2>
            <p>
              Utilizing cutting-edge technologies to detect and mitigate threats
              before they impact healthcare operations
            </p>
          </div>

          <div className="health-role-card">
            <h2>Proactive IT Management</h2>
            <p>
              Employing a proactive approach to manage and update IT
              infrastructure, ensuring minimal downtime and enhanced performance
            </p>
          </div>
        </div>
      </div>

      <div className="trend" data-aos="fade-up-right">
        <h1> Data Trends</h1>
        <p>
          The healthcare sector is witnessing significant IT evolution,
          including
        </p>
        <div className="trend-card">
          <div className="trend-box">
            <div className="trend-text">
              <h3>Telehealth Revolution</h3>
              <p>
                With over 70% of hospitals globally integrating telehealth
                services post-pandemic, the demand for secure, scalable and
                reliable IT infrastructure has skyrocketted.
              </p>
            </div>
            <div className="trend-image">
              <img src={RedChart} alt="" />
            </div>
          </div>
          <div className="trend-box">
            <div className="trend-text">
              <h3>Ai: The next frontier of innovation</h3>
              <p>
                Over 60% of healthcare providers are planning to massively
                investment in AI technologies, aiming to ehance and modernize
                diagnostics and patient care
              </p>
            </div>
            <div className="trend-image">
              <img src={BlueChart} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HealthCare