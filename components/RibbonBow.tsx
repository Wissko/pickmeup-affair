'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RibbonBow() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // ── Phase 2 : 30 % → 65 % — ouverture progressive ──────────────────────────

  // Boucles : aplatissement + léger écart horizontal
  const loopScaleY    = useTransform(scrollYProgress, [0.2, 0.65], [1, 0.04])
  const loopLeftX     = useTransform(scrollYProgress, [0.3, 0.65], [0, -40])
  const loopRightX    = useTransform(scrollYProgress, [0.3, 0.65], [0, 40])
  const loopOpacity   = useTransform(scrollYProgress, [0.52, 0.76], [1, 0])

  // Nœud central : se défait et disparaît
  const knotScale     = useTransform(scrollYProgress, [0.3, 0.63], [1, 0])
  const knotOpacity   = useTransform(scrollYProgress, [0.48, 0.68], [1, 0])

  // Queues : tombent et s'écartent
  const tailLeftX     = useTransform(scrollYProgress, [0.3, 0.72], [0, -100])
  const tailRightX    = useTransform(scrollYProgress, [0.3, 0.72], [0, 100])
  const tailY         = useTransform(scrollYProgress, [0.3, 0.72], [0, 55])
  const tailOpacity   = useTransform(scrollYProgress, [0.55, 0.82], [1, 0])

  // Rubans plats : restent plus longtemps
  const ribbonOpacity = useTransform(scrollYProgress, [0.62, 0.88], [1, 0])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        // Transition chromatique entre la section Hero sombre et la section About crème
        background: 'linear-gradient(to bottom, #0a0806 0%, #1a0d06 30%, #f5ede0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Hauteur responsive : 200px desktop, réduite sur mobile via media queries inline
        height: 'clamp(160px, 20vw, 220px)',
        overflow: 'visible',
      }}
    >
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: 'min(90vw, 900px)',
          height: 'clamp(120px, 16vw, 180px)',
          overflow: 'visible',
        }}
        aria-hidden="true"
      >
        <defs>
          {/* ── Gradients satin ───────────────────────────────────────────── */}

          {/* Ruban horizontal : épaisseur variable (satin) */}
          <linearGradient id="rb-h" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#3a000d" />
            <stop offset="20%"  stopColor="#7a1520" />
            <stop offset="50%"  stopColor="#c44060" />
            <stop offset="80%"  stopColor="#7a1520" />
            <stop offset="100%" stopColor="#3a000d" />
          </linearGradient>

          {/* Boucle gauche — reflet en haut-gauche */}
          <radialGradient id="rb-loop-l" cx="30%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#d94570" />
            <stop offset="35%"  stopColor="#7a1520" />
            <stop offset="100%" stopColor="#3a000d" />
          </radialGradient>

          {/* Boucle droite — reflet en haut-droite */}
          <radialGradient id="rb-loop-r" cx="70%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#d94570" />
            <stop offset="35%"  stopColor="#7a1520" />
            <stop offset="100%" stopColor="#3a000d" />
          </radialGradient>

          {/* Nœud central */}
          <radialGradient id="rb-knot" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#e05080" />
            <stop offset="45%"  stopColor="#7a1520" />
            <stop offset="100%" stopColor="#2e0008" />
          </radialGradient>

          {/* Queues — dégradé qui s'efface vers le bas */}
          <linearGradient id="rb-tail-l" x1="0%" y1="0%" x2="30%" y2="100%">
            <stop offset="0%"   stopColor="#7a1520" />
            <stop offset="40%"  stopColor="#a02035" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4a0010" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="rb-tail-r" x1="100%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%"   stopColor="#7a1520" />
            <stop offset="40%"  stopColor="#a02035" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4a0010" stopOpacity="0.2" />
          </linearGradient>

          {/* Highlight fin sur les boucles */}
          <linearGradient id="rb-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#e06080" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#e06080" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* RUBAN CENTRAL GAUCHE — plat, gradient satin, perspective effilée  */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <motion.path
          // Commence large à gauche (16px), s'effile vers le nœud (8px)
          d="M0,92 C150,90 300,90 468,95 L468,105 C300,110 150,110 0,108 Z"
          fill="url(#rb-h)"
          style={{ opacity: ribbonOpacity }}
        />

        {/* RUBAN CENTRAL DROIT */}
        <motion.path
          d="M532,95 C700,90 850,90 1000,92 L1000,108 C850,110 700,110 532,105 Z"
          fill="url(#rb-h)"
          style={{ opacity: ribbonOpacity }}
        />

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* BOUCLE GAUCHE — pétale plein avec volume (path fermé + gradient)  */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/*
          Bord extérieur (plus loin du nœud) : courbe qui part de ~470,96
          fait une grande courbe vers la gauche, et revient à ~470,104.
          Bord intérieur : courbe intérieure plus serrée (simulant l'épaisseur du ruban).
          Le tout forme un "ruban plié en boucle" avec volume.
        */}
        <motion.path
          d={`
            M470,96
            C440,50 360,10 280,38
            C200,66 185,110 240,142
            C300,175 410,160 462,110
            C468,104 470,100 470,100
            C465,98 463,96 462,94
            C410,42 310,30 255,60
            C198,92 212,135 270,152
            C340,168 436,148 468,104
            Z
          `}
          fill="url(#rb-loop-l)"
          stroke="#3a000d"
          strokeWidth="0.8"
          style={{
            scaleY: loopScaleY,
            x: loopLeftX,
            opacity: loopOpacity,
            transformOrigin: '470px 100px',
          }}
        />
        {/* Highlight satiné sur boucle gauche */}
        <motion.path
          d="M460,90 C435,52 368,22 295,48 C232,72 220,108 252,138"
          fill="none"
          stroke="url(#rb-highlight)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.45"
          style={{
            scaleY: loopScaleY,
            x: loopLeftX,
            opacity: loopOpacity,
            transformOrigin: '470px 100px',
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* BOUCLE DROITE — miroir de la gauche                               */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <motion.path
          d={`
            M530,96
            C560,50 640,10 720,38
            C800,66 815,110 760,142
            C700,175 590,160 538,110
            C532,104 530,100 530,100
            C535,98 537,96 538,94
            C590,42 690,30 745,60
            C802,92 788,135 730,152
            C660,168 564,148 532,104
            Z
          `}
          fill="url(#rb-loop-r)"
          stroke="#3a000d"
          strokeWidth="0.8"
          style={{
            scaleY: loopScaleY,
            x: loopRightX,
            opacity: loopOpacity,
            transformOrigin: '530px 100px',
          }}
        />
        {/* Highlight satiné sur boucle droite */}
        <motion.path
          d="M540,90 C565,52 632,22 705,48 C768,72 780,108 748,138"
          fill="none"
          stroke="url(#rb-highlight)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.45"
          style={{
            scaleY: loopScaleY,
            x: loopRightX,
            opacity: loopOpacity,
            transformOrigin: '530px 100px',
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* NŒUD CENTRAL — losange avec gradient et reflet                    */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* Losange principal */}
        <motion.path
          d="M500,74 L528,100 L500,126 L472,100 Z"
          fill="url(#rb-knot)"
          stroke="#2e0008"
          strokeWidth="1.5"
          style={{
            scale: knotScale,
            opacity: knotOpacity,
            transformOrigin: '500px 100px',
          }}
        />
        {/* Reflet lumineux haut-gauche du nœud */}
        <motion.path
          d="M500,78 L518,95 L508,87 Z"
          fill="#e06080"
          fillOpacity="0.55"
          style={{
            scale: knotScale,
            opacity: knotOpacity,
            transformOrigin: '500px 100px',
          }}
        />
        {/* Ombre bas-droite du nœud */}
        <motion.path
          d="M500,122 L518,105 L524,112 Z"
          fill="#2e0008"
          fillOpacity="0.6"
          style={{
            scale: knotScale,
            opacity: knotOpacity,
            transformOrigin: '500px 100px',
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* QUEUE GAUCHE — path courbe de Bézier, ruban épais effilé          */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <motion.path
          d={`
            M476,105
            C458,120 430,142 395,162
            C378,171 366,174 360,175
            C365,178 376,177 394,169
            C432,150 462,126 480,110
            Z
          `}
          fill="url(#rb-tail-l)"
          stroke="#3a000d"
          strokeWidth="0.5"
          strokeLinejoin="round"
          style={{
            x: tailLeftX,
            y: tailY,
            opacity: tailOpacity,
          }}
        />
        {/* Highlight queue gauche */}
        <motion.path
          d="M477,107 C462,121 440,140 410,157"
          fill="none"
          stroke="#c44060"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.35"
          style={{
            x: tailLeftX,
            y: tailY,
            opacity: tailOpacity,
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* QUEUE DROITE — miroir                                             */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <motion.path
          d={`
            M524,105
            C542,120 570,142 605,162
            C622,171 634,174 640,175
            C635,178 624,177 606,169
            C568,150 538,126 520,110
            Z
          `}
          fill="url(#rb-tail-r)"
          stroke="#3a000d"
          strokeWidth="0.5"
          strokeLinejoin="round"
          style={{
            x: tailRightX,
            y: tailY,
            opacity: tailOpacity,
          }}
        />
        {/* Highlight queue droite */}
        <motion.path
          d="M523,107 C538,121 560,140 590,157"
          fill="none"
          stroke="#c44060"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.35"
          style={{
            x: tailRightX,
            y: tailY,
            opacity: tailOpacity,
          }}
        />
      </svg>
    </div>
  )
}
