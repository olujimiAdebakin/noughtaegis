import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Services from "../Services/Services";
import Certification from '../Certification/Certification';
import Serve from '../WhoWeServe/Serve';

const Home = () => {
  return (
      <div>
          <Navbar />
      <Hero />
      <Services />
      <Certification />
      <Serve/>
      {/* <hr /> */}
      <Footer/>
          
    </div>
  )
}

export default Home