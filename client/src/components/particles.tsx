import { useEffect, useState } from "react";
import "./particles.css";

// Type definition for particles
interface Particle {
  id: number;
  top: string;
  left: string;
  color: string;
  animation: string;
  shadow: string;
  background: string;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = () => {
    const colors: string[] = [
      "var(--pastel-peach)",
      "var(--pastel-pink)",
      "var(--pastel-magenta)",
      "var(--pastel-purple)",
      // "var(--pastel-indigo)",
      "var(--pastel-white)",
      "var(--pastel-blue)",
      "var(--pastel-pink2)",
      "var(--pastel-pink3)",
      "var(--pastel-green)",
      "var(--pastel-green1)",
      // "var(--pastel-green2)",
      // "var(--pastel-green3)",
      // "var(--pastel-green4)",
      "var(--pastel-yellow)",
      // "var(--pastel-indigo2)",
      // "var(--pastel-red)",
      "var(--pastel-white2)",
      "var(--pastel-pink4)",
      "var(--pastel-yellow2)",
      "var(--pastel-sky)",
    ];
    const animations: string[] = [
      "moveHorizontal",
      "moveVertical",
      // "moveInCircle",
    ];
    const movements: string[] = ["ease", "linear", "reverse"];

    const getAnimation = () => {
      const animation =
        animations[Math.floor(Math.random() * animations.length)];
      const movement = movements[Math.floor(Math.random() * movements.length)];
      const time = Math.floor(Math.random() * 10) + 20;
      return `${animation} ${time}s ${movement} infinite`;
    };

    const getShadow = (color: string) => {
      const shadow = `
        5px 5px 25px ${color},
        0px 0px 30px ${color},
        0px 0px 35px ${color},
        0px 0px 40px ${color},
        0px 0px 45px ${color},
        0px 0px 50px ${color}
        `;
      return shadow;
    };
    // Get actual full height of scrollable document
    const fullHeight = Math.max(
      // document.body.scrollHeight,
      document.documentElement.scrollHeight,
      // document.documentElement.offsetHeight,
      // document.documentElement.clientHeight,
    );
    const newParticles: Particle[] = Array.from({ length: 30 }).map(
      (_, index) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
          id: index + 1,
          top: `${Math.random() * 100}vh`, // Random position in full scrollable height
          left: `${Math.random() * 100}vw`, // Random width
          color: `#fff`,
          shadow: `${getShadow(color).toString()}`,
          // shadow: `0px 0px 10px black`,
          background: `radial-gradient(circle at center,${color} , ${color} 50%) no-repeat`,
          animation: `${getAnimation().toString()}`,
        };
      },
    );

    setParticles(newParticles);
    console.log(getAnimation());
  };

  // Generate particles on mount & update when page resizes
  useEffect(() => {
    generateParticles();
    // window.addEventListener("resize", generateParticles);
    // return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <div id="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            top: particle.top,
            left: particle.left,
            background: particle.background,
            boxShadow: particle.shadow,
            animation: particle.animation,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Particles;
