import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleEclipseEmocional() {
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
          <p className="text-gray-500 text-sm">Por Melania • 12 Agosto 2026</p>
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
            Un eclipse emocional ocurre cuando tus miedos, la ansiedad, o una racha de estrés crónico se interponen entre tú y tu verdadera esencia. De repente, dejas de ver todo lo bueno que hay en ti. 
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Tu <strong>juez interno</strong> toma el control y oculta tus logros (el famoso Síndrome del Impostor).</li>
            <li>La <strong>ansiedad</strong> nubla tu capacidad de tomar decisiones lógicas.</li>
            <li>El <strong>estrés</strong> oscurece tu paciencia y tu empatía con los demás.</li>
          </ul>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            El mayor peligro del eclipse emocional no es la oscuridad en sí, sino <strong>creer que ese estado es permanente</strong>. Cuando estás en medio de una crisis, tu cerebro te convence de que esa sombra es tu nueva realidad y de que nunca volverás a sentirte bien.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo despejar la sombra con TCC y PNL
          </h2>
          <p>
            Al igual que en la astronomía, no podemos evitar que a veces las cosas se alineen de forma compleja en nuestra vida. Pero a diferencia de los planetas, nosotros sí tenemos el poder de mover la sombra mucho más rápido si utilizamos las herramientas adecuadas.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Identifica la sombra (Terapia Cognitivo-Conductual)
          </h3>
          <p>
            El primer paso es usar la TCC para encender la luz de la lógica. Cuando te sientas "eclipsado/a", cuestiona tus pensamientos. Si tu mente te dice <em>"Todo me sale mal, soy un desastre"</em>, busca pruebas objetivas. Verás que esa afirmación es solo una distorsión cognitiva (una sombra), no una verdad absoluta.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Cambia el lenguaje del miedo (PNL)
          </h3>
          <p>
            A través de la Programación Neurolingüística, modificamos cómo te comunicas contigo mismo/a durante la crisis. Pasamos del <em>"estoy atrapado en esto"</em> al <em>"estoy atravesando una fase de estrés temporal"</em>. La palabra "atravesar" le indica a tu sistema nervioso que hay movimiento y que la luz volverá.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tu esencia sigue intacta
          </p>
          <p>
            La próxima vez que sientas que la tristeza, el miedo o la ansiedad lo cubren todo, recuerda la metáfora del eclipse. Tus capacidades, tu valía y tu capacidad de estar en calma siguen exactamente en el mismo sitio. Solo tienes que esperar a que pase la sombra, o mejor aún, aprender a despejarla.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera tu claridad emocional
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que llevas demasiado tiempo en la sombra de la ansiedad o el autosabotaje, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) tienes las herramientas para volver a brillar.
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
