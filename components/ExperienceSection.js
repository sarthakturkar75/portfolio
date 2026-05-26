import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: "Lead AI Systems Architect",
    company: "Praimo Innovations",
    period: "April 2026 - Present",
    details: [
      "Rudraa: Architected a microservices-based vision ecosystem (Python, YOLOv8, Docker, FastAPI), standardizing edge-AI deployment and high-speed inspection for Fortune 500 clients.",
      "Designed the centralized software 'brain' for the Mobile Integrated Manufacturing System (MIMS), orchestrating AI perception with 6-DOF robotics and AGV protocols.",
      "Engineered deterministic, sub-millisecond synchronization for closed-loop feedback systems, achieving 0.01mm gantry precision by minimizing inference-to-execution latency.",
      "Established the technical roadmap and developed a custom, hardware-bound secure licensing architecture to protect proprietary AI assets."
    ]
  },
  {
    role: "AI Systems Intern",
    company: "Praimo Innovations",
    period: "Oct 2025 - March 2026",
    details: [
      "Spearheaded a high-speed AI sorting pipeline for Hitachi, validating the architectural feasibility of deep learning for real-time industrial asset tracking.",
      "Performed rigorous performance profiling of YOLOv8 and MediaPipe architectures to define baseline latency and accuracy metrics for the core vision platform."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Sakar Robotics",
    period: "March 2024 - January 2025",
    details: [
      "Architected and deployed advanced computer vision models, significantly enhancing system accuracy and operational performance.",
      "Built and managed robust data pipelines for preprocessing and augmenting large-scale image datasets for training resilient deep learning models."
    ]
  },
  {
    role: "Developer",
    company: "RedX MITAOE Club",
    period: "August 2022 - January 2024",
    details: [
      "Contributed to the full software development lifecycle for multiple projects, authoring clean, scalable, and documented code for various software and web applications."
    ]
  }
];

export default function ExperienceSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto" ref={containerRef}>
      <div className="mb-20 md:text-left text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Professional <span className="text-secondary">Journey</span></h2>
        <p className="text-gray-400 text-lg md:text-xl font-light">My path through intelligent systems and software architecture.</p>
      </div>

      <div className="relative space-y-16">
        {/* The Animated Scroll Line */}
        <div className="hidden md:block absolute left-[-39px] top-4 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-secondary to-primary rounded-full origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:relative glass-card border-l-4 border-l-secondary hover:border-l-primary group interactive transition-all duration-500 hover:translate-x-2">
              {/* Timeline dot */}
              <div className="absolute -left-10 md:-left-[60px] top-6 w-5 h-5 rounded-full bg-[#121212] border-4 border-secondary group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all z-10 hidden md:block duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                  <p className="text-lg text-gray-400 font-medium">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0 text-secondary font-mono text-sm bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 inline-block w-fit tracking-wider">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-4 text-gray-400 font-light">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed flex items-start">
                    <span className="text-primary mr-3 mt-1">▹</span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
