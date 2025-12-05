import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, HeartCrack } from 'lucide-react';
import { Button } from './ui/button';
import { Heart } from "lucide-react";

import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 header-bg ${
        isScrolled 
          ? 'shadow-2xl py-3 border-b border-passion-red/20' 
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="relative flex items-center space-x-3">
              <h1 className="text-3xl lg:text-4xl text-white header-title-romantic header-logo passion-red-glow">
                L'amore Durango
              </h1>
              <Heart
  className="absolute -bottom-2 -right-2 h-4 w-4 text-passion-red opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-200"
  fill="currentColor"
  stroke="none"
/>

            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white font-['Poppins'] font-medium header-nav-item px-4 py-2 rounded-lg passion-red-glow"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white font-['Poppins'] font-medium header-nav-item px-4 py-2 rounded-lg passion-red-glow"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('ramos')}
              className="text-white font-['Poppins'] font-medium header-nav-item px-4 py-2 rounded-lg passion-red-glow"
            >
              Ramos
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-white font-['Poppins'] font-medium header-nav-item px-4 py-2 rounded-lg passion-red-glow"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-white font-['Poppins'] font-medium header-nav-item px-4 py-2 rounded-lg passion-red-glow"
            >
              Contacto
            </button>
            
            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-passion-red hover:bg-passion-red-dark text-white font-['Poppins'] font-bold px-6 py-3 rounded-full transition-all duration-400 hover:scale-110 hover:shadow-lg shadow-passion-red/30 ml-4 relative overflow-hidden group"
            >
              <span className="relative z-10">💬 Cotizar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-passion-red-light to-passion-red-dark opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:text-passion-red hover:bg-passion-red/10 border border-passion-red/20 hover:border-passion-red transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" /> : 
              <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-180" />
            }
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-passion-red/20 bg-black/50 backdrop-blur-sm rounded-b-xl animate-scale-in">
            <nav className="flex flex-col space-y-4 pt-6 px-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-passion-red transition-all duration-300 font-['Poppins'] font-medium text-left py-3 px-4 rounded-lg hover:bg-passion-red/10 border border-transparent hover:border-passion-red/30"
              >
                🏠 Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-white hover:text-passion-red transition-all duration-300 font-['Poppins'] font-medium text-left py-3 px-4 rounded-lg hover:bg-passion-red/10 border border-transparent hover:border-passion-red/30"
              >
                ✨ Servicios
              </button>
              <button 
                onClick={() => scrollToSection('ramos')}
                className="text-white hover:text-passion-red transition-all duration-300 font-['Poppins'] font-medium text-left py-3 px-4 rounded-lg hover:bg-passion-red/10 border border-transparent hover:border-passion-red/30"
              >
                🌹 Ramos
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-white hover:text-passion-red transition-all duration-300 font-['Poppins'] font-medium text-left py-3 px-4 rounded-lg hover:bg-passion-red/10 border border-transparent hover:border-passion-red/30"
              >
                📸 Galería
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-passion-red transition-all duration-300 font-['Poppins'] font-medium text-left py-3 px-4 rounded-lg hover:bg-passion-red/10 border border-transparent hover:border-passion-red/30"
              >
                📞 Contacto
              </button>
              
              {/* Mobile CTA */}
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-passion-red hover:bg-passion-red-dark text-white font-['Poppins'] font-bold py-4 rounded-full transition-all duration-400 hover:scale-105 shadow-lg shadow-passion-red/30 mt-4 w-full"
              >
                💬 Solicitar Cotización
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}