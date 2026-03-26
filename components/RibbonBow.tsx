'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface RibbonBowProps {
  /** Optional external ref — lets parent share the same scroll target */
  ribbonRef?: React.RefObject<HTMLDivElement | null>
}

export default function RibbonBow({ ribbonRef }: RibbonBowProps) {
  const internalRef = useRef<HTMLDivElement>(null)
  const containerRef = (ribbonRef ?? internalRef) as React.RefObject<HTMLDivElement>

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ─── Scroll tracking ────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 15%'],
  })

  // ─── Boucles ────────────────────────────────────────────────────────────────
  const loopScaleY  = useTransform(scrollYProgress, [0, 0.5],  [1, 0.05])
  const loopScaleX  = useTransform(scrollYProgress, [0, 0.5],  [1, 1.3])
  const loopLeftX   = useTransform(scrollYProgress, [0.1, 0.6], [0, -60])
  const loopRightX  = useTransform(scrollYProgress, [0.1, 0.6], [0, 60])
  const loopOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])

  // ─── Nœud central ───────────────────────────────────────────────────────────
  const knotScale   = useTransform(scrollYProgress, [0.1, 0.5],  [1, 0])
  const knotOpacity = useTransform(scrollYProgress, [0.3, 0.6],  [1, 0])

  // ─── Queues ──────────────────────────────────────────────────────────────────
  const tailY       = useTransform(scrollYProgress, [0.1, 0.65], [0, 80])
  const tailLeftX   = useTransform(scrollYProgress, [0.1, 0.65], [0, -120])
  const tailRightX  = useTransform(scrollYProgress, [0.1, 0.65], [0, 120])
  const tailOpacity = useTransform(scrollYProgress, [0.5, 0.85], [1, 0])

  // ─── Bandes horizontales ────────────────────────────────────────────────────
  const ribbonOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0])

  // ─── SVG paths — desktop (viewBox 1200×300) ──────────────────────────────
  // Centre : (600, 150) | nœud ~80px large × 56px haut
  const D = {
    bandLeft:  'M0,136 C200,134 400,140 560,142 L560,158 C400,160 200,166 0,164 Z',
    bandRight: 'M640,142 C800,140 1000,134 1200,136 L1200,164 C1000,166 800,160 640,158 Z',

    // Boucle gauche — pétale orienté droite, attachement côté nœud
    loopLeftOuter:
      'M548,141 C520,58 395,8 258,50 C120,93 105,180 185,218 C268,258 450,235 546,162 Z',
    loopLeftInner:
      'M540,147 C510,82 400,38 278,68 C155,98 142,170 200,200 C258,232 420,218 536,160 Z',
    loopLeftHL:
      'M535,143 C508,72 396,22 270,62 C155,100 144,165 198,196',

    // Boucle droite — miroir
    loopRightOuter:
      'M652,141 C680,58 805,8 942,50 C1080,93 1095,180 1015,218 C932,258 750,235 654,162 Z',
    loopRightInner:
      'M660,147 C690,82 800,38 922,68 C1045,98 1058,170 1000,200 C942,232 780,218 664,160 Z',
    loopRightHL:
      'M665,143 C692,72 804,22 930,62 C1045,100 1056,165 1002,196',

    // Nœud — papillon (deux triangles qui se font face)
    knotLeft:  'M600,148 L560,130 L560,170 Z',
    knotRight: 'M600,148 L640,130 L640,170 Z',
    knotHL:    'M600,144 L572,132 L580,142 Z',
    knotShadow:'M582,164 L618,164 L632,172 L568,172 Z',

    // Queue gauche — courbe S, s'effile vers le bas
    tailLeft:
      'M568,160 C555,178 535,202 510,224 C490,242 472,258 464,274 L456,278 C464,261 482,244 504,226 C530,204 552,180 562,162 Z',
    tailLeftHL: 'M565,162 C552,180 533,202 508,224 C488,242 470,258 462,274',

    // Queue droite — miroir
    tailRight:
      'M632,160 C645,178 665,202 690,224 C710,242 728,258 736,274 L744,278 C736,261 718,244 696,226 C670,204 648,180 638,162 Z',
    tailRightHL: 'M635,162 C648,180 667,202 692,224 C712,242 730,258 738,274',

    // Highlight fin sur les bandes horizontales
    bandLeftHL:  'M0,137 C200,135 400,141 558,143',
    bandRightHL: 'M642,143 C800,141 1000,135 1200,137',
  }

  // ─── SVG paths — mobile (viewBox 600×200) ───────────────────────────────
  // Centre : (300, 100)
  const M = {
    bandLeft:  'M0,88 C100,86 200,90 280,92 L280,108 C200,110 100,114 0,112 Z',
    bandRight: 'M320,92 C400,90 500,86 600,88 L600,112 C500,114 400,110 320,108 Z',

    loopLeftOuter:
      'M275,91 C260,32 198,4 132,26 C62,50 55,96 94,116 C132,136 222,122 272,102 Z',
    loopLeftInner:
      'M270,94 C255,42 200,18 140,36 C78,56 72,98 108,113 C145,128 218,116 268,104 Z',

    loopRightOuter:
      'M325,91 C340,32 402,4 468,26 C538,50 545,96 506,116 C468,136 378,122 328,102 Z',
    loopRightInner:
      'M330,94 C345,42 400,18 460,36 C522,56 528,98 492,113 C455,128 382,116 332,104 Z',

    knotLeft:  'M300,98 L281,87 L281,113 Z',
    knotRight: 'M300,98 L319,87 L319,113 Z',

    tailLeft:
      'M283,108 C276,118 264,130 250,142 C238,152 228,160 224,167 L218,170 C224,162 234,154 246,143 C260,131 272,118 280,108 Z',
    tailRight:
      'M317,108 C324,118 336,130 350,142 C362,152 372,160 376,167 L382,170 C376,162 366,154 354,143 C340,131 328,118 320,108 Z',
  }

  const paths = isMobile ? M : D
  const vb  = isMobile ? '0 0 600 200' : '0 0 1200 300'
  const cx  = isMobile ? 300 : 600
  const cy  = isMobile ? 100 : 150
  // Transform origins
  const loopLOrigin = isMobile ? '275px 100px' : '548px 150px'
  const loopROrigin = isMobile ? '325px 100px' : '652px 150px'
  const knotOrigin  = isMobile ? '300px 100px' : '600px 150px'

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '220px' : '300px',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      <svg
        viewBox={vb}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: 'min(95vw, 1200px)',
          overflow: 'visible',
        }}
        aria-hidden="true"
      >
        <defs>
          {/* ── Gradient satin principal (bandes + queues) ── */}
          <linearGradient id="satinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#4a0010" />
            <stop offset="20%"  stopColor="#7a1520" />
            <stop offset="45%"  stopColor="#c44060" />
            <stop offset="60%"  stopColor="#7a1520" />
            <stop offset="85%"  stopColor="#5a1018" />
            <stop offset="100%" stopColor="#3a000c" />
          </linearGradient>

          {/* ── Gradient boucle gauche ── */}
          <radialGradient id="loopGradL" cx="35%" cy="30%" r="65%">
            <stop offset="0%"   stopColor="#d45070" />
            <stop offset="40%"  stopColor="#8a1525" />
            <stop offset="100%" stopColor="#3a000c" />
          </radialGradient>

          {/* ── Gradient boucle droite ── */}
          <radialGradient id="loopGradR" cx="65%" cy="30%" r="65%">
            <stop offset="0%"   stopColor="#d45070" />
            <stop offset="40%"  stopColor="#8a1525" />
            <stop offset="100%" stopColor="#3a000c" />
          </radialGradient>

          {/* ── Gradient intérieur boucles (face arrière visible) ── */}
          <radialGradient id="loopInnerGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#6a1020" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2a0008" stopOpacity="0.5" />
          </radialGradient>

          {/* ── Gradient nœud (papillon) ── */}
          <radialGradient id="knotGrad" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#e05080" />
            <stop offset="45%"  stopColor="#7a1520" />
            <stop offset="100%" stopColor="#2e0008" />
          </radialGradient>

          {/* ── Gradient queues ── */}
          <linearGradient id="tailGradL" x1="0%" y1="0%" x2="30%" y2="100%">
            <stop offset="0%"   stopColor="#8a1525" />
            <stop offset="50%"  stopColor="#6a1018" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3a000c" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="tailGradR" x1="100%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%"   stopColor="#8a1525" />
            <stop offset="50%"  stopColor="#6a1018" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3a000c" stopOpacity="0.15" />
          </linearGradient>

          {/* ── Ombre nœud ── */}
          <radialGradient id="knotShadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0a0005" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a0005" stopOpacity="0" />
          </radialGradient>

          {/* ── Filtre ombre douce (bandes) ── */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8"
              floodColor="#1a0008" floodOpacity="0.4" />
          </filter>

          {/* ── Filtre ombre boucles ── */}
          <filter id="loopShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="6" stdDeviation="6"
              floodColor="#1a0008" floodOpacity="0.3" />
          </filter>

          {/* ── Filtre ombre nœud ── */}
          <filter id="knotShadowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="5"
              floodColor="#0a0005" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  1 & 2 — BANDES HORIZONTALES                                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <motion.path
          d={paths.bandLeft}
          fill="url(#satinGrad)"
          filter="url(#softShadow)"
          style={{ opacity: ribbonOpacity }}
        />
        <motion.path
          d={paths.bandRight}
          fill="url(#satinGrad)"
          filter="url(#softShadow)"
          style={{ opacity: ribbonOpacity }}
        />

        {/* Highlights bandes (desktop only) */}
        {!isMobile && (
          <>
            <motion.path
              d={D.bandLeftHL}
              fill="none"
              stroke="rgba(255,200,200,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ opacity: ribbonOpacity }}
            />
            <motion.path
              d={D.bandRightHL}
              fill="none"
              stroke="rgba(255,200,200,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ opacity: ribbonOpacity }}
            />
          </>
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  3 — BOUCLE GAUCHE                                              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <motion.g
          style={{
            scaleY: loopScaleY,
            scaleX: loopScaleX,
            x: loopLeftX,
            opacity: loopOpacity,
            transformOrigin: loopLOrigin,
          }}
        >
          {/* Face arrière de la boucle (plus sombre) */}
          <motion.path
            d={paths.loopLeftInner}
            fill="url(#loopInnerGrad)"
          />
          {/* Face avant (gradient principal) */}
          <motion.path
            d={paths.loopLeftOuter}
            fill="url(#loopGradL)"
            filter="url(#loopShadow)"
            animate={{ scaleY: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: isMobile ? '175px 70px' : '370px 130px' }}
          />
          {/* Highlight satiné (desktop only) */}
          {!isMobile && (
            <path
              d={D.loopLeftHL}
              fill="none"
              stroke="rgba(255,200,200,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </motion.g>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  4 — BOUCLE DROITE                                              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <motion.g
          style={{
            scaleY: loopScaleY,
            scaleX: loopScaleX,
            x: loopRightX,
            opacity: loopOpacity,
            transformOrigin: loopROrigin,
          }}
        >
          <motion.path
            d={paths.loopRightInner}
            fill="url(#loopInnerGrad)"
          />
          <motion.path
            d={paths.loopRightOuter}
            fill="url(#loopGradR)"
            filter="url(#loopShadow)"
            animate={{ scaleY: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            style={{ transformOrigin: isMobile ? '425px 70px' : '830px 130px' }}
          />
          {!isMobile && (
            <path
              d={D.loopRightHL}
              fill="none"
              stroke="rgba(255,200,200,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </motion.g>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  5 — OMBRE DU NŒUD                                              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <motion.ellipse
          cx={cx}
          cy={cy + (isMobile ? 18 : 22)}
          rx={isMobile ? 30 : 58}
          ry={isMobile ? 8 : 14}
          fill="url(#knotShadowGrad)"
          style={{ scale: knotScale, opacity: knotOpacity, transformOrigin: knotOrigin }}
        />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  7 & 8 — QUEUES (dessinées AVANT le nœud pour le z-order)       */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <motion.path
          d={paths.tailLeft}
          fill="url(#tailGradL)"
          stroke="#3a000c"
          strokeWidth="0.5"
          style={{ x: tailLeftX, y: tailY, opacity: tailOpacity }}
        />
        {!isMobile && (
          <motion.path
            d={D.tailLeftHL}
            fill="none"
            stroke="rgba(255,200,200,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ x: tailLeftX, y: tailY, opacity: tailOpacity }}
          />
        )}

        <motion.path
          d={paths.tailRight}
          fill="url(#tailGradR)"
          stroke="#3a000c"
          strokeWidth="0.5"
          style={{ x: tailRightX, y: tailY, opacity: tailOpacity }}
        />
        {!isMobile && (
          <motion.path
            d={D.tailRightHL}
            fill="none"
            stroke="rgba(255,200,200,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ x: tailRightX, y: tailY, opacity: tailOpacity }}
          />
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  6 — NŒUD CENTRAL (papillon — par-dessus les queues)            */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <motion.g
          style={{ scale: knotScale, opacity: knotOpacity, transformOrigin: knotOrigin }}
          filter="url(#knotShadowFilter)"
        >
          {/* Aile gauche */}
          <path d={paths.knotLeft} fill="url(#knotGrad)" stroke="#2e0008" strokeWidth="1" />
          {/* Aile droite */}
          <path d={paths.knotRight} fill="url(#knotGrad)" stroke="#2e0008" strokeWidth="1" />
          {/* Highlight haut-gauche (desktop only) */}
          {!isMobile && (
            <>
              <path d={D.knotHL} fill="#e06080" fillOpacity="0.55" />
              <path d={D.knotShadow} fill="#1a0008" fillOpacity="0.4" />
            </>
          )}
        </motion.g>

      </svg>
    </div>
  )
}
