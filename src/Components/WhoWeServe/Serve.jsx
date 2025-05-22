import React from 'react'
import './Serve.css'
import { Link } from 'react-router-dom';
import packet from '../../assets/packet.webp'

const Serve = () => {
  return (
    <>
      <div className="serve">
        <div className="serve-left">
          <h3>Industries We Serve</h3>
          <div className="serve-left-link">
            <Link to="/education">Education</Link>
            <Link to="telecommunications">Telecommunications</Link>
            <Link to="/banking-financial-services">Banking & Finance</Link>

            <Link to="/healthcare">HealthCare</Link>
            <Link to="/law-firm">Law-Firms</Link>
            <Link to="/non-profit">Non-Profit</Link>
            <Link to="/manufacturing">Manufacturing</Link>
            <Link to="/military">Military</Link>
            <Link to="/government">Government</Link>
            <Link to="/procurement">Procurement</Link>
          </div>
          <button>See All Industries</button>
        </div>
        <div className="serve-right">
          <img src={packet} alt="" />
        </div>
      </div>
    </>
  );
}

export default Serve