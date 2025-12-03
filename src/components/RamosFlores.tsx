import { useState, useEffect } from 'react';
import { Heart, Sparkles, ShoppingCart, Star, MessageCircle, Gift, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import slide5 from '/flowers/rosas.jpg';

interface BouquetCustomization {
  size?: string;
  dedication?: string;
  deliveryLocation?: string;
  specialRequests?: string;
}

export function RamosFlores() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBouquet, setCurrentBouquet] = useState<any>(null);
  const [customization, setCustomization] = useState<BouquetCustomization>({});
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

    const element = document.getElementById('ramos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const bouquets = [
    {
      id: 'rosas-rojas',
      name: 'Ramo de Rosas Rojas',
      description: 'Clásico ramo de rosas rojas para expresar amor y pasión. Perfectas para peticiones de matrimonio y aniversarios.',
      image: slide5,
      prices: {
        pequeno: '$850',
        mediano: '$1,250',
        grande: '$1,800',
        premium: '$2,500'
      },
      sizes: [
        { id: 'pequeno', label: '12 rosas - Pequeño', price: '$850' },
        { id: 'mediano', label: '24 rosas - Mediano', price: '$1,250' },
        { id: 'grande', label: '36 rosas - Grande', price: '$1,800' },
        { id: 'premium', label: '100 rosas - Premium', price: '$2,500' }
      ]
    },
    {
      id: 'rosas-blancas',
      name: 'Ramo de Rosas Blancas',
      description: 'Elegantes rosas blancas que simbolizan pureza y amor eterno. Ideales para bodas y compromisos.',
      image: 'https://images.unsplash.com/photo-1745541584813-5be6cc8ced0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aGl0ZSUyMHJvc2VzJTIwYm91cXVldCUyMHdlZGRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc1OTU2ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      prices: {
        pequeno: '$800',
        mediano: '$1,150',
        grande: '$1,650',
        premium: '$2,200'
      },
      sizes: [
        { id: 'pequeno', label: '12 rosas - Pequeño', price: '$800' },
        { id: 'mediano', label: '24 rosas - Mediano', price: '$1,150' },
        { id: 'grande', label: '36 rosas - Grande', price: '$1,650' },
        { id: 'premium', label: '100 rosas - Premium', price: '$2,200' }
      ]
    },
    {
      id: 'rosas-rosas',
      name: 'Ramo de Rosas Rosadas',
      description: 'Tiernas rosas rosadas que expresan admiración y gratitud. Perfectas para primeras citas y gestos románticos.',
      image: 'https://images.unsplash.com/photo-1695050193946-3a3bde70c2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwcm9tYW50aWN8ZW58MXx8fHwxNzU5NTY5MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: {
        pequeno: '$800',
        mediano: '$1,150',
        grande: '$1,650',
        premium: '$2,200'
      },
      sizes: [
        { id: 'pequeno', label: '12 rosas - Pequeño', price: '$800' },
        { id: 'mediano', label: '24 rosas - Mediano', price: '$1,150' },
        { id: 'grande', label: '36 rosas - Grande', price: '$1,650' },
        { id: 'premium', label: '100 rosas - Premium', price: '$2,200' }
      ]
    }
   
  ];

  const openCustomizationModal = (bouquet: any) => {
    setCurrentBouquet(bouquet);
    setCustomization({});
    setIsModalOpen(true);
  };

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomization(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    let message = `🌹 ¡Hola! Me interesa el *${currentBouquet.name}* con las siguientes especificaciones:\n\n`;
    message += `📋 *DETALLES DEL RAMO:*\n`;
    
    if (customization.size) {
      const size = currentBouquet.sizes.find((s: any) => s.id === customization.size);
      message += `🌸 Tamaño: ${size?.label} (${size?.price})\n`;
    }
    
    if (customization.dedication) {
      message += `💝 Dedicatoria: "${customization.dedication}"\n`;
    }
    
    if (customization.deliveryLocation) {
      const locations: { [key: string]: string } = {
        'hotel': 'Hotel',
        'motel': 'Motel',
        'airbnb': 'Airbnb',
        'restaurante': 'Restaurante',
        'domicilio': 'Domicilio',
        'oficina': 'Oficina'
      };
      message += `📍 Lugar de entrega: ${locations[customization.deliveryLocation]}\n`;
    }
    
    if (customization.specialRequests) {
      message += `📝 Solicitudes especiales: ${customization.specialRequests}\n`;
    }
    
    message += `\n💬 ¿Podrían confirmar disponibilidad y coordinar la entrega?\n\n`;
    message += `¡Gracias por ayudarme a crear un momento especial! 🌹`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/526183669072?text=${encodedMessage}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section id="ramos" className="py-24 bg-light-gray relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-passion-red/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/5 rounded-full translate-x-20 translate-y-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold divider-gold">
            Ramos y Flores
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 font-['Poppins'] leading-relaxed">
              Hermosos ramos de flores frescas para acompañar tus momentos más especiales. Desde $450 con entrega incluida.
            </p>
            <p className="text-lg text-passion-red font-['Playfair_Display'] italic">
              🌹 Entregamos en hoteles, restaurantes, Airbnb y domicilios en Durango.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bouquets.map((bouquet, index) => (
            <Card 
              key={bouquet.id} 
              className={`group overflow-hidden bg-white shadow-elegant shadow-elegant-hover transition-all duration-700 hover:-translate-y-3 border border-subtle rounded-xl ${
                isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={bouquet.image}
                  alt={bouquet.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-passion-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-white text-passion-red px-3 py-1 rounded-full font-['Poppins'] font-semibold">
                  Desde {bouquet.prices.pequeno}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl text-burgundy mb-3 font-['Playfair_Display'] font-bold">
                  {bouquet.name}
                </h3>
                <p className="text-gray-600 mb-6 font-['Poppins'] leading-relaxed text-sm">
                  {bouquet.description}
                </p>
                
                {/* Size options preview */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-gold mr-2" />
                    <span>{bouquet.sizes.length} tamaños disponibles</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Gift className="h-4 w-4 text-gold mr-2" />
                    <span>Incluye tarjeta personalizada</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Sparkles className="h-4 w-4 text-gold mr-2" />
                    <span>Entrega el mismo día</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => openCustomizationModal(bouquet)}
                  className="w-full bg-passion-red hover:bg-passion-red-dark text-white font-['Poppins'] font-bold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg group relative overflow-hidden"
                >
                  <ShoppingCart className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  🌹 Personalizar y Pedir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Customization Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-passion-red/20 shadow-2xl animate-scale-in">
          {currentBouquet && (
            <>
              <DialogHeader className="border-b border-passion-red/20 pb-6">
                <DialogTitle className="text-2xl text-burgundy font-['Playfair_Display'] text-center">
                  🌹 Personaliza tu {currentBouquet.name}
                </DialogTitle>
                <DialogDescription className="text-center text-gray-600 font-['Poppins'] mt-2">
                  Elige el tamaño y personaliza tu ramo perfecto
                </DialogDescription>
                
                {/* Decorative line */}
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-passion-red/50 via-passion-red to-passion-red/50 rounded-full"></div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 py-6">
                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Star className="h-5 w-5 text-passion-red mr-2" />
                    Tamaño del Ramo
                  </h3>
                  <RadioGroup 
                    value={customization.size} 
                    onValueChange={(value) => handleCustomizationChange('size', value)}
                    className="grid grid-cols-1 gap-3"
                  >
                    {currentBouquet.sizes.map((size: any) => (
                      <div key={size.id} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                        <RadioGroupItem value={size.id} id={size.id} className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                        <Label htmlFor={size.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <span className="font-['Poppins'] text-gray-700">{size.label}</span>
                            <span className="text-passion-red font-bold bg-passion-red/10 px-3 py-1 rounded-full">{size.price}</span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Dedication */}
                <div>
                  <h3 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-passion-red mr-2" />
                    Dedicatoria Personalizada
                  </h3>
                  <Textarea 
                    placeholder="Escribe tu mensaje especial para la tarjeta (ej: Para el amor de mi vida, con todo mi corazón...)"
                    value={customization.dedication || ''}
                    onChange={(e) => handleCustomizationChange('dedication', e.target.value)}
                    rows={3}
                    className="border-2 border-gray-200 focus:border-passion-red rounded-xl p-4 font-['Poppins'] text-gray-700 resize-none transition-all duration-300"
                  />
                </div>

                {/* Delivery Location */}
                <div>
                  <h3 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-4 flex items-center">
                    <MessageCircle className="h-5 w-5 text-passion-red mr-2" />
                    Lugar de Entrega
                  </h3>
                  <RadioGroup 
                    value={customization.deliveryLocation} 
                    onValueChange={(value) => handleCustomizationChange('deliveryLocation', value)}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="hotel" id="hotel" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="hotel" className="cursor-pointer font-['Poppins'] text-gray-700">🏨 Hotel</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="motel" id="motel" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="motel" className="cursor-pointer font-['Poppins'] text-gray-700">🏩 Motel</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="airbnb" id="airbnb" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="airbnb" className="cursor-pointer font-['Poppins'] text-gray-700">🏠 Airbnb</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="restaurante" id="restaurante" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="restaurante" className="cursor-pointer font-['Poppins'] text-gray-700">🍽️ Restaurante</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="domicilio" id="domicilio" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="domicilio" className="cursor-pointer font-['Poppins'] text-gray-700">🏡 Domicilio</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-passion-red transition-all duration-300 hover:shadow-md bg-white">
                      <RadioGroupItem value="oficina" id="oficina" className="border-2 border-gray-300 data-[state=checked]:border-passion-red data-[state=checked]:bg-passion-red" />
                      <Label htmlFor="oficina" className="cursor-pointer font-['Poppins'] text-gray-700">🏢 Oficina</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Special Requests */}
                <div>
                  <h3 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-4">
                    Solicitudes Especiales
                  </h3>
                  <Textarea 
                    placeholder="¿Alguna instrucción especial para la entrega? (hora específica, ubicación exacta, etc.)"
                    value={customization.specialRequests || ''}
                    onChange={(e) => handleCustomizationChange('specialRequests', e.target.value)}
                    rows={3}
                    className="border-2 border-gray-200 focus:border-passion-red rounded-xl p-4 font-['Poppins'] text-gray-700 resize-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-passion-red/20">
                {/* Summary of selections */}
                {(customization.size || customization.deliveryLocation) && (
                  <div className="mb-6 p-4 bg-passion-red/5 rounded-lg border border-passion-red/20">
                    <h4 className="text-lg font-['Playfair_Display'] font-semibold text-burgundy mb-2">
                      Resumen de tu pedido:
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600 font-['Poppins']">
                      {customization.size && (
                        <div>• Tamaño: {currentBouquet.sizes.find((s: any) => s.id === customization.size)?.label}</div>
                      )}
                      {customization.deliveryLocation && (
                        <div>• Entrega: {customization.deliveryLocation}</div>
                      )}
                      {customization.dedication && (
                        <div>• Con dedicatoria personalizada</div>
                      )}
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={generateWhatsAppMessage}
                  className="w-full bg-gradient-to-r from-passion-red via-passion-red-light to-passion-red hover:from-passion-red-dark hover:via-passion-red hover:to-passion-red-dark text-white font-['Poppins'] font-bold py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-xl group relative overflow-hidden text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Send className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">🌹 Enviar Pedido por WhatsApp</span>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}