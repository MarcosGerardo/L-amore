import { Heart, Sparkles, Baby, Calendar, Cake, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Bodas",
      description: "El día más especial de tu vida merece la perfección",
      image: "https://images.unsplash.com/photo-1752857015591-c1b85c01c461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRlY29yYXRpb258ZW58MXx8fHwxNzU5NDIwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "Hola, me interesa contratar el servicio de Bodas."
    },
    {
      icon: Sparkles,
      title: "XV Años",
      description: "Una celebración única para una princesa única",
      image: "https://images.unsplash.com/photo-1737224319158-570f67b1f038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhJUMzJUIxZXJhJTIwcGFydHklMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1OTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "Hola, me interesa contratar el servicio de XV Años."
    },
    {
      icon: Baby,
      title: "Baby Showers",
      description: "Celebrando la llegada de tu pequeño tesoro",
      image: "https://images.unsplash.com/photo-1758606137571-79fb4dd7d5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbiUyMHBpbmt8ZW58MXx8fHwxNzU5NTE2NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "Hola, me interesa contratar el servicio de Baby Showers."
    },
    {
      icon: Cake,
      title: "Cumpleaños",
      description: "Cada año de vida merece una celebración especial",
      image: "https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU5NTE2NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "Hola, me interesa contratar el servicio de Cumpleaños."
    },
    {
      icon: Calendar,
      title: "Aniversarios",
      description: "Celebra el amor que perdura a través del tiempo",
      image: "https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRlY29yYXRpb258ZW58MXx8fHwxNzU5NTE2NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "Hola, me interesa contratar el servicio de Aniversarios."
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Profesionalismo y elegancia para tu empresa",
      image: "https://images.unsplash.com/photo-1717944186818-c628ca7c2b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NTk0ODIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatsappMessage: "Hola, me interesa contratar el servicio de Eventos Corporativos."
    }
  ];

  const openWhatsApp = (message: string) => {
    try {
      const phoneNumber = "526183669072";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      console.log('Abriendo WhatsApp con URL:', whatsappUrl);
      
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow) {
        // Fallback si el popup fue bloqueado
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      // Fallback directo
      window.location.href = `https://wa.me/526183669072`;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold divider-gold">
            Nuestros Servicios
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 font-['Poppins'] leading-relaxed">
              Especializados en crear experiencias únicas y memorables para cada ocasión especial.
            </p>
            <p className="text-lg text-burgundy font-['Playfair_Display'] italic">
              Tu sueño, nuestra pasión.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group overflow-hidden bg-white shadow-elegant shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 border border-subtle rounded-xl">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl text-burgundy mb-4 font-['Playfair_Display'] font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 font-['Poppins'] leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    onClick={() => openWhatsApp(service.whatsappMessage)}
                    className="w-full bg-gold hover:bg-[#B8941F] text-black font-['Poppins'] font-semibold py-3 rounded-full transition-all hover:scale-105 shadow-md"
                  >
                    Seleccionar Servicio
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}