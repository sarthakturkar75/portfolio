import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="bg-background text-white min-h-screen w-full selection:bg-primary/30 selection:text-white">
      <Head>
        <title>Sarthak Turkar | Lead AI Systems Architect</title>
        <meta name="description" content="Portfolio of Sarthak Turkar - Lead AI Systems Architect specializing in intelligent vision ecosystems and robotics orchestration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative w-full h-full">
        {/* Global ambient background noise or texture could go here */}
        
        <HeroSection />
        
        <div className="relative z-10 bg-surface/30 backdrop-blur-3xl border-t border-white/5">
          <AboutSection />
        </div>
        
        <div className="relative z-10 border-t border-white/5">
          <ExperienceSection />
        </div>
        
        <div className="relative z-10 bg-surface/30 backdrop-blur-3xl border-t border-white/5">
          <CertificationsSection />
        </div>
        
        <div className="relative z-10 border-t border-white/5">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}