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
            <Link to="">Retail & Eccormerce</Link>
            <Link to="">Finance</Link>
            <Link to="">Government</Link>
            <Link to="">Technology</Link>
            <Link to="">HealthCare</Link>
            <Link to="">Utilities & Energy</Link>
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