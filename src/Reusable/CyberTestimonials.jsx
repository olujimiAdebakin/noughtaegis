import React from "react";
import Slider from "react-slick";
import "./CyberTestimonials.css";

const CyberTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    autoplay: true, 
    autoplaySpeed: 3000,

    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="cyber-testimonials">
      <h2 className="cyber-testimonials-title">What Our Clients Say</h2>
      <div className="cyber-testimonials-slider">
        <Slider {...settings}>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              Outstanding cybersecurity services that have made our business
              more secure than ever!
            </p>
            <h4 className="cyber-testimonial-author">
              John Doe, CEO of TechCorp
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "Their expert team helped us meet compliance effortlessly. Highly
              recommended."
            </p>
            <h4 className="cyber-testimonial-author">
              Jane Smith, COO of HealthPlus
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "We now have peace of mind knowing our systems are constantly
              monitored."
            </p>
            <h4 className="cyber-testimonial-author">
              Michael Lee, CTO of FinSecure
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "Their 24/7 SOC team is incredibly responsive and proactive in
              handling threats."
            </p>
            <h4 className="cyber-testimonial-author">
              Emily Davis, IT Manager at SafeNet
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "A game-changer for our business security. We couldn't be happier
              with the results."
            </p>
            <h4 className="cyber-testimonial-author">
              James Wilson, Founder of SecureTrade
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "Their proactive approach has kept our systems safe from emerging
              cyber threats."
            </p>
            <h4 className="cyber-testimonial-author">
              Sara Johnson, CIO at DataProtect
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "Expert guidance on compliance that helped us avoid hefty fines
              and ensure data security."
            </p>
            <h4 className="cyber-testimonial-author">
              Chris Roberts, Head of IT, GlobalFinance
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "Our customers feel more secure knowing their data is protected by
              world-class cybersecurity."
            </p>
            <h4 className="cyber-testimonial-author">
              Laura White, CMO at SafeGuard Solutions
            </h4>
          </div>
          <div className="cyber-testimonial-item">
            <p className="cyber-testimonial-text">
              "The level of dedication and expertise they bring to the table is
              unmatched in the industry."
            </p>
            <h4 className="cyber-testimonial-author">
              Peter Green, Founder & CEO, SecureNet
            </h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CyberTestimonials;
