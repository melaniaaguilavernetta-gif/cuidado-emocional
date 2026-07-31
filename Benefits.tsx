import { ImageWithFallback } from './ImageWithFallback.tsx';
import { Shield, Sparkles, Compass, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Enfoque integrador',
    description: 'No me limito a una sola técnica. Selecciono las herramientas prácticas más adecuadas para tu situación concreta, ya sea para vencer fobias limitantes, resolver conflictos de pareja o recuperar tu paz mental.',
  },
  {
    icon: Compass,
    title: 'Disponibilidad y cercanía',
    description: 'Estoy disponible entre sesiones para dudas puntuales, no solo durante la hora de consulta.',
  },
  {
    icon: Smile,
    title: 'Atención personalizada',
    description: 'Cada proceso es único. Adapto las sesiones a tus necesidades, objetivos y circunstancias para ofrecerte un acompañamiento realmente efectivo.',
  },
  {
    icon: Shield,
    title: 'Herramientas para toda la vida',
    description: 'Además de aliviar tu malestar actual, aprenderás recursos para la gestión del estrés y la prevención de recaídas frente a adicciones o hábitos destructivos. Te llevarás estrategias que podrás utilizar de forma autónoma ante cualquier desafío futuro.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 pt-8">
            <div className="grid gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      {/* H3 con fuente en negrita suave (font-semibold) */}
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2">
            {/* H2 enriquecido para SEO y con fuente en negrita (font-bold) */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ¿Por qué elegir mi acompañamiento online?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Me comprometo a ofrecerte un acompañamiento profesional, cálido y efectivo que combina
              la solidez de la ciencia con técnicas orientadas al cambio rápido y profundo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1597824295725-3bc5dc49f4e1?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMGdyb3d0aCUyMG1pbmRmdWxuZXNzfGVufDF8fHx8MTc3Mjc5MzYzNHww&ixlib=rb-4.1.0&q=60&w=800&utm_source=figma&utm_medium=referral"
                  alt="Apoyo empático"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759513332004-c264d9231152?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwaG9wZSUyMHBlYWNlZnVsJTIwbW9ybmluZ3xlbnwxfHx8fDE3NzI3OTM2MzR8MA&ixlib=rb-4.1.0&q=60&w=800&utm_source=figma&utm_medium=referral"
                  alt="Crecimiento personal"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
