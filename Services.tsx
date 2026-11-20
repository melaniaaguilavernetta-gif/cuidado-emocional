import { Brain, Zap, Shield, TrendingUp, MessageCircle, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './card.tsx';

const forWhom = [
  'Sientes ansiedad, estrés o agotamiento emocional',
  'Te cuesta gestionar pensamientos negativos o autocríticos',
  'Quieres superar miedos, fobias o bloqueos que te frenan',
  'Buscas mejorar tu autoestima y confianza',
  'Deseas comunicarte mejor en tus relaciones personales o profesionales',
  'Necesitas herramientas prácticas que puedas aplicar desde la primera sesión',
];

const services = [
  {
    icon: Brain,
    title: 'Terapia Cognitivo-Conductual (TCC)',
    description:
      'Identificamos juntos patrones de pensamiento que te limitan y los transformamos en recursos para tu bienestar con técnicas de eficacia científicamente demostrada.',
    color: 'bg-emerald-100 text-emerald-800',
  },
  {
    icon: Zap,
    title: 'Programación Neurolingüística (PNL)',
    description:
      'Trabajamos con el lenguaje de tu mente para reprogramar respuestas automáticas, superar miedos y potenciar tu comunicación contigo y con los demás.',
    color: 'bg-teal-100 text-teal-800',
  },
  {
    icon: Video,
    title: 'Terapia Online y Presencial en Girona',
    description:
      'Flexibilidad total para adaptarme a tu vida, tanto en sesiones presenciales en Girona como en terapia online desde donde estés.',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: Shield,
    title: 'Espacio Seguro y Confidencial',
    description:
      'Tu privacidad es mi prioridad. Todas las sesiones se realizan en un entorno de total confianza y confidencialidad.',
    color: 'bg-amber-100 text-amber-900',
  },
  {
    icon: TrendingUp,
    title: 'Resultados desde el Inicio',
    description:
      'Tanto la TCC como la PNL están orientadas a la acción. Notarás cambios reales en pocas sesiones con herramientas que puedes aplicar desde el primer día.',
    color: 'bg-cyan-100 text-cyan-900',
  },
  {
    icon: MessageCircle,
    title: 'Acompañamiento Cercano',
    description:
      'Creo en una relación terapéutica basada en la confianza, la escucha activa y el respeto por tu ritmo personal de cambio.',
    color: 'bg-rose-100 text-rose-900',
  },
];

export function Services() {
  return (
    <>
      {/* ¿Para quién es? */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Te puedo ayudar si...
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Reconoces alguna de estas situaciones en tu vida
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {forWhom.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-emerald-100"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-sm mt-0.5"
                >
                  ✓
                </span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mis Servicios */}
      <section id="servicios" className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Mis Servicios de Terapia en Girona y Online
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrezco un acompañamiento integral con TCC y PNL adaptado a tus necesidades, con compromiso total hacia tu
              bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-emerald-200"
                >
                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-base">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
