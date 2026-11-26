import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleAnsiedad() {
  useEffect(() => {
    document.title = 'Cómo calmar la ansiedad en el trabajo | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Aprende a calmar la ansiedad laboral con herramientas prácticas de gestión emocional y TCC. Terapia presencial en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/ansiedad-trabajo');
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
            Cómo calmar la ansiedad en el trabajo: 5 técnicas prácticas
          </h1>
          <p className="text-gray-600 text-sm">Por Melania • 30 Julio 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            ¿Sientes un nudo en el estómago cada domingo por la tarde al pensar en la oficina?
          </p>
          <p>
            En este artículo te enseño cómo calmar la ansiedad en el trabajo usando herramientas de gestión emocional, Terapia Cognitivo-Conductual (TCC) y Programación Neurolingüística (PNL) que puedes aplicar sin moverte de tu silla.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Técnicas para gestionar la ansiedad
          </h2>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
1. La respiración táctica o de "caja"
          </h3>
          <p>
            Consiste en inhalar durante 4 segundos, aguantar 4 segundos, exhalar en 4 y mantener los pulmones vacíos otros 4. Repite este ciclo 5 veces para bajar la activación fisiológica cuando notes presión en el pecho o aceleración.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
2. Descarga mental en dos columnas (TCC)
          </h3>
          <p>
            Cuando el correo y las urgencias te saturan, anota en una columna lo que te preocupa y en la otra qué acción concreta depende de ti en los próximos 30 minutos. Separar hechos de suposiciones reduce el bloqueo.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
3. Anclaje de calma antes de una reunión (PNL)
          </h3>
          <p>
            Haz una pausa de 10 segundos antes de entrar a una llamada o reunión tensa, apoya ambos pies en el suelo y asocia una postura erguida y tranquila con un momento previo en el que resolviste un reto con solvencia.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
4. Poner límites realistas en los plazos
          </h3>
          <p>
            La ansiedad laboral suele dispararse al aceptar todo como urgente. Reformular un <em>"no llego"</em> por una propuesta clara de prioridades y tiempos protege tu energía sin perder profesionalidad.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
5. Corte ritualizado de la jornada
          </h3>
          <p>
            Para no llevarte la oficina a casa o arruinarte el domingo, cierra pestañas, anota en tres líneas qué queda pendiente para mañana y haz una transición física breve (un paseo, cambiarte de ropa o desconectar notificaciones) que marque el fin del turno.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-gray-700 mb-6">
              Si el estrés o la presión laboral te acompañan cada día, en <strong>Cuidado Emocional</strong> (presencial en Girona y online) podemos trabajar herramientas de TCC y PNL adaptadas a tu ritmo.
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

          <section
            aria-labelledby="relacionados-ansiedad"
            className="mt-14 pt-10 border-t border-gray-200 not-prose"
          >
            <h2 id="relacionados-ansiedad" className="text-2xl font-bold text-gray-900 mb-3">
              Artículos relacionados para seguir profundizando
            </h2>
            <p className="text-gray-700 mb-6">
              La sobrecarga mental y el estrés sostenido suelen reflejarse en los pensamientos, el sueño o el cuerpo. Estas lecturas pueden ayudarte a seguir cuidándote:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li>
                <a
                  href="/sobrepensar"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Gestión Mental y Ansiedad
                  </span>
                  <span className="font-semibold text-gray-900">
                    El bucle de sobrepensar →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/cuando-ir-a-terapia"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Acompañamiento Emocional
                  </span>
                  <span className="font-semibold text-gray-900">
                    Cuándo ir a terapia: señales clave →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/insomnio"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Descanso y Bienestar
                  </span>
                  <span className="font-semibold text-gray-900">
                    Insomnio y ansiedad nocturna →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/dialogo-interno"
                  className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Crecimiento Personal
                  </span>
                  <span className="font-semibold text-gray-900">
                    Reprogramar tu voz crítica →
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
