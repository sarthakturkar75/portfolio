import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto glass-card relative overflow-hidden p-8 md:p-12 text-center border-primary/20 bg-surface/80">
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
            Ready to <span className="text-gradient">Innovate?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you have a question or want to collaborate on cutting-edge AI architecture, I'm always open to discussing new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:sarthakturkar75@gmail.com" 
               className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Say Hello
            </a>
            
            <a href="https://linkedin.com/in/sarthak-turkar-a57246201" target="_blank" rel="noopener noreferrer"
               className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:border-secondary hover:text-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-gray-500 font-mono text-sm">
            <p>Phone: +91 869659494</p>
            <p className="mt-2">© {new Date().getFullYear()} Sarthak Turkar. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
