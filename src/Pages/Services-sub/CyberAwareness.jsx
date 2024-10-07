import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./CyberAwareness.css";
import Marqee from "../../Reusable/Marqee/Marqee";
import cyber_awareness from "../../assets/ai-image.jpg"
import Footer from "../../Components/Footer/Footer"
import paragraphs from '../../../assets'
import Quiz from "../../Reusable/Quiz";
import { Link } from "react-router-dom";

const CyberAwareness = () => {

  //  const paragraphs = [
  //   "Don't fall victim to cybercrime. Our training program equips you with the knowledge and tools to navigate the internet safely and securely.",
  //   "Stay safe online! Our training program teaches you how to safeguard sensitive information, recognize cyber threats, and maintain your privacy.",
  //   "In today's digital age, cybersecurity awareness is crucial. Protect yourself from hackers, data breaches, and malicious attacks with our comprehensive training program.",
  //   "Safeguard your digital life. Discover how to protect your sensitive information and stay ahead of cyber threats with our expert training.",
  //   "Cybersecurity is a shared responsibility. Take control of your digital presence with our easy-to-understand lessons on safe browsing and data protection.",
  //   "Understand the risks of weak passwords and how attackers can exploit them. Our training teaches you to create strong passwords that keep you safe.",
  //   "Prevent identity theft by learning how to secure your personal information. Our program offers actionable tips to protect your privacy.",
  //   "The internet is full of threats, but you can navigate it safely with our security training. Learn to recognize phishing emails and avoid online scams.",
  //   "Stay ahead of cybercriminals by keeping your software updated. Our training covers the importance of patching and using secure applications.",
  //   "Data breaches are on the rise. Learn how to detect unusual activity and protect your accounts from unauthorized access with two-factor authentication.",
  //   "The weakest link in cybersecurity is often human error. Learn how to spot social engineering attacks and protect your company from internal threats.",
  //   "Is your Wi-Fi secure? Discover the importance of encrypting your network and avoiding public Wi-Fi risks with our comprehensive security modules.",
  //   "Online threats evolve constantly, but so can you. Stay up-to-date with the latest cybersecurity practices and trends through our expert training.",
  //   "Protect your digital footprint by understanding privacy settings and how to limit the data you share online. Safeguard your personal and professional life.",
  //   "Avoid financial loss by learning how to secure online transactions. Our training teaches you to recognize secure websites and avoid e-commerce fraud.",
  //   "Learn the importance of regularly backing up your data. Our training explains how to securely store and recover your information in case of attacks.",
  //   "Understand ransomware and how to avoid becoming a victim. Our program covers prevention strategies and what to do if your system is compromised.",
  //   "Secure your mobile devices just like your computer. Learn about mobile app security, safe downloading practices, and protecting your data on the go.",
  //   "Work from home safely with our cybersecurity tips. Protect your remote setup from intruders and maintain confidentiality while working online.",
  //   "Become your own first line of defense by mastering basic cybersecurity skills. Empower yourself to avoid the most common cyber threats with confidence.",
  // ];

  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [color, setColor] = useState("#fff");


const generateVisibleColor = () => {
  const letters = "89ABCDEF"; 
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};


  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.paragraphs.length);
      setColor(generateRandomColor());
    }, 7000);

   
    return () => clearInterval(interval);
  }, [paragraphs.paragraphs.length]);


  return (
    <>
      <Navbar />

      <div className="cyber-awareness">
        <section className="cyber-awareness-hero">
          <h2 className="animated-text">Stay Secure, Stay Informed</h2>
          <p>Your guide to becoming more secure in the digital world.</p>
          <button className="cta-button">Start Training</button>
          <Marqee />
        </section>

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
              <button>Start Module</button>
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
              <button>Start Module</button>
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
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Social Engineering</h3>
              <p>
                Learn how attackers manipulate individuals into divulging
                confidential information. This module focuses on techniques such
                as pretexting, baiting, and impersonation, providing you with
                tools to spot these tactics and prevent exploitation.
              </p>
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Data Protection</h3>
              <p>
                Explore strategies to safeguard sensitive data, both online and
                offline. You’ll learn about encryption, data anonymization, and
                secure data storage practices to ensure your information remains
                confidential and protected from unauthorized access.
              </p>
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Mobile Security</h3>
              <p>
                Understand the risks associated with using mobile devices and
                discover how to secure them. This module covers topics like app
                permissions, mobile encryption, and the dangers of public Wi-Fi
                to keep your mobile data safe from potential threats.
              </p>
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Email Security</h3>
              <p>
                Master the techniques to secure your email accounts and
                communications. Learn how to spot email spoofing, avoid
                malicious attachments, and use encryption tools to protect
                sensitive information sent via email.
              </p>
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Network Security</h3>
              <p>
                Gain insight into how networks are secured against various cyber
                threats. This module delves into firewalls, VPNs, and secure
                access points to help you understand how to protect your network
                from intrusion, malware, and other vulnerabilities.
              </p>
              <button>Start Module</button>
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
              <button>Start Module</button>
            </div>
          </div>
        </section>

        {/* <div className="quiz-section">
        <Quiz/>
        </div> */}

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
            free to <Link href="/contact">contact us</Link>.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CyberAwareness;
