import { Heart, Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-passion-red/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-passion-red/20 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-passion-red mr-3" />
              <h3 className="text-3xl text-passion-red font-['Playfair_Display'] font-bold">
                L'amore Durango
              </h3>
            </div>
            <p className="text-gray-300 mb-6 font-['Poppins'] leading-relaxed max-w-md">
              Desde 2020, hemos sido los especialistas en crear momentos inolvidables 
              en Durango. Cada evento es único, como tú. Tu sueño, nuestra pasión.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Lamore-Durango-100064024963198/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-passion-red text-white p-3 rounded-full hover:bg-passion-red-dark transition-all duration-300 hover:scale-110 elegant-hover shadow-lg"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/lamoredurango" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-passion-red text-white p-3 rounded-full hover:bg-passion-red-dark transition-all duration-300 hover:scale-110 elegant-hover shadow-lg"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/526183669072?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 elegant-hover shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-6 text-passion-red font-['Playfair_Display'] font-semibold">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] block w-full text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] block w-full text-left"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ramos')}
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] block w-full text-left"
                >
                  Ramos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] block w-full text-left"
                >
                  Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] block w-full text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-6 text-passion-red font-['Playfair_Display'] font-semibold">
              Contacto Rápido
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-passion-red mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-['Poppins'] text-sm">
                  Boulevard Durango #222 <br />
                  Sahr, Durango Dgo
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-passion-red flex-shrink-0" />
                <a 
                  href="tel:+526183669072"
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] text-sm"
                >
                  +52 618 366 9072
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-passion-red flex-shrink-0" />
                <a 
                  href="mailto:info@lamoredurango.com"
                  className="text-gray-300 hover:text-passion-red transition-colors font-['Poppins'] text-sm"
                >
                  lamoredurango413@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-xl mb-4 text-passion-red font-['Playfair_Display'] font-semibold text-center">
            Nuestros Eventos Románticos Especializados
          </h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-gray-400 font-['Poppins']">Peticiones de Noviazgo</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-['Poppins']">Peticiones de Matrimonio</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-['Poppins']">Aniversarios Románticos</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-['Poppins']">Cenas Íntimas</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-['Poppins']">Ramos de Flores</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-['Poppins']">Decoración Romántica</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-['Poppins'] text-sm">
              © 2025 L'amore Durango. Todos los derechos reservados.
            </p>
            <p className="text-passion-red font-['Poppins'] text-sm italic">
              "Creando momentos inolvidables desde el corazón"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}