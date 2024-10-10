import React, { useEffect, useState } from "react";
import "./Telecommunication.css";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Navbar from "../../Components/Navbar/Navbar";
import Marqee from "../../Reusable/Marqee/Marqee";
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import telecom_image from "../../assets/teleecom.jpg";

const Telecommunication = () => {
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

      <div className="telecom-container" data-aos="fade-up-right">
        <div className="telecom-text">
          <p>EFFICIENT TELECOMMUNICATION</p>
          <h2>
            Advanced <span className="procurement">Cybersecurity</span>{" "}
            Solutions for Telecommunications
          </h2>
          <p>
            Our expertise in cybersecurity ensures that telecommunication
            providers can procure the right technology and services securely and
            effectively. We offer comprehensive frameworks to protect critical
            data, including customer information and communication logs,
            throughout the procurement process. By implementing strong
            cybersecurity measures, telecom companies can mitigate risks
            associated with data breaches and ensure compliance with industry
            regulations.
          </p>
        </div>
        <div className="education-marqee">{showMarquee && <Marqee />}</div>
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="telecom-evolving" data-aos="fade-up-right">
        <div className="telecom-evolving-text">
          <h1>Evolving Cybersecurity Landscape in Telecommunications</h1>
          <p>
            Telecommunication providers are rapidly adapting to an increasingly
            digital environment, employing advanced cybersecurity strategies and
            technologies to safeguard critical data. As networks and
            communication systems become more reliant on digital infrastructure,
            the industry faces growing challenges related to data breaches,
            privacy concerns, and regulatory compliance.
          </p>
        </div>
        <div className="telecom-evolving-image">
          <img src={telecom_image} alt="Cybersecurity in Telecommunication" />
        </div>
      </div>

      <div className="telecom-challenge-container" data-aos="fade-up-right">
        <h1>Cybersecurity Hurdles in Telecommunications</h1>
        <p>
          The primary hurdles in cybersecurity management within the
          telecommunications sector include:
        </p>

        <div className="telecom-challenge-box">
          <div className="telecom-challenge-card">
            <h2>Data Protection</h2>
            <p>
              Ensuring the security of sensitive student and faculty information
              against breaches and unauthorized access, which is increasingly
              challenging in a digital learning environment.
            </p>
          </div>
          <div className="telecom-challenge-card">
            <h2>Network Security</h2>
            <p>
              Maintaining secure networks to protect against cyber threats,
              including ransomware and phishing attacks that target educational
              institutions.
            </p>
          </div>
          <div className="telecom-challenge-card">
            <h2>Compliance with Regulations</h2>
            <p>
              Adhering to legal and regulatory requirements related to data
              privacy and cybersecurity, which can vary across jurisdictions and
              impact how institutions manage data.
            </p>
          </div>
        </div>
      </div>

      <div className="telecom-role-content" data-aos="fade-up-right">
        <h1>
          Noughtaegis: Pioneering Next-Generation Cybersecurity Solutions for
          Telecommunications
        </h1>
        <p>
          Noughtaegis delivers comprehensive cybersecurity innovations that
          address the unique challenges telecommunication providers face in
          today’s digital landscape. Our approach integrates the following key
          strategies:
        </p>

        <div className="telecom-role-box">
          <div className="telecom-role-card">
            <h2>Data Protection and Privacy</h2>
            <p>
              Implementing advanced encryption and access controls to safeguard
              sensitive student and faculty information, ensuring compliance
              with regulations like FERPA.
            </p>
          </div>

          <div className="telecom-role-card">
            <h2>Threat Detection and Response</h2>
            <p>
              Utilizing real-time monitoring and threat intelligence to detect
              and respond to cyber threats swiftly, minimizing potential impacts
              on learning environments.
            </p>
          </div>

          <div className="telecom-role-card">
            <h2>Training and Awareness Programs</h2>
            <p>
              Providing comprehensive training for staff and students on
              cybersecurity best practices, empowering them to recognize and
              mitigate risks effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="telecom-trend" data-aos="fade-up-right">
        <h1>Telecommunication Trends</h1>
        <p>
          The telecommunication sector is experiencing significant evolution,
          including:
        </p>
        <div className="telecom-trend-card">
          <div className="telecom-trend-box">
            <div className="telecom-trend-text">
              <h3>Digital Communication Platforms</h3>
              <p>
                With the rise of digital communication, over 70% of
                telecommunication providers are adopting advanced communication
                platforms to enhance connectivity and customer experiences.
              </p>
            </div>
            <div className="telecom-trend-image">
              <img src={RedChart} alt="Digital Learning" />
            </div>
          </div>
          <div className="telecom-trend-box">
            <div className="telecom-trend-text">
              <h3>Cybersecurity in Telecommunications</h3>
              <p>
                As cyber threats continue to rise, nearly 60% of
                telecommunication leaders are prioritizing cybersecurity
                measures to protect sensitive customer data and ensure
                compliance with industry regulations.
              </p>
            </div>
            <div className="telecomtrend-image">
              <img src={BlueChart} alt="Cybersecurity in Telecommunication" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Telecommunication;
