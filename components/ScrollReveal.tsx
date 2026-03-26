'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

/**
 * Bidirectional scroll reveal:
 * - Scrolling down → elements enter from below (translateY +40px → 0)
 * - Scrolling up → elements enter from above (translateY -40px → 0)
 */
export default function ScrollReveal({ children, delay = 0, className = '', once = false }: ScrollRevealProps) {
  const ref = useRef(null);
  const direction = useScrollDirection();
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px', amount: 0.08 });

  const yOffset = direction === 'up' ? -40 : 40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
