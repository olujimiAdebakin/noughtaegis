import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import './Footer.css'
import logo from '../../assets/nought.png'
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link} from "react-router-dom";

const Footer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState(null);

  const onSubmit = (data) => {
    const email = data.email;

    
    localStorage.setItem("newsletterEmail", email);

   
    setMessage("Subscription successful!");
  };


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
        </div>
        <div className="footer-flexed">
          <div className="footer-links">
            <h2>SERVICES</h2>
            <ul className="futer">
              <Link to="/It-services">Managed IT Services</Link>
              <Link to="/Cyber-services">Cybersecurity Services</Link>
              <Link to="/it-strategy">IT Strategy</Link>
              <Link to="/tailored-solutions">Tailored Consulting</Link>
              <Link to="/Cyber-awareness">Cyber Awareness</Link>
              <Link to="/proffesional-services">Professional Service</Link>
            </ul>
          </div>

          <div className="footer-links">
            <h2>INDUSTRIES</h2>
            <ul className="futer">
              <Link to="/banking-financial-services">
                Banking & Financial Services
              </Link>
              <Link to="/healthcare">HealthCare</Link>
              <Link to="/manufacturing">Manufacturing</Link>

              <Link to="/law-firm">Law Firms</Link>
              <Link to="/telecommunications">Telecommunication</Link>
              <Link to="/non-profit">Non-profit</Link>
              <Link to="/government">Government</Link>
            </ul>
          </div>
        </div>
        <div className="news-letter">
          <h3>Subscribe To Our Newsletter</h3>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <button type="submit">Subscribe</button>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 All Right Reserved.</p>
        <div className="footer-privacy">
          <h4>Built with ❤️ By Spin.</h4>
          <h4></h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer