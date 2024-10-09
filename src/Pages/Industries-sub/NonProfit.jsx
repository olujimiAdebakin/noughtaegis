import React, { useEffect, useState } from 'react'
import './nonprofit.css'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Landscape from '../../assets/nonP.avif' 
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import Footer from '../../Components/Footer/Footer';
import Marqee from '../../Reusable/Marqee/Marqee';

const NonProfit = () => {

  
  
    const [showMarquee, setShowMarquee] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowMarquee(false);
      } else {
        // Scrolling up
        setShowMarquee(true);
      }
      setLastScrollY(currentScrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);
  
  return (
    <div>
      <Navbar />

      <div className="nonprofit-container">
        <div className="nonprofit-text">
          <p>SEAMLESS IT SERVICES FOR Non-Profits</p>
          <h2>Enhancing IT and Cybersecurity for Non-Profit Organizations</h2>
          <p>
            In the non-profit sector, where resources are often constrained and
            data sensitivity is critical, effective IT management and strong
            cybersecurity are essential. Non-profits manage sensitive donor
            information and handle significant data crucial to their operations
            and mission success. CyberDuo is dedicated to providing high-quality
            IT management and cybersecurity services specifically designed to
            address the unique challenges faced by non-profit organizations.
          </p>
        </div>
        {showMarquee && <Marqee />}
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="current">
        <div className="current-text">
          <h1>The Present Landscape</h1>
          <p>
            Non-profit organizations are becoming more frequent targets of cyber
            threats due to their valuable donor databases and financial
            transaction records. Recent data shows a 40% rise in cyber incidents
            within the non-profit sector, underscoring the critical need for
            strengthened security measures.
          </p>
        </div>
        <div className="current-image">
          <img src={Landscape} alt="" />
        </div>
      </div>

      <div className="current-container" data-aos="fade-up-right">
        <h1>IT Challenges in the Non-Profit Sector</h1>
        <p>
          The primary IT challenges faced by non-profit organizations include:
        </p>

        <div className="current-box">
          <div className="current-card">
            <h2>Regulatory Compliance</h2>
            <p>
              Adhering to data protection regulations that govern the security
              and privacy of personal information.
            </p>
          </div>
          <div className="current-card">
            <h2>Data Security</h2>
            <p>
              Safeguarding sensitive information, including donor details and
              beneficiary records, from unauthorized access and breaches
            </p>
          </div>
          <div className="current-card">
            <h2>Affordable IT Solutions</h2>
            <p>
              Deploying efficient and cost-effective IT solutions that align
              with the typical budget limitations faced by non-profits..
            </p>
          </div>
        </div>
      </div>

      <div className="current-role-content" data-aos="fade-up-right">
        <h1>Noughtaegis in Empowering Non-Profits</h1>
        <p>
          Noughtaegis provides a comprehensive suite of IT and cybersecurity
          solutions designed to address these specific challenges:
        </p>

        <div className="current-role-box">
          <div className="current-role-card">
            <h2>Affordable Compliance Solutions</h2>
            <p>
              Providing budget-friendly tools and expertise to maintain ongoing
              compliance with diverse regulatory standards
            </p>
          </div>

          <div className="current-role-card">
            <h2>Tailored Cybersecurity Strategies</h2>
            <p>
              Implementing customized cybersecurity measures that address the
              specific needs and vulnerabilities of non-profits.s
            </p>
          </div>

          <div className="current-role-card">
            <h2>Preventive IT Management</h2>
            <p>
              Leveraging affordable, scalable solutions to efficiently manage
              and maintain IT infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="trend" data-aos="fade-up-right">
        <h1> Data Trends</h1>
        <p>
          Significant trends impacting the IT strategies of non-profit
          organizations include:
        </p>
        <div className="trend-card">
          <div className="trend-box">
            <div className="trend-text">
              <h3>Increasing Reliance on Digital Fundraising</h3>
              <p>
                More than 60% of non-profits are increasing their use of digital
                platforms for fundraising, making strong cybersecurity measures
                essential to safeguard online transactions
              </p>
            </div>
            <div className="trend-image">
              <img src={RedChart} alt="" />
            </div>
          </div>
          <div className="trend-box">
            <div className="trend-text">
              <h3>Growing Utilization of Data Analytics</h3>
              <p>
                About 50% of non-profits are using data analytics to improve
                service delivery and donor engagement, emphasizing the
                importance of secure data management systems.
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

export default NonProfit