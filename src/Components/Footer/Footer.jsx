import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-flex">
        <div className="footer-left">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <p>
            Empowering Businesses <br /> with Comprehensive <br /> IT &
            Cybersecurity Solutions.
          </p>

          <div className="footer-img">
            <FaXTwitter />
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>

          <h2>Serving Clients Across the Nation.</h2>

          <address className="address">
            <p>Oke-Ilewo, Ogun Sate, Nigeria</p>
            <p>info@cybersecurity.com</p>
          </address>
        </div>

        <div className="footer-links">
          <h2>SERVICES</h2>
          <ul>
            <li>Managed IT Services</li>
            <li>Cybersecurity Services</li>
            <li>IT Strategy</li>
            <li>IT Consulting</li>
            <li>Network Management</li>
            <li>Cloud Services</li>
            <li>Help Desk Support</li>
          </ul>
        </div>

        <div className="footer-links">
          <h2>INDUSTRIES</h2>
          <ul>
            <li>Financial Institutions</li>
            <li>Health Institutions</li>
            <li>Technology & Startup</li>
            <li>Law Firms</li>
            <li>Private Equity</li>
            <li>Manufacturing</li>
            <li>Entertainment</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2023 Cybersecurity Solutions. All Rights Reserved.</p>
        <div className='footer-privacy'>
          <h4>Privacy Policy</h4>
          <h4>Terms of Service</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer