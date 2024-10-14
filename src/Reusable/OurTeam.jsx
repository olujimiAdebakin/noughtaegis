import React from "react";
import "./OurTeam.css";
import avatar from "../assets/download.jpg"; 
import jimi from "../assets/jimi.jpg"; 
import { Link, useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Tosin Fakile",
    role: "CyberSeurity Engineer",
    image: jimi,
  },
  {
    name: "Adeleke Oluwaseun",
    role: "Backend Developer",
    image: jimi,
  },
  {
    name: "Talodabioluwa Paul",
    role: "UI/UX Designer",
    image: jimi,
  },
  {
    name: "Ololade Bello",
    role: "SoftWare Developer",
    image: avatar,
  },
  {
    name: "Ayodele Boluwatife",
    role: "CyberSecurity Analyst",
    image: avatar,
  },
  {
    name: "Adisa Malik",
    role: "SoftWare Developer",
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
