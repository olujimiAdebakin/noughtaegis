import React from "react";
import "./OurTeam.css";
import avatar from "../assets/download.jpg"; 
import jimi from "../assets/jimi.jpg"; 
import { Link, useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Adebakin Olalekan",
    role: "Frontend Developer",
    image: jimi,
  },
  {
    name: "Talodabioluwa",
    role: "Backend Developer",
    image: jimi,
  },
  {
    name: "Adisa Malik",
    role: "UI/UX Designer",
    image: jimi,
  },
  {
    name: "Adebakin Olalekan",
    role: "Frontend Developer",
    image: avatar,
  },
  {
    name: "Talodabioluwa",
    role: "Backend Developer",
    image: avatar,
  },
  {
    name: "Adisa Malik",
    role: "UI/UX Designer",
    image: avatar,
  },
];

const OurTeam = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contactform");
  }



  const handleImageClick = (name) => {
    navigate(`/profile/${name}`);
  };

  return (
    <div className="our-team">
      <div className="our-team-header">
        <h2>Meet Our Team</h2>
        <p>We are a group of dedicated professionals ready to serve you.</p>
      </div>

      <div className="our-team-flex">
        <div className="our-team-left">
          <div className="our-team-left-content">
            <h2>Meet Our Team</h2>
            <p>
              Our team is composed of skilled professionals dedicated to
              delivering exceptional results and innovative solutions. Together,
              we strive to exceed expectations and create lasting impact.
            </p>
            <p>
              We believe in collaboration, innovation, and excellence in every
              project. Our diverse backgrounds and expertise allow us to tackle
              challenges with creativity and passion.
            </p>
            <div className="our-team-left-btn">
              <button className="cta-button" onClick={handleContactClick}>
                Get in Touch
              </button>
            </div>
            <blockquote>
              "Great things in business are never done by one person; they're
              done by a team of people." - Steve Jobs
            </blockquote>
            <div className="social-media-links">
              <Link
                href="link-to-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="link-to-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="link-to-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="our-team-grid">
          {teamMembers.map((member, index) => (
            <div className="our-team-card" key={index}>
              <div
                className="img-card-wrapper"
                onClick={() => handleImageClick(member.name)}
              >
                <div className="our-card-wrapper-content">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="half-circle"></div>
              </div>
              <div className="our-team-card-text">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
