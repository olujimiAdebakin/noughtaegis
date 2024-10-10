import React, { useEffect, useState } from "react";
import "./Government.css";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Navbar from "../../Components/Navbar/Navbar";
import Marqee from "../../Reusable/Marqee/Marqee";
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import procurement_cyber from "../../assets/govt.jpg";

const Government = () => {
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
      <div className="government-container" data-aos="fade-up-right">
        <div className="govt-text">
          <p>Comprehensive IT Solutions for Government Agencies</p>
          <h2>
            Enhancing Government Operations with Advanced IT & Cybersecurity
          </h2>
          <p>
            In the public sector, safeguarding sensitive citizen data, ensuring
            efficient administration, and maintaining confidentiality are
            critical to operational success. Government agencies rely on secure,
            cutting-edge technology to manage information, ensure regulatory
            compliance, and protect confidential records. At NoughtAegis, we
            specialize in delivering tailored IT and cybersecurity solutions
            that streamline government operations, mitigate risks, and protect
            public institutions from evolving cyber threats.
          </p>
        </div>
        <div className="education-marqee">{showMarquee && <Marqee />}</div>
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="govt-evolving" data-aos="fade-up-right">
        <div className="govt-evolving-text">
          <h1>Evolving Cybersecurity Landscape in Government</h1>
          <p>
            Government agencies are rapidly adapting to a digital-first
            environment, employing advanced cybersecurity strategies and
            technologies to protect sensitive information. As public
            institutions increasingly rely on digital systems, they face
            significant challenges related to data breaches, privacy concerns,
            and regulatory compliance.
          </p>
        </div>
        <div className="govt evolving-image">
          <img src={procurement_cyber} alt="Cybersecurity in Education" />
        </div>
      </div>

      <div className="govt-challenge-container" data-aos="fade-up-right">
        <h1>Cybersecurity Hurdles in Government</h1>
        <p>
          The primary hurdles in cybersecurity management within government
          agencies include:
        </p>

        <div className="govt-challenge-box">
          <div className="govt-challenge-card">
            <h2>Data Protection</h2>
            <p>
              Ensuring the security of sensitive student and faculty information
              against breaches and unauthorized access, which is increasingly
              challenging in a digital learning environment.
            </p>
          </div>
          <div className="govt-challenge-card">
            <h2>Network Security</h2>
            <p>
              Maintaining secure networks to protect against cyber threats,
              including ransomware and phishing attacks that target educational
              institutions.
            </p>
          </div>
          <div className="govt-challenge-card">
            <h2>Compliance with Regulations</h2>
            <p>
              Adhering to legal and regulatory requirements related to data
              privacy and cybersecurity, which can vary across jurisdictions and
              impact how institutions manage data.
            </p>
          </div>
        </div>
      </div>

      <div className="govt-role-content" data-aos="fade-up-right">
        <h1>Noughtaegis in Empowering Government Agencies:</h1>
        <p>
          Noughtaegis provides a comprehensive suite of IT and cybersecurity
          solutions designed to address the unique challenges faced by
          government agencies:
        </p>

        <div className="govt-role-box">
          <div className="govt-role-card">
            <h2>Data Protection and Privacy</h2>
            <p>
              Implementing advanced encryption and access controls to safeguard
              sensitive student and faculty information, ensuring compliance
              with regulations like FERPA.
            </p>
          </div>

          <div className="govt-role-card">
            <h2>Threat Detection and Response</h2>
            <p>
              Utilizing real-time monitoring and threat intelligence to detect
              and respond to cyber threats swiftly, minimizing potential impacts
              on learning environments.
            </p>
          </div>

          <div className="govt-role-card">
            <h2>Training and Awareness Programs</h2>
            <p>
              Providing comprehensive training for staff and students on
              cybersecurity best practices, empowering them to recognize and
              mitigate risks effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="govt-trend" data-aos="fade-up-right">
        <h1>Government Trends</h1>
        <p>
          Significant trends shaping government agencies' strategies include:
        </p>

        <div className="govt-trend-card">
          <div className="govt-trend-box">
            <div className="govt-trend-text">
              <h3>Digital Governance Platforms</h3>
              <p>
                With the rise of digital transformation, over 70% of government
                agencies are adopting digital platforms to enhance public
                service delivery and operational efficiency.
              </p>
            </div>
            <div className="govt-trend-image">
              <img src={RedChart} alt="Digital Learning" />
            </div>
          </div>
          <div className="govt-trend-box">
            <div className="govt-trend-text">
              <h3>Cybersecurity in Government</h3>
              <p>
                As cyber threats increase, nearly 60% of government leaders are
                prioritizing cybersecurity measures to protect sensitive citizen
                data and ensure compliance with data protection regulations.
              </p>
            </div>
            <div className="govt-trend-image">
              <img src={BlueChart} alt="Cybersecurity in Education" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Government;
