import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'María González',
    role: 'Profesora',
    content: 'Cuidado Emocional me ayudó a superar una de las etapas más difíciles de mi vida. El acompañamiento fue cálido, profesional y exactamente lo que necesitaba.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    role: 'Emprendedor',
    content: 'Las herramientas que aprendí aquí han transformado no solo mi vida personal, sino también mi forma de relacionarme en el trabajo. Increíblemente valioso.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Diseñadora',
    content: 'Encontré un espacio seguro donde pude ser yo misma sin juicios. La terapia online fue súper cómoda y efectiva. Totalmente recomendado.',
    rating: 5,
  },
  {
    name: 'Jorge López',
    role: 'Ingeniero',
    content: 'Después de años evitando buscar ayuda, finalmente di el paso. Fue la mejor decisión. El equipo es excepcional y los resultados hablan por sí mismos.',
    rating: 5,
  },
  {
    name: 'Laura Fernández',
    role: 'Estudiante',
    content: 'Los talleres grupales me dieron una nueva perspectiva sobre mis emociones. Me siento más preparada para enfrentar los retos de la vida.',
    rating: 5,
  },
  {
    name: 'Roberto Silva',
    role: 'Ejecutivo',
    content: 'Un servicio excepcional. Me ayudaron a desarrollar resiliencia en momentos muy complicados. Estoy muy agradecido por el acompañamiento recibido.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Lo que dicen mis clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de personas que han encontrado su camino hacia el bienestar emocional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}