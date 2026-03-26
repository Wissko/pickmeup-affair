'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import RibbonBow from '@/components/RibbonBow'
import About from '@/components/About'
import Experiences from '@/components/Experiences'
import Gallery from '@/components/Gallery'
import Occasions from '@/components/Occasions'
import Workshops from '@/components/Workshops'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  // Shared ref: RibbonBow container & About opacity are driven by the same scroll target
  const ribbonRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ribbonRef,
    offset: ['start 85%', 'end 15%'],
  })

  // About fades in as the bow opens
  const aboutOpacity = useTransform(scrollYProgress, [0.4, 0.9], [0, 1])

  return (
    <>
      {/* Fixed parallax hero background */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Nav sits above everything */}
      <Nav />

      {/* Main page content */}
      <main className="page-content">
        <Hero />

        {/* Scroll-driven ribbon bow — jonction Hero / About */}
        <RibbonBow ribbonRef={ribbonRef} />

        {/* About fades in as the ribbon unties */}
        <motion.div style={{ opacity: aboutOpacity }}>
          <About />
        </motion.div>

        <Experiences />
        <Gallery />
        <Occasions />
        <Workshops />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
