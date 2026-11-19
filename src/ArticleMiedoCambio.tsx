import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleMiedoCambio() {
  useEffect(() => {
    document.title = 'Miedo al cambio: cómo superar la incertidumbre | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre por qué te paraliza el miedo al cambio y cómo avanzar con seguridad usando TCC y PNL. Terapia presencial en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/miedo-cambio');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Crecimiento y Transiciones Vitales
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El vértigo de lo desconocido: Por qué te paraliza el miedo al cambio
          </h1>
          <p className="text-gray-600 text-sm">Por Melania • 8 Agosto 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            A veces sabes perfectamente que algo en tu vida ya no te hace bien: un trabajo que te agota, una relación que se ha apagado, una rutina que te asfixia o una etapa que ya terminó. Sin embargo, cada vez que piensas en dar el paso, sientes un nudo en el estómago que te frena en seco.
          </p>
          <p>
            No es falta de valentía ni indecisión caprichosa. Es el <strong>miedo al cambio</strong> actuando como un freno de mano.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Por qué tu cerebro prefiere lo conocido (aunque duela)
          </h2>
          <p>
            Desde el punto de vista evolutivo, tu cerebro está diseñado para protegerte y ahorrar energía. Lo conocido, aunque resulte incómodo o insatisfactorio, es predecible: tu mente ya sabe qué esperar y cómo moverse en ese terreno.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Sin embargo, cuando te planteas un cambio, aparece la <strong>incertidumbre</strong>. Y para tu cerebro, la incertidumbre es sinónimo de amenaza, por lo que activa la alarma para empujarte de vuelta a lo familiar.
          </blockquote>

          <p>
            El resultado es quedarse atrapado en una zona cómoda que en realidad incomoda: aguantas más de lo que deberías porque dar el salto parece más aterrador que seguir ahí.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo dar pasos seguros con TCC y PNL
          </h2>
          <p>
            Superar el miedo al cambio no consiste en eliminarlo por completo antes de actuar, sino en aprender a avanzar a pesar de él con apoyos concretos:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Desmontar la catástrofe anticipada (TCC)
          </h3>
          <p>
            Con la Terapia Cognitivo-Conductual ponemos bajo la lupa esos escenarios extremos que imaginas (<em>"Si dejo esto, todo saldrá mal"</em>, <em>"No sabré afrontarlo"</em>). Evaluar probabilidades reales y planificar pequeños pasos reduce el bloqueo y te devuelve sensación de control.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Reenfocar el futuro y tus recursos (PNL)
          </h3>
          <p>
            A través de la Programación Neurolingüística (PNL) trabajamos para proyectar el cambio de forma más manejable y activar recursos internos que ya has utilizado en otras etapas difíciles de tu vida.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            No tienes que resolver toda tu vida de golpe
          </p>
          <p>
            A veces el cambio empieza simplemente reconociendo lo que necesitas y dando un primer paso pequeño, claro y a tu medida.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Acompaña tu cambio con calma y claridad
            </h2>
            <p className="text-gray-700 mb-6">
              Si estás atravesando una decisión importante o sientes que el miedo te impide avanzar hacia donde quieres estar, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) podemos trabajarlo juntos.
            </p>
            <button
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Reserva tu sesión hoy
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
