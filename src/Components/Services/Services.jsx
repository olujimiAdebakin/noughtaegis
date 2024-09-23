// import React, { useState } from 'react'
// import './Services.css'

// const Services = () => {

//     const [activeIndex, setActiveIndex] = useState(0);
//     const services = [
//       [
//         "Infrastructure Penetration Testing",
//         "Application Penetration Testing",
//         "Purple Teaming",
//         "ICS/OT/Cyber Security Assessment",
//       ],
//       ["Ransomware Penetration Testing", "DevSecOps", "Red Teaming"],
//       [
//         "Objective-Based Penetration Testing",
//         "Cyber Maturity Assessment",
//         "Cloud Penetration Testing",
//       ],
//   ];
  
//   return (
//     <>
//       <div className="services" data-aos="fade-up-right">
//         <h2>Services</h2>
//         <div className="services-container">
//           {services.map((group, groupIndex) => (
//             <div key={groupIndex} className="services-container-content">
//               {group.map((service, index) => {
//                 const globalIndex = groupIndex * 4 + index;
//                 return (
//                   <h3
//                     key={index}
//                     className={activeIndex === globalIndex ? "active" : ""}
//                     onClick={() => setActiveIndex(globalIndex)}
//                   >
//                     {service}
//                   </h3>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="services-below" data-aos="fade-up-right">
//         <h2>Infrastructure Penetration Testing</h2>

//         <div className="service-below-flex">
//           <div className="service-left">
//             <h3>Find weaknesses others overlook</h3>
//             <div>
//               <p>
//                 An infrastructure penetration testing assessment uncovers
//                 vulnerabilities residing in your IT and network systems and
//                 provides a tailored approach to each environment.
//               </p>
//             </div>
//           </div>
//           <div className="service-right">
//             <h3>Infrastructure Penetration Testing can help you:</h3>

//             <ul>
//               <li>Reduce the risk of a breach within system infrastructure</li>
//               <li>Identify gaps in processes and procedures</li>
//               <li>Strengthen your cybersecurity posture</li>
//               <li>
//                 Protect your data from ransomware, trojans, and phishing attacks
//               </li>
//               <li>Highlight how a vulnerability can lead to compromise</li>
//               <li>
//                 Explain to key stakeholders or board members where
//                 vulnerabilities <br /> lie and what to do about it
//               </li>
//             </ul>

//             <button>Explore Service</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Services

import React, { useState } from "react";
import "./Services.css";

import serviceDetailsData from "../../../assets";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const services = [
    [
      
      "Cybersecurity Awareness Training",
      "Application Penetration Testing",
      "Purple Teaming",
      "ICS/OT/Cyber Security Assessment",
    ],
    ["Ransomware Penetration Testing",
      "DevSecOps",
      "Red Teaming",
      "Infrastructure Penetration Testing"],
    [
      "Objective-Based Penetration Testing",
      "Cyber Maturity Assessment",
      "Cloud Penetration Testing",
      "Training and Certificaton",
    ],
  ];



  const flattenedServices = services.flat();

    const getGlobalIndex = (groupIndex, index) => {
      let count = 0;
      for (let i = 0; i < groupIndex; i++) {
        count += services[i].length;
      }
      return count + index;
    };

  return (
    <>
      <div className="services" data-aos="fade-up-right">
        <h2>Services</h2>
        <div className="services-container">
          {services.map((group, groupIndex) => (
            <div key={groupIndex} className="services-container-content">
              {group.map((service, index) => {
              const globalIndex = getGlobalIndex(groupIndex, index);
                 if (globalIndex >= serviceDetailsData.length) return null;
                return (
                  <h3
                    key={index}
                    className={activeIndex === globalIndex ? "active" : ""}
                    onClick={() => setActiveIndex(globalIndex)}
                  >
                    {service}
                  </h3>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="services-below" data-aos="fade-up-right">
        {/* Display content from serviceDetailsData based on activeIndex */}
        <h2>{serviceDetailsData[activeIndex].title}</h2>
        <div className="service-below-flex">
          <div className="service-left">
            <h3>{serviceDetailsData[activeIndex].title}</h3>
            <div>
              <p>{serviceDetailsData[activeIndex].description}</p>
            </div>
          </div>
          <div className="service-right">
            <h3>{serviceDetailsData[activeIndex].title} can help you:</h3>
            <ul className="services-ul">
              {serviceDetailsData[activeIndex].points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <button>Explore Service</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
