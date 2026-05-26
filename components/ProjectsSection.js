import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const mainProject = {
  title: "MIMS Core Intelligence",
  tech: ["Robotics", "AGV Protocols", "Closed-loop Control", "AI Perception", "6-DOF Robotics"],
  description: "Designed the centralized software 'brain' for the Mobile Integrated Manufacturing System (MIMS). This system orchestrates complex AI perception directly with 6-DOF robotics and AGV protocols, achieving deterministic, sub-millisecond synchronization and 0.01mm gantry precision.",
  highlight: "Featured Flagship Architecture",
  image: "/portfolio/images/mims.png"
};

const otherProjects = [
  {
    title: "Rudraa Ecosystem",
    tech: ["Python", "YOLOv8", "Docker", "FastAPI", "Microservices"],
    description: "A microservices-based vision ecosystem. Standardized edge-AI deployment and high-speed inspection for Fortune 500 clients.",
    highlight: "Edge-AI Architecture",
    image: "/portfolio/images/rudraa.png"
  },
  {
    title: "Hitachi High-Speed Pipeline",
    tech: ["Deep Learning", "MediaPipe", "Real-time Tracking"],
    description: "A high-speed AI sorting pipeline validating the architectural feasibility of deep learning for real-time industrial asset tracking, including rigorous performance profiling to define baseline latency metrics.",
    highlight: "High-Speed Vision",
    image: "/portfolio/images/hitachi.png"
  },
  {
    title: "SETUU Internal Tooling",
    tech: ["Flutter", "Supabase", "Project Management", "Dart"],
    description: "Robust internal project management tooling built with Flutter and Supabase, streamlining team workflows and accelerating development cycles across multiple squads.",
    highlight: "Internal Tooling",
    image: "/portfolio/images/setuu.png"
  }
];

const TiltCard = ({ project, index, isFeatured = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Less aggressive tilt for the large featured card to keep it readable
  const tiltDegree = isFeatured ? "5deg" : "10deg";
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltDegree, `-${tiltDegree}`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltDegree}`, tiltDegree]);

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
      className={`glass-card flex relative overflow-hidden group interactive perspective-[1000px] bg-surface/50 p-0 border-white/5 ${
        isFeatured ? 'flex-col md:flex-row h-auto min-h-[400px]' : 'flex-col h-full'
      }`}
    >
      {/* 3D Inner Content - Image Area */}
      <div 
        className={`relative overflow-hidden ${
          isFeatured ? 'w-full md:w-1/2 h-64 md:h-auto' : 'w-full h-48 sm:h-64'
        }`}
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient fade to blend image with text area depending on layout */}
        <div className={`absolute inset-0 z-20 ${
          isFeatured 
            ? 'bg-gradient-to-t md:bg-gradient-to-r from-[#121212] via-[#121212]/80 md:via-transparent to-transparent'
            : 'bg-gradient-to-t from-[#121212] via-transparent to-transparent'
        }`} />
      </div>

      {/* 3D Inner Content - Text Area */}
      <div 
        className={`flex-1 p-6 lg:p-10 flex flex-col relative z-30 bg-[#121212]/80 backdrop-blur-sm ${
          isFeatured ? 'md:justify-center' : ''
        }`}
        style={{ transform: "translateZ(40px)" }}
      >
        <span className={`font-bold tracking-widest uppercase mb-3 block drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] ${
          isFeatured ? 'text-sm text-accent' : 'text-xs text-primary'
        }`}>
          {project.highlight}
        </span>
        <h3 className={`font-bold text-white mb-4 ${
          isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl'
        }`}>
          {project.title}
        </h3>
        <p className={`text-gray-400 mb-8 leading-relaxed font-light ${
          isFeatured ? 'text-lg md:text-xl' : 'text-base'
        }`}>
          {project.description}
        </p>

        <div className={`mt-auto pt-4 ${!isFeatured && 'border-t border-white/10'}`}>
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

      <div className="flex flex-col gap-12 perspective-[1000px]">
        {/* Featured Main Project */}
        <TiltCard project={mainProject} index={0} isFeatured={true} />

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {otherProjects.map((project, index) => (
            <TiltCard key={index} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
