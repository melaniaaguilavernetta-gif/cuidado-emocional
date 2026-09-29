import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleVivienda() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Sociedad y Salud Mental
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El impacto psicológico de la vivienda: Cuando tu casa no es un refugio seguro
          </h1>
          <p className="text-gray-500 text-sm">Por Melania • 28 Septiembre 2026</p>
        </div>
        
        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            Abre las redes sociales o habla con cualquier persona de tu entorno: la conversación siempre acaba derivando hacia el mismo tema. La imposibilidad de comprar una casa, alquileres que devoran el sueldo, mudanzas forzosas o tener que compartir piso rozando los 40 años. 
          </p>
          <p>
            Esta realidad no es solo un problema económico; se ha convertido en uno de los mayores detonantes de <strong>ansiedad, depresión y estrés crónico</strong> en la actualidad.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            La biología del refugio seguro
          </h2>
          <p>
            Para entender el impacto psicológico que tiene la precariedad habitacional, debemos mirar a nuestro cerebro. Evolutivamente, nuestro sistema nervioso necesita un "lugar seguro" donde bajar la guardia, procesar las emociones del día y descansar. Ese lugar debería ser nuestro hogar.
          </p>
          <p>
            ¿Qué ocurre cuando tu hogar es inestable, temporal o no te permite tener intimidad? Tu cerebro asume que estás en peligro. Entras en un estado de <strong>hipervigilancia constante</strong>. El cortisol (la hormona del estrés) se dispara, provocando insomnio, irritabilidad y un agotamiento mental extremo.
          </p>
          
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            A este desgaste biológico se le suma el peso de la "culpa impuesta". La sociedad nos ha enseñado que el éxito adulto equivale a tener una vivienda propia. Al no lograrlo, la persona interioriza que ha fracasado, destruyendo su autoestima y su identidad.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo proteger tu mente desde la TCC
          </h2>
          <p>
            Como terapeutas, no podemos intervenir en el mercado inmobiliario, pero sí podemos darte herramientas clínicas (Terapia Cognitivo-Conductual y PNL) para evitar que esta crisis te rompa por dentro.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Desvincular la culpa de tu identidad
          </h3>
          <p>
            El primer paso es la reestructuración cognitiva. Trabajamos para separar tu valor como persona de tus posesiones materiales. La precariedad de la vivienda es un problema sistémico y estructural, <strong>no es un fracaso personal tuyo</strong>. Entender esto racionalmente alivia el peso de la culpa tóxica.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Gestionar el "proyecto de vida en pausa"
          </h3>
          <p>
            La ansiedad nace de sentir que no puedes planificar tu futuro. Con la PNL, aprendemos a fijar nuestra atención en lo que <em>sí</em> podemos controlar en el presente, creando espacios de seguridad internos y rutinas que le den a tu cerebro la estabilidad que el mercado de la vivienda te niega.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Tu valor no se mide en metros cuadrados
          </p>
          <p>
            Vivir con la incertidumbre de no tener un techo asegurado a largo plazo es una carga demasiado pesada para llevarla en soledad. Reconocer que te está afectando es el primer paso para protegerte.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Protege tu salud mental de la incertidumbre
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que la situación de la vivienda está paralizando tu vida, generándote ansiedad o haciéndote sentir un fracaso, en <strong>Cuidado Emocional</strong> trabajamos para devolverte la seguridad en ti mismo/a.
            </p>
            <button 
              onClick={() => {
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = '/';
              }}
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Pide tu cita (Girona y Online)
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
