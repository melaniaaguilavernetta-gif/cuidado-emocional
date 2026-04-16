import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Star } from 'lucide-react';

export function About() {
  return (
    <section id="sobre-mí" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-emerald-800 mb-6">
              Mi Misión
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En Cuidado Emocional creo que cada persona merece un espacio seguro donde expresar sus emociones, 
              sanar heridas y desarrollar las herramientas necesarias para enfrentar los desafíos de la vida.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Mi enfoque combina la empatía profunda con el desarrollo de tu resiliencia interior, 
              acompañándote en cada paso de tu proceso de transformación personal.
            </p>

            <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-600">
              <p className="text-gray-700 italic text-lg">
                "Mi objetivo es crear un espacio donde te sientas escuchado, comprendido y apoyado 
                en tu camino hacia el bienestar emocional."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745092800886-f3a20d0b0065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJxdW9pc2UlMjBvY2VhbiUyMGJlYWNoJTIwdHJvcGljYWwlMjBjYWxtfGVufDF8fHx8MTc3Mjc5NTAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Espacio de meditación y paz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-gray-700 italic">
                "Un lugar donde encontré la paz que necesitaba y las herramientas para seguir adelante"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}