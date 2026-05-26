import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Rudraa Vision Ecosystem",
    tech: ["Python", "YOLOv8", "Docker", "FastAPI"],
    description: "A microservices-based vision ecosystem standardizing edge-AI deployment and high-speed inspection for Fortune 500 clients.",
    highlight: "Edge-AI Architecture"
  },
  {
    title: "MIMS Core Intelligence",
    tech: ["Robotics", "AGV Protocols", "Closed-loop Control"],
    description: "The centralized software 'brain' for the Mobile Integrated Manufacturing System, orchestrating AI perception with 6-DOF robotics and achieving 0.01mm gantry precision.",
    highlight: "Robotics Orchestration"
  },
  {
    title: "Hitachi AI Sorting Pipeline",
    tech: ["Deep Learning", "MediaPipe", "Real-time Tracking"],
    description: "A high-speed AI sorting pipeline validating the architectural feasibility of deep learning for real-time industrial asset tracking.",
    highlight: "High-Speed Vision"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:text-left text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-gray-400 text-lg">Key systems and architectures engineered for scale and precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col h-full relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="flex-1">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-3 block">
                {project.highlight}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
