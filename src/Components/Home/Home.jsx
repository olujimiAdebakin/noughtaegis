import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Services from "../Services/Services";
import Certification from '../Certification/Certification';
import Serve from '../WhoWeServe/Serve';
import Testimonial from '../Testimonial/Testimonial';
import ResponsiveNavbar from '../../Reusable/ResponsiveNavbar'
import Marqee from '../../Reusable/Marqee/Marqee';
import { Offcanvas } from 'bootstrap';
import OffcanvasExample from '../../Reusable/ResponsiveNavbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <ResponsiveNavbar/> */}
      {/* <OffcanvasExample/> */}
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