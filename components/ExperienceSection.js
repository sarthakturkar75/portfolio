import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16 md:text-left text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-secondary">Journey</span></h2>
        <p className="text-gray-400 text-lg">My path through intelligent systems and software architecture.</p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline line for mobile / desktop alignment */}
            <div className="hidden md:block absolute left-[-40px] top-2 bottom-[-48px] w-0.5 bg-white/10 last:hidden" />
            
            <div className="md:relative glass-card border-l-4 border-l-secondary hover:border-l-primary group">
              <div className="absolute -left-10 md:-left-[58px] top-6 w-4 h-4 rounded-full bg-secondary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all z-10 hidden md:block" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-secondary font-mono text-sm bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20 inline-block w-fit">
                  {exp.period}
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-gray-300 -ml-2">{detail}</span>
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
