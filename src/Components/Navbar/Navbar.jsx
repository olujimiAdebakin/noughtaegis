import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nought.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import cuberimg from "../../assets/cuberimg.jpg";
import compsci from "../../assets/computsci.avif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false)
   const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation(); // Get current location

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleMenu = () => {
  //   navigate("/career")
  // }

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


  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
    setIndustriesOpen(false); 
  };

  const toggleIndustriesDropdown = () => {
    setIndustriesOpen(!industriesOpen);
    setServicesOpen(false); 
  };

 
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav
        className={`navbar ${
          isMoved ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <Link to="/" className="nav-img">
          <img src={logo} alt="Logo" />
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home <IoHomeOutline style={{ color: "white" }} />
          </Link>
          <div className="dropdown">
            <Link
              to=""
              className={`dropdown-toggle ${
                isActive("/solutions") ? "active" : ""
              }`}
            >
              Services{" "}
              <IoMdArrowDropdown
                className="nav-icon"
                onClick={toggleServicesDropdown}
              />
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-flex">
                <div className="dropdown-services">
                  <Link to="/solutions" className="border-radius">
                    Services <IoMdArrowDropdown className="nav-icon" />
                  </Link>
                  <ul>
                    <Link
                      to="/Cyber-awareness"
                      className={isActive("/Cyber-awareness") ? "active" : ""}
                    >
                      CyberSecurity Awareness-Training
                    </Link>
                    <Link
                      to="/Cyber-services"
                      className={isActive("/Cyber-services") ? "active" : ""}
                    >
                      CyberSecurity Services
                    </Link>
                    <Link
                      to="/It-services"
                      className={isActive("/It-services") ? "active" : ""}
                    >
                      Managed IT Services
                    </Link>
                    <Link
                      to="/tailored-solutions"
                      className={
                        isActive("/tailored-solutions") ? "active" : ""
                      }
                    >
                      Tailored Consulting
                    </Link>
                    <Link
                      to="/it-strategy"
                      className={isActive("/it-strategy") ? "active" : ""}
                    >
                      IT Strategy
                    </Link>
                    <Link
                      to="/proffessional-services"
                      className={
                        isActive("/proffessional-services") ? "active" : ""
                      }
                    >
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
            <Link
              className={isActive("/industries") ? "active" : ""}
              onClick={toggleIndustriesDropdown}
            >
              Industries <IoMdArrowDropdown className="nav-icon" />
            </Link>

            <div className="dropdown-content-1">
              <div className="dropdown-content-flex">
                <div>
                  <ul>
                    <li>
                      <Link
                        to="/education"
                        className={isActive("/education") ? "active" : ""}
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telecommunications"
                        className={
                          isActive("/telecommunications") ? "active" : ""
                        }
                      >
                        Telecommunications
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/banking-financial-services"
                        className={
                          isActive("/banking-financial-services")
                            ? "active"
                            : ""
                        }
                      >
                        Banking & Financial Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/government"
                        className={isActive("/government") ? "active" : ""}
                      >
                        Government
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/law-firm"
                        className={isActive("/law-firm") ? "active" : ""}
                      >
                        Law Firms
                      </Link>
                    </li>
                  </ul>
                </div>

                <ul>
                  <li>
                    <Link
                      to="/military"
                      className={isActive("/military") ? "active" : ""}
                    >
                      Military
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/procurement"
                      className={isActive("/procurement") ? "active" : ""}
                    >
                      Procurement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/healthcare"
                      className={isActive("/healthcare") ? "active" : ""}
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/non-profit"
                      className={isActive("/non-profit") ? "active" : ""}
                    >
                      Non-Profit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manufacturing"
                      className={isActive("/manufacturing") ? "active" : ""}
                    >
                      Manufacturing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            to="/whynoughtaegis"
            className={isActive("/whydevcent") ? "active" : ""}
          >
            Who We Are <IoMdArrowDropdown className="nav-icon" />
          </Link>
          <Link to="/career" className={isActive("/career") ? "active" : ""}>
            Careers <IoMdArrowDropdown className="nav-icon" />
          </Link>
        </div>
        <div className={`nav-end ${menuOpen ? "active" : ""}`}>
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
