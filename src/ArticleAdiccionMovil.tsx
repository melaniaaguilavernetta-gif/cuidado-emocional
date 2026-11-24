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
            Termina el día. Te sientas en el sofá, agotado/a, con la intención de ver una película o simplemente descansar. Pero, sin darte cuenta, tu mano ya ha cogido el móvil. Abres una aplicación, luego otra, deslizas la pantalla sin prestar atención real a nada y, cuando miras el reloj, han pasado 45 minutos. Te sientes más cansado/a que antes y, además, culpable.
          </p>
          <p>
            Solemos culpar a nuestra "falta de fuerza de voluntad" o a lo adictivas que son las redes sociales. Y aunque los algoritmos están diseñados para retenernos, en psicología clínica abordamos este problema desde otra perspectiva mucho más profunda: el móvil se ha convertido en nuestro principal <strong>mecanismo de evitación</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El chupete emocional de los adultos
          </h2>
          <p>
            Desde la <strong>Terapia Cognitivo-Conductual (TCC)</strong>, analizamos la función que cumple una conducta. Cuando coges el teléfono de forma automática en la cola del supermercado, en el ascensor o antes de dormir, rara vez lo haces buscando información útil. Lo haces porque tu cerebro no tolera la incomodidad del momento.
          </p>
          <p>
            Usamos el móvil para no sentir. Lo usamos para anestesiar el aburrimiento, para tapar la ansiedad social, para silenciar la rumiación de nuestros pensamientos y para no enfrentarnos al vacío. Es una vía de escape rápida que nos inyecta pequeñas dosis de dopamina, adormeciendo temporalmente el malestar.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            El problema de anestesiar lo negativo es que también anestesias lo positivo. Pierdes tu capacidad de atención, tu conexión con el momento presente y tu capacidad para disfrutar de las cosas simples sin sobreestimulación.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo romper el anclaje con TCC y PNL
          </h2>
          <p>
            No se trata de demonizar la tecnología ni de irte a vivir al bosque sin wifi. Se trata de pasar de un uso <em>automático</em> a un uso <em>consciente</em>.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Crear fricción (TCC)
          </h3>
          <p>
            Tu cerebro es vago y busca el camino más fácil. Si el móvil está en tu mesita de noche, lo cogerás. Si tienes las notificaciones activadas, las mirarás. En terapia, trabajamos el rediseño de tu entorno: poner el móvil a cargar en otra habitación o usar modos de concentración. Al crear fricción, rompemos la cadena automática del hábito y obligamos a tu cerebro a tomar una decisión consciente.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. La pausa consciente y el diálogo interno (PNL)
          </h3>
          <p>
            El gesto de coger el móvil ante el estrés es un "anclaje" (una respuesta automática ante un estímulo). Con la Programación Neurolingüística (PNL), entrenamos la capacidad de introducir una pausa de tres segundos antes de desbloquear la pantalla. En esa pausa, aprendemos a preguntarnos: <strong>"¿Qué emoción estoy intentando evitar ahora mismo?"</strong>. Reconocer que estás ansioso o aburrido te devuelve el control.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tu atención es tu vida
          </p>
          <p>
            Aquello a lo que le prestas atención se convierte en tu realidad. No dejes que una pantalla decida por ti en qué inviertes los minutos de tu vida.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera el control de tu tiempo y tu mente
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que la necesidad de estar conectado/a te genera ansiedad, insomnio o te desconecta de tu propia vida, en <strong>Cuidado Emocional</strong> podemos ayudarte a reconstruir hábitos saludables y aprender a sostener tus emociones sin huir.
            </p>
            <button
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Reserva tu sesión hoy (Girona y Online)
            </button>
          </div>

          <section
            aria-labelledby="relacionados-movil"
            className="mt-14 pt-10 border-t border-gray-200 not-prose"
          >
            <h2 id="relacionados-movil" className="text-2xl font-bold text-gray-900 mb-3">
              Artículos relacionados para seguir profundizando
            </h2>
            <p className="text-gray-700 mb-6">
              Cuando dejas de usar la pantalla como distracción momentánea, es habitual que afloren pensamientos o cansancio acumulado. Estas lecturas pueden acompañarte en ese proceso:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li>
                <a
                  href="/sobrepensar"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Gestión mental
                  </span>
                  <span className="font-semibold text-gray-900">
                    Cómo dejar de sobrepensar →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/depresion-sonriente"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Bienestar
                  </span>
                  <span className="font-semibold text-gray-900">
                    Depresión sonriente →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/insomnio"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Descanso
                  </span>
                  <span className="font-semibold text-gray-900">
                    Insomnio y ansiedad nocturna →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/somatizacion"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Cuerpo y mente
                  </span>
                  <span className="font-semibold text-gray-900">
                    Somatización del estrés →
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
