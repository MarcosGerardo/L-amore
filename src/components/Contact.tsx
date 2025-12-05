import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    try {
      const whatsappMessage = `Hola, mi nombre es ${name}. Email: ${email}. Mensaje: ${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/526183669072?text=${encodedMessage}`;
      
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
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold divider-gold">
            Contáctanos
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 font-['Poppins'] leading-relaxed">
              Estamos aquí para hacer realidad el evento de tus sueños.
            </p>
            <p className="text-lg text-gold font-['Playfair_Display'] italic">
              ¡Ponte en contacto con nosotros hoy mismo!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-reveal">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-elegant border border-subtle rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-burgundy font-['Playfair_Display']">
                  <MapPin className="h-6 w-6 text-gold" />
                  <span>Dirección</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-['Poppins'] text-lg text-gray-700">
                     Boulevard Durango #222 <br />
                  Sahr, Durango Dgo
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elegant border border-subtle rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-burgundy font-['Playfair_Display']">
                  <Phone className="h-6 w-6 text-gold" />
                  <span>Teléfono</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-['Poppins'] text-lg text-gray-700">
                  <a href="tel:+526183669072" className="hover:text-burgundy transition-colors">
                    +52 618 366 9072
                  </a>
                </p>
                <p className="font-['Poppins'] text-lg text-gray-700">
                  <a href="tel:+5218711234567" className="hover:text-burgundy transition-colors">
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elegant border border-subtle rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-burgundy font-['Playfair_Display']">
                  <Mail className="h-6 w-6 text-gold" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-['Poppins'] text-lg text-gray-700">
                  <a href="mailto:info@lamoredurango.com" className="hover:text-burgundy transition-colors">
                   
                  </a>
                </p>
                <p className="font-['Poppins'] text-lg text-gray-700">
                  <a href="mailto:lamoredurango413@gmail.com" className="hover:text-burgundy transition-colors">
                     lamoredurango413@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elegant border border-subtle rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-burgundy font-['Playfair_Display']">
                  <Clock className="h-6 w-6 text-gold" />
                  <span>Horarios de Atención</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-['Poppins'] space-y-2 text-gray-700">
                  <p><span className="text-gold font-semibold">Lun - Vie:</span> 9:00 AM - 2:00 PM  ó  4:00 pm - 7:00 pm</p>
                  <p><span className="text-gold font-semibold">Sábado:</span> 10:00 AM - 3:00 PM</p>
                  <p className="text-sm text-gray-500 mt-4">
                    *Citas fuera de horario disponibles con previa coordinación
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white shadow-elegant border border-subtle rounded-xl">
              <CardHeader>
                <CardTitle className="text-burgundy font-['Playfair_Display']">
                  Síguenos en Redes Sociales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  <a 
                    href="https://facebook.com/lamoredurango" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold text-black p-3 rounded-full hover:bg-[#B8941F] transition-all hover:scale-110 shadow-md"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://instagram.com/lamoredurango" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold text-black p-3 rounded-full hover:bg-[#B8941F] transition-all hover:scale-110 shadow-md"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://wa.me/526183669072?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-all hover:scale-110 shadow-md"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-elegant border border-subtle rounded-xl">
              <CardHeader>
                <CardTitle className="text-burgundy font-['Playfair_Display'] text-2xl">
                  Envíanos un Mensaje
                </CardTitle>
                <p className="text-gray-600 font-['Poppins']">
                  Cuéntanos sobre tu evento soñado y te ayudaremos a hacerlo realidad
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-burgundy font-['Poppins'] font-medium">
                        Nombre Completo *
                      </label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Tu nombre completo" 
                        required 
                        className="border-subtle focus:border-burgundy font-['Poppins']"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-burgundy font-['Poppins'] font-medium">
                        Teléfono
                      </label>
                      <Input 
                        id="phone" 
                        name="phone"
                        placeholder="(871) 123-4567" 
                        className="border-subtle focus:border-burgundy font-['Poppins']"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-burgundy font-['Poppins'] font-medium">
                      Correo Electrónico *
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="tu@email.com" 
                      required 
                      className="border-subtle focus:border-burgundy font-['Poppins']"
                    />
                  </div>

                  <div>
                    <label htmlFor="event-type" className="block mb-2 text-burgundy font-['Poppins'] font-medium">
                      Tipo de Evento
                    </label>
                    <select 
                      id="event-type" 
                      name="eventType"
                      className="w-full p-3 border border-subtle rounded-md focus:border-burgundy focus:outline-none font-['Poppins']"
                    >
                      <option value="">Selecciona el tipo de evento</option>
                      <option value="boda">Boda</option>
                      <option value="xv-anos">XV Años</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="aniversario">Aniversario</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-burgundy font-['Poppins'] font-medium">
                      Cuéntanos sobre tu evento *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Describe tu evento ideal: fecha, número de invitados, estilo deseado, presupuesto aproximado, etc."
                      rows={5}
                      required 
                      className="border-subtle focus:border-burgundy font-['Poppins']"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white font-['Poppins'] font-semibold py-3 rounded-full transition-all hover:scale-105"
                  >
                    Enviar Mensaje por WhatsApp
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center font-['Poppins']">
                    Al enviar este formulario, serás redirigido a WhatsApp para completar tu consulta
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}