import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Services from "../Services/Services";
import Certification from '../Certification/Certification';
import Serve from '../WhoWeServe/Serve';
import Testimonial from '../Testimonial/Testimonial';
import Marqee from '../../Reusable/Marqee/Marqee';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      

      <Testimonial />
      <Services />
      <Certification />
      <Serve />

      {/* <hr /> */}
      <Footer />
    </div>
  );
}

export default Home