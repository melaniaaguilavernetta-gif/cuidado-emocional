import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleConvivencia() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Comunicación
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La sobredosis de convivencia: Por qué pedir espacio en vacaciones no significa quererse menos
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 14 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Llegamos al esperado mes de agosto con una lista infinita de ilusiones. Pasamos todo el invierno quejándonos de que apenas vemos a nuestra pareja, a nuestros hijos o a nuestros amigos por culpa del trabajo, así que cuando llegan las vacaciones, decretamos de forma inconsciente una norma muy peligrosa: <strong>vamos a aprovechar el tiempo haciéndolo absolutamente todo juntos.</strong>
          </p>
          <p>
            Al tercer día de bajar juntos a la playa, desayunar juntos, echar la siesta a la misma hora y no separarnos ni para ir a comprar el pan, algo hace clic. De repente, una frase inocente desencadena una discusión absurda. Aparecen los reproches, el mal humor y una sensación de agotamiento que nos hace sentir tremendamente culpables.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El mito del amor 24/7
          </h2>
          <p>
            En nuestra sociedad hemos romantizado la falta de límites. Creemos que una pareja o una familia "unida" es aquella que funciona como un bloque indisoluble. Sin embargo, la realidad de la naturaleza humana es muy distinta.
          </p>
          <p>
            Tu sistema nervioso necesita pausas. Necesita aburrimiento, silencio y, sobre todo, momentos donde no tengas que estar pendiente de las necesidades, los horarios o las preferencias de otra persona. A esa hiper-presencia la llamamos <strong>sobredosis de convivencia</strong>, y es la principal causa de rupturas y conflictos durante el mes de agosto.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            El fuego, para mantenerse encendido, necesita aire entre los troncos. Si los aprietas demasiado, la llama se ahoga y se apaga. Con las relaciones ocurre exactamente lo mismo: <strong>la distancia temporal da oxígeno.</strong>
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo proteger tus relaciones con TCC y PNL
          </h2>
          <p>
            El mayor obstáculo para tener un momento a solas no suele ser nuestra pareja o nuestra familia, sino nuestro propio <strong>diálogo interno y el miedo a ofender</strong>. Aquí es donde entran en juego nuestras herramientas terapéuticas.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Desmontar la culpa (Terapia Cognitivo-Conductual)
          </h3>
          <p>
            Con la TCC, aprendemos a cuestionar esos pensamientos automáticos que te dicen: <em>"Si le digo que me voy sola a pasear, pensará que estoy enfadada"</em> o <em>"Soy egoísta por querer estar sin mis hijos un par de horas"</em>. Identificar estas trampas mentales te permite entender que establecer un límite de espacio es un acto de responsabilidad, no de egoísmo.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Comunicación Asertiva (Programación Neurolingüística)
          </h3>
          <p>
            Con la PNL, reestructuramos el lenguaje para pedir espacio sin generar un conflicto. Si explotas por agotamiento, probablemente dirás: <em>"¡Dejadme en paz, me tenéis harto!"</em>. Esto genera un mecanismo de defensa en el otro. En consulta, te enseño a transformar esa necesidad en una afirmación constructiva: <em>"Me está encantando el día, pero ahora mismo necesito una horita a solas para leer y recargar pilas. Nos vemos en la comida".</em>
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tus vacaciones son para descansar (también de los demás)
          </p>
          <p>
            No esperes a estar al límite de tu paciencia para reclamar tu espacio. Atrévete a soltar la presión de las vacaciones perfectas y prioriza tu paz mental. 
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Aprende a comunicarte sin culpa
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que la falta de límites y la dificultad para ser asertivo/a te están pasando factura en tus relaciones, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) podemos trabajar juntos para recuperar tu equilibrio.
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
