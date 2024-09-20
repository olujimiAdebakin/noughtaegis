import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Services from "../Services/Services";

const Home = () => {
  return (
      <div>
          <Navbar />
      <Hero />
      <Services/>
      {/* <hr /> */}
      <Footer/>
          
    </div>
  )
}

export default Home