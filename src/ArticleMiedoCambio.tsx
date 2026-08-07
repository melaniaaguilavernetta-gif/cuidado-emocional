import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleMiedoCambio() {
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
            Sin embargo, cuando te planteas un cambio, aparece la <strong>incertidumbre</strong>. Y para tu cerebro, la incertidumbre es sinónimo de peligro. Ante la falta de información, tu mente se pone en lo peor para intentar protegerte, generando escenarios catastróficos que rara vez llegan a cumplirse.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El alto precio de no cambiar
          </h2>
          <p>
            Cedemos ante el miedo creyendo que, al no movernos, estamos "a salvo". Pero la realidad es que quedarse quieto también tiene consecuencias.
          </p>
          <p>
            Permanecer en un entorno que ya no te aporta nada erosiona lentamente tu autoestima. Empiezas a dudar de tus capacidades, te desconectas de tus ilusiones y terminas normalizando el malestar. A largo plazo, el dolor de quedarte donde no cabes acaba siendo mucho mayor que el miedo temporal que supone dar el salto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo enseñarle a tu mente a soltar el control
          </h2>
          <p>
            No podemos apagar el miedo al cambio por completo (es una emoción natural), pero sí podemos aprender a gestionarlo para que deje de tomar las decisiones por nosotros.
          </p>
          <p>
            En Cuidado Emocional, abordamos este bloqueo utilizando dos metodologías muy prácticas:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Cuestionar el catastrofismo (TCC)
          </h3>
          <p>
            A través de la Terapia Cognitivo-Conductual, aprendemos a detectar esos pensamientos de "todo va a salir mal". Te enseñaré a debatir con tu propio miedo, exigiéndole pruebas reales y preparándote no solo para el peor escenario, sino también para el mejor (¿y si sale bien?).
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Reprogramar tus anclajes de seguridad (PNL)
          </h3>
          <p>
            Con la Programación Neurolingüística, descubrimos que la seguridad no está en el trabajo que tienes ni en el lugar donde vives, sino en tus propios recursos internos. Cambiamos el diálogo de <em>"no seré capaz de soportarlo"</em> a <em>"tengo la capacidad de adaptarme a lo que venga"</em>.
          </p>
          
          <p className="font-medium text-gray-900 mt-8 text-xl">
            Mereces algo mejor que "aguantar"
          </p>
          <p>
            El cambio siempre genera vértigo porque implica soltar una certeza para agarrar una posibilidad. Pero recuerda: no estás hecho/a para simplemente "aguantar" en lugares que te apagan.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que el miedo te tiene paralizado/a y necesitas herramientas para dar ese paso que llevas tanto tiempo posponiendo, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) tienes un espacio seguro para prepararte.
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
