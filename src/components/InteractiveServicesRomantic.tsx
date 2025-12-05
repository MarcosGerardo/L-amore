import { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, Music, Users, CheckCircle, X, Send, Star, Calendar, Clock, MapPin, MessageSquare, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import slide1 from '/events/cenaromantica.jpg';
import slide2 from '/events/arco.jpg';
import slide3 from '/events/letrasgigantes.jpg';
import slide4 from '/events/matriarco.jpg';
import slide5 from '/events/matriletras.jpg';
import slide6 from '/matriletras/paquete1.jpg';
import slide7 from '/matriletras/paquete2.jpg';

interface PackageOption {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  packages: PackageOption[];
}

interface FormData {
  selectedPackage: string;
  extras: { [key: string]: boolean | number };
  celebrationReason: string;
  customReason: string;
  restaurant: string;
  customRestaurant: string;
  venueArea: string; // Nuevo: restaurante o jardín
  date: Date | null;
  time: string;
  specialRequests: string;
}

// Extras estándar para todos los servicios
const STANDARD_EXTRAS = [
  { id: 'mariachi', label: 'Mariachi', price: 3000 },
  { id: 'saxofon', label: 'Saxofón en vivo (1 h)', price: 1500 },
  { id: 'sesion-fotos', label: 'Sesión fotográfica', price: 1000 },
  { id: 'esfera', label: 'Esfera personalizada', price: 175 },
  { id: 'cartel-led', label: 'Cartel LED', price: 200 },
  { id: 'arco-led', label: 'Arco con LED', price: 2000 },
  { id: 'ramo-rosas', label: 'Ramo de rosas', price: 23, unit: 'por flor', hasQuantity: true, min: 1, max: 1000 }
];

// Motivos de celebración estándar
const CELEBRATION_REASONS = [
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'detalle', label: 'Detalle' },
  { id: 'aniversario', label: 'Aniversario' },
  { id: 'peticion-noviazgo', label: 'Petición de noviazgo' },
  { id: 'peticion-matrimonio', label: 'Petición de matrimonio' },
  { id: 'noche-bodas', label: 'Noche de bodas' },
  { id: 'luna-miel', label: 'Luna de miel' },
  { id: 'otro', label: 'Otro' }
];

// Restaurantes estándar
const RESTAURANTS = [
  'Dos Cero Dos – Cantina Contemporánea Mexicana',
  'Q4TRO – Restaurant & Bar',
  'Corleone Pizza',
  'Mateo – Asador, Pradera y Mar',
  'Barocco – Cucina Tradizionale Italiana',
  'El Asador de la Toscana - Parrilla Carnes',
  'Lugano - Pizzeria',
  'Puerto Montt – Parrilla Argentina',
  'Lucky Black – Pizza Pasta & Vino',
  'La Descendencia – Una historia que probar',
  'DGO Grill - Cortes',
  'Café Casa Nogal',
  'Don Emilio | Black – Steak House',
  'Papá Chuleta – Grill',
  'Bistro Garden – Grill & Bar',
  'Lucky Red - Pizzeria',
  'Otro'
];

// Horarios disponibles
const AVAILABLE_TIMES = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM'
];

