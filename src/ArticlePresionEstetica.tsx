import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticlePresionEstetica() {
  useEffect(() => {
    document.title = 'Presión estética y autoimagen: cómo superarla | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre cómo afecta la presión estética a tu salud mental y cómo hacer las paces con tu cuerpo usando TCC y neutralidad corporal. Terapia en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Autoestima y Autoimagen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Cuánta energía mental gastas al día peleándote con el espejo?
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 4 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Vivimos bombardeados por imágenes con filtros, estándares de belleza irreales y la presión constante de encajar en un molde que rara vez refleja la realidad.
          </p>
          <p>
            Esta presión estética no solo afecta cómo te vistes por la mañana; es algo mucho más profundo. <strong>Se infiltra en tu mente</strong> en forma de ansiedad, comparaciones constantes y una voz crítica interna que te repite una y otra vez que "nunca es suficiente".
          </p>

          <h2 className="text-3xl font-bold text-gray-9
