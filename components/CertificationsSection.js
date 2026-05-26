import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
  { name: "Palo Alto Networks Cybersecurity Specialization", issuer: "Palo Alto Networks" },
  { name: "Network Security Fundamentals", issuer: "Palo Alto Networks" },
  { name: "Network Security & Database Vulnerabilities", issuer: "Certification" },
  { name: "Project Management Fundamentals", issuer: "Certification" },
  { name: "Data and Analytics", issuer: "Certification" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 12 }
  }
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-20 md:text-left text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Professional <span className="text-accent">Credentials</span></h2>
        <p className="text-gray-400 text-lg md:text-xl font-light">Continuous learning and industry-standard validations.</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card flex flex-col justify-between interactive cursor-pointer"
          >
            <div>
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-[0_0_10px_rgba(0,255,163,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">{cert.name}</h3>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{cert.issuer}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
