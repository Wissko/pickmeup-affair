import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Offres from '@/components/Offres';
import Galerie from '@/components/Galerie';
import Occasions from '@/components/Occasions';
import Ateliers from '@/components/Ateliers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Experience />
        <Offres />
        <Galerie />
        <Occasions />
        <Ateliers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
