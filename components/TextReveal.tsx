'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TextRevealProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

/**
 * Lune-style text reveal: each word is wrapped in overflow:hidden,
 * and enters from translateY(110% → 0) with a staggered delay.
 * This creates the "curtain lift" effect iconic to luxury web design.
 */
export default function TextReveal({
  children,
  as: Tag = 'h2',
  className = '',
  style = {},
  delay = 0,
  stagger = 0.07,
  once = false,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px', amount: 0.2 });

  const words = children.split(/(\s+)/).filter(Boolean);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Tag className={className} style={{ ...style, overflow: 'visible' }} ref={ref}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ display: 'inline', lineHeight: 'inherit' }}
      >
        {words.map((word, i) => {
          if (/^\s+$/.test(word)) {
            return <span key={i}>{word}</span>;
          }
          return (
            <span
              key={i}
              style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', lineHeight: 'inherit' }}
            >
              <motion.span
                variants={wordVariants}
                style={{ display: 'inline-block', lineHeight: 'inherit' }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
