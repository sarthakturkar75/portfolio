import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: "Software Intelligence",
    description: "AI Systems Architecture, Systems Orchestration, Deep Learning, Computer Vision, MLOps, Autonomous Logic, Full-Stack (React.js, Python, FastAPI, SQL).",
    icon: "🧠"
  },
  {
    title: "Operational Interface",
    description: "Robotics Integration (AGV/6-DOF Arms), PLC Integration (Mitsubishi), Motion Control, Data Preparation & Analytics.",
    icon: "🤖"
  },
  {
    title: "Tools & Technologies",
    description: "YOLOv8, Neural Networks, Docker, TensorFlow, PyTorch, Linux Systems, MediaPipe, AI-Augmented Development.",
    icon: "⚙️"
  },
  {
    title: "Strategic Leadership",
    description: "Project Management, Technical Strategy, Problem Solving, Cross-functional Team Orchestration.",
    icon: "📈"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 md:text-left text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Core <span className="text-primary">Competencies</span></h2>
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl font-light">A synergy of advanced artificial intelligence, robotics integration, and technical leadership.</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card flex flex-col group relative overflow-hidden interactive"
          >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="text-5xl mb-6 relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-left">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10 duration-300">{skill.title}</h3>
            <p className="text-gray-400 leading-relaxed relative z-10 font-light">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
