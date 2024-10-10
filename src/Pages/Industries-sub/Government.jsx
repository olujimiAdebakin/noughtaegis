import React, { useEffect, useState } from "react";
import "./Education.css";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Navbar from "../../Components/Navbar/Navbar";
import Marqee from "../../Reusable/Marqee/Marqee";
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import procurement_cyber from "../../assets/portrait-young.avif";

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
      <div className="education-container" data-aos="fade-up-right">
        <div className="healthcare-text">
          <p>EFFICIENT EDUCATION</p>
          <h2>
            Advanced <span className="procurement">Cybersecurity</span>{" "}
            Solutions for Education
          </h2>
          <p>
            Our expertise in cybersecurity ensures that educational institutions
            can procure the right technology and services securely and
            effectively. We provide robust frameworks for protecting sensitive
            data, such as student records and financial information, during the
            procurement process. By implementing strong cybersecurity measures,
            educational entities can mitigate risks associated with data
            breaches and ensure compliance with regulations.
          </p>
        </div>
        <div className="education-marqee">{showMarquee && <Marqee />}</div>
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="evolving" data-aos="fade-up-right">
        <div className="evolving-text">
          <h1>Evolving Cybersecurity Landscape in Education</h1>
          <p>
            Educational institutions are rapidly adapting to a digital-first
            environment, employing advanced cybersecurity strategies and
            technologies to protect sensitive information. As schools and
            universities increasingly rely on digital tools, they face
            significant challenges related to data breaches and compliance with
            regulations.
          </p>
        </div>
        <div className="evolving-image">
          <img src={procurement_cyber} alt="Cybersecurity in Education" />
        </div>
      </div>

      <div className="challenge-container" data-aos="fade-up-right">
        <h1>Cybersecurity Hurdles in Education</h1>
        <p>The primary hurdles in cybersecurity management include:</p>

        <div className="challenge-box">
          <div className="challenge-card">
            <h2>Data Protection</h2>
            <p>
              Ensuring the security of sensitive student and faculty information
              against breaches and unauthorized access, which is increasingly
              challenging in a digital learning environment.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Network Security</h2>
            <p>
              Maintaining secure networks to protect against cyber threats,
              including ransomware and phishing attacks that target educational
              institutions.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Compliance with Regulations</h2>
            <p>
              Adhering to legal and regulatory requirements related to data
              privacy and cybersecurity, which can vary across jurisdictions and
              impact how institutions manage data.
            </p>
          </div>
        </div>
      </div>

      <div className="health-role-content" data-aos="fade-up-right">
        <h1>
          Noughtaegis: Pioneering Next-Generation Cybersecurity Solutions for
          Education
        </h1>
        <p>
          Noughtaegis delivers comprehensive cybersecurity innovations that
          address the unique challenges educational institutions face in today's
          digital landscape. Our approach integrates the following key
          strategies:
        </p>

        <div className="health-role-box">
          <div className="health-role-card">
            <h2>Data Protection and Privacy</h2>
            <p>
              Implementing advanced encryption and access controls to safeguard
              sensitive student and faculty information, ensuring compliance
              with regulations like FERPA.
            </p>
          </div>

          <div className="health-role-card">
            <h2>Threat Detection and Response</h2>
            <p>
              Utilizing real-time monitoring and threat intelligence to detect
              and respond to cyber threats swiftly, minimizing potential impacts
              on learning environments.
            </p>
          </div>

          <div className="health-role-card">
            <h2>Training and Awareness Programs</h2>
            <p>
              Providing comprehensive training for staff and students on
              cybersecurity best practices, empowering them to recognize and
              mitigate risks effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="trend" data-aos="fade-up-right">
        <h1>Education Trends</h1>
        <p>
          The education sector is experiencing significant evolution, including:
        </p>
        <div className="trend-card">
          <div className="trend-box">
            <div className="trend-text">
              <h3>Digital Learning Platforms</h3>
              <p>
                With the rise of online education, over 70% of educational
                institutions are adopting digital learning tools to enhance
                teaching and learning experiences.
              </p>
            </div>
            <div className="trend-image">
              <img src={RedChart} alt="Digital Learning" />
            </div>
          </div>
          <div className="trend-box">
            <div className="trend-text">
              <h3>Cybersecurity in Education</h3>
              <p>
                As cyber threats increase, nearly 60% of educational leaders are
                prioritizing cybersecurity measures to protect sensitive student
                data and ensure compliance with data protection regulations.
              </p>
            </div>
            <div className="trend-image">
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
