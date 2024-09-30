import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/Testimonial/Testimonial';

const CloudService = () => {
  return (
    <>
          <Navbar />
      
          <div className="cloud-service-hero">
        <h2>Managed Cloud Services</h2>
        <p>
          Transform your business with our fully managed cloud solutions,
          designed to boost efficiency, enhance security, and scale effortlessly
          as you grow. From cloud migration to ongoing optimization, we ensure
          your cloud infrastructure is always aligned with your business needs.
        </p>
          </div>
          
          <div className="cloud-service-testimonial">
              <Testimonial/>
          </div>
    </>
  );
}

export default CloudService