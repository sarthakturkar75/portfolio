import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for the background parallax
  const springConfig = { damping: 50, stiffness: 400, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse position to slight background shifts
  const bgX1 = useTransform(smoothX, [0, 1000], [-30, 30]);
  const bgY1 = useTransform(smoothY, [0, 1000], [-30, 30]);
  
  const bgX2 = useTransform(smoothX, [0, 1000], [30, -30]);
  const bgY2 = useTransform(smoothY, [0, 1000], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Glitch animation variants for the main text
  const glitchVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Interactive Background blobs */}
      <motion.div 
        style={{ x: bgX1, y: bgY1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" 
      />
      <motion.div 
        style={{ x: bgX2, y: bgY2 }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" 
      />
      <motion.div 
        style={{ x: bgX1, y: bgY2 }}
        className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" 
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={glitchVariants}
        >
          <p className="text-primary font-mono tracking-widest uppercase mb-4 text-sm md:text-base">
            {"<Hello World /> I am"}
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter mb-6 leading-none relative inline-block group">
            <span className="relative z-10 text-white">Sarthak Turkar</span>
            {/* Glitch effect pseudo-elements via CSS or inline styles can go here, for now using a subtle text-shadow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 z-0"></div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl text-muted font-light mb-8">
            Lead <span className="text-gradient font-bold drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">AI Systems Architect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Architecting intelligent vision ecosystems, orchestrating robotics, and engineering deterministic, sub-millisecond synchronization for closed-loop systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <a href="#contact" className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden interactive">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Collaborate</span>
            <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>
          <a href="#projects" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 interactive">
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
