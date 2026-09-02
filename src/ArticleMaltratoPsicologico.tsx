import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleMaltratoPsicologico() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Trauma
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El maltrato invisible: Cuando las heridas no se ven pero destruyen tu identidad
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 2 Septiembre 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Existe un gran mito en nuestra sociedad: creer que el maltrato solo es real si hay gritos ensordecedores o violencia física. Esta creencia es profundamente peligrosa porque invisibiliza a miles de personas que sufren <strong>abuso emocional y psicológico</strong> a diario, convenciéndolas de que "no tienen derecho a quejarse".
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            ¿Cómo se ve el maltrato psicológico?
          </h2>
          <p>
            El abuso emocional es insidioso. Funciona como un goteo lento que va erosionando tu autoestima hasta dejarte sin identidad. En la consulta, vemos patrones claros que indican que una relación es abusiva:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Gaslighting (Luz de gas):</strong> Manipulan la realidad para hacerte dudar de tu propia memoria o cordura (<em>"Yo nunca dije eso", "Estás loco/a"</em>).</li>
            <li><strong>La ley del hielo:</strong> Te castigan con el silencio y la indiferencia durante días ante cualquier pequeño desacuerdo.</li>
            <li><strong>Aislamiento sutil:</strong> Critican a tus amigos o familiares hasta que, para evitar conflictos, decides dejar de verlos.</li>
            <li><strong>Humillación disfrazada:</strong> Hacen comentarios crueles sobre tu cuerpo o tus capacidades y, si te enfadas, responden que <em>"solo era una broma"</em> y que <em>"no tienes sentido del humor"</em>.</li>
          </ul>
          
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            El mayor triunfo del maltrato psicológico es hacerte creer que tú eres el culpable de la situación. Tu cerebro, agotado por caminar sobre cáscaras de huevo, asume que si fueras "mejor", el abuso se detendría.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Sanar el trauma con TCC y PNL
          </h2>
          <p>
            Salir de una relación abusiva es solo el primer paso. Después, hay que reconstruir la identidad que ha sido aplastada.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            Desmontar la culpa (TCC)
          </h3>
          <p>
            A través de la Terapia Cognitivo-Conductual, trabajamos para romper el <strong>vínculo traumático</strong>. Identificamos las distorsiones cognitivas que te hacen sentir responsable del comportamiento del otro. Te ayudamos a entender racionalmente que el abuso es 100% responsabilidad del abusador.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            Reconstrucción de la identidad (PNL)
          </h3>
          <p>
            El maltrato borra quién eres. Con la Programación Neurolingüística (PNL), reprogramamos tu diálogo interno y eliminamos las etiquetas negativas que te han impuesto (<em>"no vales nada", "nadie más te va a querer"</em>). Trabajamos en recuperar tus recursos internos, tu seguridad y tu amor propio.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tus heridas son reales
          </p>
          <p>
            Que no haya moratones no significa que no haya daño. Validar tu dolor es fundamental para empezar a sanar. No estás loco/a, no exageras y, sobre todo, no estás solo/a.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera tu vida en un espacio seguro
            </h2>
            <p className="text-gray-700 mb-6">
              Si te reconoces en estas líneas y necesitas ayuda para salir del bucle de la culpa y el miedo, en <strong>Cuidado Emocional</strong> te ofrecemos apoyo clínico sin juicios.
            </p>
            <button 
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Contacta de forma confidencial
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
