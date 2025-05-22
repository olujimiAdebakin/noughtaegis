import React from 'react'
import './WhyDevcent.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import Certification from "../../Components/Certification/Certification";
import ProudMember from '../../Reusable/ProudMember';
import CoreValues from '../../Reusable/CoreValues';
import whydevcent from '../../assets/whydevcent.webp';
import OurTeam from "../../Reusable/OurTeam";

const WhyDevcent = () => {
  return (
    <>
      <Navbar />

      <div className="why-devcent-hero" data-aos="fade-up-right">
        <div className="why-devcent-hero-text">
          <h2>About Us</h2>
          <p>
            At NoughtAegis, our goal is to leave your digital landscape more
            secure than we found it. We take a comprehensive approach, breaking
            down complex issues to construct stronger, more resilient systems.
            Through education and tailored consulting, we serve as your trusted
            ally, guiding you through the intricate challenges of cybersecurity.
            Together, we’ll navigate the digital world with confidence, ensuring
            your peace of mind in every step you take.
          </p>
        </div>
      </div>
      <div className="who-we-are-flex">
        <div className="who-we-are" data-aos="fade-up-right">
          <h2>Who We Are</h2>
          <p>
            NoughtAegis is a passionate team of highly trained, proactive
            ethical hackers. We protect and secure organizations from costly
            cybersecurity breaches by collaborating with them to enhance and
            strengthen their security posture.
          </p>
          <p>
            We provide expert-level penetration testing services that are both
            comprehensive and tailored to your unique needs. Our mission is to
            cultivate a secure digital environment where everyone has the right
            to privacy and cybersecurity. By identifying vulnerabilities and
            strengthening defenses, we empower you to thrive in a digital
            landscape that prioritizes safety and trust for all.
          </p>
        </div>
        <div>
          
        </div>
      </div>
      <Certification />
      <div className="our-purpose" data-aos="fade-up-right">
        <div className="purpose-flex">
          <div className="purpose-left">
            <h2>Our Purpose</h2>
            <p>
              We help foster safe digital spaces where everyone has the right to
              privacy, cybersecurity, and a thriving future.
            </p>
          </div>
          <div className="purpose-right">
            <p>
              Fortify your defenses, amplify your success. Our comprehensive
              security assessments pinpoint vulnerabilities, prioritize
              solutions, and verify lasting impact. Partner with us to
              revolutionize your security posture.
            </p>
            <p>
              Unlock unparalleled security resilience. Our expert findings fuel
              your success. We obsess over every vulnerability, mapping attack
              paths to fortify your defenses. Our rigorous methodology ensures
              solutions that truly shift the landscape, verified and optimized
              for lasting impact.
            </p>
          </div>
        </div>
      </div>
      <ProudMember />
      <CoreValues />
      <OurTeam />
      <div className="career-purpose" data-aos="fade-up-right">
        <img src={whydevcent} alt="" />
        <div className="career-purpose-right">
          <h2>Join Our Team</h2>
          <p>
            Discover why NoughtAegis is not just a place to work, but a place to
            grow, innovate, and achieve your full potential. Be part of a
            dynamic team that values learning, collaboration, and personal
            development.
          </p>
          <button>Begin Your Journey with Us</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WhyDevcent