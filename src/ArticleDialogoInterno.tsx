import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleDialogoInterno() {
  useEffect(() => {
    document.title = 'Diálogo interno: cómo reprogramar tu voz crítica | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre cómo silenciar la autocrítica y mejorar tu autoestima con 3 pasos prácticos de TCC y PNL. Terapia presencial en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/dialogo-interno');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100">
          {/* Enlace para volver */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              ← Volver al inicio
            </a>
          </div>

          {/* Categoría */}
          <p className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Crecimiento Personal
          </p>

          {/* Título principal */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Le hablarías a un amigo como te hablas a ti mismo/a? Cómo reprogramar tu voz crítica
          </h1>

          {/* Autor y Fecha */}
          <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-100">
            Por Melania • 31 Julio 2026
          </p>

          {/* Contenido del artículo */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Si un buen amigo acudiera a ti después de cometer un error en el trabajo, fracasar en un proyecto o tener un mal día, ¿qué le dirías? Seguramente le ofrecerías palabras de consuelo, le recordarías sus fortalezas y le ayudarías a buscar una solución. Le tratarías con paciencia, empatía y respeto.
            </p>

            <p>
              Sin embargo, cuando el que se equivoca eres tú, el discurso suele cambiar drásticamente. Nuestro diálogo interno a veces puede ser nuestro peor enemigo, transformándose en un juez implacable que nos castiga con frases como: "Eres un desastre", "Siempre lo haces todo mal" o "Nunca vas a conseguirlo".
            </p>

            <p className="font-medium text-gray-900">
              La pregunta que debemos hacernos es: Si no permitirías que nadie le hablara así a las personas que quieres, ¿por qué te permites hablarte así a ti mismo/a?
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              El desgaste silencioso de la autocrítica
            </h2>
            <p>
              Normalizamos tratarnos con dureza porque, erróneamente, creemos que esa exigencia nos hará mejorar, ser más responsables o no repetir errores. Pero la ciencia y la psicología nos demuestran exactamente lo contrario.
            </p>
            <p>
              Cuando esa voz crítica toma el control, nuestro cerebro lo interpreta como una amenaza real. Esto provoca que la ansiedad, el estrés y la inseguridad se disparen. Vivir bajo el asedio constante de tu propia mente:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Alimenta el síndrome del impostor.</li>
              <li>Paraliza tu capacidad para tomar decisiones.</li>
              <li>Destruye tu autoestima y tu seguridad personal.</li>
              <li>Consume una cantidad enorme de energía mental, dejándote agotado/a.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Cómo cambiar el guion: El enfoque de la TCC y la PNL
            </h2>
            <p>
              La buena noticia es que no tienes que vivir en guerra con tu propia mente. Tu diálogo interno es un hábito aprendido y, como cualquier hábito, se puede desaprender y reprogramar.
            </p>
            <p>
              En Cuidado Emocional, uno de los trabajos más transformadores que hacemos en consulta es abordar este "machaque" interno combinando dos herramientas muy potentes:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>La Terapia Cognitivo-Conductual (TCC):</strong> Nos ayuda a identificar esos pensamientos automáticos y distorsionados (las generalizaciones como el "siempre" o el "nunca") para cuestionar su veracidad. Aprendemos a debatir con ese juez interno utilizando la lógica y la evidencia, no el miedo.
              </li>
              <li>
                <strong>La Programación Neurolingüística (PNL):</strong> Nos permite entender el poder que tienen las palabras que elegimos para describir nuestra realidad. Con la PNL, creamos nuevos "anclajes" y modificamos la estructura de tu lenguaje interno para que empiece a trabajar a tu favor, no en tu contra.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              3 Pasos prácticos para empezar a mejorar tu diálogo interno hoy
            </h2>
            <p>
              Si quieres empezar a calmar esa voz crítica, te propongo que pongas en práctica estas tres herramientas:
            </p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Pasa el "Filtro del Amigo":</strong> La próxima vez que te sorprendas hablándote mal tras un error, haz una pausa. Escribe lo que te estás diciendo y léelo en voz alta. ¿Se lo dirías a tu mejor amigo/a? Si la respuesta es no, reformula la frase de inmediato con el mismo tono que usarías con esa persona.
              </li>
              <li>
                <strong>Cambia el juicio por curiosidad:</strong> En lugar de decir "Qué inútil soy, me he vuelto a equivocar", prueba a decir "Vaya, esto no ha salido como esperaba. ¿Qué ha fallado y qué puedo aprender de esto para la próxima vez?". La curiosidad abre puertas; el juicio las cierra.
              </li>
              <li>
                <strong>Elimina los absolutos:</strong> Las palabras "siempre", "nunca", "todo" o "nada" son trampas cognitivas. Cambia el "Siempre lo hago mal" por "Hoy he cometido un error específico en esta tarea". Acotar el problema reduce drásticamente la ansiedad.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              No tienes que hacerlo solo/a
            </h2>
            <p>
              Aprender a ser amable con uno mismo cuando llevas años siendo tu peor crítico requiere tiempo, práctica y, a menudo, acompañamiento profesional. Tratarte con autocompasión no significa ser conformista ni dejar de mejorar; significa darte el impulso necesario para avanzar desde la calma y la seguridad, no desde el castigo.
            </p>

            <div className="bg-emerald-50 rounded-2xl p-6 mt-8 border-l-4 border-emerald-600">
              <p className="font-semibold text-gray-900 mb-2">
                📍 Da el primer paso hacia tu bienestar mental:
              </p>
              <p className="mb-4">
                Si sientes que tu nivel de autoexigencia te está pasando factura y necesitas ayuda para desenredar esos nudos mentales, en Cuidado Emocional tienes un espacio seguro para empezar a hacerlo. Ya sea en mi consulta presencial en Girona o a través de terapia online, estoy aquí para acompañarte a recuperar el control de tu bienestar.
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
              aria-labelledby="relacionados-dialogo"
              className="mt-14 pt-10 border-t border-gray-200"
            >
              <h2 id="relacionados-dialogo" className="text-2xl font-bold text-gray-900 mb-3">
                Artículos relacionados para seguir profundizando
              </h2>
              <p className="text-gray-700 mb-6">
                Cambiar la forma en que te hablas es más sencillo cuando entiendes de dónde viene esa exigencia y cómo afecta a tu mente y a tu cuerpo:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li>
                  <a
                    href="/invalidacion-emocional"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Autoestima y Autoconocimiento
                    </span>
                    <span className="font-semibold text-gray-900">
                      El daño de ser "demasiado sensible" →
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
                      El bucle de sobrepensar →
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/somatizacion"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Bienestar Físico y Emocional
                    </span>
                    <span className="font-semibold text-gray-900">
                      Entendiendo la somatización →
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/adiccion-movil"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Hábitos y Bienestar
                    </span>
                    <span className="font-semibold text-gray-900">
                      La anestesia de bolsillo: adicción al móvil →
                    </span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
