import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Clock, MapPin } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    try {
      const message = encodeURIComponent(
        "¡Hola! Me interesa conocer más sobre sus servicios de eventos. ¿Podrían proporcionarme información?"
      );
      const whatsappUrl = `https://wa.me/526183669072?text=${message}`;
      
      console.log('Abriendo WhatsApp con URL:', whatsappUrl);
      
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow) {
        // Fallback si el popup fue bloqueado
        window.location.href = whatsappUrl;
      }
      
      setIsOpen(false);
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      // Fallback directo
      window.location.href = `https://wa.me/526183669072`;
      setIsOpen(false);
    }
  };

  const quickMessages = [
    {
      id: 'info',
      text: '📋 Solicitar información general',
      message: '¡Hola! Me gustaría recibir información general sobre sus servicios de eventos.'
    },
    {
      id: 'cotizacion',
      text: '💰 Solicitar cotización',
      message: '¡Hola! Me interesa solicitar una cotización para un evento. ¿Podrían ayudarme?'
    },
    {
      id: 'disponibilidad',
      text: '📅 Consultar disponibilidad',
      message: '¡Hola! Me gustaría consultar su disponibilidad para una fecha específica.'
    },
    {
      id: 'catalogo',
      text: '📸 Ver catálogo de servicios',
      message: '¡Hola! Me interesa ver su catálogo completo de servicios y opciones disponibles.'
    }
  ];

  const sendQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/526183669072?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-subtle animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-burgundy">L'Amore Durango</h3>
                <p className="text-sm text-green-600 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  En línea
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-700 font-['Poppins'] text-sm mb-3">
              👋 ¡Hola! ¿En qué podemos ayudarte hoy?
            </p>
            <p className="text-xs text-gray-500 font-['Poppins']">
              Selecciona una opción rápida o escríbenos directamente:
            </p>
          </div>

          <div className="space-y-2 mb-4">
            {quickMessages.map((item) => (
              <button
                key={item.id}
                onClick={() => sendQuickMessage(item.message)}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gold/10 transition-colors border border-gray-100 hover:border-gold/30"
              >
                <span className="text-sm font-['Poppins'] text-gray-700">
                  {item.text}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={openWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-full font-['Poppins'] font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Abrir WhatsApp
          </button>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="space-y-2 text-xs text-gray-500 font-['Poppins']">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2" />
                <span>+52 618 366 9072</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-2" />
                <span>Lun-Vie: 9AM-7PM, Sáb: 10AM-6PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-2" />
                <span>Durango, México</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-float ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Notification dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      )}
    </div>
  );
}