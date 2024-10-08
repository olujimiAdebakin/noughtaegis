import React from 'react'
import "./ManuFacturing.css"
import Navbar from '../../Components/Navbar/Navbar';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Footer from '../../Components/Footer/Footer';
import manufacture from "../../assets/manufacturing-hand.avif"
import Marqee from '../../Reusable/Marqee/Marqee';
import RedChart from "../../assets/graphic-lines-red.webp";
import BlueChart from "../../assets/graphic-lines-blue.webp";
import LawFirm from './LawFirm';




const ManuFacturing = () => {
  return (
    <div>
      <Navbar />

      <div className="manufacturing-container">
        <div className="manufacturing-text">
          <p>Optimized IT Solutions for Manufacturing</p>
          <h2>
            Streamlining Manufacturing Operations with Advanced IT &
            Cybersecurity
          </h2>
          <p>
            In the fast-paced manufacturing industry, operational efficiency,
            data protection, and seamless production processes are vital to
            success. Manufacturers rely on cutting-edge technology to maintain
            productivity, ensure product quality, and safeguard critical
            intellectual property. At CyberDuo, we specialize in providing IT
            and cybersecurity services designed to enhance your manufacturing
            capabilities, prevent costly downtime, and protect your valuable
            assets from cyber threats.
          </p>
        </div>
        <div className="manufacturing-marqee">
          <Marqee />
        </div>
      </div>

      <div className="testi">
        <Testimonial />
      </div>

      <div className="manufacturing-current">
        <div className="manufacturing-current-text">
          <h2>The Current Manufacturing Landscape</h2>
          <p>
            As manufacturing becomes increasingly reliant on digital
            technologies and automation, the industry faces a growing number of
            cyber threats. With sensitive intellectual property, supply chain
            data, and production systems at risk, manufacturers have become
            prime targets for cyberattacks. Recent reports reveal a 50% increase
            in cyber incidents targeting manufacturers, highlighting the urgent
            need for robust cybersecurity and IT solutions to safeguard
            operations and ensure business continuity.
          </p>
        </div>
        <div className="manufacturing-current-image">
          <img src={manufacture} alt="Manufacturing Cybersecurity" />
        </div>
      </div>
      {/* <LawFirm/> */}

      <div className="manufacturing-current-container" data-aos="fade-up-right">
        <h1>IT Challenges in the Manufacturing Industry</h1>
        <p>The primary IT challenges faced by manufacturers include:</p>

        <div className="manufacturing-current-box">
          <div className="manufacturing-current-card">
            <h2>Operational Efficiency</h2>
            <p>
              Maintaining seamless production workflows and minimizing downtime
              through robust IT systems that optimize operations and reduce
              manual inefficiencies.
            </p>
          </div>
          <div className="manufacturing-current-card">
            <h2>Cybersecurity Threats</h2>
            <p>
              Protecting critical intellectual property, supply chain data, and
              production systems from the increasing frequency of cyberattacks
              and ransomware targeting manufacturers.
            </p>
          </div>
          <div className="manufacturing-current-card">
            <h2>Compliance with Industry Regulations</h2>
            <p>
              Ensuring adherence to industry-specific standards such as ISO and
              NIST cybersecurity frameworks, which are essential for securing
              data and maintaining trust in the manufacturing supply chain.
            </p>
          </div>
        </div>
      </div>

      <div className="manufacturing-role-content" data-aos="fade-up-right">
        <h1>Noughtaegis in Empowering the Manufacturing Industry</h1>
        <p>
          Noughtaegis provides a comprehensive suite of IT and cybersecurity
          solutions designed to address the specific challenges of
          manufacturers:
        </p>

        <div className="manufacturing-role-box">
          <div className="manufacturing-role-card">
            <h2>Cost-Effective IT Compliance</h2>
            <p>
              Offering industry-specific solutions that help manufacturers meet
              compliance requirements for standards like ISO and NIST, ensuring
              your business stays secure and competitive without overspending.
            </p>
          </div>

          <div className="manufacturing-role-card">
            <h2>Custom Cybersecurity Solutions</h2>
            <p>
              Developing tailored cybersecurity strategies to protect
              manufacturing processes, supply chains, and intellectual property
              from the rising threat of cyberattacks.
            </p>
          </div>

          <div className="manufacturing-role-card">
            <h2>Proactive IT Infrastructure Management</h2>
            <p>
              Implementing scalable, automated solutions to manage and monitor
              your IT infrastructure, ensuring minimal downtime and seamless
              production processes.
            </p>
          </div>
        </div>
      </div>

      <div className="trend" data-aos="fade-up-right">
        <h1>Manufacturing Trends</h1>
        <p>
          Significant trends impacting the manufacturing sector's strategies
          include:
        </p>
        <div className="trend-card">
          <div className="trend-box">
            <div className="trend-text">
              <h3>Adoption of Industry 4.0 Technologies</h3>
              <p>
                A growing number of manufacturers are incorporating Industry 4.0
                technologies like IoT, automation, and smart factories to
                enhance productivity and streamline operations.
              </p>
            </div>
            <div className="trend-image">
              <img src={BlueChart} alt="Industry 4.0 technologies" />
            </div>
          </div>
    
          <div className="trend-box">
            <div className="trend-text">
              <h3>Data-Driven Manufacturing Decisions</h3>
              <p>
                Leveraging big data and analytics, manufacturers are improving
                decision-making processes, enhancing supply chain management,
                and optimizing production efficiency.
              </p>
            </div>
            <div className="trend-image">
              <img src={RedChart} alt="Data-driven manufacturing" />
            </div>
          </div>
         
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ManuFacturing