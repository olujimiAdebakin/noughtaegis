import React, { useEffect, useState } from "react";
import "./BankFinance.css";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Navbar from "../../Components/Navbar/Navbar";
import Marqee from "../../Reusable/Marqee/Marqee";
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import procurement_cyber from "../../assets/finance.avif";
const BankFinance = () => {
    
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

      <div className="banking-container" data-aos="fade-up-right">
        <div className="banking-text">
          <p>EFFICIENT BANKING</p>
          <h2>
            Advanced <span className="procurement">Cybersecurity</span>{" "}
            Solutions for Banking and Financial Services
          </h2>
          <p>
            Our expertise in cybersecurity ensures that financial institutions
            can procure the right technology and services securely and
            efficiently. We provide robust frameworks for protecting sensitive
            data, such as customer information and transaction records, during
            the procurement process. By implementing strong cybersecurity
            measures, financial entities can mitigate risks associated with data
            breaches and ensure compliance with industry regulations.
          </p>
        </div>
        <div className="education-marqee">{showMarquee && <Marqee />}</div>
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="bank-evolving" data-aos="fade-up-right">
        <div className="bank-evolving-text">
          <h1>
            Evolving Cybersecurity Landscape in Banking and Financial Services
          </h1>
          <p>
            Financial institutions are rapidly adapting to a digital-first
            environment, employing advanced cybersecurity strategies and
            technologies to protect sensitive information. As banks and
            financial services increasingly rely on digital tools, they face
            significant challenges related to data breaches, fraud prevention,
            and compliance with regulations.
          </p>
        </div>
        <div className="bank-evolving-image">
          <img src={procurement_cyber} alt="Cybersecurity in Education" />
        </div>
      </div>

      <div className="bank-challenge-container" data-aos="fade-up-right">
        <h1>Cybersecurity Hurdles in Banking and Financial Services</h1>
        <p>
          The primary hurdles in cybersecurity management within the financial
          services sector include:
        </p>

        <div className="bank-challenge-box">
          <div className="bank-challenge-card">
            <h2>Data Protection</h2>
            <p>
              Ensuring the security of sensitive customer and financial
              information against breaches and unauthorized access, which is
              increasingly challenging in a digital banking environment.
            </p>
          </div>
          <div className="bank-challenge-card">
            <h2>Network Security</h2>
            <p>
              Maintaining secure networks to protect against cyber threats,
              including ransomware and phishing attacks that target financial
              institutions.
            </p>
          </div>
          <div className="bank-challenge-card">
            <h2>Compliance with Regulations</h2>
            <p>
              Adhering to legal and regulatory requirements related to data
              privacy and cybersecurity, which can vary across jurisdictions and
              impact how financial institutions manage customer data.
            </p>
          </div>
        </div>
      </div>

      <div className="bank-role-content" data-aos="fade-up-right">
        <h1>
          Noughtaegis: Pioneering Next-Generation Cybersecurity Solutions for
          Banking and Financial Services
        </h1>
        <p>
          Noughtaegis delivers comprehensive cybersecurity innovations that
          address the unique challenges financial institutions face in today's
          digital landscape. Our approach integrates the following key
          strategies:
        </p>

        <div className="bank-role-box">
          <div className="bank-role-card">
            <h2>Data Protection and Privacy</h2>
            <p>
              Implementing advanced encryption and access controls to safeguard
              sensitive customer and financial information, ensuring compliance
              with regulations like GDPR and PCI DSS.
            </p>
          </div>

          <div className="bank-role-card">
            <h2>Threat Detection and Response</h2>
            <p>
              Utilizing real-time monitoring and threat intelligence to detect
              and respond to cyber threats swiftly, minimizing potential impacts
              on financial operations.
            </p>
          </div>

          <div className="bank-role-card">
            <h2>Training and Awareness Programs</h2>
            <p>
              Providing comprehensive training for employees on cybersecurity
              best practices, empowering them to recognize and mitigate risks
              effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="bank-trend" data-aos="fade-up-right">
        <h1>Financial Services Trends</h1>
        <p>
          The banking and financial services sector is experiencing significant
          evolution, including:
        </p>

        <div className="bank-trend-card">
          <div className="bank-trend-box">
            <div className="bank-trend-text">
              <h3>Digital Banking Platforms</h3>
              <p>
                With the rise of digital banking, over 70% of financial
                institutions are adopting digital tools to enhance customer
                service and operational efficiency.
              </p>
            </div>
            <div className="bank-trend-image">
              <img src={RedChart} alt="Digital Learning" />
            </div>
          </div>
          <div className="bank-trend-box">
            <div className="bank-trend-text">
              <h3>Cybersecurity in Financial Services</h3>
              <p>
                As cyber threats increase, nearly 60% of financial leaders are
                prioritizing cybersecurity measures to protect sensitive
                customer data and ensure compliance with data protection
                regulations.
              </p>
            </div>
            <div className="bank-trend-image">
              <img src={BlueChart} alt="Cybersecurity in Education" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BankFinance;
