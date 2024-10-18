import React, { useEffect, useState } from 'react'
import './ItServices.css'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Marqee from "../../Reusable/Marqee/Marqee";

import Footer from '../../Components/Footer/Footer'

const ItServices = () => {

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

      <div className="it-service-hero">
        <h2>
          <span className="shake">Managed</span> IT Services for SMBs
        </h2>
        <p>
          Empowering small and medium-sized businesses with tailored Managed IT
          solutions, backed by cutting-edge cybersecurity expertise. We
          safeguard your operations, so you can focus on growth, knowing your
          systems and data are in expert hands.
        </p>
        {showMarquee && <Marqee />}
      </div>

      <div className="it-service-testimonial">
        <Testimonial />
      </div>

      <div className="it-service-empower">
        <div className="it-service-empower-header">
          <h2>Elevate. Innovate. Succeed.</h2>
          <h3>Transformational Solutions for Forward-Thinking SMBs</h3>
          <p>
            At NoughtAegis, we understand the unique challenges faced by small
            and medium-sized businesses. That’s why we offer a comprehensive
            suite of services designed to not only meet but exceed your
            operational needs. From 24/7 helpdesk support and proactive IT
            management to forward-thinking business solutions, we’re here to
            ensure your technology works seamlessly, allowing you to focus on
            growth. Our goal is simple: to drive efficiency, minimize downtime,
            and empower your business to thrive in today’s competitive
            landscape.
          </p>
        </div>
        <div className="it-service-empower-grid">
          <div className="it-service-grid-content">
            <h3>24/7 Helpdesk</h3>
            <p>
              Our 24/7 helpdesk ensures your business runs smoothly by providing
              immediate support for any technical issues, day or night. We’re
              here to minimize downtime and keep your operations uninterrupted.
            </p>
          </div>
          <div className="it-service-grid-content">
            <h3>Third-Party Software Management</h3>
            <p>
              We manage all your third-party software, ensuring seamless
              integration, updates, and troubleshooting so you can focus on your
              core business activities without worrying about compatibility or
              disruptions.
            </p>
          </div>
          <div className="it-service-grid-content">
            <h3>Proactive IT Management</h3>
            <p>
              Our proactive IT management monitors your systems continuously to
              detect and address potential issues before they escalate, ensuring
              optimal performance and security.
            </p>
          </div>
          <div className="it-service-grid-content">
            <h3>Employee On/Off Boarding</h3>
            <p>
              We streamline the IT aspects of employee onboarding and
              offboarding, from setting up accounts and devices to managing
              permissions, making the process efficient and secure.
            </p>
          </div>
          <div className="it-service-grid-content">
            <h3>Virtual CIO</h3>
            <p>
              Our Virtual CIO service provides expert IT leadership, helping you
              develop and implement strategic technology solutions that align
              with your business goals, without the cost of a full-time CIO.
            </p>
          </div>
          <div className="it-service-grid-content">
            <h3>Device Lifecycle Management</h3>
            <p>
              We handle the entire lifecycle of your devices—from procurement to
              deployment, maintenance, and disposal—ensuring your technology is
              always up-to-date and functioning optimally.
            </p>
          </div>
        </div>
      </div>
      <div className="it-service-footer">
        <Footer />
      </div>
    </>
  );
}

export default ItServices