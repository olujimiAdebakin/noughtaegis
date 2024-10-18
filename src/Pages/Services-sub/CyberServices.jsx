import React, { useEffect, useState } from 'react'
import './CyberServices.css'
import Navbar from '../../Components/Navbar/Navbar'
import Marqee from '../../Reusable/Marqee/Marqee';
import cyber_right from '../../assets/cyber-service.jpg'
import Certification from '../../Components/Certification/Certification';
import Benefit from '../../Reusable/Benefit';
import CyberTestimonials from '../../Reusable/CyberTestimonials';
import Testimonial from "../../Components/Testimonial/Testimonial"
import Footer from '../../Components/Footer/Footer';
import Accordion from '../../Reusable/Accordion';

const CyberServices = () => {

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

      <div className="cyber-hero" data-aos="fade-up-right">
        <h2>
          <span className="animated-text">Secure</span> Protect. Innovate.
        </h2>
        <p>
          Secure. Protect. Innovate. These three words embody our unwavering
          commitment to cybersecurity excellence. At Nouthaegis, we recognize
          that cybersecurity is more than just a necessity - it's a strategic
          advantage. Our innovative solutions, expert team, and customer-centric
          approach ensure that your organization stays one step ahead of
          emerging threats and achieves unparalleled security and resilience.
        </p>
        <ul className="cyber-ul">
          <li>Managed Security Service</li>
          <li>vCisco Service</li>
          <li>Compliance & Risk management</li>
          <li>24/7 SOC incident Response</li>
          <li>Security Assesment</li>
        </ul>
        {showMarquee && <Marqee />}
      </div>

      {/* <div className="it-strategy-testimonial">
        <Testimonial />
      </div> */}

      <div className="cyber-services" data-aos="fade-up-right">
        <div className="cyber-services-header">
          <h2>Specialized Cybersecurity Services</h2>
          <p>
            <span>Nouthageis</span>: Your Global Cybersecurity Partner. We
            provide cutting-edge solutions to safeguard businesses worldwide,
            including:
          </p>
        </div>

        <div className="cyberservices-flex" data-aos="fade-up-right">
          <div className="cyberservices-flex-left">
            <img src={cyber_right} alt="" />
          </div>
          <div className="cyberservices-flex-right">
            <div className="cyber-text">
              <h2>Managed Security Service</h2>
              <p>
                Our Managed Security Services provide comprehensive monitoring
                and management of your security systems to detect and respond to
                threats in real time.
              </p>
            </div>
            <div className="cyber-text">
              <h2>vCisco Service</h2>
              <p>
                Leverage the power of vCisco to enhance your cybersecurity
                posture with advanced threat intelligence and seamless
                integration into your existing infrastructure.
              </p>
            </div>
            <div className="cyber-text">
              <h2>Compliance & Risk Management</h2>
              <p>
                Ensure your organization meets regulatory standards while
                effectively managing risks through our tailored compliance and
                risk management solutions.
              </p>
            </div>
            <div className="cyber-text">
              <h2>24/7 SOC Incident Response</h2>
              <p>
                Our Security Operations Center (SOC) provides 24/7 incident
                response services to quickly address security breaches and
                minimize impact on your business.
              </p>
            </div>
            <div className="cyber-text">
              <h2>Security Assessment</h2>
              <p>
                Perform thorough security assessments to identify
                vulnerabilities and enhance your overall security strategy with
                actionable insights and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cyber-certification" data-aos="fade-up-right">
        <Certification />
      </div>

      <div className="cyber-benefit" data-aos="fade-up-right">
        <Benefit />
      </div>

      <div className="cyber-testimonial" data-aos="fade-up-right">
        <CyberTestimonials />
      </div>

      <div className="cyber-spectrum" data-aos="fade-up-right">
        <div className="cyber-spectrum-header">
          <h2>Full spectrum of cybersecurity services</h2>
        </div>
        <div className="cyber-spectrum-content">
          <div className="cyber-spectrums">
            <h3>EDR & MDR</h3>
            <p>
              Advanced endpoint detection and response, backed by managed
              detection and 24/7 monitoring.
            </p>
          </div>
          <div className="cyber-spectrums">
            <h3>Vulnerability Management</h3>
            <p>
              Identify, prioritize, and mitigate security vulnerabilities across
              your systems.
            </p>
          </div>
          <div className="cyber-spectrums">
            <h3>Cloud Security</h3>
            <p>
              Protect your cloud infrastructure with robust security measures
              and compliance tools.
            </p>
          </div>
          <div className="cyber-spectrums">
            <h3>Security Awareness Training</h3>
            <p>
              Equip your team with the knowledge to identify and avoid cyber
              threats.
            </p>
          </div>
          <div className="cyber-spectrums">
            <h3>Virtual Chief Information Security Officer (vCISO)</h3>
            <p>
              Access expert security leadership tailored to your organization’s
              needs.
            </p>
          </div>
          <div className="cyber-spectrums">
            <h3>Dark Web Monitoring</h3>
            <p>
              Track and mitigate potential threats originating from the dark
              web.
            </p>
          </div>
          <div className="cyber-spectrums">
            <h3>Zero Trust Implementation</h3>
            <p>
              Enhance security by verifying every user and device, both inside
              and outside your network.
            </p>
          </div>
        </div>
      </div>
      <div className="cyber-accordion">
        <Accordion />
      </div>
      <div className="cyber-footer">
        <Footer />
      </div>
    </>
  );
}

export default CyberServices