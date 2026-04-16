import { User, Video, MessageCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: User,
    title: 'Terapia Individual',
    description: 'Sesiones personalizadas enfocadas en tus necesidades específicas, en un espacio confidencial y seguro.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Video,
    title: 'Sesiones Online',
    description: 'Accede a acompañamiento profesional desde la comodidad de tu hogar, con total flexibilidad horaria.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: MessageCircle,
    title: 'Apoyo en Crisis',
    description: 'Intervención inmediata para momentos difíciles. Estoy aquí cuando más me necesitas.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Calendar,
    title: 'Programas Personalizados',
    description: 'Diseño un plan de acompañamiento adaptado a tus objetivos y ritmo de vida.',
    color: 'bg-cyan-100 text-cyan-600',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Mis Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco un acompañamiento integral adaptado a tus necesidades, 
            con compromiso total hacia tu bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-emerald-200">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}