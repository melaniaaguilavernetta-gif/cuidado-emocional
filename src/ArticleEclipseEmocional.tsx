import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleEclipseEmocional() {
  useEffect(() => {
    document.title = 'Eclipse emocional: qué es y cómo recuperar tu claridad | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre qué es un eclipse emocional, por qué el miedo y la ansiedad nublan tu bienestar y cómo gestionarlo con TCC y PNL. Terapia en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/eclipse-emocional');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Autoestima y Autoconocimiento
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El "Eclipse Emocional": Qué hacer cuando la ansiedad oculta tu claridad
          </h1>
          <p className="text-gray-600 text-sm">Por Melania • 12 Agosto 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Un eclipse lunar es uno de los fenómenos más fascinantes que podemos observar. Durante unas horas, la sombra de la Tierra se interpone en el camino de la luz, dejando a la luna en la oscuridad. Sin embargo, todos sabemos una gran verdad: <strong>la luna no ha desaparecido, ni ha perdido su capacidad de brillar.</strong> Solo está temporalmente oculta.
          </p>
          <p>
            En nuestra vida diaria, y especialmente en nuestra salud mental, experimentamos un fenómeno exactamente igual al que, en consulta, me gusta llamar el <em>"eclipse emocional"</em>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            ¿Qué es un Eclipse Emocional?
          </h2>
          <p>
            Un eclipse emocional ocurre cuando tus miedos, la ansiedad, la tristeza o una etapa de estrés intenso se interponen entre tú y tu claridad mental. De repente, sientes que has perdido el rumbo, que tu autoestima se ha apagado o que ya no eres la persona segura y capaz que eras antes.
          </p>
          <p>
            Cuando estás dentro de ese eclipse, todo parece más oscuro, más difícil y más definitivo de lo que realmente es. Tu mente tiende a generalizar y a convencerte de que ese malestar es permanente.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Al igual que ocurre con la luna, estar atravesando un momento difícil no significa que hayas perdido tus recursos, tu valía o tu luz. Simplemente hay una sombra temporal tapándola.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo atravesar la sombra con TCC y PNL
          </h2>
          <p>
            Querer que el eclipse desaparezca a la fuerza suele aumentar la frustración. La clave está en aprender a transitar el momento con herramientas que te ayuden a recuperar la perspectiva:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Separar el síntoma de tu identidad (TCC)
          </h3>
          <p>
            Desde la Terapia Cognitivo-Conductual, trabajamos para que no te conviertas en tu ansiedad o en tu tristeza. Una cosa es sentir angustia hoy y otra muy distinta creerte que eres una persona rota o incapaz. Cuestionar esos pensamientos catastróficos devuelve objetividad a tu mente.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Reconectar con tus recursos (PNL)
          </h3>
          <p>
            Con la Programación Neurolingüística (PNL), recordamos y activamos momentos pasados en los que sí supiste resolver dificultades. Volver a conectar con esos recursos internos ayuda a que la sombra no ocupe todo tu campo de visión.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            La sombra siempre pasa
          </p>
          <p>
            No necesitas tener todas las respuestas hoy ni obligarte a estar bien de golpe. Solo necesitas recordar que lo que sientes ahora es temporal y que puedes pedir apoyo para atravesarlo con mayor calma.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera tu claridad emocional
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que una nube de ansiedad o cansancio te está impidiendo ver con claridad, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) podemos acompañarte paso a paso para recuperar tu estabilidad.
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
