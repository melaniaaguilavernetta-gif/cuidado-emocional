import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleEclipseEmocional() {
  useEffect(() => {
    document.title = 'Eclipse emocional: cómo recuperar la claridad ante la ansiedad | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre qué es el eclipse emocional y cómo despejar la ansiedad y el estrés crónico con herramientas de TCC y PNL. Terapia presencial en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Autoestima y Autoconocimiento
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El "Eclipse Emocional": Qué hacer cuando la ansiedad oculta tu claridad
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 12 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Un eclipse lunar es uno de los fenómenos más fascinantes que podemos observar. Durante unas horas, la sombra de la Tierra se interpone en el camino de la luz, dejando a la luna en la oscuridad. Sin embargo, todos sabemos una gran verdad: <strong>la luna no ha desaparecido, ni ha perdido su capacidad de brillar.</strong> Solo está temporalmente oculta.
          </p>
          <p>
            En nuestra vida diaria, y especialmente en nuestra salud mental, experimentamos un fenómeno exactamente igual al que, en consulta, me gusta llamar el <em>"eclipse emocional"</em>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            ¿Qué es un Eclipse Emocional?
          </h2>
          <p>
            Un eclipse emocional ocurre cuando tus miedos, la ansiedad, o
