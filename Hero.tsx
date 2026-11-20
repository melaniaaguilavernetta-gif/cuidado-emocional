import { ImageWithFallback } from './ImageWithFallback.tsx';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759764371201-0c3234cab187?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMHBlYWNlZnVsJTIwbWVhZG93fGVufDF8fHx8MTc3Mjc5NDg2M3ww&ixlib=rb-4.1.0&q=60&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pradera verde tranquila y luminosa que evoca calma y bienestar emocional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-900/80 to-teal-900/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-24">
        <p className="text-base md:text-lg font-medium tracking-widest uppercase mb-4 text-emerald-200">
          Terapeuta en Girona y Terapia Online · TCC y PNL
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Transforma tu mente, transforma tu vida
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 mb-10">
          Te acompaño en terapia presencial en Girona y terapia online adaptada a ti, combinando las herramientas más efectivas de la Terapia Cognitivo-Conductual y la PNL. Te guiaré paso a paso en la gestión de la ansiedad y el estrés, ayudándote a sanar tu autoestima tras etapas de depresión o estancamiento, para que superes tus bloqueos y construyas la vida que deseas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="inline-block bg-emerald-400 hover:bg-emerald-300 text-gray-950 font-semibold px-8 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Pedir información o cita
          </a>
          <a
            href="#blog"
            className="inline-block border border-white/80 bg-black/20 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explorar artículos
          </a>
        </div>
      </div>
    </section>
  );
}
