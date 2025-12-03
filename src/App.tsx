import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveServices } from './components/InteractiveServicesRomantic';
import { RamosFlores } from './components/RamosFlores';
import { InteractiveGallery } from './components/InteractiveGallery';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InteractiveServices />
      <RamosFlores />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}