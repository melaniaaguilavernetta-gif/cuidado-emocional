import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleEvitacion() {
  useEffect(() => {
    document.title = 'Evitación emocional: por qué huir no es poner límites | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre la diferencia entre poner límites sanos y la evitación emocional. Aprende comunicación asertiva con TCC y PNL. Terapia presencial en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Comunicación
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La trampa de "cortar por lo sano": Por qué huir del conflicto no es poner límites (es evitación)
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 24 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Seguramente lo has visto en decenas de frases motivacionales en internet: <em>"Si alguien te quita la paz, sácalo de tu vida"</em>, <em>"No le debes explicaciones a nadie"</em> o <em>"Aplica el contacto cero y protege tu energía"</em>.
          </p>
          <p>
            Esta filosofía de la "tolerancia cero" se ha camuflado bajo el atractivo nombre de <strong>autocuidado</strong>. Pero, a menos que hablemos de situaciones de abuso o maltrato (donde la huida sí es estrictamente necesaria), la mayoría de las veces estamos usando estas frases como excusa para esconder una realidad incómoda: nos aterra el conflicto.
