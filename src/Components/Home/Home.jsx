import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Services from "../Services/Services";
import Certification from '../Certification/Certification';

const Home = () => {
  return (
      <div>
          <Navbar />
      <Hero />
      <Services />
      <Certification/>
      {/* <hr /> */}
      <Footer/>
          
    </div>
  )
}

export default Home