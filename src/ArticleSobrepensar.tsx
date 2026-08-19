import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleSobrepensar() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Gestión de la Ansiedad
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La trampa de sobrepensar: Por qué darle mil vueltas a todo no te ayuda a decidir mejor
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 19 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Seguro que conoces la sensación: estás en la cama intentando dormir, pero tu cerebro ha decidido abrir un debate sobre algo que dijiste hace tres días, o sobre un problema que quizás ocurra la semana que viene. Analizas cada detalle, imaginas diferentes escenarios y planificas respuestas para situaciones que ni siquiera han sucedido.
          </p>
          <p>
            Solemos justificar este agotador hábito diciéndonos: <em>"Soy una persona muy prudente"</em> o <em>"Me gusta tenerlo todo controlado"</em>. Sin embargo, en el ámbito del bienestar emocional, a esto lo llamamos <strong>rumiación mental</strong> o <em>overthinking</em>. Y lejos de ayudarte, te está bloqueando.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El espejismo del control
          </h2>
          <p>
            El mayor engaño de nuestra mente es hacernos creer que pensar obsesivamente en un problema nos acerca a su solución. Tu cerebro piensa que si repasa todas las variables posibles y prevé todos los desastres, estarás a salvo. 
          </p>
          <p>
            Pero la realidad es que el sobrepensamiento drena tu energía. Te lleva a lo que conocemos como <strong>parálisis por análisis</strong>: gastas tanta fuerza mental imaginando el futuro o lamentando el pasado, que te quedas sin recursos para actuar y tomar decisiones en el presente.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Darle mil vueltas a un asunto no te proporciona más control sobre la situación; simplemente te genera más ansiedad y alimenta tu inseguridad.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo romper el bucle con TCC y PNL
          </h2>
          <p>
            Dejar de sobrepensar no se consigue diciéndote a ti mismo/a "voy a dejar de pensar en esto". (Intenta no pensar en un elefante rosa y verás qué ocurre). Necesitas estrategias activas para reeducar tu forma de procesar la información.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. La técnica de postergar la preocupación (TCC)
          </h3>
          <p>
            A través de la Terapia Cognitivo-Conductual, no intentamos eliminar los pensamientos, sino gestionarlos. Una técnica muy útil es crear una <strong>"ventana de preocupación"</strong>. Si un pensamiento intrusivo aparece a las 10:00 de la mañana, anótalo en una libreta y dite: <em>"Pensaré en esto a las 18:00h durante 15 minutos"</em>. Le quitas el sentido de urgencia a tu cerebro y recuperas el control de tu día.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Cambiar las preguntas de tu diálogo interno (PNL)
          </h3>
          <p>
            Las personas que sobrepiensan suelen basar su diálogo interno en preguntas paralizantes: <em>"¿Y si me equivoco?", "¿Y si piensan mal de mí?"</em>. Con la Programación Neurolingüística, aprendemos a cambiar esas preguntas por otras orientadas a la acción: <strong>"¿Qué está bajo mi control ahora mismo?"</strong> o <strong>"¿Qué puedo hacer hoy para avanzar?"</strong>.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tu mente es una herramienta, no tu enemiga
          </p>
          <p>
            Pensar es maravilloso, pero torturarte con tus propios pensamientos es opcional. Atrévete a soltar el falso control y a confiar más en tu capacidad de improvisación y adaptación ante lo que venga.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera tu paz mental
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que tu cabeza es una olla a presión y necesitas herramientas prácticas para detener la rumiación, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) podemos ayudarte a salir del bucle.
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
