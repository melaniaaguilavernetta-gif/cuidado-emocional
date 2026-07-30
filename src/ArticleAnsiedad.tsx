import { Header } from './Header';
import { Footer } from './Footer';

export function ArticleAnsiedad() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Gestión de la Ansiedad
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cómo calmar la ansiedad en el trabajo: 5 técnicas prácticas
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 30 Julio 2026</p>
        </div>
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            ¿Sientes un nudo en el estómago cada domingo por la tarde al pensar en la oficina?
          </p>
          <p>
            En este artículo te enseño cómo calmar la ansiedad en el trabajo usando herramientas de gestión emocional y Terapia Cognitivo-Conductual (TCC) que puedes aplicar sin moverte de tu silla.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Técnicas para gestionar la ansiedad
          </h2>
          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. La respiración táctica o de "caja"
          </h3>
          <p>
            Consiste en inhalar durante 4 segundos, aguantar 4 segundos, exhalar en 4 y mantener los pulmones vacíos otros 4. Repite este ciclo 5 veces.
          </p>
          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia tu bienestar
            </h2>
            <a href="/#contacto" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Reserva tu sesión online
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
