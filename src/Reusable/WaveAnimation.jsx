import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles"; // Note: Use just 'tsparticles' in version 3.x

const WaveAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true, // Ensures particles cover the entire background
          zIndex: 1, // Set zIndex for layering
        },
        background: {
          color: "#0d47a1", // Background color
        },
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              value_area: 800, // Area density
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: "circle", // Particle shape
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5, // If using polygon shape
            },
          },
          opacity: {
            value: 0.5, // Particle opacity
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 5 }, // Size of particles
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none", // Change to "top", "bottom", "left", or "right" if needed
            random: false,
            straight: false,
            outModes: {
              default: "out", // How to handle particles going out of bounds
            },
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Change to "grab" or "bubble" for different effects
            },
            onClick: {
              enable: true,
              mode: "push", // Can add particles on click
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            repulse: {
              distance: 200,
              duration: 2,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true, // Responsive to high DPI screens
      }}
    />
  );
};

export default WaveAnimation;
