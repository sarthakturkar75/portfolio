import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Rudraa Vision Ecosystem",
    tech: ["Python", "YOLOv8", "Docker", "FastAPI"],
    description: "A microservices-based vision ecosystem standardizing edge-AI deployment and high-speed inspection for Fortune 500 clients.",
    highlight: "Edge-AI Architecture",
    image: "/images/rudraa.png"
  },
  {
    title: "MIMS Core Intelligence",
    tech: ["Robotics", "AGV Protocols", "Closed-loop Control"],
    description: "The centralized software 'brain' for the Mobile Integrated Manufacturing System, orchestrating AI perception with 6-DOF robotics and achieving 0.01mm gantry precision.",
    highlight: "Robotics Orchestration",
    image: "/images/mims.png"
  },
  {
    title: "Hitachi AI Sorting Pipeline",
    tech: ["Deep Learning", "MediaPipe", "Real-time Tracking"],
    description: "A high-speed AI sorting pipeline validating the architectural feasibility of deep learning for real-time industrial asset tracking.",
    highlight: "High-Speed Vision",
    image: "/images/hitachi.png"
  }
];

const TiltCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card flex flex-col h-full relative overflow-hidden group interactive perspective-[1000px] bg-surface/50 p-0 border-white/5"
    >
      {/* 3D Inner Content */}
      <div 
        className="w-full h-48 sm:h-64 overflow-hidden relative"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-20" />
      </div>

      <div 
        className="flex-1 p-6 lg:p-8 flex flex-col relative z-30 bg-[#121212]/80 backdrop-blur-sm"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3 block drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
          {project.highlight}
        </span>
        <h3 className="text-2xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/10">
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
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="mb-20 md:text-left text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Architectures</span></h2>
        <p className="text-gray-400 text-lg md:text-xl font-light">Key systems engineered for scale, precision, and autonomy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 perspective-[1000px]">
        {projects.map((project, index) => (
          <TiltCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
