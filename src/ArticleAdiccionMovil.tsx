import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleAdiccionMovil() {
  useEffect(() => {
    document.title = 'Adicción al móvil y evitación emocional: cómo superarla | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre por qué usamos el móvil para evitar emociones y cómo recuperar el control de tu tiempo con herramientas de TCC y PNL. Terapia en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/adiccion-movil');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Hábitos y Bienestar
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La anestesia de bolsillo: Por qué el móvil es el mayor mecanismo de evitación emocional
          </h1>
          <p className="text-gray-600 text-sm">Por Melania • 28 Agosto 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Termina el día. Te sientas en el sofá, agotado/a, con la intención de ver una película o simplemente descansar. Pero, sin darte cuenta, tu mano ya ha cogido el móvil. Abres una aplicación, luego
