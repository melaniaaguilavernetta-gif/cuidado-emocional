import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticlePensamientosIntrusivos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Ansiedad Severa y Fobias
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cuando tu propia mente te aterroriza: El sufrimiento de los pensamientos intrusivos
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 26 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Existe un nivel de ansiedad del que rara vez se habla en las redes sociales. No es el estrés por el trabajo ni los nervios antes de una reunión. Es un terror profundo, silencioso y paralizante que ocurre en la intimidad de tu propia cabeza: la aparición de pensamientos intrusivos y catastróficos.
          </p>
          <p>
            Imagina que estás esperando el tren y, sin previo aviso, tu mente proyecta la imagen de alguien empujándote o, peor aún, de ti mismo perdiendo el control. O estás abrazando a alguien a quien amas y tu cerebro te bombardea con imágenes inapropiadas o violentas. La reacción inmediata es el pánico absoluto y una pregunta aterradora: <em>"¿Me estoy volviendo loco/a?"</em>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El secreto más doloroso de la ansiedad
          </h2>
          <p>
            A esto se le conoce clínicamente como <strong>pensamientos intrusivos ego-distónicos</strong>. La palabra "ego-distónico" significa que estos pensamientos van totalmente en contra de tus valores, tus deseos y tu verdadera personalidad.
          </p>
          <p>
            Quienes los padecen sufren en soledad por miedo a ser juzgados. Suelen desarrollar conductas de evitación severas (dejar de conducir, esconder los cuchillos, alejarse de sus familiares) por el temor irracional a "perder el control".
          </p>
          
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            La regla de oro de la psicología clínica en estos casos es rotunda: Tener un pensamiento no equivale a tener el deseo de hacerlo. De hecho, tu mente te asusta con esos escenarios concretos porque son lo que más aborreces en el mundo.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Por qué intentar "no pensar" empeora el problema
          </h2>
          <p>
            Si yo te digo: <em>"No pienses bajo ningún concepto en un elefante rosa"</em>, ¿qué es lo primero que aparece en tu mente? Con los pensamientos intrusivos ocurre lo mismo. Cuanto más luchas contra ellos, más alerta pones a tu cerebro y más fuertes se vuelven.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Defusión Cognitiva (Terapia Cognitivo-Conductual)
          </h3>
          <p>
            A través de la TCC, enseñamos a los pacientes a dejar de pelear con su mente. La técnica de la defusión cognitiva nos ayuda a ver los pensamientos simplemente como lo que son: palabras, imágenes, ruido mental provocado por un pico de cortisol y ansiedad. No son premoniciones ni órdenes. Aprendemos a quitarles la credibilidad.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Interrupción de estados (PNL)
          </h3>
          <p>
            Cuando el pensamiento intrusivo dispara el ataque de pánico, el cuerpo entra en modo supervivencia. Utilizamos herramientas de Programación Neurolingüística (PNL) para devolver al sistema nervioso al momento presente, desactivando la respuesta de "lucha o huida" y anclando un estado de seguridad.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            No eres una persona peligrosa, eres una persona asustada
          </p>
          <p>
            El mayor alivio para un paciente que sufre pensamientos intrusivos es escuchar a un profesional decirle: <em>"No estás perdiendo la razón. Sé lo que te pasa y tiene nombre"</em>.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Puedes salir de este bucle
            </h2>
            <p className="text-gray-700 mb-6">
              Si estás viviendo este infierno en silencio y sientes que tu propia mente es tu mayor enemiga, en <strong>Cuidado Emocional</strong> encontrarás un espacio clínico, seguro y libre de todo juicio donde tratar este síntoma de raíz.
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
