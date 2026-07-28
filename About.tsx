import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="sobre-mí" className="pt-20 pb-8 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H2 enriquecido sutilmente para SEO y con fuente en negrita */}
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
          Un método de terapia probado y adaptado a ti
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl">
          Cada persona es única, y por eso mi forma de trabajar en las sesiones online también lo es. Integro dos enfoques
          terapéuticos de eficacia demostrada para ofrecerte el mejor acompañamiento posible, estés donde estés.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-600 shadow-sm">
              {/* H3 con tamaño de texto y negrita (text-xl font-semibold) */}
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Terapia Cognitivo-Conductual (TCC)</h3>
              <p className="text-gray-700">
                Identificamos juntos los pensamientos y patrones de comportamiento que te limitan. A través de técnicas
                prácticas y estructuradas, aprenderás a transformar creencias negativas en recursos que impulsen tu bienestar.
                La TCC es el enfoque con mayor respaldo para tratar ansiedad, estrés y problemas de autoestima.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-600 shadow-sm">
              {/* H3 con tamaño de texto y negrita (text-xl font-semibold) */}
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Programación Neurolingüística (PNL)</h3>
              <p className="text-gray-700">
                Trabajamos con el lenguaje de tu mente: cómo procesas experiencias, cómo te hablas a ti mismo/a y cómo puedes
                reprogramar respuestas automáticas que ya no te sirven. La PNL te ofrece herramientas rápidas y poderosas para
                cambiar perspectivas, superar miedos y potenciar tu comunicación.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745092800886-f3a20d0b0065?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJxdW9pc2UlMjBvY2VhbiUyMGJlYWNoJTIwdHJvcGljYWwlMjBjYWxtfGVufDF8fHx8MTc3Mjc5NTAwOHww&ixlib=rb-4.1.0&q=60&w=1080&utm_source=figma&utm_medium=referral"
              alt="Espacio de meditación y paz"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
