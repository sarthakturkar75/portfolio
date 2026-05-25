import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background blobs for cyber aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Hello, I am</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter mb-6">
            Sarthak <br className="md:hidden" /> Turkar
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl text-muted font-light mb-8">
            Lead <span className="text-gradient font-bold">AI Systems Architect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Architecting intelligent vision ecosystems, orchestrating robotics, and engineering deterministic, sub-millisecond synchronization for closed-loop systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all hover:-translate-y-1">
            Let's Collaborate
          </a>
          <a href="#experience" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all hover:-translate-y-1">
            View Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
}
