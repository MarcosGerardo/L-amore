import { Heart, Gift, Crown, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Products() {
  const products = [
    {
      icon: Heart,
      title: "Arreglos Románticos",
      description: "Bouquets perfectos para expresar tu amor con rosas rojas, rosadas y blancas.",
      price: "Desde $45",
    },
    {
      icon: Gift,
      title: "Flores para Ocasiones",
      description: "Arreglos especiales para cumpleaños, aniversarios y celebraciones.",
      price: "Desde $35",
    },
    {
      icon: Crown,
      title: "Bodas y Eventos",
      description: "Diseños únicos para tu día especial con flores premium y decoración elegante.",
      price: "Desde $150",
    },
    {
      icon: Calendar,
      title: "Suscripción Semanal",
      description: "Recibe flores frescas cada semana directamente en tu hogar u oficina.",
      price: "Desde $25/semana",
    },
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia variedad de arreglos florales para cada ocasión especial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <p className="text-2xl text-pink-600">{product.price}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}