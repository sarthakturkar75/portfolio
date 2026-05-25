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

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16 md:text-left text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-accent">Credentials</span></h2>
        <p className="text-gray-400 text-lg">Continuous learning and industry-standard validations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card flex flex-col justify-between"
          >
            <div>
              <div className="text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.name}</h3>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{cert.issuer}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
