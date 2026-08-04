import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleAgorafobia() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Fobias y Ansiedad
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Sientes que no puedes alejarte "demasiado" de tu zona de seguridad?
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 4 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Existe un gran mito alrededor de la <strong>agorafobia</strong>: mucha gente cree que se trata única y exclusivamente del miedo a salir a la calle. Sin embargo, la realidad de este trastorno es mucho más amplia y silenciosa.
          </p>
          <p>
            A menudo, la agorafobia se esconde en situaciones cotidianas que limitan tu vida sin que apenas te des cuenta. Se manifiesta en el pánico a viajar, la angustia de subir a un avión o a un tren, o en esa sensación de peligro inminente cuando te alejas "demasiados kilómetros" de tu casa o de un hospital conocido.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El verdadero origen del miedo
          </h2>
          <p>
            Si te ocurre esto, es fundamental que sepas algo: <strong>tu miedo no es al destino.</strong> No le temes a esa ciudad nueva, a la playa o a la montaña.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            El miedo real es al miedo en sí. Es el terror a <strong>no poder escapar</strong> o a <strong>no recibir ayuda</strong> en caso de que te dé un ataque de ansiedad lejos de tu zona de confort.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            La trampa de la "evitación"
          </h2>
          <p>
            Cuando sientes que alejarte es peligroso, tu mente, en su afán por protegerte, se vuelve una experta en lo que en psicología llamamos <strong>evitación</strong>. Esto se traduce en acciones muy concretas:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Inventas excusas</strong> de última hora para cancelar ese viaje de fin de semana con amigos.</li>
            <li><strong>Limitas tu vida</strong> a un radio de acción muy específico y conocido (tu barrio, tu ciudad, la ruta de siempre).</li>
            <li><strong>Planificas en exceso</strong>, calculando dónde hay centros médicos en cada ruta que tomas.</li>
          </ul>
          <p>
            Aunque cancelar un plan o evitar un viaje te proporciona un alivio temporal muy reconfortante en el momento, a largo plazo tiene un coste altísimo: <strong>hace que el miedo se haga cada vez más grande</strong> y que tu mundo se vuelva cada vez más pequeño.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            ¿Cómo puedes romper este ciclo y recuperar tu libertad?
          </h2>
          <p>
            La buena noticia es que no tienes que vivir así para siempre. Tu cerebro ha aprendido a asociar la distancia con el peligro, y de la misma manera, puede desaprenderlo. Para lograrlo, combinamos dos enfoques altamente efectivos:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Terapia Cognitivo-Conductual (TCC)
          </h3>
          <p>
            A través de esta terapia, trabajamos la <em>exposición gradual</em>. Te acompañamos paso a paso para que le enseñes a tu cerebro, desde la experiencia y no solo desde la lógica, que estás a salvo y que eres capaz de gestionar la ansiedad.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Programación Neurolingüística (PNL)
          </h3>
          <p>
            Con estas herramientas, creamos <strong>"anclajes" de seguridad</strong>. El objetivo es que la calma no dependa del lugar físico donde te encuentres (tu casa), sino que se convierta en una herramienta interna que puedas llevar contigo, vayas donde vayas.
          </p>
          <p className="font-medium text-gray-900 mt-6">
            No permitas que el miedo decida hasta dónde puedes llegar. Tienes derecho a recuperar tu libertad y a volver a disfrutar del viaje, sin importar a cuántos kilómetros estés de casa.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia tu bienestar
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
