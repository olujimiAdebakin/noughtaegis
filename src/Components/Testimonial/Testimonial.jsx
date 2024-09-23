import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules'; 

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
{
text: "This service has exceeded my expectations in every way. The team's expertise, professionalism, and attention to detail have been truly impressive. Highly recommend!",
name: "John Doe",
position: "CEO, Company A",
},

{
text: "From initial consultation to project completion, the experience was seamless. Their dedication to delivering top-notch results is genuinely admirable. Wonderful experience!",
name: "Jane Smith",
position: "Manager, Company B",
},

{
text: "I'm thrilled with the outcomes! The team's innovative approach and technical expertise have significantly improved our processes. Couldn't be happier with the results.",
name: "Alice Johnson",
position: "Developer, Company C",
},

{
text: "The level of professionalism and attentiveness was outstanding. Their flexibility and willingness to adapt to our needs made the collaboration effortless. Will definitely use again!",
name: "Bob Brown",
position: "Designer, Company D",
},

{
text: "The value for money is exceptional, and the support team's responsiveness is unparalleled. Their expertise has significantly enhanced our business operations. Great investment!",
name: "Charlie Green",
position: "Product Owner, Company E",
},

{
text: "Every aspect of the service, from initial consultation to delivery, was executed flawlessly. Their passion for excellence shines through in every detail. Exceeded expectations!",
name: "Diana White",
position: "Entrepreneur, Company F",
},
]


const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonail-header">
        <div className="header-left">
          <small>REVIEWS</small>
          <h2>What our clients say</h2>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3} 
          onAutoplay={true}
          
          navigation
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            0: {
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
}

export default Testimonial