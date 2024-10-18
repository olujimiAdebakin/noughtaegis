import React, { useEffect, useRef, useState } from 'react'
import './ProffesionalServices.css'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Footer from '../../Components/Footer/Footer';
import gsap from 'gsap';
import Marqee from '../../Reusable/Marqee/Marqee';

const ProffesionalServices = () => {


  
  const textRef = useRef(null);
  
     useEffect(() => {
       gsap.to(textRef.current, {
         scale: 1.2,
         duration: 2,
         yoyo: true,
         repeat: -1,
         ease: "power1.inOut",
       });
     }, []);
  
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
    <>
      <Navbar />

      <div className="professional-services">
        <div className="professional-services-hero">
          <h2>
            Unlock Expert IT <h3 className='shake'> Solutions</h3>
          </h2>
          <p>
            Empowering your business with cutting-edge technology, tailored to
            drive growth and efficiency.
          </p>
          {showMarquee && <Marqee />}
        </div>
        <div className="proffessional-services-testimonial">
          <Testimonial />
        </div>

        <div className="professional-services-big-card">
          <div className="professional-services-header">
            <h2>Tailored IT Solutions for Optimized Business Growth</h2>
            <p>
              Leverage our expertise to streamline your operations, enhance
              security, and embrace cutting-edge technology. Our comprehensive
              IT solutions are designed to meet your unique business needs,
              ensuring sustained growth and competitive advantage in an
              ever-evolving digital landscape.
            </p>
          </div>

          <div className="professional-services-grid">
            <div className="professional-services-grid-item">
              <h3>Cloud Architecture and Enablement</h3>
              <p>
                Design, deploy, and optimize scalable cloud solutions tailored
                to your business needs. We help you leverage cloud platforms to
                improve agility, reduce costs, and drive innovation.
              </p>
            </div>
            <div className="professional-services-grid-item">
              <h3>vCIO (Virtual Chief Information Officer)</h3>
              <p>
                Gain strategic IT leadership without the overhead. Our vCIO
                services provide expert guidance to align your technology
                strategy with business objectives, ensuring sustained growth and
                innovation.
              </p>
            </div>
            <div className="professional-services-grid-item">
              <h3>Migration Services</h3>
              <p>
                Seamlessly transition to new systems or cloud environments with
                minimal disruption. Our migration services ensure data
                integrity, security, and a smooth shift for your business
                operations.
              </p>
            </div>
            <div className="professional-services-grid-item">
              <h3>Security Assessment</h3>
              <p>
                Protect your business with comprehensive security evaluations.
                We identify vulnerabilities, assess your IT infrastructure, and
                provide actionable steps to safeguard your data and systems.
              </p>
            </div>
            <div className="professional-services-grid-item">
              <h3>IT Project Management</h3>
              <p>
                Deliver complex IT projects on time and within budget. Our
                project management experts ensure seamless execution, from
                planning to implementation, while keeping your goals at the
                forefront.
              </p>
            </div>
            <div className="professional-services-grid-item">
              <h3>Business Continuity and Disaster Recovery</h3>
              <p>
                Ensure operational resilience with our robust business
                continuity and disaster recovery services. We help you plan,
                implement, and maintain strategies that keep your business
                running smoothly, even in the face of disruptions.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProffesionalServices