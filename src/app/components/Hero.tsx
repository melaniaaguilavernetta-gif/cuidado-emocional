import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759764371201-0c3234cab187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMHBlYWNlZnVsJTIwbWVhZG93fGVufDF8fHx8MTc3Mjc5NDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Acompañamiento emocional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in">
          Cuidado Emocional
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          Un espacio seguro donde encontrarás el apoyo emocional que necesitas para crecer, sanar y transformarte
        </p>
      </div>
    </section>
  );
}