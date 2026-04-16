import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Sparkles, Compass, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Espacio Seguro y Confidencial',
    description: 'Tu privacidad es mi prioridad. Todas las sesiones son completamente confidenciales.',
  },
  {
    icon: Sparkles,
    title: 'Enfoque Personalizado',
    description: 'Cada persona es única. Adapto mi enfoque a tus necesidades específicas.',
  },
  {
    icon: Compass,
    title: 'Herramientas Prácticas',
    description: 'Te acompaño con técnicas y estrategias que podrás aplicar en tu día a día.',
  },
  {
    icon: Smile,
    title: 'Resultados Duraderos',
    description: 'No solo busco alivio temporal, sino un cambio profundo y sostenible.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
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
                      <h3 className="text-xl mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              ¿Por qué elegirme?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Me comprometo a brindarte un acompañamiento profesional, cálido y efectivo 
              que te ayudará a desarrollar tu máximo potencial emocional.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1597824295725-3bc5dc49f4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMGdyb3d0aCUyMG1pbmRmdWxuZXNzfGVufDF8fHx8MTc3Mjc5MzYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Apoyo empático"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759513332004-c264d9231152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwaG9wZSUyMHBlYWNlZnVsJTIwbW9ybmluZ3xlbnwxfHx8fDE3NzI3OTM2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Crecimiento personal"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}