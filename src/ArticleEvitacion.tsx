import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleEvitacion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Comunicación
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La trampa de "cortar por lo sano": Por qué huir del conflicto no es poner límites (es evitación)
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 24 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Seguramente lo has visto en decenas de frases motivacionales en internet: <em>"Si alguien te quita la paz, sácalo de tu vida"</em>, <em>"No le debes explicaciones a nadie"</em> o <em>"Aplica el contacto cero y protege tu energía"</em>.
          </p>
          <p>
            Esta filosofía de la "tolerancia cero" se ha camuflado bajo el atractivo nombre de <strong>autocuidado</strong>. Pero, a menos que hablemos de situaciones de abuso o maltrato (donde la huida sí es estrictamente necesaria), la mayoría de las veces estamos usando estas frases como excusa para esconder una realidad incómoda: nos aterra el conflicto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            La diferencia entre un límite y un muro
          </h2>
          <p>
            Dejar de hablar a un amigo porque hizo un comentario que te dolió, bloquear a una persona que estás conociendo porque algo no te cuadró, o ignorar a un compañero de trabajo, no es poner un límite. Es levantar un muro.
          </p>
          <p>
            Desde la <strong>Terapia Cognitivo-Conductual (TCC)</strong>, a esto le llamamos conducta de evitación. El mecanismo es simple:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Aparece un conflicto (alguien hace algo que no te gusta).</li>
            <li>Sientes ansiedad, enfado o miedo a discutir.</li>
            <li>En lugar de comunicarlo, cortas la relación o te alejas silenciosamente.</li>
            <li>Sientes un alivio inmediato (reforzador negativo).</li>
          </ul>
          
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            El problema de la evitación es que funciona a corto plazo, pero a largo plazo encoge tu mundo. Le enseñas a tu cerebro que los problemas son intratables y que tú eres incapaz de gestionarlos. Como resultado, cada vez te sientes más solo/a y más vulnerable ante los demás.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo aprender a quedarse en la incomodidad
          </h2>
          <p>
            Poner un límite requiere hacer exactamente lo contrario a huir: requiere quedarte presente y comunicarte. Con el uso de la <strong>Programación Neurolingüística (PNL)</strong> y la gestión emocional, podemos entrenar estas habilidades:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Despersonalizar el conflicto
          </h3>
          <p>
            Solemos huir porque sentimos que cualquier queja hacia nosotros o cualquier comportamiento diferente del otro es un "ataque personal". Entrenamos tu mente para separar los hechos (lo que ha pasado) de tu identidad (quién eres tú), reduciendo así la respuesta de alerta de tu sistema nervioso.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Comunicación asertiva en lugar de "ghosting"
          </h3>
          <p>
            Aprenderás a construir mensajes asertivos. Cambiamos el bloqueo pasivo-agresivo por un sencillo: <em>"Cuando pasó esto ayer, me sentí incómodo/a. Me gustaría que en el futuro lo hiciéramos de esta manera"</em>. Te sorprenderá descubrir cuántas relaciones valiosas se salvan cuando aprendemos a hablar en lugar de huir.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tu paz no está en una isla desierta
          </p>
          <p>
            Proteger tu paz mental no consiste en aislarte de todo el que piense diferente o cometa un error. La verdadera paz mental viene de la seguridad profunda de saber que, venga el conflicto que venga, tú tienes las herramientas para sentarte, hablarlo y resolverlo.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Pierde el miedo a la confrontación sana
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que tu respuesta automática ante el malestar es alejarte, aislarte o cortar relaciones, y quieres aprender a comunicarte desde la seguridad y no desde la evitación, en <strong>Cuidado Emocional</strong> podemos entrenarlo juntos.
            </p>
            <button 
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Reserva tu sesión hoy (Girona y Online)
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
