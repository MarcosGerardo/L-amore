import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import slide1 from '/hero/image1.jpg';
import slide2 from '/hero/image2.jpg';
import slide3 from '/hero/image3.jpg';
import slide4 from '/hero/image4.jpg';
import slide5 from '/hero/image5.jpg';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      image: slide1,
      title: "Cenas , ¿Quieres ser mi novia/o?",
      subtitle: "Convertimos tu sueño de pedida en una realidad mágica"
    },
    {
      image: slide2,
      title: "Cenas Románticas Inolvidables",
      subtitle: "Cada aniversario merece una celebración única y especial"
    },
    {
      image: slide3,
      title: "Jardines de Ensueño",
      subtitle: "Espacios íntimos iluminados para momentos eternos"
    },
    {
      image: slide4,
      title: "Lujo y Romance en Perfecta Armonía",
      subtitle: "Experiencias exclusivas diseñadas para el amor"
    },
    {
      image: slide5,
      title: "Celebraciones que Enamoran",
      subtitle: "Globos, flores y detalles que crean magia pura"
    },
    {
      image: "https://images.unsplash.com/photo-1617610615659-1ca8575b968c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcm9tYW50aWMlMjBldmVudCUyMHNldHVwJTIwd2hpdGUlMjBmbG93ZXJzfGVufDF8fHx8MTc1OTc2Nzg3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Elegancia al Aire Libre",
      subtitle: "Eventos únicos en escenarios naturales de ensueño"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) {
      return;
    }

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0); // Reset progress when slide changes
    }, 4000); // Change slide every 4 seconds

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2.5; // Increment by 2.5% every 100ms (4000ms / 100 * 2.5 = 100ms)
      });
    }, 100);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [slides.length, isAutoPlaying, isPaused, currentSlide]);

  // Pause auto-play when user hovers over the carousel
  useEffect(() => {
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const heroSection = document.getElementById('inicio');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', handleMouseEnter);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0); // Reset progress on manual navigation
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0); // Reset progress on manual navigation
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-passion-red p-3 rounded-full transition-all z-10 shadow-lg hover:scale-110 hover:shadow-xl"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-passion-red p-3 rounded-full transition-all z-10 shadow-lg hover:scale-110 hover:shadow-xl"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Auto-play Control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10 shadow-lg hover:scale-110"
        title={isAutoPlaying ? 'Pausar auto-reproducción' : 'Activar auto-reproducción'}
      >
        {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 font-['Playfair_Display'] font-bold leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-['Poppins'] font-light">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToServices}
                className="bg-passion-red hover:bg-passion-red-dark text-white px-8 py-4 text-lg font-['Poppins'] font-semibold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Servicios
              </Button>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('ramos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-passion-red hover:bg-passion-red-dark text-white px-8 py-4 text-lg font-['Poppins'] font-semibold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Ramos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators with Progress Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setProgress(0);
              }}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-passion-red scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`}
            >
              {index === currentSlide && isAutoPlaying && !isPaused && (
                <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse">
                </div>
              )}
            </button>
          ))}
        </div>
        
        {/* Progress bar for current slide */}
        {isAutoPlaying && !isPaused && (
          <div className="w-full bg-white/30 rounded-full h-1 mt-2">
            <div 
              className="bg-passion-red h-1 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
}