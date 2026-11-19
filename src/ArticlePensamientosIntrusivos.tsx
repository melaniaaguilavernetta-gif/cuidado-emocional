import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticlePensamientosIntrusivos() {
  useEffect(() => {
    document.title = 'Pensamientos intrusivos: qué son y cómo gestionarlos | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre qué son los pensamientos intrusivos, por qué aparecen con la ansiedad y cómo superarlos con herramientas de TCC y PNL. Terapia en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Ansiedad Severa y Fobias
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cuando tu propia mente te aterroriza: El sufrimiento de los pensamientos intrusivos
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 26 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Existe un nivel de ansiedad del que rara vez se habla en las redes sociales. No es el estrés por el trabajo ni los nervios antes de una reunión. Es un terror profundo, silencioso y paralizante que ocurre en la intimidad de tu propia cabeza:
