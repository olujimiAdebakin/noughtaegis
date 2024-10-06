import React, { useEffect, useRef } from 'react'
import "./TailoredSolutions.css"
import Navbar from '../../Components/Navbar/Navbar'
import Marqee from '../../Reusable/Marqee/Marqee';
import gsap from 'gsap';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Footer from '../../Components/Footer/Footer';

const TailoredSolutions = () => {

    // const heroRef = useRef(null);
    // const spotlightRefs = useRef([]);
    const textRef = useRef(null);

    // useEffect(() => {
    //   spotlightRefs.current.forEach((spotlight) => {
    //     gsap.to(spotlight, {
    //       x: `${Math.random() * 400}%`,
    //       y: `${Math.random() * 100}%`,
    //       duration: Math.random() * 6 + 2,
    //       repeat: -1,
    //       yoyo: true,
    //       ease: "power2.inOut",
    //     });
    //   });
    // }, []);

    useEffect(() => {
      gsap.to(textRef.current, {
        scale: 1.2,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }, []);

  //   const addSpotlight = (el) => {
  //     if (el && !spotlightRefs.current.includes(el)) {
  //       spotlightRefs.current.push(el);
  //     }
  // };
  
  return (
    <>
      <Navbar />

      <div
        className="tailored-solutions-hero"
        data-aos="fade-up-right"
       data-aos-duration="1000"
      >
        {/* <div className="spotlight" ref={addSpotlight}></div>
        <div className="spotlight" ref={addSpotlight}></div> */}
        <h3 ref={textRef}>
          <span>Tailored </span> Cyber IT Consultancy
        </h3>
        <h2>
          Empowering Professional Services with Superior IT and Cybersecurity
          Consulting
        </h2>
        <p>
          In the Cyber IT Sector, which encompasses a wide range of disciplines
          including consulting, legal, and accounting services, robust IT
          management and cybersecurity are essential. Companies in this sector
          handle sensitive client information and require sophisticated IT
          systems to support their consultative and data-intensive operations.
          Noughtaegis is dedicated to delivering leading and innovative IT
          management and cybersecurity consultancy tailored specifically to meet
          the needs of professional services firms.
        </p>
        <Marqee />
      </div>

      <div className="tailored-solutions-testimonials">
        <Testimonial/>
      </div>

      <div className="tailored-solutions-content" data-aos="fade-up-right">
        <div className="tailored-solutions-content-header">
          <h2>
            <span>Tailored </span>Cybersecurity Consultancy
          </h2>
        </div>

        <div className="tailored-solution-wrap">
          <div className="tailored-solution">
            <h3>IT Infrastructure Consulting</h3>
            <p>
              We provide expert consulting services to design and optimize your
              IT infrastructure. From network architecture to cloud integration,
              we ensure that your systems are scalable, secure, and aligned with
              your business goals, giving you a competitive edge.
            </p>
          </div>

          <div className="tailored-solution">
            <h3>Cybersecurity Compliance Consulting</h3>
            <p>
              Navigate the complexities of cybersecurity regulations with ease.
              Our consultancy offers expert guidance on industry-specific
              compliance, helping you meet legal obligations like GDPR, HIPAA,
              and PCI-DSS, while protecting your client’s data.
            </p>
          </div>

          <div className="tailored-solution">
            <h3>Data Privacy and Protection</h3>
            <p>
              Safeguard your sensitive client information with our advanced data
              privacy solutions. We help you implement data encryption, access
              control, and secure data handling practices tailored to your
              organization’s needs, ensuring privacy and regulatory compliance.
            </p>
          </div>

          <div className="tailored-solution">
            <h3>Incident Response Planning</h3>
            <p>
              Our consultancy creates customized incident response plans
              designed to mitigate the effects of cyber attacks. We work with
              your team to ensure rapid recovery, reduce downtime, and protect
              business continuity in case of security breaches or system
              failures.
            </p>
          </div>

          <div className="tailored-solution">
            <h3>Cloud Security & Optimization</h3>
            <p>
              Leverage the cloud with confidence. We offer cloud security
              consulting to protect your business from data breaches while
              optimizing your cloud environment for cost-efficiency and
              performance. Our cloud strategies are tailored to meet the
              specific challenges of your industry.
            </p>
          </div>

          <div className="tailored-solution">
            <h3>Managed IT Services Consulting</h3>
            <p>
              Our managed IT consulting services allow you to focus on your core
              business while we handle the complexities of IT management. We
              design bespoke service plans that include 24/7 monitoring, remote
              support, and proactive maintenance to ensure your systems run
              smoothly.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default TailoredSolutions