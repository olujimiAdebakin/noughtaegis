import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/">Learn</Link>
          <Link to="/whydevcent">Why PacketLabs</Link>
          <Link to="/careers">Careers</Link>
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
