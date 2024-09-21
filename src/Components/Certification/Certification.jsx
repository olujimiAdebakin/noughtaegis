import React from 'react'
import './Certification.css'
import Slider from "react-slick";
import certified_logo from '../../assets/GSNA.webp'
import certified_logoo from "../../assets/GXPN.webp";
import certified_logooo from "../../assets/GWAPT.webp";
import certified_logoooo from "../../assets/GMOB.webp"
import certified_logooooo from "../../assets/gcih-gold.webp";
import certified_logovi from "../../assets/CISA.webp";
import certified_logovii from "../../assets/burp.webp";
import certified_logoviii from "../../assets/exp.webp";
import certified_logoviiii from "../../assets/pen.webp";
import certified_logox from "../../assets/web.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certification = () => {

       const certifications = [
         certified_logo,
         certified_logoo,
         certified_logooo,
         certified_logoooo,
         certified_logooooo,
         certified_logovi,
         certified_logoviii,
         certified_logoviiii,
         certified_logovii,
         certified_logox,
       ];

       const settings = {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 5,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 3000,
         rtl: true,
         centerMode: true,
         centerPadding: "40px",
         responsive: [
           {
             breakpoint: 786, // When screen width is less than or equal to 786px
             settings: {
               slidesToShow: 2, // Show only 2 slides
               slidesToScroll: 1,
               centerPadding: "20px", // Adjust the padding for smaller screens if needed
             },
           },
           {
             breakpoint: 480, // When screen width is less than or equal to 480px
             settings: {
               slidesToShow: 1, // Show only 1 slide
               slidesToScroll: 1,
               centerPadding: "10px", // Further reduce padding on very small screens
             },
           },
         ],
       };

    return (
      <>
        <div className="certification">
          <div className="certification-header">
            <h2>Certifications</h2>
          </div>
          <div className='slider-box'>
            <Slider {...settings}>
              {certifications.map((cert, index) => (
                <div className="img-wrapper" key={index}>
                  <img
                    src={cert}
                    alt={`certification-${index}`}
                    className="carousel-img"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
}

export default Certification