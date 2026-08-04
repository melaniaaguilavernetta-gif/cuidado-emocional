import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticlePresionEstetica() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Autoestima y Autoimagen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Cuánta energía mental gastas al día peleándote con el espejo?
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 4 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Vivimos bombardeados por imágenes con filtros, estándares de belleza irreales y la presión constante de encajar en un molde que rara vez refleja la realidad.
          </p>
          <p>
            Esta presión estética no solo afecta cómo te vistes por la mañana; es algo mucho más profundo. <strong>Se infiltra en tu mente</strong> en forma de ansiedad, comparaciones constantes y una voz crítica interna que te repite una y otra vez que "nunca es suficiente".
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El agotamiento de la autoevaluación constante
          </h2>
          <p>
            Estar evaluando tu cuerpo de forma continua es <strong>emocionalmente agotador</strong>. Ese escrutinio implacable frente al espejo consume una cantidad de energía mental inmensa que podrías estar dedicando a cosas que realmente te hacen feliz.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Lo más triste de esta batalla es que te desconecta por completo del momento presenté: dejas de disfrutar de un plan increíble solo por cómo crees que te queda la ropa, o evitas salir en las fotos para no tener que juzgar tu imagen después.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo hacer las paces con tu imagen
          </h2>
          <p>
            Cambiar la forma en la que te ves y te hablas no sucede de la noche a la mañana, pero es completamente posible. A través de la <strong>Terapia Cognitivo-Conductual (TCC)</strong> y la gestión emocional, podemos trabajar para desmontar esa mirada crítica:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Identificar distorsiones:</strong> Aprender a detectar cuándo tu mente está exagerando un "defecto" o cayendo en comparaciones injustas.</li>
            <li><strong>Neutralidad corporal:</strong> Cambiar el foco. Pasar de exigirle a tu cuerpo que sea "perfecto" a valorarlo por todo lo que te permite hacer (caminar, abrazar, bailar).</li>
            <li><strong>Silenciar al juez interno:</strong> Sustituir el diálogo de castigo por uno de autocompasión y respeto.</li>
          </ul>
          
          <p className="font-medium text-gray-900 mt-6">
            Tu valor como persona no se mide en tallas, ni en la forma de tu cuerpo, ni en cómo luces en una fotografía. Tienes derecho a habitar tu cuerpo en paz y a disfrutar de la vida sin que el espejo sea tu enemigo.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera la paz con tu cuerpo
            </h2>
            <button 
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer mt-2"
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
