'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'p' | 'span' | 'h2' | 'h3';
}

export default function FadeUp({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: FadeUpProps) {
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
