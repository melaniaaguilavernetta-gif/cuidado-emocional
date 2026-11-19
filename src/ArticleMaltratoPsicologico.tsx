import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleMaltratoPsicologico() {
  useEffect(() => {
    document.title = 'Maltrato psicológico: señales y cómo sanar el trauma | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Aprende a identificar las señales del maltrato psicológico y abuso emocional, y descubre cómo reconstruir tu identidad con TCC y PNL. Terapia en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Trauma
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El maltrato invisible: Cuando las heridas no se ven pero destruyen tu identidad
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 2 Septiembre 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Existe un gran mito en nuestra sociedad: creer que el maltrato solo es real si hay gritos ensordecedores o violencia física. Esta creencia es profundamente peligrosa porque invisibiliza a miles de personas que sufren <strong>abuso emocional y psicológico</strong> a diario, convenciéndolas de que "no tienen derecho a quejarse".
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            ¿Cómo se ve el maltrato psicológico?
          </h2>
          <p>
            El abuso emocional es insidioso. Funciona como un goteo lento que va erosionando tu autoestima hasta dejarte sin identidad. En la consulta, vemos patrones claros que indican que una relación es abusiva:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Gaslighting (Luz de gas):</strong> Manipulan la realidad para
