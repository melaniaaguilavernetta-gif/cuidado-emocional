import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleInsomnio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Descanso y Bienestar
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Por qué no puedes dormir (y cómo apagar tu mente por la noche)
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 5 Agosto 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Todos hemos vivido esa frustrante escena: estás agotado o agotada, te metes en la cama deseando por fin cerrar los ojos, pero en cuanto tu cabeza toca la almohada, <strong>tu mente se enciende</strong>.
          </p>
          <p>
            De repente, recuerdas un correo que no enviaste, analizas una conversación que tuviste hace tres días o te preocupas por un problema futuro que ni siquiera ha ocurrido. El reloj avanza. Las 2:00, las 3:00, las 4:00 AM. Cuanto más miras la hora, más te agobias pensando en lo cansado que estarás al día siguiente.
          </p>
          <p>
            Si esto te ocurre a menudo, no estás lidiando simplemente con un mal descanso; estás sufriendo las consecuencias de la <strong>ansiedad nocturna</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            La cama como zona de alerta
          </h2>
          <p>
            El principal problema de los trastornos del sueño asociados al estrés es el condicionamiento. Nuestro cerebro aprende por asociación. Si pasas muchas noches dando vueltas, preocupándote y sintiendo frustración bajo las sábanas, tu mente deja de asociar la cama con el "descanso".
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            En su lugar, la asocia con el lugar donde vas a preocuparte. Tu cerebro ha activado la <strong>señal de alerta</strong>.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El mito de intentar dejar la mente en blanco
          </h2>
          <p>
            Cuando no podemos dormir, el consejo más habitual suele ser: "Relájate, intenta no pensar en nada". Pero la mente humana no funciona así. Intentar dejar la mente en blanco requiere un esfuerzo activo que genera aún más tensión.
          </p>
          <p>
            Para solucionar el insomnio y la rumiación nocturna, necesitamos abordar el problema desde la raíz, y aquí es donde entran en juego la <strong>Terapia Cognitivo-Conductual (TCC)</strong> y la <strong>Programación Neurolingüística (PNL)</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo reprogramar tu descanso en Cuidado Emocional
          </h2>
          <p>
            En consulta no buscamos "remedios mágicos", sino reeducar a tu sistema nervioso para que vuelva a sentirse seguro al bajar la guardia. Lo hacemos trabajando tres pilares fundamentales:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Higiene y restricción del sueño (TCC)
          </h3>
          <p>
            Si no consigues dormir en 20 minutos, es fundamental salir de la cama. Quedarte dando vueltas solo refuerza la asociación de estrés. Aprenderemos rutinas específicas para romper este ciclo y que la cama vuelva a ser un refugio exclusivo para dormir.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Gestión del diálogo interno (PNL)
          </h3>
          <p>
            La ansiedad se dispara por la forma en la que te hablas durante la noche (<em>"Si no duermo ya, mañana será un infierno"</em>). Utilizando la PNL, cambiamos estas frases por <strong>anclajes</strong> que transmiten calma y seguridad, reduciendo el nivel de alerta de tu cuerpo.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            3. Procesamiento diurno
          </h3>
          <p>
            El ruido mental nocturno aparece porque durante el día no te has permitido parar a procesar tus emociones. Crearemos "ventanas de preocupación" controladas durante la tarde, para que tu cerebro no necesite usar la madrugada para organizar tus ideas.
          </p>

          <p className="font-medium text-gray-900 mt-6">
            No tienes que resignarte a vivir arrastrando los pies ni depender de estar exhausto para lograr conciliar el sueño. Tu cuerpo está diseñado para descansar; solo necesitamos enseñarle de nuevo el camino.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Vuelve a dormir de verdad
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
