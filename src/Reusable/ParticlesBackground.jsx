// src/ParticlesBackground.js
import React, { useEffect } from "react";
import Particles from "particles.js";

const ParticlesBackground = () => {
  useEffect(() => {
    Particles.init({
      selector: "#particles-js",
      maxParticles: 100,
      sizeVariations: 3,
      color: "#ffffff",
      connectParticles: true,
      speed: 1,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
          },
        },
        {
          breakpoint: 480,
          options: {
            maxParticles: 30,
          },
        },
      ],
    });

    return () => {
      // Cleanup function to stop particles
      Particles.destroy();
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
