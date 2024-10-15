import React, { useEffect } from 'react'
import "./Profile.css"
import {useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { GrNext, GrPrevious } from "react-icons/gr";
import tosin from "../assets/tosin.jpg"; 
import dele from "../assets/ayodele.jpg";
import avatar from "../assets/Avatar.avif" 
import ProgressBar from './ProgressBar';
import { FaArrowDown } from "react-icons/fa6";

const Profile = () => {

 const profiles = {
   "Tosin Fakile": {
     img: tosin,
     role: "CyberSecurity Engineer",
     bio: "Tosin Fakile is a highly skilled and passionate CyberSecurity Engineer with a strong foundation in identifying vulnerabilities and securing infrastructures. With a deep understanding of network security protocols, encryption, and risk management, Tosin is dedicated to protecting organizations from cyber threats. His expertise spans various areas of cybersecurity, including penetration testing, incident response, and system auditing.",
     skill: [
       { name: "Network Security", level: 100 },
       { name: "Risk Management", level: 100 },
       { name: "Penetration Testing", level: 97 },
       { name: "Incident Response", level: 94 },
       { name: "Vulnerability Assessment", level: 95 },
       { name: "Compliance Auditing", level: 93 },
     ],
   },
   "Adeleke Oluwaseun": {
     img: avatar,
     role: "Cloud Engineer, DevCent",
     bio: "Adeleke Oluwaseun is an experienced Cloud Engineer with a specialization in backend development and cloud architecture. He is adept at building scalable and secure cloud infrastructures, focusing on API development, database management, and automation. With expertise in AWS, Azure, and Kubernetes, Adeleke ensures high availability and performance for cloud-based applications. He is committed to optimizing cloud resources and improving operational efficiency.",
     skill: [
       { name: "Cloud Architecture", level: 85 },
       { name: "API Development", level: 80 },
       { name: "AWS", level: 90 },
       { name: "Kubernetes", level: 80 },
       { name: "Azure", level: 75 },
       { name: "Docker", level: 85 },
       { name: "CI/CD Pipelines", level: 80 },
       { name: "Infrastructure as Code (IaC)", level: 78 },
       { name: "Cloud Security", level: 82 },
       { name: "Serverless Architecture", level: 75 },
       { name: "Monitoring & Logging", level: 80 },
       { name: "Database Management", level: 75 },
     ],
   },

   "Talodabioluwa Paul": {
     img: avatar,
     role: "UI/UX Designer",
     bio: "Talodabioluwa Paul is a highly creative and detail-oriented UI/UX Designer who specializes in crafting intuitive and visually engaging user interfaces. With a strong understanding of user psychology and design principles, Talodabioluwa ensures that digital products are not only functional but also aesthetically pleasing. He is proficient in creating wireframes, prototypes, and user flows that improve the overall user experience.",
     skill: [
       { name: "Wireframing", level: 85 },
       { name: "Prototyping", level: 80 },
       { name: "User Research", level: 75 },
       { name: "Interaction Design", level: 80 },
     ],
   },
   "Ololade Bello": {
     img: avatar,
     role: "Frontend Developer",
     bio: "Ololade Bello is an innovative Frontend Developer who combines creativity with technical expertise to build dynamic and responsive web applications. With a strong focus on user interface design and front-end architecture, Ololade is adept at turning design concepts into fully functional websites. He has a deep understanding of HTML, CSS, JavaScript, and popular frameworks like React, ensuring smooth user experiences across devices.",
     skill: [
       { name: "HTML", level: 100 },
       { name: "CSS", level: 90 },
       { name: "JavaScript", level: 85 },
       { name: "Typescript", level: 70 },
       { name: "React", level: 90 },
       { name: "Next js", level: 70 },
       { name: "TailwindCss", level: 60 },
     ],
   },
   "Ayodele Boluwatife": {
     img: dele,
     role: "CyberSecurity Analyst",
     bio: "Ayodele Boluwatife is a dedicated CyberSecurity Analyst with expertise in vulnerability assessments, threat detection, and incident management. Ayodele takes a proactive approach to identifying security gaps and ensuring data protection for organizations. His experience includes monitoring network traffic, analyzing security breaches, and implementing strategies to safeguard systems from potential cyberattacks.",
     skill: [
       { name: "Network Security", level: 100 },
       { name: "Risk Management", level: 100 },
       { name: "Penetration Testing", level: 97 },
       { name: "Incident Response", level: 94 },
       { name: "Vulnerability Assessment", level: 95 },
       { name: "Compliance Auditing", level: 93 },
     ],
   },
   "Adebakin Olujimi": {
     img: avatar,
     role: "Frontend Developer",
     bio: "Adebakin Olujimi is a highly proficient Frontend Developer who excels in creating engaging and user-friendly web applications. With a passion for clean code and seamless design, Adebakin works closely with UI/UX teams to bring concepts to life. He has a strong command of front-end technologies and specializes in developing responsive websites that enhance user engagement and overall performance.",
     skill: [
       { name: "HTML", level: 100 },
       { name: "CSS", level: 90 },
       { name: "JavaScript", level: 85 },
       { name: "Typescript", level: 70 },
       { name: "React", level: 90 },
       { name: "Next js", level: 70 },
       { name: "TailwindCss", level: 60 },
     ],
   },
 };
  
  const navigate = useNavigate();
   const { name } = useParams();
   const profileNames = Object.keys(profiles); 
  const currentIndex = profileNames.indexOf(name); 
      
  const handleGoToOurTeam = () => {
    navigate("/career#our-team");
  }

  const handlePrevPage = () => {
    const prevIndex =
      (currentIndex - 1 + profileNames.length) % profileNames.length; 
    navigate(`/profile/${profileNames[prevIndex]}`); 
  };

  const handleNextPage = () => {
    const nextIndex = (currentIndex + 1) % profileNames.length; 
    navigate(`/profile/${profileNames[nextIndex]}`);
  };

    useEffect(() => {
      const interval = setInterval(() => {
        handleNextPage(); 
      }, 4000); 

      return () => clearInterval(interval); 
    }, [currentIndex]);
 
  const memberProfile = profiles[name] || {};
  
   return (
     <>
       <Navbar />
       <div className="profile-page">
         <div className="profile-prev" onClick={handlePrevPage}>
           <GrPrevious style={{ color: "white", fontSize: "50px" }} />
         </div>
         <div className="profile-flex">
           <div className="profile-img">
             <img src={memberProfile.img} alt="" />
           </div>
           <div className="profile-content">
             <h2> {name}</h2>
             <h3>{memberProfile.role}</h3>
             <div className="profile-about">
               <h3>About</h3>
               <p>{memberProfile.bio}</p>
             </div>

             <div className="profile-skill">
               <div className="profile-skill-header">
                 <h3>Skills</h3>
               </div>
               <div className="profile-skill-grid">
                 {memberProfile.skill?.map((skill, index) => (
                   <ProgressBar
                     key={index}
                     skillName={skill.name}
                     level={skill.level}
                   />
                 ))}
               </div>
             </div>
           </div>
           <div className="go-back" onClick={handleGoToOurTeam}>
             <FaArrowDown  className='go'/>
           </div>
         </div>
         <GrNext
           onClick={handleNextPage}
           style={{ color: "white", fontSize: "50px" }} className='profile-next'
         />
       </div>

       <Footer />
     </>
   );
}

export default Profile