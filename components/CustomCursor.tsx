'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf: number;

    // State flags
    let isHoveringImage = false;
    let isHoveringLink = false;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Lerp ring position with physical lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(render);
    };

    // Click ripple
    const createRipple = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-radius: 50%;
        border: 1px solid rgba(201,169,110,0.7);
        pointer-events: none;
        z-index: 99998;
        transform: translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%);
        animation: cursor-ripple 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 520);
    };

    // Hover state management
    const updateRingState = () => {
      if (isHoveringImage) {
        ring.style.width = '80px';
        ring.style.height = '80px';
        ring.style.borderRadius = '50%';
        ring.style.opacity = '0.4';
        ring.style.borderColor = 'var(--caramel)';
      } else if (isHoveringLink) {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderRadius = '0';
        ring.style.opacity = '1';
        ring.style.borderColor = 'var(--caramel-light)';
      } else {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderRadius = '50%';
        ring.style.opacity = '0.7';
        ring.style.borderColor = 'var(--caramel)';
      }
    };

    const attachHoverListeners = () => {
      // Images
      document.querySelectorAll('img, [data-cursor-image]').forEach((el) => {
        el.addEventListener('mouseenter', () => { isHoveringImage = true; updateRingState(); });
        el.addEventListener('mouseleave', () => { isHoveringImage = false; updateRingState(); });
      });
      // Links & buttons
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', () => { isHoveringLink = true; updateRingState(); });
        el.addEventListener('mouseleave', () => { isHoveringLink = false; updateRingState(); });
      });
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('click', createRipple);
    raf = requestAnimationFrame(render);
    attachHoverListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', createRipple);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
