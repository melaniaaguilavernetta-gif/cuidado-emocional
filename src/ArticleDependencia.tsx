import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleDependencia() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        
        {/* Cabecera del artículo */}
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Dependencia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Confundir apego con amor: Por qué poner límites no aleja a las personas (te salva a ti)
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 3 Agosto 2026</p>
        </div>
        
        {/* Contenido principal */}
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Desde que somos pequeños, la cultura, el cine y la literatura nos han vendido una idea muy distorsionada de lo que significa amar. Nos han hecho creer que el amor verdadero requiere sacrificio absoluto, que "darlo todo" es la máxima prueba de afecto y que somos "la mitad" de alguien esperando ser completados.
          </p>
          <p>
            Bajo este marco tan peligroso, es muy fácil cruzar la fina línea que separa el amor sano de la dependencia emocional.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            ¿Qué es exactamente la dependencia emocional?
          </h2>
          <p>
            La dependencia emocional ocurre cuando tu bienestar, tu estado de ánimo y tu identidad quedan subordinados a otra persona. Ya no actúas en base a lo que tú quieres o necesitas, sino en base a lo que crees que la otra persona espera de ti, movido/a por un miedo profundo al abandono o al conflicto.
          </p>
          <p>Las señales de alarma suelen ser silenciosas al principio:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pérdida de identidad:</strong> Dejas de lado tus hobbies, tus amistades y tus intereses para mimetizarte con los de tu pareja o entorno.</li>
            <li><strong>Miedo atroz a decir "NO":</strong> Aceptas planes que no quieres hacer o toleras faltas de respeto porque el pánico a que la otra persona se enfade o se aleje te paraliza.</li>
            <li><strong>Ansiedad constante:</strong> Tu tranquilidad depende de cómo te hayan hablado hoy, de cuánto hayan tardado en contestar un mensaje o del tono de voz de la otra persona.</li>
          </ul>
          
          <p className="font-medium text-gray-900 italic mt-6">
            Cuando llegas a este punto, la frase que más resuena en tu cabeza (y que escucho a menudo en mi consulta en Girona) es: "Ya no sé quién soy".
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Poner límites: El gran mito del abandono
          </h2>
          <p>
            El mayor freno para salir de la dependencia emocional es una creencia irracional muy concreta: <em>"Si digo lo que pienso, si pongo un límite o digo que algo me molesta, dejarán de quererme y me quedaré solo/a"</em>.
          </p>
          <p>
            Aquí es donde entra la magia de la Terapia Cognitivo-Conductual (TCC). En Cuidado Emocional trabajamos para desmontar esa creencia. Te ayudaré a entender una verdad fundamental: <strong>poner límites no aleja a las personas que te quieren de verdad; solo aleja a aquellas personas que se estaban beneficiando de que tú no tuvieras límites.</strong>
          </p>
          <p>
            Quien te quiere sano, respeta tus "noes". Quien quiere controlarte, se ofende ante ellos.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo te ayuda la TCC y la PNL a recuperar tu centro
          </h2>
          <p>
            Salir de la dependencia emocional no se logra simplemente "queriéndose más", requiere de un trabajo estructurado para reprogramar cómo nos relacionamos con nosotros mismos y con los demás.
          </p>
          
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Con la TCC:</strong> Identificamos las heridas de apego y las creencias de falta de valía ("no soy suficiente", "nadie me va a querer si no soy útil"). Aprendemos a gestionar la ansiedad que aparece cuando no intentas complacer al otro, tolerando esa incomodidad hasta que desaparece.</li>
            <li><strong>Con la PNL:</strong> Reprogramamos tu diálogo interno. Cambiamos el "Le necesito para ser feliz" por el "Elijo compartir mi vida contigo, pero soy una persona completa sin ti". Utilizamos técnicas de anclaje para conectarte con tus propios recursos de seguridad y autoestima en momentos de duda.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            El amor sano no te exige que te anules
          </h2>
          <p>
            No tienes que vaciarte para que alguien decida quedarse a tu lado. Una relación sana (ya sea de pareja, de amistad e incluso familiar) es un lugar donde sumas, no donde te restan personalidad.
          </p>
          <p>
            Si sientes que el miedo a perder a alguien te está haciendo perderte a ti mismo/a, no tienes que transitar este camino en soledad.
          </p>

          {/* Call to Action (Reserva de sesión) */}
          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <p className="font-semibold text-gray-900 mb-2 text-xl">📍 En Cuidado Emocional (presencial en Girona u Online)</p>
            <p className="mb-6 text-gray-700">
              Tienes un espacio seguro, libre de juicios, para empezar a reconstruir tu identidad y aprender a relacionarte desde la libertad, no desde el miedo. Da el primer paso para volver a ser tú.
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
