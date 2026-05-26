import '../styles/index.css';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps, router }) {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {/* Film Grain */}
      <div className="film-grain"></div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Custom Cursor only runs on client */}
      {isMounted && <CustomCursor />}

      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}