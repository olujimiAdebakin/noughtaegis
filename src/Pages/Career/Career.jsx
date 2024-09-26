import React from 'react'
import './Career.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import Marqee from "../../Reusable/Marqee/Marqee";
import Certification from '../../Components/Certification/Certification';

import case1 from "../../assets/case-study01.webp"
import case2 from "../../assets/case-study02.webp";
import case3 from "../../assets/case-study03.webp";
import case4 from "../../assets/case-study04.webp";
import case5 from "../../assets/case-study05.webp";
import case6 from "../../assets/case-study06.webp";
import goodperson from "../../assets/goodperson.webp";
import amazingperson from "../../assets/amazingperson.webp";
import alwayslearning from "../../assets/always-learning.webp";
import no_egos from "../../assets/no-egos.webp";
import dig_deeper from "../../assets/dig_deeper.webp";
import Whydevcent from '../../assets/Whydevcent.webp';
// import engineer from "../../assets/engineer.jpg";

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="career-page">
        <div className="career" data-aos="fade-up-right">
          <div className="career-hero" data-aos="fade-up-right">
            <h2>
              Launch Your Tech Career with DevCent Where Innovation Meets
              Opportunity
            </h2>
            <p>
              DevCent is powered by a passionate team of skilled,
              forward-thinking cybersecurity experts. It’s our people who define
              DevCent, and we're known for attracting top talent in the
              industry. Discover why DevCent is the perfect place to grow,
              learn, and succeed. Explore our open positions below and apply
              today
            </p>
            <Marqee />
          </div>
        </div>
        {/* <WaveAnimation /> */}
        <div className="why-join" data-aos="fade-up-right">
          <div className="why-join-header">
            <h2>Discover Our Story</h2>
            <p>
              Proactive Cybersecurity Experts: DevCent' team of highly trained
              ethical hackers anticipates and mitigates threats, ensuring
              organizations stay ahead of emerging risks
            </p>
            <p>
              Trustworthy Cybersecurity Partners: Our expert penetration testers
              deliver comprehensive, customized solutions to shield your digital
              assets and ensure a secure tomorrow
            </p>
          </div>
          <div className="why-join-content">
            <div className="why-join-card"></div>
          </div>
        </div>
      </div>
      <Certification />
      <div className="who-we-aree" data-aos="fade-up-right">
        <div className="who-we-aree-header">
          <h2>Why You Should Join the Devcent Family</h2>
        </div>
        <div className="who-we-aree-content">
          <div className="who-we-aree-card">
            <img src={case1} alt="" />
            <h3>Competitive Compensation</h3>
            <p>
              We provide a fair and attractive salary package to ensure you feel
              valued and motivated.
            </p>
          </div>
          <div className="who-we-aree-card">
            <img src={case2} alt="" />
            <h3>Paid Time Off</h3>
            <p>
              Enjoy flexible vacations, sick days, and holidays to recharge and
              stay balanced.
            </p>
          </div>
          <div className="who-we-aree-card">
            <img src={case3} alt="" />
            <h3>Health & Wellness</h3>
            <p>
              Stay healthy with full medical, dental, vision coverage, and
              mental health resources.
            </p>
          </div>
          <div className="who-we-aree-card">
            <img src={case4} alt="" />
            <h3>Company Culture</h3>
            <p>
              We encourage flexible hours, remote work, and fun team events to
              promote collaboration.
            </p>
          </div>
          <div className="who-we-aree-card">
            <img src={case5} alt="" />
            <h3>Latest Tech Trend</h3>
            <p>
              Work with the newest tech tools and enjoy our company swag to
              boost your productivity.
            </p>
          </div>
          <div className="who-we-aree-card">
            <img src={case6} alt="" />
            <h3>Career Growth</h3>
            <p>
              Advance your career with internal promotions and personal
              development support.
            </p>
          </div>
        </div>
      </div>

      <div className="our-values" data-aos="fade-up-right">
        <div className="our-values-header">
          <h2>What We Represent</h2>
        </div>
        <div className="our-values-content">
          <div className="our-values-card">
            <img src={goodperson} alt="" />
            <h3>Be A Good Person</h3>
            <p>
              We believe that being a good person is at the heart of every
              meaningful relationship. We act with honesty, integrity, and
              respect towards everyone we work with. Our commitment to fairness
              and ethical conduct extends to all our clients, partners, and team
              members. This value shapes the decisions we make and the way we do
              business, ensuring we foster trust and mutual respect.
            </p>
          </div>
          <div className="our-values-card">
            <img src={alwayslearning} alt="" />
            <h3>Always Be Learning</h3>
            <p>
              In a constantly evolving industry, continuous learning is
              essential. We encourage our team to always seek new knowledge,
              embrace innovation, and stay ahead of the curve. Whether it's
              through formal education, certifications, or on-the-job
              experiences, we promote an environment where learning never stops.
              This mindset allows us to deliver cutting-edge solutions and
              maintain our competitive edge.
            </p>
          </div>
          <div className="our-values-card">
            <img src={dig_deeper} alt="" />
            <h3>Strive To Deliver More</h3>
            <p>
              Excellence isn't just about meeting expectations; it's about
              exceeding them. We strive to go the extra mile for our clients,
              ensuring that our work consistently delivers more value than
              anticipated. Our focus is not only on achieving great results but
              also on improving our processes and capabilities to continually
              offer more to those we serve.
            </p>
          </div>
          <div className="our-values-card">
            <img src={no_egos} alt="" />
            <h3>Zero Pride</h3>
            <p>
              We embrace humility in all aspects of our work. There is no room
              for ego in our company culture. We recognize that the best
              outcomes come from teamwork, collaboration, and openness to
              feedback. Zero pride means being willing to learn from mistakes,
              share knowledge, and celebrate collective successes, rather than
              individual accomplishments.
            </p>
          </div>
          <div className="our-values-card">
            <img src={amazingperson} alt="" />
            <h3>Amazing Partnership</h3>
            <p>
              We believe that strong partnerships are the foundation of
              long-term success. We work closely with our clients, treating
              their challenges as our own, and collaborating to achieve shared
              goals. By fostering transparent communication and trust, we build
              relationships that thrive. Our approach is centered on mutual
              respect, accountability, and ensuring that we both succeed
              together.
            </p>
          </div>
        </div>
      </div>

      <div className="why-devcent">
        <img src={Whydevcent} alt="" />
        <div className="why-devcent-right">
          <h2>Why Choose DevCent</h2>
          <p>
            We deconstruct complexities, educate, and consult to empower
            resilient solutions. Your trusted partner in navigating cyber
            threats
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Career