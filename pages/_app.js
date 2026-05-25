import '../styles/index.css';

import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
  return (
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
  );
}