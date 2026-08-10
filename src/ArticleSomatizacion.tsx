import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleSomatizacion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Bienestar Físico y Emocional
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cuando tu cuerpo grita lo que tu boca calla: Entendiendo la somatización
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 10 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Es posible que lleves meses (o incluso años) lidiando con un dolor de cabeza recurrente, una tensión constante en las cervicales, problemas digestivos que no tienen explicación médica aparente o bruxismo severo por las noches.
          </p>
          <p>
            Vas al médico, te hacen pruebas, los resultados salen bien y te recetan un analgésico. El dolor desaparece temporalmente, pero a los pocos días, la molestia vuelve a estar ahí. Si este ciclo te resulta familiar, es muy probable que tu cuerpo esté intentando enviarte un mensaje que tu mente se niega a escuchar.
          </p>
          <p>
            A este fenómeno se le conoce como <strong>somatización</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El cuerpo como alarma de incendios
          </h2>
          <p>
            Solemos cometer el error de separar la mente del cuerpo, como si fueran dos entes independientes. Pero la conexión es absoluta. Cada vez que experimentas una emoción fuerte (como el enfado, el miedo o la ansiedad), tu cerebro segrega sustancias químicas que preparan a tu cuerpo para reaccionar.
          </p>
          <p>
            ¿Qué ocurre cuando reprimes esa reacción?
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Cuando te callas una opinión por miedo al conflicto.</li>
            <li>Cuando no dices "NO" a un favor que te sobrepasa.</li>
            <li>Cuando te tragas la tristeza para aparentar ser "fuerte" ante los demás.</li>
          </ul>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Esa energía y tensión no se evaporan por arte de magia. Al no encontrar una salida a través de las palabras o la expresión emocional, se acumulan en tu organismo. Tu cuerpo actúa entonces como una alarma de incendios. <strong>Tu cuerpo grita lo que tu boca calla.</strong>
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            No puedes curar con pastillas la falta de límites
          </h2>
          <p>
            Tratar un síntoma somático únicamente con analgésicos es como apagar la luz roja de alerta del coche en el salpicadero sin revisar el motor. Te dará tranquilidad un rato, pero el problema de fondo sigue existiendo.
          </p>
          <p>
            Para sanar de verdad, necesitamos ir a la raíz del conflicto emocional. En Cuidado Emocional, utilizamos un enfoque terapéutico altamente efectivo combinando dos disciplinas:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Gestión emocional y límites (Terapia Cognitivo-Conductual)
          </h3>
          <p>
            Trabajamos para identificar qué situaciones están disparando tu estrés de forma silenciosa. A menudo, detrás de la somatización se esconde el <em>Síndrome del Salvador</em> o el miedo a decepcionar a otros. Te enseñaré herramientas prácticas de asertividad para que aprendas a poner límites. Cuando empiezas a expresar lo que necesitas, la tensión física disminuye drásticamente.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Reeducación del sistema nervioso (PNL)
          </h3>
          <p>
            Tu cuerpo se ha acostumbrado a vivir en "modo alerta". A través de la Programación Neurolingüística (PNL), creamos nuevos anclajes de relajación. Reprogramamos la forma en la que te hablas a ti mismo/a frente a los problemas, enviando señales claras a tu sistema nervioso de que es seguro bajar la guardia y relajar la musculatura.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Empieza a escuchar a tu cuerpo
          </p>
          <p>
            El dolor físico muchas veces es el acto de amor más grande que tiene tu cuerpo para obligarte a cuidarte. No lo ignores.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-gray-700 mb-6">
              Si llevas tiempo arrastrando malestares físicos provocados por el estrés y quieres aprender a gestionar la carga emocional que los alimenta, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) tienes un espacio seguro para hacerlo.
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
