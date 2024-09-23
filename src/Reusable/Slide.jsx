import React from 'react'
import './Slider.css'
import avater from '../assets/avater.webp';
import { FaRegStar } from "react-icons/fa";

const Slide = () => {
  return (
    <div className="slide">
      <div className="slide-header">
        <h1>What People Say About Us</h1>
      </div>
      <div className="slide-wrapper">
        <div className="slide-content">
          <img src={avater} alt="" />
          <div className="slide-content-text">
            <div className="slide-star">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            
          </div>
        </div>
        <div className="slide-content">
          <img src={avater} alt="" />
        </div>
        <div className="slide-content">
          <img src={avater} alt="" />
        </div>
        <div className="slide-content">
          <img src={avater} alt="" />
        </div>
        <div className="slide-content">
          <img src={avater} alt="" />
        </div>
        <div className="slide-content">
          <img src={avater} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slide