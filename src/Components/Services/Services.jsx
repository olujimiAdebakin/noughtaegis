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
        <div className="services-header">
          <h2>Services</h2>
        </div>
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
        <div className="services-below-header">
          <h2>{serviceDetailsData.serviceDetailsData[activeIndex].title}</h2>
        </div>
        <div className="service-below-flex">
          <div className="service-left">
            <h3>{serviceDetailsData.serviceDetailsData[activeIndex].title}</h3>
            <div>
              <p>
                {serviceDetailsData.serviceDetailsData[activeIndex].description}
              </p>
            </div>
          </div>
          <div className="service-right">
            <h3>
              {serviceDetailsData.serviceDetailsData[activeIndex].title} can
              help you:
            </h3>
            <ul className="services-ul">
              {serviceDetailsData.serviceDetailsData[activeIndex].points.map(
                (point, idx) => (
                  <li key={idx}>{point}</li>
                )
              )}
            </ul>
            <button>Explore Service</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
