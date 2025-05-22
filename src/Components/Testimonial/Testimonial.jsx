import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "This service has exceeded my expectations in every way. The team's expertise, professionalism, and attention to detail have been truly impressive. Highly recommend!",
    name: "Tezza Business Solutions",
    position: "CEO",
  },
  {
    text: "From initial consultation to project completion, the experience was seamless. Their dedication to delivering top-notch results is genuinely admirable. Wonderful experience!",
    name: "Spin Designs",
    position: "CEO",
  },
  {
    text: "I'm thrilled with the outcomes! The team's innovative approach and technical expertise have significantly improved our processes. Couldn't be happier with the results.",
    name: "Cybersechaven",
    position: "CEO",
  },
  {
    text: "The level of professionalism and attentiveness was outstanding. Their flexibility and willingness to adapt to our needs made the collaboration effortless. Will definitely use again!",
    name: "Ruozo",
    position: "CEO",
  },
  {
    text: "The value for money is exceptional, and the support team’s responsiveness is unparalleled. Their expertise has significantly enhanced our business operations. Great investment!",
    name: "SunFi",
    position: "CEO",
  },
  {
    text: "Every aspect of the service, from initial consultation to delivery, was executed flawlessly. Their passion for excellence shines through in every detail. Exceeded expectations!",
    name: "Ogun State Government",
    position: "MR, Governor",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <div className="header-left">
          <small>REVIEWS</small>
          <h2>What our clients say</h2>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 7000, disableOnInteraction: false }} 
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p>{testimonial.text}</p>
                <div className="testimonials">
                  <small>{testimonial.position}</small>
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
