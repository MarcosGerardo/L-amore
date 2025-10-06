import { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, Music, Users, CheckCircle, X, Send, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceOption {
  id: string;
  label: string;
  price?: string;
}

interface ServiceCustomization {
  decorationType?: string;
  guestCount?: string;
  musicType?: string[];
  extras?: string[];
  venue?: string;
  budget?: string;
  specialRequests?: string;
}

export function InteractiveServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);
  const [customization, setCustomization] = useState<ServiceCustomization>({
    musicType: [],
    extras: []
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('servicios');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'peticion-noviazgo',
      title: 'Petición de Noviazgo',
      description: 'Haz que tu primera propuesta romántica sea perfecta. Decoración íntima, ramo de flores, velas y fotografía del momento especial. Desde $3,500.',
      image: 'https://images.unsplash.com/photo-1550155921-59b42a868c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyaWFnZSUyMHByb3Bvc2FsJTIwcm9tYW50aWMlMjBzZXR1cHxlbnwxfHx8fDE3NTk1Njc4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Heart,
      decorationOptions: [
        { id: 'romantico-clasico', label: 'Romántico Clásico', price: 'Base $3,500' },
        { id: 'velas-rosas', label: 'Velas y Rosas', price: '+$1,500' },
        { id: 'picnic-romantico', label: 'Picnic Romántico', price: '+$2,000' },
        { id: 'terraza-estrellas', label: 'Terraza Bajo las Estrellas', price: '+$2,800' }
      ],
      guestOptions: [
        { id: 'intimo', label: 'Íntimo (Solo ustedes dos)' },
        { id: 'familiar-pequeno', label: 'Con familia cercana (3-5 personas)' },
        { id: 'amigos-cercanos', label: 'Con amigos íntimos (6-10 personas)' }
      ],
      musicOptions: [
        { id: 'playlist-romantica', label: 'Playlist romántica' },
        { id: 'guitarrista', label: 'Guitarrista acústico' },
        { id: 'violinista', label: 'Violinista' },
        { id: 'serenata', label: 'Serenata personalizada' }
      ],
      extraOptions: [
        { id: 'ramo-flores', label: 'Ramo de flores', price: 'Incluido' },
        { id: 'fotografo', label: 'Fotógrafo (1 hora)', price: 'Incluido' },
        { id: 'globos-corazones', label: 'Globos en forma de corazón', price: '+$800' },
        { id: 'cena-sorpresa', label: 'Cena sorpresa', price: '+$2,500' },
        { id: 'video-recuerdo', label: 'Video recuerdo', price: '+$1,800' }
      ],
      venueOptions: [
        { id: 'hotel', label: 'Hotel' },
        { id: 'restaurante', label: 'Restaurante' },
        { id: 'airbnb', label: 'Airbnb' },
        { id: 'parque', label: 'Parque' },
        { id: 'domicilio', label: 'Domicilio' }
      ]
    },
    {
      id: 'peticion-matrimonio',
      title: 'Petición de Matrimonio',
      description: 'Haz que tu propuesta sea perfecta con letras gigantes, 100 rosas, alfombra roja, decoración completa y fotógrafo profesional. Paquete completo desde $10,500.',
      image: 'https://images.unsplash.com/photo-1550155921-59b42a868c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyaWFnZSUyMHByb3Bvc2FsJTIwcm9tYW50aWMlMjBzZXR1cHxlbnwxfHx8fDE3NTk1Njc4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Sparkles,
      decorationOptions: [
        { id: 'romantico-rosas', label: 'Romántico con Rosas (Incluye 100 rosas)', price: 'Base $10,500' },
        { id: 'luces-velas', label: 'Luces y Velas Mágicas', price: '+$2,500' },
        { id: 'globos-corazones', label: 'Globos en Forma de Corazón', price: '+$1,800' },
        { id: 'jardin-secreto', label: 'Jardín Secreto', price: '+$3,000' }
      ],
      guestOptions: [
        { id: 'intimo', label: 'Íntimo (Solo ustedes dos)' },
        { id: 'familiar', label: 'Familiar (5-10 personas)' },
        { id: 'amigos', label: 'Con amigos cercanos (11-20 personas)' },
        { id: 'publico', label: 'Espectacular en público (20+ personas)' }
      ],
      musicOptions: [
        { id: 'serenata', label: 'Serenata romántica' },
        { id: 'violinista', label: 'Violinista profesional' },
        { id: 'mariachi', label: 'Mariachi sorpresa' },
        { id: 'playlist', label: 'Playlist personalizada' }
      ],
      extraOptions: [
        { id: 'letras-gigantes', label: 'Letras gigantes "MARRY ME"', price: 'Incluido' },
        { id: 'alfombra-roja', label: 'Alfombra roja', price: 'Incluido' },
        { id: 'fotografo', label: 'Fotógrafo profesional', price: 'Incluido' },
        { id: 'tarjeta-personalizada', label: 'Tarjeta personalizada', price: 'Incluido' },
        { id: 'video-drone', label: 'Video con drone', price: '+$5,000' },
        { id: 'cena-romantica', label: 'Cena romántica posterior', price: '+$4,500' }
      ],
      venueOptions: [
        { id: 'hotel', label: 'Hotel' },
        { id: 'motel', label: 'Motel' },
        { id: 'airbnb', label: 'Airbnb' },
        { id: 'restaurante', label: 'Restaurante' },
        { id: 'playa', label: 'Playa' },
        { id: 'jardin', label: 'Jardín' }
      ]
    },
    {
      id: 'aniversarios',
      title: 'Aniversarios Románticos',
      description: 'Celebra vuestro amor año tras año con cenas íntimas, renovaciones de votos o fiestas románticas que renueven la magia.',
      image: 'https://images.unsplash.com/photo-1668637067785-69216bc51dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMHJvbWFudGljJTIwZGlubmVyJTIwc2V0dXB8ZW58MXx8fHwxNzU5NTY3ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Gift,
      decorationOptions: [
        { id: 'cena-intima', label: 'Cena Íntima para Dos', price: '+$8,500' },
        { id: 'renovacion-votos', label: 'Renovación de Votos', price: '+$15,000' },
        { id: 'fiesta-anos', label: 'Fiesta de Años Juntos', price: '+$12,000' },
        { id: 'sorpresa-romantica', label: 'Sorpresa Romántica', price: '+$10,000' }
      ],
      guestOptions: [
        { id: 'solo-pareja', label: 'Solo para la pareja' },
        { id: 'familia', label: 'Con familia (10-20 personas)' },
        { id: 'amigos', label: 'Con amigos cercanos (21-40 personas)' },
        { id: 'celebracion', label: 'Gran celebración (40+ personas)' }
      ],
      musicOptions: [
        { id: 'romantica', label: 'Música romántica' },
        { id: 'su-epoca', label: 'Música de su época' },
        { id: 'serenata', label: 'Serenata personalizada' },
        { id: 'mariachi-aniversario', label: 'Mariachi para aniversario' }
      ],
      extraOptions: [
        { id: 'album-recuerdos', label: 'Álbum de recuerdos personalizado', price: '+$3,500' },
        { id: 'video-historia', label: 'Video de su historia de amor', price: '+$8,000' },
        { id: 'mesa-postres', label: 'Mesa de postres romántica', price: '+$4,000' },
        { id: 'mariachi-sorpresa', label: 'Mariachi sorpresa', price: '+$6,000' }
      ],
      venueOptions: [
        { id: 'hotel', label: 'Hotel' },
        { id: 'restaurante', label: 'Restaurante' },
        { id: 'airbnb', label: 'Airbnb' },
        { id: 'domicilio', label: 'Domicilio' },
        { id: 'salon-eventos', label: 'Salón de eventos' },
        { id: 'jardin', label: 'Jardín' }
      ]
    },
    {
      id: 'peticion-matrimonio-jardin',
      title: 'Petición de matrimonio en jardín privado',
      description: 'Una propuesta mágica en un entorno natural íntimo. Incluye letras gigantes, decoración completa del evento, ramo de 100 rosas rojas, globos románticos, alfombra roja, tarjeta personalizada y fotografía profesional. Paquete completo $10,500 MXN.',
      image: 'https://images.unsplash.com/photo-1692135842398-37a092fbd21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwZ2FyZGVuJTIwbWFycmlhZ2UlMjBwcm9wb3NhbCUyMGZsb3dlcnMlMjByb21hbnRpY3xlbnwxfHx8fDE3NTk3Njc5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Heart,
      decorationOptions: [
        { id: 'jardin-completo', label: 'Decoración completa de jardín con letras gigantes', price: 'Base $10,500' },
        { id: 'jardin-premium', label: 'Decoración premium con arco floral adicional', price: '+$3,500' },
        { id: 'jardin-exclusivo', label: 'Decoración exclusiva con pétalos y luces LED', price: '+$5,000' }
      ],
      guestOptions: [
        { id: 'pareja', label: 'Solo la pareja' },
        { id: 'familia-cercana', label: 'Familia cercana (hasta 10 personas)' },
        { id: 'amigos-familia', label: 'Amigos y familia (hasta 20 personas)' }
      ],
      musicOptions: [
        { id: 'romantica-instrumental', label: 'Música romántica instrumental' },
        { id: 'su-cancion', label: 'Su canción especial' },
        { id: 'violinista', label: 'Violinista en vivo' },
        { id: 'cuarteto', label: 'Cuarteto de cuerdas' }
      ],
      extraOptions: [
        { id: 'ramo-100-rosas', label: 'Ramo de 100 rosas rojas (INCLUIDO)', price: 'Incluido' },
        { id: 'globos-romanticos', label: 'Globos románticos (INCLUIDO)', price: 'Incluido' },
        { id: 'alfombra-roja', label: 'Alfombra roja (INCLUIDO)', price: 'Incluido' },
        { id: 'tarjeta-personalizada', label: 'Tarjeta personalizada (INCLUIDO)', price: 'Incluido' },
        { id: 'fotografia-profesional', label: 'Fotografía profesional (INCLUIDO)', price: 'Incluido' },
        { id: 'videografia', label: 'Videografía profesional del momento', price: '+$4,500' },
        { id: 'cena-romantica', label: 'Cena romántica posterior', price: '+$6,000' },
        { id: 'mariachi', label: 'Mariachi para el momento especial', price: '+$8,000' },
        { id: 'fuegos-artificiales', label: 'Fuegos artificiales', price: '+$3,000' }
      ],
      venueOptions: [
        { id: 'jardin-privado', label: 'Jardín privado' },
        { id: 'quinta', label: 'Quinta o casa de campo' },
        { id: 'parque-exclusivo', label: 'Parque con zona exclusiva' },
        { id: 'terraza-jardin', label: 'Terraza con jardín' }
      ]
    }

  ];

  const openCustomizationModal = (service: any) => {
    setCurrentService(service);
    setCustomization({
      musicType: [],
      extras: []
    });
    setIsModalOpen(true);
  };

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomization(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleArrayChange = (key: string, value: string, checked: boolean) => {
    setCustomization(prev => ({
      ...prev,
      [key]: checked 
        ? [...(prev[key as keyof ServiceCustomization] as string[] || []), value]
        : (prev[key as keyof ServiceCustomization] as string[] || []).filter(item => item !== value)
    }));
  };

  const generateWhatsAppMessage = () => {
    if (!currentService) {
      console.error('No hay servicio seleccionado');
      return;
    }
    let message = `💕 ¡Hola! Me interesa contratar el servicio de *${currentService.title}* con las siguientes opciones:\n\n`;
    message += `📋 *PERSONALIZACIÓN SELECCIONADA:*\n`;
    
    if (customization.decorationType) {
      const decoration = currentService.decorationOptions.find((opt: ServiceOption) => opt.id === customization.decorationType);
      message += `🎨 Estilo de decoración: ${decoration?.label}`;
      if (decoration?.price) message += ` (${decoration.price})`;
      message += `\n`;
    }
    
    if (customization.guestCount) {
      const guests = currentService.guestOptions.find((opt: ServiceOption) => opt.id === customization.guestCount);
      message += `👥 Número de invitados: ${guests?.label}\n`;
    }
    
    if (customization.musicType && customization.musicType.length > 0) {
      const musicLabels = customization.musicType.map(type => 
        currentService.musicOptions?.find((opt: ServiceOption) => opt.id === type)?.label
      ).filter(Boolean);
      message += `🎵 Música: ${musicLabels.join(', ')}\n`;
    }
    
    if (customization.venue) {
      const venue = currentService.venueOptions?.find((opt: ServiceOption) => opt.id === customization.venue);
      if (venue) {
        message += `📍 Lugar del evento: ${venue.label}\\n`;
      }
    }
    
    if (customization.extras && customization.extras.length > 0) {
      message += `✨ Servicios adicionales:\n`;
      customization.extras.forEach(extraId => {
        const extra = currentService.extraOptions.find((opt: ServiceOption) => opt.id === extraId);
        if (extra) {
          message += `   • ${extra.label}`;
          if (extra.price) message += ` (${extra.price})`;
          message += `\n`;
        }
      });
    }
    
    if (customization.budget) {
      const budgetLabels: { [key: string]: string } = {
        'basico': '$8,000 - $15,000',
        'medio': '$15,000 - $30,000',
        'alto': '$30,000 - $60,000',
        'premium': 'Más de $60,000'
      };
      message += `💰 Presupuesto aproximado: ${budgetLabels[customization.budget]}\n`;
    }
    
    if (customization.specialRequests) {
      message += `📝 Solicitudes especiales: ${customization.specialRequests}\n`;
    }
    
    message += `\n💬 ¿Podrían proporcionarme más información y un presupuesto detallado para este evento romántico?\n\n`;
    message += `¡Gracias por ayudarme a crear un momento inolvidable! 💕`;
    
    try {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/526183669072?text=${encodedMessage}`;
      console.log('Abriendo WhatsApp con URL:', whatsappUrl);
      
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow) {
        // Fallback si el popup fue bloqueado
        window.location.href = whatsappUrl;
      }
      
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      // Fallback directo
      window.location.href = `https://wa.me/526183669072`;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-burgundy/5 rounded-full translate-x-20 translate-y-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold divider-gold">
            Eventos Románticos
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 font-['Poppins'] leading-relaxed">
              Especializados en crear momentos únicos para celebrar el amor: peticiones de matrimonio, bodas, aniversarios y cenas románticas.
            </p>
            <p className="text-lg text-gold font-['Playfair_Display'] italic">
              💕 Desde $10,500 - Diseña tu evento romántico perfecto con nuestro sistema interactivo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group overflow-hidden bg-white shadow-elegant shadow-elegant-hover transition-all duration-700 hover:-translate-y-3 border border-subtle rounded-xl ${
                  isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <IconComponent className="h-7 w-7 text-black" />
                  </div>
                  
                  {/* Premium badge */}
                  <div className="absolute top-4 right-4 bg-burgundy text-white px-3 py-1 rounded-full text-sm font-['Poppins'] font-semibold">
                    ❤️ Romántico
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl text-burgundy mb-4 font-['Playfair_Display'] font-bold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 font-['Poppins'] leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Quick preview of options */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>{service.decorationOptions.length} estilos románticos</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>{service.extraOptions.length} servicios especiales</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Personalización completa</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => openCustomizationModal(service)}
                    className="w-full bg-gold hover:bg-[#B8941F] text-black font-['Poppins'] font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg group button-gold relative overflow-hidden"
                  >
                    <Heart className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    💕 Personalizar Evento Romántico
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Customization Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-gold/20 shadow-2xl animate-scale-in">
          {currentService && (
            <>
              <DialogHeader className="border-b border-gold/20 pb-6 relative">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-0 right-0 text-gray-400 hover:text-burgundy transition-colors duration-300 p-2 rounded-full hover:bg-gold/10"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <DialogTitle className="text-3xl text-burgundy font-['Playfair_Display'] text-center pr-12">
                  💕 Personaliza tu {currentService.title}
                </DialogTitle>
                <DialogDescription className="text-center text-gray-600 font-['Poppins'] mt-2">
                  Selecciona las opciones que mejor se adapten a tu evento romántico soñado
                </DialogDescription>
                
                {/* Decorative line */}
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 rounded-full"></div>
                </div>
              </DialogHeader>
              
              <div className="space-y-8 py-6">
                {/* Decoration Type */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Star className="h-5 w-5 text-gold mr-2" />
                    Estilo de Decoración
                  </h3>
                  <RadioGroup 
                    value={customization.decorationType} 
                    onValueChange={(value) => handleCustomizationChange('decorationType', value)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {currentService.decorationOptions.map((option: ServiceOption) => (
                      <div key={option.id} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gold transition-all duration-300 hover:shadow-md bg-white">
                        <RadioGroupItem value={option.id} id={option.id} className="border-2 border-gray-300 data-[state=checked]:border-gold data-[state=checked]:bg-gold" />
                        <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <span className="font-['Poppins'] text-gray-700">{option.label}</span>
                            {option.price && <span className="text-gold font-bold text-sm bg-gold/10 px-2 py-1 rounded-full">{option.price}</span>}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Guest Count */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Users className="h-5 w-5 text-gold mr-2" />
                    Número de Invitados
                  </h3>
                  <RadioGroup 
                    value={customization.guestCount} 
                    onValueChange={(value) => handleCustomizationChange('guestCount', value)}
                    className="grid grid-cols-2 gap-4"
                  >
                    {currentService.guestOptions.map((option: ServiceOption) => (
                      <div key={option.id} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-gold transition-all duration-300 hover:shadow-md bg-white">
                        <RadioGroupItem value={option.id} id={`guest-${option.id}`} className="border-2 border-gray-300 data-[state=checked]:border-gold data-[state=checked]:bg-gold" />
                        <Label htmlFor={`guest-${option.id}`} className="cursor-pointer font-['Poppins'] text-gray-700">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Music Type */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Music className="h-5 w-5 text-passion-red mr-2" />
                    Tipo de Música
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.musicOptions.map((option: ServiceOption) => (
                      <div key={option.id} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                        <Checkbox 
                          id={`music-${option.id}`}
                          checked={customization.musicType?.includes(option.id) || false}
                          onCheckedChange={(checked) => handleArrayChange('musicType', option.id, checked as boolean)}
                          className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red"
                        />
                        <Label htmlFor={`music-${option.id}`} className="cursor-pointer font-['Poppins'] text-gray-700 flex-1">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Venue Selection */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Gift className="h-5 w-5 text-passion-red mr-2" />
                    Lugar del Evento
                  </h3>
                  <RadioGroup 
                    value={customization.venue} 
                    onValueChange={(value) => handleCustomizationChange('venue', value)}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {currentService.venueOptions.map((option: ServiceOption) => (
                      <div key={option.id} className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                        <RadioGroupItem value={option.id} id={`venue-${option.id}`} className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                        <Label htmlFor={`venue-${option.id}`} className="cursor-pointer font-['Poppins'] text-gray-700 text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Extra Services */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 text-passion-red mr-2" />
                    Servicios Adicionales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.extraOptions.map((option: ServiceOption) => (
                      <div key={option.id} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                        <Checkbox 
                          id={`extra-${option.id}`}
                          checked={(customization.extras || []).includes(option.id)}
                          onCheckedChange={(checked) => handleArrayChange('extras', option.id, checked as boolean)}
                          className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red"
                        />
                        <Label htmlFor={`extra-${option.id}`} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <span className="font-['Poppins'] text-gray-700">{option.label}</span>
                            {option.price && <span className="text-passion-red font-bold text-sm bg-passion-red/10 px-2 py-1 rounded-full">{option.price}</span>}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4">
                    Presupuesto Aproximado
                  </h3>
                  <RadioGroup 
                    value={customization.budget} 
                    onValueChange={(value) => handleCustomizationChange('budget', value)}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="basico" id="budget-basico" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="budget-basico" className="cursor-pointer font-['Poppins'] text-gray-700">$3,000 - $8,000</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="medio" id="budget-medio" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="budget-medio" className="cursor-pointer font-['Poppins'] text-gray-700">$8,000 - $15,000</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="alto" id="budget-alto" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="budget-alto" className="cursor-pointer font-['Poppins'] text-gray-700">$15,000 - $30,000</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="premium" id="budget-premium" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="budget-premium" className="cursor-pointer font-['Poppins'] text-gray-700">Más de $30,000</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Special Requests */}
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-burgundy mb-4">
                    Solicitudes Especiales
                  </h3>
                  <Textarea 
                    placeholder="Cuéntanos cualquier detalle especial que te gustaría incluir en tu evento romántico..."
                    value={customization.specialRequests || ''}
                    onChange={(e) => handleCustomizationChange('specialRequests', e.target.value)}
                    rows={4}
                    className="border-2 border-gray-200 focus:border-gold rounded-xl p-4 font-['Poppins'] text-gray-700 resize-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-gold/20">
                {/* Summary of selections */}
                {(customization.decorationType || customization.guestCount) && (
                  <div className="mb-6 p-4 bg-gold/5 rounded-lg border border-gold/20">
                    <h4 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-2">
                      Resumen de tu evento romántico:
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600 font-['Poppins']">
                      {customization.decorationType && (
                        <div>• Decoración: {currentService.decorationOptions.find((opt: any) => opt.id === customization.decorationType)?.label}</div>
                      )}
                      {customization.guestCount && (
                        <div>• Invitados: {currentService.guestOptions.find((opt: any) => opt.id === customization.guestCount)?.label}</div>
                      )}
                      {customization.musicType && customization.musicType.length > 0 && (
                        <div>• Música: {customization.musicType.length} opciones seleccionadas</div>
                      )}
                      {customization.extras && customization.extras.length > 0 && (
                        <div>• Extras: {customization.extras.length} servicios adicionales</div>
                      )}
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={generateWhatsAppMessage}
                  className="w-full bg-gradient-to-r from-gold via-[#E6B800] to-gold hover:from-[#B8941F] hover:via-[#CC8800] hover:to-[#B8941F] text-black font-['Poppins'] font-bold py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-xl group relative overflow-hidden text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Send className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">💕 Enviar Consulta por WhatsApp</span>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}