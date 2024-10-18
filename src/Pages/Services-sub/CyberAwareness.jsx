import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./CyberAwareness.css";
import Marqee from "../../Reusable/Marqee/Marqee";
import cyber_awareness from "../../assets/ai-image.jpg"
import Footer from "../../Components/Footer/Footer"
import paragraphs from '../../../assets'
import Quiz from "../../Reusable/Quiz";
import { Link, useNavigate } from "react-router-dom";
import Testimonial from "../../Components/Testimonial/Testimonial"

const CyberAwareness = () => {

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

 
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [color, setColor] = useState("#fff");
  const navigate = useNavigate();


const generateVisibleColor = () => {
  const letters = "89ABCDEF"; 
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

  const handleStartTraining = () => {
    navigate("/contactform");
  }

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.paragraphs.length);
      setColor(generateVisibleColor);
    }, 7000);

   
    return () => clearInterval(interval);
  }, [paragraphs.paragraphs.length]);


  return (
    <>
      <Navbar />

      <div className="cyber-awareness">
        <section className="cyber-awareness-hero">
          <h2>
            Stay <span className="shake"> Secure</span>, Stay Informed
          </h2>
          <p>Your guide to becoming more secure in the digital world.</p>
          <button className="cta-button" onClick={handleStartTraining}>
            Start Training
          </button>
          {showMarquee && <Marqee />}
        </section>

        {/* <div className="it-strategy-testimonial">
          <Testimonial />
        </div> */}

        <section className="cyber-awareness-flex">
          <div className="introduction">
            <h2>Why Cybersecurity Awareness Matters</h2>
            <p style={{ color }}>{paragraphs.paragraphs[currentParagraph]}</p>
          </div>
          <div className="img-container">
            <img src={cyber_awareness} alt="" />
          </div>
        </section>

        {/* Training Modules Section */}
        <section className="modules">
          <h2>Training Modules</h2>
          <div className="module-cards">
            <div className="module-card">
              <h3>Phishing Awareness</h3>
              <p>
                Learn to identify various types of phishing attacks, such as
                deceptive emails, malicious links, and fraudulent websites. This
                module equips you with the knowledge to recognize suspicious
                activity and avoid being a victim of phishing scams.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Safe Browsing</h3>
              <p>
                Discover the best practices for safely navigating the internet,
                including recognizing secure websites, avoiding harmful
                downloads, and protecting your personal data while browsing.
                Learn how to make informed decisions that minimize your exposure
                to threats.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Password Management</h3>
              <p>
                Understand the principles of creating strong, secure passwords
                and explore password management tools that keep your accounts
                safe. This module explains password best practices, such as
                multi-factor authentication and periodic updates, to enhance
                security.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Social Engineering</h3>
              <p>
                Learn how attackers manipulate individuals into divulging
                confidential information. This module focuses on techniques such
                as pretexting, baiting, and impersonation, providing you with
                tools to spot these tactics and prevent exploitation.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Data Protection</h3>
              <p>
                Explore strategies to safeguard sensitive data, both online and
                offline. You’ll learn about encryption, data anonymization, and
                secure data storage practices to ensure your information remains
                confidential and protected from unauthorized access.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Mobile Security</h3>
              <p>
                Understand the risks associated with using mobile devices and
                discover how to secure them. This module covers topics like app
                permissions, mobile encryption, and the dangers of public Wi-Fi
                to keep your mobile data safe from potential threats.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Email Security</h3>
              <p>
                Master the techniques to secure your email accounts and
                communications. Learn how to spot email spoofing, avoid
                malicious attachments, and use encryption tools to protect
                sensitive information sent via email.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Network Security</h3>
              <p>
                Gain insight into how networks are secured against various cyber
                threats. This module delves into firewalls, VPNs, and secure
                access points to help you understand how to protect your network
                from intrusion, malware, and other vulnerabilities.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
            <div className="module-card">
              <h3>Incident Response</h3>
              <p>
                Learn the steps to take when faced with a cybersecurity
                incident. This module outlines the process of detecting,
                analyzing, and responding to security breaches to minimize
                damage. You'll gain knowledge about incident reporting,
                containment strategies, and recovery actions to ensure swift and
                effective responses to cyber threats.
              </p>
              <button onClick={handleStartTraining}>Get Started</button>
            </div>
          </div>
        </section>

        <div className="quiz-section">
          <Quiz />
        </div>

        {/* FAQ Section */}
        {/* <section className="faqq">
          <h2>Frequently Asked Questions</h2>
          <div className="faqq-item">
            <h3>What is phishing?</h3>
            <p>
              Phishing is an attempt to steal your information by posing as a
              trusted source.
            </p>
          </div>
          <div className="faqq-item">
            <h3>How can I create secure passwords?</h3>
            <p>
              Use a combination of upper/lowercase letters, numbers, and
              symbols, and avoid using personal information.
            </p>
          </div>
        </section> */}

        <section className="cyber-awareness-contact">
          <h2>Need Help?</h2>
          <p>
            If you have any questions or need more personalized training, feel
            free to <h3 onClick={handleStartTraining}>contact us</h3>
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CyberAwareness;
