import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import "./Procurement.css"
import Testimonial from '../../Components/Testimonial/Testimonial';
import Marqee from '../../Reusable/Marqee/Marqee';
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import procurement_cyber from "../../assets/portrait-young.avif";
import Footer from '../../Components/Footer/Footer';

const Procurement = () => {

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

      <div className="healthcare-container" data-aos="fade-up-right">
        <div className="healthcare-text">
          <p>EFFICIENT PROCUREMENT</p>
          <h2>
            Advanced <span className="procurement">Procurement</span> Solutions
          </h2>
          <p>
            Our expertise in procurement ensures that organizations acquire the
            right technology and services efficiently and effectively. We offer
            strategic sourcing, supplier management, and compliance assessments
            tailored to meet diverse needs. With Noughtaegis, entities can
            streamline their procurement processes, optimize resource
            allocation, and enhance operational efficiency, allowing them to
            focus on their core missions while we handle the complexities of
            procurement.
          </p>
        </div>
        <div className="military-marqee">{showMarquee && <Marqee />}</div>
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="evolving" data-aos="fade-up-right">
        <div className="evolving-text">
          <h1>Evolving Procurement Landscape</h1>
          <p>
            Organizations are rapidly adapting to a digital-first environment,
            employing advanced procurement strategies and technologies to
            enhance operational efficiency. However, this transformation brings
            significant challenges in supplier management and compliance. Recent
            reports highlight an increasing complexity in procurement processes,
            underscoring the urgent need for effective solutions to streamline
            acquisitions and ensure readiness. Robust procurement frameworks are
            essential to optimize resource allocation and drive organizational
            success.
          </p>
        </div>
        <div className="evolving-image">
          <img src={procurement_cyber} alt="Military Cybersecurity" />
        </div>
      </div>

      <div className="challenge-container" data-aos="fade-up-right">
        <h1>Procurement Hurdles</h1>
        <p>The primary hurdles in procurement management include:</p>

        <div className="challenge-box">
          <div className="challenge-card">
            <h2>Supplier Reliability</h2>
            <p>
              Ensuring that suppliers consistently meet quality standards and
              deliver products on time to avoid disruptions in operations.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Cost Management</h2>
            <p>
              Balancing budget constraints with the need for quality goods and
              services, while navigating fluctuating market prices.
            </p>
          </div>
          <div className="challenge-card">
            <h2>Compliance and Regulations</h2>
            <p>
              Adhering to legal and regulatory requirements in procurement
              processes, which can vary significantly across different regions
              and sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="health-role-content" data-aos="fade-up-right">
        <h1>Noughtaegis: Pioneering Next-Generation Procurement Solutions</h1>
        <p>
          Noughtaegis delivers comprehensive procurement innovations that
          address the challenges organizations face in today's dynamic
          environment. Our approach integrates the following key strategies:
        </p>

        <div className="health-role-box">
          <div className="health-role-card">
            <h2>Strategic Sourcing</h2>
            <p>
              Developing effective sourcing strategies to identify and engage
              reliable suppliers that meet organizational needs.
            </p>
          </div>

          <div className="health-role-card">
            <h2>Supplier Relationship Management</h2>
            <p>
              Cultivating strong partnerships with suppliers to enhance
              collaboration, improve service delivery, and foster innovation.
            </p>
          </div>

          <div className="health-role-card">
            <h2>Compliance and Risk Management</h2>
            <p>
              Implementing systems to ensure compliance with regulations and
              mitigate risks associated with procurement processes.
            </p>
          </div>
        </div>
      </div>
      <div className="trend" data-aos="fade-up-right">
        <h1>Procurement Trends</h1>
        <p>
          The procurement sector is experiencing significant evolution,
          including:
        </p>
        <div className="trend-card">
          <div className="trend-box">
            <div className="trend-text">
              <h3>Digital Procurement Solutions</h3>
              <p>
                With the rise of digital tools, over 70% of organizations are
                adopting e-procurement platforms to streamline purchasing
                processes and enhance efficiency.
              </p>
            </div>
            <div className="trend-image">
              <img src={RedChart} alt="Digital Procurement" />
            </div>
          </div>
          <div className="trend-box">
            <div className="trend-text">
              <h3>Cybersecurity in Procurement</h3>
              <p>
                As cyber threats increase, nearly 60% of procurement leaders are
                prioritizing cybersecurity measures to protect sensitive
                supplier data and ensure compliance with regulations.
              </p>
            </div>
            <div className="trend-image">
              <img src={BlueChart} alt="Cybersecurity in Procurement" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Procurement