export function InteractiveServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<ServiceData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    selectedPackage: '',
    extras: {},
    celebrationReason: '',
    customReason: '',
    restaurant: '',
    customRestaurant: '',
    venueArea: '', // Nuevo: restaurante o jardín
    date: null,
    time: '',
    specialRequests: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [restaurantSearch, setRestaurantSearch] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

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

  const services: ServiceData[] = [
    {
      id: 'cenas-romanticas',
      title: 'Cenas Románticas',
      description: 'En L\'amore Durango nos encargamos de organizar y decorar tu cena romántica para que vivas un momento inolvidable.',
      image:slide1,
      icon: Heart,
      packages: [
        {
          id: 'base',
          name: 'Base',
          price: '$450',
          description: 'Decoración de mesa sencilla con detalles románticos',
          image: 'https://images.unsplash.com/photo-1588710406418-bb90c807db72?w=400&h=300&fit=crop'
        },
        {
          id: 'primor',
          name: 'Primor',
          price: '$600',
          description: 'Decoración de mesa y piso con un toque elegante y acogedor',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop'
        },
        {
          id: 'elegante',
          name: 'Elegante',
          price: '$850',
          description: 'Incluye decoración Primor, rosas y globos para un ambiente lleno de amor',
          image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
        },
        {
          id: 'deluxe',
          name: 'Deluxe',
          price: '$1,500',
          description: 'Decoración elegante con ramo de rosas, flores y globos. Ideal para ocasiones especiales o propuestas inolvidables',
          image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'peticion-noviazgo-arco',
      title: 'Petición de Noviazgo con Arco',
      description: 'Haz que tu primera propuesta romántica sea perfecta con un hermoso arco decorado, flores, velas y fotografía del momento especial.',
      image: slide2,
      icon: Heart,
      packages: [
        {
          id: 'area-comun',
          name: 'Área Común',
          price: '$3,500',
          description: 'Arco decorado con flores, velas, pétalos y detalles románticos en espacio compartido',
          image: 'https://images.unsplash.com/photo-1550155921-59b42a868c17?w=400&h=300&fit=crop'
        },
        {
          id: 'area-privada',
          name: 'Área Privada',
          price: '$5,500',
          description: 'Arco decorado premium en espacio exclusivo con privacidad total y atención personalizada',
          image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'peticion-noviazgo-letras',
      title: 'Petición de Noviazgo con Letras Gigantes',
      description: 'Una propuesta espectacular con letras gigantes iluminadas, decoración completa y un ambiente mágico e inolvidable.',
      image: slide3,
      icon: Sparkles,
      packages: [
        {
          id: 'paquete1',
          name: 'Paquete 1',
          price: '$10,500',
          description: 'Letras gigantes iluminadas, decoración completa, ramo de rosas, pétalos y fotografía profesional',
          image: slide6
        },
        {
          id: 'paquete2',
          name: 'Paquete 2',
          price: '$15,500',
          description: 'Todo lo del Paquete 1 más con Mariachi  Pirotecnia y Chisperos ',
          image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'peticion-matrimonio-arco',
      title: 'Petición de Matrimonio con Arco',
      description: 'Haz que tu propuesta de matrimonio sea perfecta con un arco espectacular, decoración romántica y todos los detalles para ese momento único.',
      image: slide4,
      icon: Sparkles,
      packages: [
        {
          id: 'area-comun',
          name: 'Área Común',
          price: '$3,500',
          description: 'Arco decorado con flores, velas, pétalos, anillo de compromiso decorativo y fotografía profesional',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
        },
        {
          id: 'area-privada',
          name: 'Área Privada',
          price: '$5,500',
          description: 'Arco premium en espacio exclusivo, decoración completa, luces ambientales y atención personalizada',
          image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'peticion-matrimonio-letras',
      title: 'Petición de Matrimonio con Letras Gigantes',
      description: 'Una propuesta épica con Letras gigantes, decoración completa, 100 rosas, globos, alfombra roja, tarjeta personalizada, fotografía profesional, reservación en jardín privado.',
      image: slide5,
      icon: Sparkles,
      packages: [
        {
          id: 'paquete1',
          name: 'Paquete 1',
          price: '$10,500',
          description: 'Letras gigantes, decoración completa, 100 rosas, globos, alfombra roja, tarjeta personalizada, fotografía profesional, reservación en jardín privado',
          image: slide6
        },
        {
          id: 'paquete2',
          name: 'Paquete 2',
          price: '$15,500',
          description: 'Todo lo del Paquete 1 más con Mariachi  Pirotecnia y Chisperos ',
          image: slide7
        }
      ]
    }
  ];

  const openCustomizationModal = (service: ServiceData) => {
    setCurrentService(service);
    setFormData({
      selectedPackage: '',
      extras: {},
      celebrationReason: '',
      customReason: '',
      restaurant: '',
      customRestaurant: '',
      venueArea: '', // Nuevo: restaurante o jardín
      date: null,
      time: '',
      specialRequests: ''
    });
    setRestaurantSearch('');
    setCurrentMonth(new Date());
    setIsModalOpen(true);
  };

  const handleExtraToggle = (extraId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      extras: {
        ...prev.extras,
        [extraId]: checked ? (STANDARD_EXTRAS.find(e => e.id === extraId)?.hasQuantity ? 1 : true) : false
      }
    }));
  };

  const handleExtraQuantityChange = (extraId: string, quantity: number) => {
    setFormData(prev => ({
      ...prev,
      extras: {
        ...prev.extras,
        [extraId]: quantity
      }
    }));
  };

  const generateWhatsAppMessage = () => {
    if (!currentService) return;

    let message = `💕 ¡Hola! Me interesa contratar el servicio de *${currentService.title}* con las siguientes opciones:\n\n`;
    message += `📋 *PERSONALIZACIÓN SELECCIONADA:*\n`;

    // Paquete seleccionado
    if (formData.selectedPackage) {
      const pkg = currentService.packages.find(p => p.id === formData.selectedPackage);
      if (pkg) {
        message += `📦 Paquete: ${pkg.name} - ${pkg.price}\n`;
      }
    }

    // Extras
    const selectedExtras = Object.entries(formData.extras).filter(([_, value]) => value);
    if (selectedExtras.length > 0) {
      message += `\n✨ *SERVICIOS ADICIONALES:*\n`;
      selectedExtras.forEach(([extraId, value]) => {
        const extra = STANDARD_EXTRAS.find(e => e.id === extraId);
        if (extra) {
          if (extra.hasQuantity && typeof value === 'number') {
            message += `   • ${extra.label}: ${value} ${extra.unit || 'unidades'} - $${extra.price * value} MXN\n`;
          } else {
            message += `   • ${extra.label} - $${extra.price} MXN\n`;
          }
        }
      });
    }

    // Motivo de celebración
    if (formData.celebrationReason) {
      const reason = CELEBRATION_REASONS.find(r => r.id === formData.celebrationReason);
      message += `\n🎉 Motivo de celebración: ${formData.celebrationReason === 'otro' ? formData.customReason : reason?.label}\n`;
    }

    // Restaurante
    if (formData.restaurant) {
      message += `📍 Ubicación: ${formData.restaurant === 'Otro' ? formData.customRestaurant : formData.restaurant}\n`;
    }

    // Área del evento
    if (formData.venueArea) {
      message += `📍 Área del evento: ${formData.venueArea}\n`;
    }

    // Fecha y hora
    if (formData.date) {
      const dateStr = formData.date.toLocaleDateString('es-MX', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      message += `📅 Fecha: ${dateStr}\n`;
    }
    if (formData.time) {
      message += `🕐 Hora: ${formData.time}\n`;
    }

    // Solicitudes especiales
    if (formData.specialRequests) {
      message += `\n📝 Solicitudes especiales:\n${formData.specialRequests}\n`;
    }

    message += `\n💬 ¿Podrían proporcionarme más información y un presupuesto detallado para este evento romántico?\n\n`;
    message += `¡Gracias por ayudarme a crear un momento inolvidable! 💕`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/526183669072?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setFormData(prev => ({ ...prev, date: newDate }));
  };

  const filteredRestaurants = RESTAURANTS.filter(r => 
    r.toLowerCase().includes(restaurantSearch.toLowerCase())
  );

  const isFormValid = () => {
    const isCenaRomantica = currentService?.id === 'cenas-romanticas';
    
    return formData.selectedPackage && 
           (isCenaRomantica ? formData.celebrationReason : true) && 
           formData.restaurant && 
           formData.venueArea &&
           formData.date && 
           formData.time;
  };

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-burgundy/5 rounded-full translate-x-20 translate-y-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold">
            Eventos Románticos
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 font-['Poppins'] leading-relaxed">
              Especializados en crear momentos únicos para celebrar el amor: peticiones de matrimonio, peticiones de noviazgo, aniversarios y cenas románticas.
            </p>
            <p className="text-lg text-black font-['Playfair_Display'] italic">
              💕 Desde $450 - Diseña tu evento romántico perfecto con nuestro sistema interactivo premium 2025.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-200 rounded-xl ${
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
                  
                  <div className="absolute top-4 left-4 w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  
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
                  
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-black mr-2" />
                      <span>{service.packages.length} paquetes disponibles</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-black mr-2" />
                      <span>{STANDARD_EXTRAS.length} servicios adicionales</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-black mr-2" />
                      <span>Personalización completa</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => openCustomizationModal(service)}
                    className="w-full bg-black hover:bg-passion-red text-white font-['Poppins'] font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg group relative overflow-hidden"
                  >
                    <Heart className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    💕 Personalizar Evento
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal de Personalización Premium 2025 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-6xl max-h-[90vh] overflow-y-auto bg-white border-2 border-black/10 shadow-2xl rounded-2xl">
          {currentService && (
            <>
              <DialogHeader className="border-b border-black/10 pb-6 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-0 right-0 text-gray-400 hover:text-passion-red transition-colors duration-300 p-2 rounded-full hover:bg-black/5"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <DialogTitle className="text-3xl text-burgundy font-['Playfair_Display'] text-center pr-12">
                  💕 Personaliza tu {currentService.title}
                </DialogTitle>
                <DialogDescription className="text-center text-gray-600 font-['Poppins'] mt-2">
                  Completa todos los campos para diseñar tu evento romántico perfecto
                </DialogDescription>
                
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-black/50 via-burgundy to-black/50 rounded-full"></div>
                </div>
              </DialogHeader>
              
              <div className="space-y-10 py-6">
                {/* 1. SELECCIÓN DE PAQUETE */}
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                    <Gift className="h-6 w-6 text-black mr-3" />
                    1. Selecciona tu Paquete
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentService.packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData(prev => ({ ...prev, selectedPackage: pkg.id }))}
                        className={`cursor-pointer rounded-xl overflow-hidden border-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                          formData.selectedPackage === pkg.id
                            ? 'border-passion-red shadow-lg scale-105'
                            : 'border-gray-200 hover:border-black'
                        }`}
                      >
                        <div className="relative h-40 overflow-hidden">
                          <ImageWithFallback
                            src={pkg.image}
                            alt={pkg.name}
                            className="w-full h-full object-cover"
                          />
                          {formData.selectedPackage === pkg.id && (
                            <div className="absolute inset-0 bg-passion-red/20 flex items-center justify-center">
                              <CheckCircle className="h-12 w-12 text-passion-red" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 bg-white">
                          <h4 className="font-['Poppins'] font-bold text-lg text-burgundy mb-1">{pkg.name}</h4>
                          <p className="text-2xl font-bold text-black mb-2">{pkg.price}</p>
                          <p className="text-sm text-gray-600 line-clamp-2">{pkg.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. EXTRAS */}
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                    <Sparkles className="h-6 w-6 text-black mr-3" />
                    2. Servicios Adicionales (Opcionales)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {STANDARD_EXTRAS.map((extra) => (
                      <div
                        key={extra.id}
                        className={`p-5 border-2 rounded-xl transition-all duration-300 ${
                          formData.extras[extra.id]
                            ? 'border-passion-red bg-passion-red/5'
                            : 'border-gray-200 hover:border-black bg-white'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id={`extra-${extra.id}`}
                            checked={!!formData.extras[extra.id]}
                            onCheckedChange={(checked) => handleExtraToggle(extra.id, checked as boolean)}
                            className="mt-1 border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red"
                          />
                          <div className="flex-1">
                            <Label htmlFor={`extra-${extra.id}`} className="cursor-pointer">
                              <div className="flex justify-between items-start">
                                <span className="font-['Poppins'] font-semibold text-gray-800">{extra.label}</span>
                                <span className="text-passion-red font-bold text-sm bg-passion-red/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                                  ${extra.price} {extra.unit || 'MXN'}
                                </span>
                              </div>
                            </Label>
                            {extra.hasQuantity && formData.extras[extra.id] && (
                              <div className="mt-3 flex items-center space-x-3">
                                <Input
                                  type="number"
                                  min={extra.min}
                                  max={extra.max}
                                  value={typeof formData.extras[extra.id] === 'number' ? formData.extras[extra.id] : 1}
                                  onChange={(e) => handleExtraQuantityChange(extra.id, parseInt(e.target.value) || 1)}
                                  className="w-24 border-2 border-gray-300 focus:border-passion-red rounded-lg"
                                />
                                <span className="text-sm text-gray-600">
                                  Total: ${extra.price * (typeof formData.extras[extra.id] === 'number' ? formData.extras[extra.id] as number : 1)} MXN
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. MOTIVO DE CELEBRACIÓN */}
                {currentService.id === 'cenas-romanticas' && (
                  <div>
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                      <Heart className="h-6 w-6 text-black mr-3" />
                      3. Motivo de Celebración
                    </h3>
                    <RadioGroup
                      value={formData.celebrationReason}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, celebrationReason: value }))}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      {CELEBRATION_REASONS.map((reason) => (
                        <div
                          key={reason.id}
                          className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                            formData.celebrationReason === reason.id
                              ? 'border-passion-red bg-passion-red/5'
                              : 'border-gray-200 hover:border-black bg-white'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem
                              value={reason.id}
                              id={`reason-${reason.id}`}
                              className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red"
                            />
                            <Label htmlFor={`reason-${reason.id}`} className="cursor-pointer font-['Poppins'] text-gray-800">
                              {reason.label}
                            </Label>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                    {formData.celebrationReason === 'otro' && (
                      <Input
                        placeholder="Especifica el motivo..."
                        value={formData.customReason}
                        onChange={(e) => setFormData(prev => ({ ...prev, customReason: e.target.value }))}
                        className="mt-4 border-2 border-gray-300 focus:border-passion-red rounded-lg p-3"
                      />
                    )}
                  </div>
                )}

                {/* 4. RESTAURANTE O UBICACIÓN */}
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                    <MapPin className="h-6 w-6 text-black mr-3" />
                    {currentService.id === 'cenas-romanticas' ? '4' : '3'}. Restaurante o Ubicación
                  </h3>
                  <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Buscar restaurante..."
                      value={restaurantSearch}
                      onChange={(e) => setRestaurantSearch(e.target.value)}
                      className="pl-12 border-2 border-gray-300 focus:border-passion-red rounded-lg p-3"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto border-2 border-gray-200 rounded-xl">
                    {filteredRestaurants.map((restaurant, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, restaurant, venueArea: '' }));
                        }}
                        className={`p-4 cursor-pointer transition-all duration-200 ${
                          formData.restaurant === restaurant
                            ? 'bg-passion-red/10 border-l-4 border-passion-red'
                            : 'hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-['Poppins'] text-gray-800">{restaurant}</span>
                          {formData.restaurant === restaurant && (
                            <CheckCircle className="h-5 w-5 text-passion-red" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {formData.restaurant === 'Otro' && (
                    <Input
                      placeholder="Especifica la ubicación..."
                      value={formData.customRestaurant}
                      onChange={(e) => setFormData(prev => ({ ...prev, customRestaurant: e.target.value }))}
                      className="mt-4 border-2 border-gray-300 focus:border-passion-red rounded-lg p-3"
                    />
                  )}
                </div>

                {/* 4.5 ÁREA DEL EVENTO */}
                {formData.restaurant && (
                  <div>
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                      <MapPin className="h-6 w-6 text-black mr-3" />
                      {currentService.id === 'cenas-romanticas' ? '4.1' : '3.1'}. Área del Evento
                    </h3>
                    <p className="text-gray-600 font-['Poppins'] mb-4">
                      ¿Dónde te gustaría realizar el evento?
                    </p>
                    <RadioGroup
                      value={formData.venueArea}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, venueArea: value }))}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div
                        className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                          formData.venueArea === 'restaurante'
                            ? 'border-passion-red bg-passion-red/5'
                            : 'border-gray-200 hover:border-black bg-white'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem
                            value="restaurante"
                            id="area-restaurante"
                            className="mt-1 border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red"
                          />
                          <div className="flex-1">
                            <Label htmlFor="area-restaurante" className="cursor-pointer">
                              <p className="font-['Poppins'] font-semibold text-lg text-gray-800 mb-2">
                                🍽️ En el Restaurante (Área Privada)
                              </p>
                              <p className="text-sm text-gray-600">
                                Evento realizado dentro del restaurante en un área privada, con toda la comodidad y servicios del establecimiento.
                              </p>
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                          formData.venueArea === 'jardin'
                            ? 'border-passion-red bg-passion-red/5'
                            : 'border-gray-200 hover:border-black bg-white'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem
                            value="jardin"
                            id="area-jardin"
                            className="mt-1 border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red"
                          />
                          <div className="flex-1">
                            <Label htmlFor="area-jardin" className="cursor-pointer">
                              <p className="font-['Poppins'] font-semibold text-lg text-gray-800 mb-2">
                                🌿 Jardín Privado del Restaurante
                              </p>
                              <p className="text-sm text-gray-600">
                                Evento al aire libre en el jardín privado del restaurante, ambiente natural y romántico bajo las estrellas.
                              </p>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* 5. FECHA Y HORA */}
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                    <Calendar className="h-6 w-6 text-black mr-3" />
                    {currentService.id === 'cenas-romanticas' ? '5' : '4'}. Fecha y Hora de la Celebración
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendario */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                      <div className="flex items-center justify-between mb-6">
                        <button
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </button>
                        <h4 className="font-['Poppins'] font-bold text-lg text-burgundy">
                          {currentMonth.toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
                        </h4>
                        <button
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <ChevronRight className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2 mb-2">
                        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
                          <div key={i} className="text-center font-['Poppins'] font-semibold text-gray-600 text-sm">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: getDaysInMonth(currentMonth).startingDayOfWeek }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {Array.from({ length: getDaysInMonth(currentMonth).daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const isSelected = formData.date?.getDate() === day &&
                                           formData.date?.getMonth() === currentMonth.getMonth() &&
                                           formData.date?.getFullYear() === currentMonth.getFullYear();
                          const isPast = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day) < new Date(new Date().setHours(0, 0, 0, 0));
                          
                          return (
                            <button
                              key={day}
                              onClick={() => !isPast && handleDateSelect(day)}
                              disabled={isPast}
                              className={`p-3 rounded-lg font-['Poppins'] transition-all duration-200 ${
                                isSelected
                                  ? 'bg-passion-red text-white font-bold scale-110'
                                  : isPast
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : 'hover:bg-burgundy/10 text-gray-700'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4 text-center font-['Poppins'] italic">
                        💡 Selecciona la fecha de tu celebración
                      </p>
                    </div>

                    {/* Selector de Hora */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                      <div className="flex items-center mb-4">
                        <Clock className="h-5 w-5 text-black mr-2" />
                        <h4 className="font-['Poppins'] font-bold text-lg text-burgundy">
                          Hora del Evento
                        </h4>
                      </div>
                      
                      <div className="relative">
                        <button
                          onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                          className="w-full p-4 border-2 border-gray-300 rounded-lg text-left font-['Poppins'] hover:border-passion-red transition-colors flex items-center justify-between"
                        >
                          <span className={formData.time ? 'text-gray-800' : 'text-gray-400'}>
                            {formData.time || 'Selecciona una hora'}
                          </span>
                          <Clock className="h-5 w-5 text-gray-400" />
                        </button>
                        
                        {showTimeDropdown && (
                          <div className="absolute z-10 w-full mt-2 max-h-64 overflow-y-auto bg-white border-2 border-gray-200 rounded-lg shadow-xl">
                            {AVAILABLE_TIMES.map((time) => (
                              <div
                                key={time}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, time }));
                                  setShowTimeDropdown(false);
                                }}
                                className={`p-3 cursor-pointer transition-all duration-200 ${
                                  formData.time === time
                                    ? 'bg-passion-red/10 border-l-4 border-passion-red font-semibold'
                                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-['Poppins']">{time}</span>
                                  {formData.time === time && (
                                    <CheckCircle className="h-5 w-5 text-passion-red" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4 font-['Poppins'] italic">
                        💡 Horario disponible: 12:00 PM - 11:00 PM
                      </p>
                      
                      {formData.date && formData.time && (
                        <div className="mt-6 p-4 bg-passion-red/10 rounded-lg border-2 border-passion-red/20">
                          <p className="font-['Poppins'] font-semibold text-burgundy mb-2">
                            📅 Tu Celebración:
                          </p>
                          <p className="text-gray-800">
                            {formData.date.toLocaleDateString('es-MX', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p className="text-gray-800">
                            🕐 {formData.time}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 6. SOLICITUDES ESPECIALES */}
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-burgundy mb-6 flex items-center">
                    <MessageSquare className="h-6 w-6 text-black mr-3" />
                    6. Solicitudes Especiales
                  </h3>
                  <Textarea
                    placeholder="Indique alergias, preferencias, sorpresas, detalles adicionales..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    maxLength={500}
                    rows={5}
                    className="w-full border-2 border-gray-300 focus:border-passion-red rounded-lg p-4 font-['Poppins'] resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-right">
                    {formData.specialRequests.length}/500 caracteres
                  </p>
                </div>

                {/* BOTÓN DE ENVÍO */}
                <div className="pt-6 border-t border-gray-200">
                  <Button
                    onClick={generateWhatsAppMessage}
                    disabled={!isFormValid()}
                    className={`w-full py-6 rounded-full font-['Poppins'] font-bold text-lg transition-all duration-300 ${
                      isFormValid()
                        ? 'bg-black hover:bg-passion-red text-white hover:scale-105 shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Send className="h-6 w-6 mr-3" />
                    {isFormValid() ? '💕 Enviar Solicitud por WhatsApp' : '⚠️ Completa todos los campos requeridos'}
                  </Button>
                  
                  {!isFormValid() && (
                    <p className="text-center text-sm text-gray-500 mt-3 font-['Poppins']">
                      {currentService.id === 'cenas-romanticas' 
                        ? 'Asegúrate de seleccionar: paquete, motivo, ubicación, área, fecha y hora'
                        : 'Asegúrate de seleccionar: paquete, ubicación, área, fecha y hora'
                      }
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}