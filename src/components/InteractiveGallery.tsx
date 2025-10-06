import { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('galeria-interactiva');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1752857015591-c1b85c01c461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRlY29yYXRpb258ZW58MXx8fHwxNzU5NDIwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Boda Elegante en Jardín",
      category: "bodas",
      description: "Una ceremonia romántica con decoración clásica en tonos blancos y dorados."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1737224319158-570f67b1f038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhJUMzJUIxZXJhJTIwcGFydHklMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1OTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fiesta de XV Años Principesca",
      category: "xv-anos",
      description: "Una celebración de ensueño con temática de princesa en colores rosa y dorado."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1758606137571-79fb4dd7d5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbiUyMHBpbmt8ZW58MXx8fHwxNzU5NTE2NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Baby Shower Romántico",
      category: "baby-shower",
      description: "Una tierna celebración con decoración en tonos pasteles y detalles florales."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1717944186818-c628ca7c2b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NTk0ODIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Evento Corporativo de Gala",
      category: "corporativo",
      description: "Un evento empresarial sofisticado con ambiente elegante y profesional."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRlY29yYXRpb258ZW58MXx8fHwxNzU5NTE2NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cena Romántica de Aniversario",
      category: "aniversario",
      description: "Una cena íntima para celebrar el amor con decoración romántica y velas."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU5NTE2NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fiesta de Cumpleaños Elegante",
      category: "cumpleanos",
      description: "Una celebración de cumpleaños con decoración sofisticada y detalles únicos."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NTk1MTY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Recepción de Boda al Aire Libre",
      category: "bodas",
      description: "Una recepción mágica bajo las estrellas con iluminación cálida y romántica."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnN8ZW58MXx8fHwxNzU5NTE2Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Centro de Mesa Floral",
      category: "bodas",
      description: "Arreglos florales exquisitos que complementan perfectamente la decoración nupcial."
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhxdWluY2VhJUMzJUIxZXJhJTIwcGFydHklMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1OTUxNjc3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Mesa Principal de XV Años",
      category: "xv-anos",
      description: "Una mesa principal espectacular que hace de la quinceañera la protagonista absoluta."
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos los Eventos', count: galleryImages.length },
    { id: 'bodas', label: 'Bodas', count: galleryImages.filter(img => img.category === 'bodas').length },
    { id: 'xv-anos', label: 'XV Años', count: galleryImages.filter(img => img.category === 'xv-anos').length },
    { id: 'baby-shower', label: 'Baby Showers', count: galleryImages.filter(img => img.category === 'baby-shower').length },
    { id: 'corporativo', label: 'Corporativos', count: galleryImages.filter(img => img.category === 'corporativo').length },
    { id: 'cumpleanos', label: 'Cumpleaños', count: galleryImages.filter(img => img.category === 'cumpleanos').length },
    { id: 'aniversario', label: 'Aniversarios', count: galleryImages.filter(img => img.category === 'aniversario').length }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <section id="galeria-interactiva" className="py-24 bg-bg-light-gray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/3 rounded-full translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-burgundy/5 rounded-full -translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold divider-gold">
            Galería Interactiva
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 font-['Poppins'] leading-relaxed">
              Explora nuestros eventos más espectaculares y déjate inspirar por la magia que creamos.
            </p>
            <p className="text-lg text-gold font-['Playfair_Display'] italic">
              Cada imagen cuenta una historia única de momentos inolvidables.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-['Poppins'] font-medium transition-all duration-300 elegant-hover ${
                activeFilter === category.id
                  ? 'bg-passion-red text-white shadow-lg scale-105 border-2 border-passion-red'
                  : 'bg-white text-gray-700 hover:bg-passion-red hover:text-white border-2 border-gray-300 hover:border-passion-red shadow-md hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className={`group cursor-pointer overflow-hidden bg-white shadow-elegant shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 border border-subtle rounded-xl ${
                isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-['Poppins'] font-semibold">Ver en pantalla completa</p>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-gold text-black px-3 py-1 rounded-full text-sm font-['Poppins'] font-semibold shadow-lg">
                  {categories.find(cat => cat.id === image.category)?.label || image.category}
                </div>
                
                {/* View icon */}
                <div className="absolute top-3 right-3 bg-white/90 text-burgundy p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="h-5 w-5" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 font-['Poppins']">
              No hay imágenes en esta categoría por el momento.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className={`lightbox-overlay ${selectedImage ? 'show' : ''}`}
          onClick={closeLightbox}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <ImageWithFallback
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="font-['Poppins'] opacity-90">
                  {selectedImage.description}
                </p>
                <div className="mt-3 text-sm opacity-75">
                  {currentIndex + 1} de {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}