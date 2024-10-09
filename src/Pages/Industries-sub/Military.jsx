import React, { useEffect, useState } from 'react'
import './Military.css'

import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import Navbar from '../../Components/Navbar/Navbar';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Footer from '../../Components/Footer/Footer';
import Marqee from '../../Reusable/Marqee/Marqee';
import military_cyber from "../../assets/military-cyber.jpg"
import hero_military from "../../assets/military-sergeant.avif"

const Military = () => {

    
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

      <div className="military-container" data-aos="fade-up-right">
        <div className="healthcare-text">
          <p>PROFICIENT MILITARY CYBERSECURITY</p>
          <h2>
            Advanced <span className="security">Military Cybersecurity</span>{" "}
            Solutions
          </h2>
          <p>
            Our expertise ensures that military networks remain secure and
            resilient against evolving cyber threats. We provide comprehensive
            assessments, real-time monitoring, and incident response strategies
            designed to protect critical infrastructure and sensitive
            information. With Nouthaegis, military organizations can focus on
            their mission while we safeguard their digital assets.
          </p>
        </div>
        <div className="military-marqee">{showMarquee && <Marqee />}</div>
      </div>

      <Testimonial />

      <div className="evolving" data-aos="fade-up-right">
        <div className="evolving-text">
          <h1>Evolving Military Cybersecurity Landscape</h1>
          <p>
            Military organizations are rapidly adapting to a digital-first
            environment, employing technologies such as secure communication
            systems and advanced data analytics to enhance operational
            efficiency. However, this digital transformation brings significant
            cybersecurity challenges. Recent reports indicate a substantial
            increase in cyberattacks targeting military networks, underscoring
            the urgent need for robust cybersecurity solutions to protect
            sensitive information and ensure mission readiness.
          </p>
        </div>
        <div className="evolving-image">
          <img src={military_cyber} alt="Military Cybersecurity" />
        </div>
      </div>
      <div className="challenge-container" data-aos="fade-up-right">
        <h1>Military IT Hurdles</h1>
        <p>The primary hurdles in military IT management include</p>

        <div className="challenge-box">
          <div className="challenge-card">
            <h2>Data Security</h2>
            <p>
              Protecting sensitive military information from cyber threats and
              ensuring that classified data remains secure across all
              communication platforms.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Interoperability</h2>
            <p>
              Ensuring seamless communication and data sharing between various
              branches of the military and allied forces, despite differing
              systems and protocols.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Operational Readiness</h2>
            <p>
              Maintaining IT systems that are ready for rapid deployment and
              operational effectiveness, even in hostile environments or under
              significant resource constraints.
            </p>
          </div>
        </div>
      </div>

      <div className="health-role-content" data-aos="fade-up-right">
        <h1>Noughtaegis: Pioneering Next-Generation Military IT Solutions</h1>
        <p>
          Noughtaegis delivers comprehensive IT and cybersecurity innovations
          that tackle military challenges head-on. Our approach integrates the
          following key strategies:
        </p>

        <div className="health-role-box">
          <div className="health-role-card">
            <h2>Secure Communication Systems</h2>
            <p>
              Implementing robust communication tools to ensure secure and
              reliable information sharing across all military branches.
            </p>
          </div>

          <div className="health-role-card">
            <h2>Real-Time Threat Intelligence</h2>
            <p>
              Leveraging advanced technologies to provide real-time intelligence
              on cyber threats, allowing for swift mitigation and response.
            </p>
          </div>

          <div className="health-role-card">
            <h2>Operational Continuity Solutions</h2>
            <p>
              Ensuring that IT infrastructure remains operational during
              missions and emergencies, minimizing disruption and maximizing
              effectiveness.
            </p>
          </div>
        </div>
      </div>

      <div className="trend" data-aos="fade-up-right">
        <h1>Military IT Trends</h1>
        <p>
          The military sector is experiencing significant IT evolution,
          including:
        </p>
        <div className="trend-card">
          <div className="trend-box">
            <div className="trend-text">
              <h3>Advanced Cyber Defense Systems</h3>
              <p>
                With cyber threats on the rise, over 75% of military
                organizations are investing in next-gen cyber defense solutions
                to protect sensitive information and maintain operational
                integrity.
              </p>
            </div>
            <div className="trend-image">
              <img src={RedChart} alt="Advanced Cyber Defense" />
            </div>
          </div>
          <div className="trend-box">
            <div className="trend-text">
              <h3>AI-Powered Decision Making</h3>
              <p>
                Nearly 65% of military leaders are planning to invest in AI
                technologies to enhance strategic decision-making, logistics,
                and battlefield simulations.
              </p>
            </div>
            <div className="trend-image">
              <img src={BlueChart} alt="AI-Powered Decision Making" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Military