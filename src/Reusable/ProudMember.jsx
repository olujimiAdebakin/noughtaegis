import React from 'react';
import './ProudMember.css';
import enterpren from '../assets/entrepreneur.webp'
import gic from "../assets/gic.webp";
import Rcc from "../assets/rcc.webp";


const ProudMember = () => {
  return (
    <div className="proud-member">
      <div className="proud-member-header">
        <h2>We’re a proud member of the following associations</h2>
      </div>
      <div className="member-img">
        <img src={enterpren} alt="" />
        <img src={gic} alt="" />
        <img
          src={Rcc} 
          className='rcc'
          alt="Rcc"
        />
      </div>
    </div>
  );
}

export default ProudMember