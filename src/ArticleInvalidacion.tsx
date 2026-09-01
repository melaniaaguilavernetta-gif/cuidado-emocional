import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleInvalidacion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Autoestima y Autoconocimiento
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El daño de ser "demasiado sensible": Cómo la invalidación emocional destruye tu seguridad
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 1 Septiembre 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            <em>"No es para tanto", "le das demasiadas vueltas a todo", "ya estás dramatizando otra vez"</em>. Si has escuchado estas frases a lo largo de tu vida, es muy probable que hayas acabado creyendo que hay algo roto dentro de ti y que tus emociones son, en el fondo, un error.
          </p>
          <p>
            A esto se le llama <strong>invalidación emocional</strong>, y es uno de los mecanismos psicológicos más destructivos y normalizados que existen. No siempre se hace desde la maldad; a veces, las personas de nuestro entorno no saben sostener nuestro malestar y prefieren "apagarlo" rápido minimizando lo que sentimos.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El cortocircuito en tu cerebro
          </h2>
          <p>
            Tus emociones funcionan como el panel de mandos de un coche: te avisan de que un límite ha sido cruzado (enfado), de que has perdido algo valioso (tristeza) o de que hay un peligro (miedo). Pero, ¿qué pasa si cada vez que se enciende una luz en tu panel, alguien te dice que esa luz está equivocada?
          </p>
          <p>
            Lo que ocurre es que <strong>dejas de confiar en tu propio panel de mandos</strong>. Empiezas a hacer "gaslighting" contigo mismo/a.
          </p>
          
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            La consecuencia más grave de la invalidación es la duda crónica. Te pasas la vida preguntándole a los demás si tienes derecho a estar molesto o triste por algo, porque has perdido por completo la confianza en tu propio criterio.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo recuperar tu brújula interna con TCC y PNL
          </h2>
          <p>
            Sanar la invalidación no consiste en "dejar de ser sensible", sino en aprender a ser tu principal fuente de validación. 
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Reestructuración de la voz crítica (TCC)
          </h3>
          <p>
            A través de la Terapia Cognitivo-Conductual identificamos esa voz interna que has heredado y que te juzga cada vez que lloras o te estresas. Aprendemos a responderle con hechos objetivos: <em>"Tengo derecho a estar triste porque esto era importante para mí, independientemente de lo que piensen los demás"</em>.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Calibración emocional (PNL)
          </h3>
          <p>
            Utilizamos la PNL para volver a conectar cuerpo y mente. Si te han enseñado a desconectarte de lo que sientes, usamos técnicas de anclaje para que vuelvas a habitar tu cuerpo en un estado de seguridad. Aprenderás a reconocer la emoción, nombrarla y darle el espacio que merece sin que te desborde.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tus emociones tienen sentido
          </p>
          <p>
            No eres demasiado intenso/a, ni dramático/a. Eres un ser humano con un sistema nervioso reaccionando a un entorno. Volver a confiar en lo que sientes es el mayor acto de amor propio que puedes hacer.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ¿Listo/a para dejar de dudar de ti?
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que siempre necesitas la aprobación de los demás para saber si lo que sientes es correcto, en <strong>Cuidado Emocional</strong> trabajaremos juntos para reconstruir tu seguridad y tu identidad.
            </p>
            <button 
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Reserva tu sesión segura (Girona y Online)
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
