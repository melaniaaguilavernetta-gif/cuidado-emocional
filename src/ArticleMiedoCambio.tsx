import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleMiedoCambio() {
  useEffect(() => {
    document.title = 'Miedo al cambio: por qué nos paraliza y cómo superarlo | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre por qué nos aterra salir de la zona de confort y cómo superar el miedo al cambio y la incertidumbre con TCC y PNL. Terapia en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Crecimiento Personal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El vértigo de saltar: Por qué nos aterra el cambio (y cómo superarlo)
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 7 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Piensa por un momento en alguna decisión importante que hayas tomado a lo largo de tu vida: dejar una relación que ya no funcionaba, cambiar de ciudad, renunciar a un trabajo estable pero agotador, o simplemente poner un límite que lo cambió todo.
          </p>
          <p>
            Si haces memoria, recordarás que los días (o meses) previos a dar el paso estuvieron marcados por una ansiedad paralizante. Tu mente no dejaba de bombardearte con preguntas: <em>"¿Y si me equivoco?", "¿Y si termino peor de lo que estoy?", "¿Y si me arrepiento y ya no hay vuelta atrás?"</em>.
          </p>
          <p>
            Este miedo es tan poderoso que, a menudo, nos convence de quedarnos estancados en situaciones que nos hacen profundamente infelices. Pero, ¿por qué preferimos el malestar conocido antes que la posibilidad de estar mejor?
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            La trampa de "lo malo conocido"
          </h2>
          <p>
            La respuesta no está en que seas una persona insegura o cobarde, sino en cómo está programado tu cerebro.
          </p>
          <p>
            Nuestra mente es una máquina diseñada para garantizar nuestra supervivencia. Para cumplir su objetivo, necesita predecir lo que va a pasar. Cuando estás en tu zona de confort (incluso si esa zona implica estrés diario, tristeza o aburrimiento), tu cerebro sabe exactamente qué esperar. Sabe cómo gestionar ese dolor porque le resulta familiar.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Sin embargo, cuando te planteas un cambio, aparece la <strong>incertidumbre</strong>. Y para tu cerebro, la incertidumbre es sinónimo de
