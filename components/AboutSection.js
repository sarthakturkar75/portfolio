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

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:text-left text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Core <span className="text-primary">Competencies</span></h2>
        <p className="text-gray-400 max-w-2xl text-lg">A synergy of advanced artificial intelligence, robotics integration, and technical leadership.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col group relative overflow-hidden"
          >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-4xl mb-4 relative z-10">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors relative z-10">{skill.title}</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
