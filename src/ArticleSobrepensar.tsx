import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleSobrepensar() {
  useEffect(() => {
    document.title = 'Cómo dejar de sobrepensar y frenar la rumiación mental | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre qué es la rumiación mental o overthinking y cómo romper el bucle de sobrepensar con herramientas de TCC y PNL. Terapia en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Gestión de la Ansiedad
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La trampa de sobrepensar: Por qué darle mil vueltas a todo no te ayuda a decidir mejor
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 19 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-
