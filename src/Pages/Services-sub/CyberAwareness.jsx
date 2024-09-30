import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./CyberAwareness.css"; 

const CyberAwareness = () => {
  return (
    <>
      <Navbar />

      <div className="cyber-awareness">
        {/* Hero Section */}
        <section className="hero">
          <h1>Stay Secure, Stay Informed</h1>
          <p>Your guide to becoming more secure in the digital world.</p>
          <button className="cta-button">Start Training</button>
        </section>

        {/* Introduction Section */}
        <section className="introduction">
          <h2>Why Cybersecurity Matters</h2>
          <p>
            Cybersecurity awareness is critical to staying safe online. Our
            training will help you identify and avoid online risks, keeping your
            data and identity safe.
          </p>
        </section>

        {/* Training Modules Section */}
        <section className="modules">
          <h2>Training Modules</h2>
          <div className="module-cards">
            <div className="module-card">
              <h3>Phishing Awareness</h3>
              <p>Learn how to identify and avoid phishing attempts.</p>
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Safe Browsing</h3>
              <p>Understand best practices for safe internet use.</p>
              <button>Start Module</button>
            </div>
            <div className="module-card">
              <h3>Password Management</h3>
              <p>Learn how to create and manage secure passwords.</p>
              <button>Start Module</button>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="quiz">
          <h2>Test Your Knowledge</h2>
          <p>Take this short quiz to see how much you've learned.</p>
          <button>Start Quiz</button>
        </section>

        {/* Resources Section */}
        <section className="resources">
          <h2>Downloadable Resources</h2>
          <ul>
            <li>
              <a href="/resources/cybersecurity-tips.pdf">
                Cybersecurity Tips PDF
              </a>
            </li>
            <li>
              <a href="/resources/secure-practices.pdf">
                Best Secure Practices PDF
              </a>
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What is phishing?</h3>
            <p>
              Phishing is an attempt to steal your information by posing as a
              trusted source.
            </p>
          </div>
          <div className="faq-item">
            <h3>How can I create secure passwords?</h3>
            <p>
              Use a combination of upper/lowercase letters, numbers, and
              symbols, and avoid using personal information.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2>Need Help?</h2>
          <p>
            If you have any questions or need more personalized training, feel
            free to <a href="/contact">contact us</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default CyberAwareness;
