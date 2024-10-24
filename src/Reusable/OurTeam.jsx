import React from "react";
import "./OurTeam.css";
import tosin from "../assets/tosin.jpg"; 
import dele from "../assets/Dele.jpg"; 
import leonard from "../assets/leonard.jpg"
import samuel from "../assets/sandra.jpg";
import avatar from "../assets/Avatar.avif"
import { useNavigate } from "react-router-dom";


const teamMembers = [
  {
    name: "Tosin Fakile",
    role: "CyberSeurity Engineer",
    image: tosin,
  },
  {
    name: "Adeleke Oluwaseun",
    role: "Cloud Engineer",
    image: avatar,
  },

  {
    name: "Ayodele Boluwatife",
    role: "CyberSecurity Analyst",
    image: dele,
  },
  {
    name: "Leonard Ojornubi Ikediuba",
    role: "CyberSecurity Analyst",
    image: leonard,
  },
  {
    name: "Adebakin Olujimi",
    role: "SoftWare Developer",
    image: avatar,
  },
  {
    name: "Omodara, Samuel Abiola",
    role: "Data Analyst",
    image: samuel,
  },
];

const OurTeam = () => {
  const navigate = useNavigate();



  const handleImageClick = (name) => {
    navigate(`/profile/${name}`);
  };

  return (
    <section id="our-team" className="our-team">
      <div className="our-team-header">
        <h2>Meet Our Team</h2>
        <p>We are a group of dedicated professionals ready to serve you.</p>
      </div>

      <div className="our-team-flex">
        {/* <div className="our-team-left">
         
        </div> */}
        <div className="our-team-grid">
          {teamMembers.map((member, index) => (
            <div className="our-team-card" key={index}>
              <div
                className="img-card-wrapper"
                onClick={() => handleImageClick(member.name)}
              >
                <div className="img-wrapper-position">
                  <div className="our-card-wrapper-content">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
              </div>
              <div className="our-team-card-text">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
