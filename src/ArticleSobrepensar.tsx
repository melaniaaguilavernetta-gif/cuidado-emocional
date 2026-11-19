import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleSobrepensar() {
  useEffect(() => {
    document.title = 'Sobrepensar (overthinking): cómo calmar la rumiación mental | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre por qué caes en el bucle de sobrepensar y cómo salir de la rumiación mental con TCC y PNL. Terapia presencial en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/sobrepensar');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Gestión Mental y Ansiedad
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El bucle de sobrepensar: Cuando analizarlo todo te agota en lugar de darte respuestas
          </h1>
          <p className="text-gray-600 text-sm">Por Melania • 18 Agosto 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Repasas una conversación de hace tres días buscando un doble sentido, imaginas cinco escenarios distintos antes de enviar un mensaje o das vueltas a una decisión durante horas hasta acostarte agotado/a sin haber resuelto nada.
          </p>
          <p>
            A esto le llamamos <strong>sobrepensar</strong> (o rumiación mental). Muchas veces lo confundimos con ser reflexivos o precavidos, pero hay una diferencia clave: reflexionar te acerca a una solución; sobrepensar te mantiene atrapado en el mismo círculo sin avanzar.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Por qué tu mente no sabe cuándo parar
          </h2>
          <p>
            Cuando sientes ansiedad o miedo a equivocarte, tu cerebro busca certeza. Cree que si analiza cada detalle con lupa podrá anticipar cualquier fallo o rechazo. El problema es que las emociones y las relaciones humanas no son matemáticas: por más vueltas que le des, nunca encontrarás una garantía absoluta.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Sobrepensar no evita el dolor ni el error; simplemente te hace sufrir por adelantado y consume la energía que necesitas para actuar.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo salir del bucle con TCC y PNL
          </h2>
          <p>
            Cortar la rumiación mental exige entrenar nuevos hábitos de atención y respuesta frente a tus pensamientos:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Detectar el pensamiento improductivo (TCC)
          </h3>
          <p>
            Con la Terapia Cognitivo-Conductual aprendes a distinguir entre un problema real con pasos concretos y un bucle mental estéril. Identificar la trampa de buscar certeza absoluta te ayuda a poner un límite consciente al análisis.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Cambiar el foco y regular el estado interno (PNL)
          </h3>
          <p>
            A través de la Programación Neurolingüística (PNL) trabajamos para interrumpir el giro repetitivo de imágenes y diálogos internos que disparan la ansiedad, devolviendo el foco a acciones sencillas del presente.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Menos vueltas en la cabeza, más pasos reales
          </p>
          <p>
            No necesitas tenerlo todo claro al cien por cien para avanzar. A veces basta con dar un paso pequeño y soltar el control excesivo.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Dale un respiro a tu mente
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que darle mil vueltas a las cosas te agota y te impide disfrutar o decidir con calma, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) podemos ayudarte a salir del bucle.
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
