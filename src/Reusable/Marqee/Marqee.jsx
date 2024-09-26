import React, { useEffect, useRef, useState } from 'react'
import './Marqee.css'

const Marqee = () => {

      const [offset, setOffset] = useState(0);
    const marqueeRef = useRef(null);
    
     useEffect(() => {
       const marqueeWidth = marqueeRef.current.offsetWidth;
       const containerWidth = marqueeRef.current.parentElement.offsetWidth;

       const scrollSpeed = 1; // Adjust this value for faster/slower scrolling
       const intervalId = setInterval(() => {
         setOffset((prevOffset) => {
           const resetPosition = -marqueeWidth;
           if (prevOffset <= resetPosition) {
             return 0;
           }
           return prevOffset - scrollSpeed;
         });
       }, 17);
       return () => clearInterval(intervalId); // Cleanup interval on component unmount
     }, []);

  return (
    <>
      <div className="marqee">
        <div
          className="marqee-content" ref={marqueeRef}
        style={{ transform: `translateX(${offset}px)` }}
        >
          <h1>
            Welcome to DevCent - Your Gateway to Tech Excellence! | Web
            Development | Cybersecurity | Data Science | Cloud Computing | AI
            and Machine Learning | Unlock your potential with expert-led courses
            and real-world projects! | Join DevCent Today and Be the Future of
            Tech!
                  </h1>
                   <h1>
            Welcome to DevCent - Your Gateway to Tech Excellence! | Web
            Development | Cybersecurity | Data Science | Cloud Computing | AI
            and Machine Learning | Unlock your potential with expert-led courses
            and real-world projects! | Join DevCent Today and Be the Future of
            Tech!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Marqee