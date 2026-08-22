import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleDepresionSonriente() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Bienestar y Emociones
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El peso de la "depresión sonriente": Cuando fingir que estás bien te deja sin fuerzas
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 22 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Existe una imagen muy estereotipada del sufrimiento: pensamos que alguien que está mal no puede levantarse de la cama, descuida su aspecto y no es capaz de cumplir con sus obligaciones. Pero la realidad es mucho más compleja y, a menudo, más silenciosa.
          </p>
          <p>
            Hay personas que se levantan cada mañana a las siete, van al gimnasio, rinden de manera excelente en su trabajo, son el pilar de sus familias y siempre tienen una sonrisa para los demás. Sin embargo, cuando se quedan solas en el coche o entran en la ducha, se derrumban. A este fenómeno lo conocemos como <strong>depresión sonriente</strong> (o depresión de alto funcionamiento).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            La trampa de "no tener motivos para estar mal"
          </h2>
          <p>
            Quienes sufren este tipo de malestar cargan con una losa doble: el vacío interno y la culpa por sentirlo. El diálogo interno suele ser implacable: <em>"¿De qué te quejas? Tienes un buen trabajo, una familia que te quiere, salud... No tienes derecho a estar triste"</em>.
          </p>
          <p>
            Al sentir que su dolor no está "justificado" por una gran tragedia, deciden esconderlo. Se ponen una máscara de funcionalidad absoluta por dos motivos principales:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Miedo a ser una carga:</strong> Están tan acostumbrados a ser los que resuelven los problemas de los demás, que no toleran la idea de necesitar ayuda.</li>
            <li><strong>Miedo a la invalidación:</strong> Temen que, si lo cuentan, les respondan con el clásico <em>"no es para tanto"</em> o <em>"anímate, que lo tienes todo"</em>.</li>
          </ul>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Mantener esa fachada de perfección requiere una cantidad de energía brutal. Por eso, el síntoma principal de la depresión sonriente no suele ser el llanto, sino un <strong>agotamiento físico y mental crónico</strong> al final del día.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo quitarse la máscara con TCC y PNL
          </h2>
          <p>
            Sanar no consiste en dejar de hacer tu vida, sino en aprender a transitarla sin el peso de la máscara. En Cuidado Emocional trabajamos este proceso a través de dos vías fundamentales:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Validar tu derecho al dolor (TCC)
          </h3>
          <p>
            A través de la Terapia Cognitivo-Conductual, desmontamos la creencia de que necesitas un "motivo trágico" para sentirte mal. Exploramos qué necesidades tuyas llevan años sin ser atendidas mientras tú te ocupabas de todos los demás. Aprenderás que la vulnerabilidad no es debilidad, y que pedir ayuda no te hace menos válido/a.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Reprogramar la "fuerza" (PNL)
          </h3>
          <p>
            Quienes sufren depresión sonriente tienen anclado el concepto de fuerza al "aguantar sin quejarse". Con la Programación Neurolingüística (PNL), redefinimos qué significa ser fuerte. Cambiamos el diálogo interno de <em>"tengo que poder con todo yo solo/a"</em> a <em>"soy suficientemente valiente como para soltar el control y dejar que me sostengan"</em>.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            No tienes que fingir más
          </p>
          <p>
            El mayor alivio llega el día en que decides dejar de disimular. No pasa nada por decir "hoy no estoy bien", "no llego a todo" o "necesito que alguien me cuide a mí".
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Encuentra un lugar donde dejar de fingir
            </h2>
            <p className="text-gray-700 mb-6">
              Si estás agotado/a de sostener esa máscara y necesitas un espacio libre de juicios donde por fin puedas ser tú mismo/a (con tus luces y tus sombras), en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) tienes un refugio seguro.
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
