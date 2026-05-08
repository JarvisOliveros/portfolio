"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";
import animalSvg  from "../../../public/Moody Wolf.json";



export default function background() {
    // 1. Create a state that we toggle to force a re-calculation of random values
  const [iteration, setIteration] = useState(0);

  // 2. Generate random vertical points (between 10% and 80% of screen height)npm
  const randomY = () => [
    `${Math.random() * 40 + 10}vh`, // Start point
    `${Math.random() * 40 + 40}vh`, // Middle point 1
    `${Math.random() * 40 + 10}vh`, // Middle point 2
    `${Math.random() * 40 + 40}vh`, // Middle point 3
    `${Math.random() * 40 + 10}vh`, // End point
  ];
  return (
    
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50">
      {/* 1. Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />
      {/* THE MOVING WOLF LAYER */}
      <motion.div
        key={iteration} // Changing the key resets the animation with new random values
        className="absolute w-64 h-64 pointer-events-none"
        initial={{ x: "-20vw", opacity: 0 }}
        animate={{
          x: ["-20vw", "20vw", "50vw", "80vw", "120vw"],
          y: randomY(), // Call our random generator
          opacity: [0, 5.4, 5.4, 5.4,5],
          rotate: [0, 10, -5, 10, 0],
        }}
        transition={{
          duration: 10,
          ease: "linear",
        }}
        onAnimationComplete={() => setIteration(i => i + 1)} // When it hits 120vw, start over
      >
        <Lottie 
          animationData={animalSvg} 
          loop={true} 
          className="w-full h-full opacity-50" 
        />
      </motion.div>

      {/* 2. Animated "Data Clouds" */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-slate-200/60 blur-[120px]"
      />
      {/* THE MOVING ANIMAL LAYER */}
<motion.div
  className="absolute pointer-events-none z-0"
  initial={{ x: "-10vw", y: "20vh", opacity: 0 }}
  animate={{
    // These coordinates follow your "Red Line" path
    x: ["-10vw", "20vw", "40vw", "60vw", "110vw"],
    y: ["20vh", "40vh", "10vh", "50vh", "30vh"],
    opacity: [0, 1, 1, 1, 0],
    rotate: [0, 15, -10, 20, 0], // Tilts as it "climbs" and "falls"
  }}
  transition={{
    duration: 20, // Adjust speed here
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* The Visual: Replace the text with an actual SVG or GIF of an animal */}
  <div className="relative">

    
  
    {/* Subtle "Data Trail" effect behind the animal */}
    <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full scale-150" />
  </div>
</motion.div>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
  {/* The Grid */}
  <div 
    className="absolute inset-0 opacity-[0.2]" 
    style={{ 
      backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
      backgroundSize: '50px 50px' 
    }}
  />

  {/* THIS ADDITION: The Fade Effect */}
  <div 
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(circle at center, transparent 0%, white 100%)'
    }}
  />

  {/* Your Animated Data Clouds/Blobs stay here... */}
</div>
    </div>
  );
}