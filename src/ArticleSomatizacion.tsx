import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleSomatizacion() {
  useEffect(() => {
    document.title = 'Somatización emocional: qué es y cómo tratarla | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre qué es la somatización, por qué el estrés y las emociones reprimidas causan dolor físico y cómo tratarlo con TCC y PNL. Terapia en Girona y online.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Bienestar Físico y Emocional
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cuando tu cuerpo grita lo que tu boca calla: Entendiendo la somatización
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 10 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Es posible que lleves meses (o incluso años) lidiando con un dolor de cabeza recurrente, una tensión constante en las cervicales, problemas digestivos que no tienen explicación médica aparente o bruxismo severo por las noches.
          </p>
          <p>
            Vas al médico, te hacen pruebas, los resultados salen bien y te recetan un analgésico. El dolor desaparece temporalmente, pero a los pocos días, la molestia vuelve a estar ahí. Si este ciclo te resulta familiar, es muy probable que tu cuerpo esté intentando enviarte un mensaje que tu mente se niega a escuchar.
          </p>
          <p>
            A este fenómeno se le conoce como <strong>somatización</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El cuerpo como alarma de incendios
          </h2>
          <p>
            Solemos cometer el error de separar la mente del cuerpo, como si fueran dos entes independientes. Pero la conexión es absoluta. Cada vez que experimentas una emoción fuerte (como el enfado, el miedo o la ansiedad), tu cerebro segrega sustancias químicas que preparan a tu cuerpo para reaccionar.
          </p>
          <p>
            ¿Qué ocurre cuando reprimes esa reacción?
          </p>
