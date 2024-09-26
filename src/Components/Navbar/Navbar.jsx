import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
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
                  <Link to="/solutions">
                    Services <IoMdArrowDropdown className="nav-icon" />
                  </Link>
                  <ul>
                    <li>CyberSecurity Services</li>
                    <li>Managed IT Services</li>
                    <li>Managed Cloud Services</li>
                    <li>IT Strategy</li>
                    <li>Professional Services</li>
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
            <Link to="learn">
              Industries <IoMdArrowDropdown className="nav-icon" />
            </Link>
            <div className="dropdown-content-1">
              <div>
                <Link>Industries</Link>
                <ul>
                  <li>Executive</li>
                  <li>Security Program Leader</li>
                  <li>Web/App Development Agency</li>
                  <li>IT Professional</li>
                  <li>Lawyers</li>
                </ul>
              </div>
              <ul>
                <li>Managed Service Provider</li>
                <li>Procurement</li>
                <li>HealthCare</li>
                <li>Non-Profit</li>
                <li>Technology & Startup</li>
              </ul>
            </div>
          </div>
          <Link to="/whydevcent">
            Why DevCent <IoMdArrowDropdown className="nav-icon" />
          </Link>
          <Link to="/career">
            Careers <IoMdArrowDropdown className="nav-icon" />
          </Link>
        </div>
        <div className={`nav-end ${menuOpen ? "active" : ""}`}>
          <a href="#">Get a Quote</a>
          <button>Contact Us</button>
        </div>

        <div className="nav-toggle" onClick={handleToggle}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
