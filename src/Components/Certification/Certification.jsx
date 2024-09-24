import React from "react";
import "./Certification.css";
import Slider from "react-slick";
import certified_logo from "../../assets/GSNA.webp";
import certified_logoo from "../../assets/GXPN.webp";
import certified_logooo from "../../assets/GWAPT.webp";
import certified_logoooo from "../../assets/GMOB.webp";
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
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      <div className="certification-container">
        <div className="certification-header">
          <h2>Certifications</h2>
        </div>
        <div className="certification-slider">
          <Slider {...settings}>
            {certifications.map((cert, index) => (
              <div className="certification-img-wrapper" key={index}>
                <img
                  src={cert}
                  alt={`certification-${index}`}
                  className="certification-carousel-img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Certification;
