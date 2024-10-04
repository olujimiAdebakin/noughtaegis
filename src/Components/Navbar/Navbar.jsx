import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nought.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io"; 
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import cuberimg from "../../assets/cuberimg.jpg";
import compsci from "../../assets/computsci.avif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMoved, setIsMoved] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsMoved(true);
    } else {
      setIsMoved(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar ${
          isMoved ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="nav-img">
          <img src={logo} alt="Logo" />
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">
            Home <IoHomeOutline style={{ color: "white" }} />
          </Link>
          <div className="dropdown">
            <Link to="/solutions" className="dropdown-toggle">
              Services <IoMdArrowDropdown className="nav-icon" />
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-flex">
                <div className="dropdown-services">
                  <Link to="/solutions" className="border-radius">
                    Services <IoMdArrowDropdown className="nav-icon" />
                  </Link>
                  <ul>
                    <Link to="/Cyber-awareness">
                      CyberSecurity Awareness-Training
                    </Link>
                    <Link to="/Cyber-services">CyberSecurity Services</Link>
                    <Link to="/It-services">Managed IT Services</Link>
                    <Link to="/tailored-solutions">Tailored Consulting</Link>
                    <Link to="/it-strategy">IT Strategy</Link>
                    <Link to="/proffessional-services">
                      Professional Services
                    </Link>
                  </ul>
                </div>
                <div className="dropdown-promotions">
                  <div className="promotion-item">
                    <img src={compsci} alt="Promotion 1" />
                    <div className="promotion-text">
                      <p>
                        Stay Ahead in 2024: AI-Powered Cybersecurity Solutions
                        Transforming Threat Detection & Business Security
                      </p>
                    </div>
                  </div>
                  <div className="promotion-item">
                    <img src={cuberimg} alt="Promotion 2" />
                    <div className="promotion-text">
                      <p>
                        Unlock the Future: How AI is Revolutionizing Cyber
                        Defense and Strengthening Business Resilience in 2024
                      </p>
                    </div>
                  </div>
                  <div className="promotion-description">
                    <div className="description-item">
                      <p>
                        Leverage our professional services to tackle complex IT
                        challenges, from custom software development to network
                        design and system integration.
                      </p>
                      <small>
                        With in-depth expertise and hands-on support, we ensure
                        your technology projects are completed on time, within
                        budget, and aligned with your business objectives.
                      </small>
                    </div>
                    <div className="description-item">
                      <p>
                        Stay ahead of evolving threats with our cutting-edge
                        cybersecurity services designed to protect your business
                        from cyber attacks and data breaches.
                      </p>
                      <small>
                        Our team of experts delivers tailored solutions,
                        ensuring compliance and safeguarding sensitive
                        information with the latest security measures.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="industries-drop-down">
            <Link>
              Industries <IoMdArrowDropdown className="nav-icon" />
            </Link>
            <div className="dropdown-content-1">
              <div>
                <ul>
                  <Link>Education</Link>
                  <Link>Telecommunications</Link>
                  <Link>Banking & Financial-Services</Link>
                  <Link>Fintech</Link>
                  <Link>Law-firms</Link>
                </ul>
              </div>
              <ul>
                <Link>Managed Service Provider</Link>
                <Link>Procurement</Link>
                <Link to="/healthcare">HealthCare</Link>
                <Link>Non-Profit</Link>
                <Link>Manufacturing</Link>
              </ul>

            </div>
          </div>
          <Link to="/whydevcent">
            Why Noughtaegis <IoMdArrowDropdown className="nav-icon" />
          </Link>
          <Link to="/career">
            Careers <IoMdArrowDropdown className="nav-icon" />
          </Link>
        </div>
        <div className={`nav-end ${menuOpen ? "active" : ""}`}>
          <a href="#">Get a Quote</a>
          <Link to="/contactform">
            <button>Contact Us</button>
          </Link>
        </div>

        <div className="nav-toggle" onClick={handleToggle}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
