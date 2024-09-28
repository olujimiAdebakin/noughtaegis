import React, { useState } from 'react'
import './Accordion.css';

const Accordion = () => {

      const [activeIndex, setActiveIndex] = useState(null);

      const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    const faqItems = [
      {
        question: "How is a cybersecurity service?",
        answer:
          "Cybersecurity services help protect your business by securing systems, networks, and data from cyber threats like hacking, malware, and ransomware.",
      },
      {
        question: "What is the average cost of cybersecurity services?",
        answer:
          "The cost of cybersecurity services varies based on the size and needs of your business, but can range from a few hundred to thousands of dollars per month.",
      },
      {
        question: "Is there a list of cybersecurity services?",
        answer:
          "Yes, our services include vulnerability management, cloud security, endpoint protection, security awareness training, and more.",
      },
      {
        question: "How can cybersecurity services protect my business?",
        answer:
          "We provide comprehensive protection, including monitoring, threat detection, and rapid response to ensure your business stays secure.",
      },
      {
        question: "What is a cybersecurity risk assessment, and do I need one?",
        answer:
          "A cybersecurity risk assessment identifies vulnerabilities in your systems and helps create a plan to mitigate those risks. It’s essential for any business handling sensitive data.",
      },
      {
        question: "How do you respond to a cybersecurity incident or breach?",
        answer:
          "We follow a detailed incident response plan, including containment, investigation, remediation, and communication to mitigate the impact of a breach.",
      },
      {
        question: "Will you help me stay compliant with industry regulations?",
        answer:
          "Yes, we offer services tailored to meet industry regulations, ensuring your business remains compliant with data protection standards.",
      },
      {
        question: "How long does it take to implement cybersecurity services?",
        answer:
          "Implementation times vary depending on the scope, but most services can be up and running within a few weeks to a couple of months.",
      },
      {
        question: "Do you provide cybersecurity training?",
        answer:
          "Yes, we offer security awareness training to help your team recognize and respond to cyber threats.",
      },
    ];

  return (
    <div className="accordion">
      <div className="faq-headerr">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="cyber-faq-accordion">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-header" onClick={() => toggleAccordion(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className="faq-body"
              style={{
                maxHeight: activeIndex === index ? "150px" : "0",
                transition: "max-height 0.4s ease",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion