import React from 'react'
import "./Profile.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { GrNext, GrPrevious } from "react-icons/gr";

const Profile = () => {

 const profiles = {
   "Tosin Fakile": {
     img: "",
     role: "CyberSecurity Engineer",
     bio: "Tosin Fakile is a highly skilled and passionate CyberSecurity Engineer with a strong foundation in identifying vulnerabilities and securing infrastructures. With a deep understanding of network security protocols, encryption, and risk management, Tosin is dedicated to protecting organizations from cyber threats. His expertise spans various areas of cybersecurity, including penetration testing, incident response, and system auditing.",
     skill:
       "Network Security, Risk Management, Penetration Testing, Incident Response",
     contact: "Twitter, Linkedin, Whatsapp",
   },
   "Adeleke Oluwaseun": {
     img: "",
     role: "Cloud Engineer, DevCent",
     bio: "Adeleke Oluwaseun is an experienced Cloud Engineer with a specialization in backend development and cloud architecture. He is adept at building scalable and secure cloud infrastructures, focusing on API development, database management, and automation. With expertise in AWS, Azure, and Kubernetes, Adeleke ensures high availability and performance for cloud-based applications. He is committed to optimizing cloud resources and improving operational efficiency.",
     skill: "Cloud Architecture, API Development, AWS, Kubernetes, Automation",
     contact: "Twitter, Linkedin, Whatsapp",
   },
   "Talodabioluwa Paul": {
     img: "",
     role: "UI/UX Designer",
     bio: "Talodabioluwa Paul is a highly creative and detail-oriented UI/UX Designer who specializes in crafting intuitive and visually engaging user interfaces. With a strong understanding of user psychology and design principles, Talodabioluwa ensures that digital products are not only functional but also aesthetically pleasing. He is proficient in creating wireframes, prototypes, and user flows that improve the overall user experience.",
     skill: "Wireframing, Prototyping, User Research, Interaction Design",
     
   },
   "Ololade Bello": {
     img: "",
     role: "Frontend Developer",
     bio: "Ololade Bello is an innovative Frontend Developer who combines creativity with technical expertise to build dynamic and responsive web applications. With a strong focus on user interface design and front-end architecture, Ololade is adept at turning design concepts into fully functional websites. He has a deep understanding of HTML, CSS, JavaScript, and popular frameworks like React, ensuring smooth user experiences across devices.",
     skill: "HTML, CSS, JavaScript, React, Next js, Angular, Responsive Design",
   
   },
   "Ayodele Boluwatife": {
     img: "",
     role: "CyberSecurity Analyst",
     bio: "Ayodele Boluwatife is a dedicated CyberSecurity Analyst with expertise in vulnerability assessments, threat detection, and incident management. Ayodele takes a proactive approach to identifying security gaps and ensuring data protection for organizations. His experience includes monitoring network traffic, analyzing security breaches, and implementing strategies to safeguard systems from potential cyberattacks.",
     skill:
       "Vulnerability Assessment, Threat Detection, Incident Management, Data Protection",
    
   },
   "Adisa Malik": {
     img: "",
     role: "Frontend Developer",
     bio: "Adisa Malik is a highly proficient Frontend Developer who excels in creating engaging and user-friendly web applications. With a passion for clean code and seamless design, Adisa works closely with UI/UX teams to bring concepts to life. He has a strong command of front-end technologies and specializes in developing responsive websites that enhance user engagement and overall performance.",
     skill:
       "HTML, CSS, JavaScript, React, Vue.js, Nuxt js, Web Performance Optimization",
  
   },
 };
  
  const navigate = useNavigate();
   const { name } = useParams();
   const profileNames = Object.keys(profiles); 
  const currentIndex = profileNames.indexOf(name); 
      
  

  const handlePrevPage = () => {
    const prevIndex =
      (currentIndex - 1 + profileNames.length) % profileNames.length; 
    navigate(`/profile/${profileNames[prevIndex]}`); 
  };

  const handleNextPage = () => {
    const nextIndex = (currentIndex + 1) % profileNames.length; 
    navigate(`/profile/${profileNames[nextIndex]}`);
  };
 
  const memberProfile = profiles[name] || {};
  
   return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-prev" onClick={handlePrevPage}>
          <GrPrevious style={{ color: "white", fontSize: "50px" }} />
        </div>
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
            <h3>Skill</h3>
            <span>{memberProfile.skill}</span>
          </div>
          <Link>{memberProfile.link}</Link>
          <div className="profile-contact">
            <h3>Contact</h3>
           
          </div>
        </div>
        <GrNext
          onClick={handleNextPage}
          style={{ color: "white", fontSize: "50px" }}
        />
      </div>
      <Footer />
    </>
  );
}

export default Profile