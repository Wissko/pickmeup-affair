import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Gallery from '@/components/Gallery';
import Occasions from '@/components/Occasions';
import Workshops from '@/components/Workshops';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Fixed parallax hero background */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Nav sits above everything */}
      <Nav />

      {/* Main page content */}
      <main className="page-content">
        <Hero />
        <About />
        <Experiences />
        <Gallery />
        <Occasions />
        <Workshops />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
