'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show loader on first visit per session
    const seen = sessionStorage.getItem('pmu-loader-seen');
    if (seen) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('pmu-loader-seen', '1');
    }, 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#0a0806',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Brand logo — fade in */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src="/images/logopickmeup.PNG"
              alt="Pick Me Up"
              width={320}
              height={80}
              priority
              style={{
                height: '80px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </motion.div>

          {/* Thin gold line — draws in */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: 'left center',
              width: '60px',
              height: '1px',
              backgroundColor: '#c9a96e',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
