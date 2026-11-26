import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleCuandoIrATerapia() {
  useEffect(() => {
    document.title = 'Cuándo ir a terapia: señales y cómo dar el paso | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre cuándo empezar terapia sin esperar a tocar fondo y qué esperar con TCC y PNL. Acompañamiento presencial en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/cuando-ir-a-terapia');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Acompañamiento Emocional
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cuándo ir a terapia: señales de que es buen momento para pedir apoyo
          </h1>
          <p className="text-gray-600 text-sm">Cuidado Emocional • Noviembre 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            No hace falta estar "al límite" ni tener todas las respuestas claras para iniciar un proceso terapéutico.
          </p>
          <p>
            Muchas personas posponen pedir ayuda porque piensan que su malestar no es lo bastante grave o porque sienten que deberían poder resolverlo solas. En <strong>Cuidado Emocional</strong> trabajamos con Terapia Cognitivo-Conductual (TCC) y Programación Neurolingüística (PNL) para ofrecer un espacio claro, práctico y sin juicios.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Señales habituales de que puede ayudarte empezar ahora
          </h2>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Sientes que tu mente no descansa ni en tus ratos libres
          </h3>
          <p>
            Cuando las preocupaciones, los escenarios hipotéticos o las tareas pendientes te acompañan incluso al descansar, contar con herramientas estructuradas ayuda a cortar los bucles mentales antes de que agoten tu energía.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Repites los mismos patrones en relaciones o decisiones
          </h3>
          <p>
            Si notas que vuelves una y otra vez al mismo tipo de conflicto, a ceder por compromiso o a bloquearte ante cambios importantes, revisar tus creencias y automatismos desde la TCC y la PNL permite actuar con mayor libertad.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            3. El cansancio emocional pesa más que antes
          </h3>
          <p>
            No siempre se manifiesta como una crisis evidente: a veces aparece como irritabilidad, desconexión, falta de ilusión o la sensación de sostener demasiado por dentro mientras por fuera sigues cumpliendo.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            4. Quieres prevenir en lugar de esperar a tocar fondo
          </h3>
          <p>
            Pedir acompañamiento en una etapa de transición, estrés laboral o duda vital es una forma de cuidado preventivo: ordenas lo que estás viviendo y adquieres recursos estables antes de que el desgaste sea mayor.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            5. Qué ocurre en las primeras sesiones
          </h3>
          <p>
            No tienes que saber cómo explicarlo todo perfectamente. En las primeras sesiones exploramos qué te preocupa hoy, qué objetivos son realistas para ti y qué estrategias de TCC y PNL encajan mejor con tu ritmo, tanto de forma presencial en Girona como online.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que ha llegado el momento de ordenar lo que te pesa, en <strong>Cuidado Emocional</strong> (presencial en Girona y online) te acompaño paso a paso con herramientas prácticas de TCC y PNL.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => {
                  sessionStorage.setItem('scrollToContact', 'true');
                  window.location.href = '/';
                }}
                className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                Reserva tu sesión hoy
              </button>
              <a
                href="/terapia-girona"
                className="inline-block bg-white text-emerald-800 border border-emerald-600 font-medium px-5 py-3 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                Terapia en Girona →
              </a>
              <a
                href="/terapia-online"
                className="inline-block bg-white text-emerald-800 border border-emerald-600 font-medium px-5 py-3 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                Terapia online →
              </a>
            </div>
          </div>

          <section
            aria-labelledby="relacionados-cuando-ir"
            className="mt-14 pt-10 border-t border-gray-200 not-prose"
          >
            <h2 id="relacionados-cuando-ir" className="text-2xl font-bold text-gray-900 mb-3">
              Artículos relacionados para seguir profundizando
            </h2>
            <p className="text-gray-700 mb-6">
              Si quieres explorar cómo se expresa el malestar en el día a día y qué herramientas puedes empezar a conocer, estas lecturas te pueden orientar:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li>
                <a
                  href="/ansiedad-trabajo"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Gestión de la Ansiedad
                  </span>
                  <span className="font-semibold text-gray-900">
                    Cómo calmar la ansiedad en el trabajo →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/sobrepensar"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Gestión Mental y Ansiedad
                  </span>
                  <span className="font-semibold text-gray-900">
                    Cómo dejar de sobrepensar →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/falsos-limites"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Relaciones y Límites
                  </span>
                  <span className="font-semibold text-gray-900">
                    Límites sanos vs. evitación →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/dependencia"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Relaciones y Vínculos
                  </span>
                  <span className="font-semibold text-gray-900">
                    Dependencia emocional →
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
