import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import avatar from "../assets/avater.webp";
import { FaRegStar } from "react-icons/fa";

// Slider settings for react-slick
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  centerPadding: "40px",
  pauseOnHover: true,
  rtl: true,
  // centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 764,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};


const Slide = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "CTO, SecureTech Solutions",
      feedback:
        "The team at Devcent exceeded our expectations with their professional security audits. Their insights have significantly strengthened our defenses.",
    },
    {
      name: "John Smith",
      role: "CEO, DataShield Inc.",
      feedback:
        "Thanks to Devcent, we have been able to implement robust security measures that not only protect our data but also enhance customer trust.",
    },
    {
      name: "Emily Wilson",
      role: "CISO, CyberGuard Corp.",
      feedback:
        "Their penetration testing services helped us uncover and mitigate critical vulnerabilities. I highly recommend their expertise.",
    },
    {
      name: "Michael Brown",
      role: "IT Director, SafeNet Enterprises",
      feedback:
        "Devcent security consultation was invaluable in helping us build a safer infrastructure. They are true experts in the field.",
    },
    {
      name: "Sarah Johnson",
      role: "COO, InfoSecure Solutions",
      feedback:
        "Their hands-on approach and deep knowledge of cybersecurity have made Devcent an invaluable partner in our data protection efforts.",
    },
    {
      name: "David Green",
      role: "Head of IT, ProtectIT Solutions",
      feedback:
        "Their cyber resilience training sessions have empowered our team to identify and respond to potential threats effectively.",
    },
    {
      name: "Rebecca Lee",
      role: "Compliance Officer, FinTech Security",
      feedback:
        "PacketLabs helped us pass critical compliance audits with flying colors. Their team provided great guidance and support.",
    },
    {
      name: "Christopher Clark",
      role: "Director of Security, WebSafe Systems",
      feedback:
        "Their advanced threat detection systems have made a huge difference in our ability to prevent cyber attacks.",
    },
    {
      name: "Laura Mitchell",
      role: "Security Analyst, CyberSafe Networks",
      feedback:
        "We rely on PacketLabs for our regular vulnerability assessments, and they continue to impress us with their professionalism and thoroughness.",
    },
  ];

  return (
    <div className="slide">
      <div className="slide-header">
        <h1>What People Say About Us</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slider-content">
              <img src={avatar} alt={`Avatar of ${testimonial.name}`} />
              <div className="slide-content-text">
                <div className="slide-star">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="slide-text">
                  <p>{testimonial.feedback}</p>
                </div>
                <div className="slide-name">
                  <h4>{testimonial.name}</h4>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
