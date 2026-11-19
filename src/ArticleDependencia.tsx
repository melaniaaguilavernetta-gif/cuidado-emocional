import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArticleDependencia() {
  useEffect(() => {
    document.title = 'Dependencia emocional: señales y cómo superarla | Cuidado Emocional';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Descubre las señales de la dependencia emocional en pareja y cómo construir relaciones sanas con TCC y PNL. Terapia presencial en Girona y online.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/dependencia');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm mt-8 mb-12 rounded-2xl">
        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Relaciones y Vínculos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Dependencia emocional: Cuando amar duele más que estar solo/a
          </h1>
          <p className="text-gray-600 text-sm">Por Melania • 2 Agosto 2026</p>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none text-gray-700 space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            En una relación sana, el otro suma, acompaña y enriquece tu vida, pero no es el oxígeno que necesitas para respirar. En la <strong>dependencia emocional</strong>, el vínculo deja de ser un espacio de encuentro y se convierte en una necesidad angustiosa de no perder al otro.
          </p>
          <p>
            Muchas veces confundimos dependencia con amor profundo. Creemos que sufrir por miedo al abandono, aguantar faltas de respeto o anularnos por complacer significa querer mucho, cuando en realidad es señal de que tu seguridad interna está puesta en manos de otra persona.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Señales frecuentes de dependencia emocional
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Miedo intenso al rechazo o al abandono:</strong> Cualquier distancia, silencio o cambio de tono dispara una alarma interna desproporcionada.</li>
            <li><strong>Prioridad absoluta al otro:</strong> Dejas de lado tus planes, amistades, aficiones o necesidades con tal de no generar conflicto o decepcionar.</li>
            <li><strong>Idealización de la pareja:</strong> Justificas conductas dañinas o minimizas lo que te duele para mantener el vínculo a toda costa.</li>
            <li><strong>Estado de ánimo en montaña rusa:</strong> Tu bienestar del día depende de cómo te haya respondido o tratado la otra persona.</li>
          </ul>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6 bg-emerald-50 py-3 pr-3 rounded-r-lg">
            Cuando tu autoestima depende de la validación externa, cualquier señal de frialdad se siente como una amenaza vital. Recuperar tu centro no significa dejar de querer, sino volver a ocuparte de ti.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Cómo construir vínculos más sanos con TCC y PNL
          </h2>
          <p>
            Superar la dependencia emocional pasa por fortalecer tu base interna y aprender a relacionarte desde la libertad y no desde el miedo:
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            1. Cuestionar creencias de carencia (TCC)
          </h3>
          <p>
            Con la Terapia Cognitivo-Conductual identificamos pensamientos automáticos como <em>"No voy a poder soportarlo"</em> o <em>"Si no estoy con esta persona, me quedaré vacío/a"</em>. Revisar estas ideas con evidencia y construir límites claros reduce el pánico a la soledad.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-3">
            2. Fortalecer tu autonomía emocional (PNL)
          </h3>
          <p>
            A través de la Programación Neurolingüística trabajamos para reconectar con tu identidad, tus recursos propios y tu capacidad de calmar tus emociones sin depender de la reacción inmediata del otro.
          </p>

          <p className="font-medium text-gray-900 mt-8 text-xl">
            Aprender a estar contigo sin miedo
          </p>
          <p>
            Estar bien a solas y poner límites no rompe lo que es sano; protege tu dignidad y permite que cualquier vínculo crezca sobre bases más equilibradas.
          </p>

          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 my-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Da el primer paso hacia relaciones más equilibradas
            </h2>
            <p className="text-gray-700 mb-6">
              Si sientes que el miedo a perder a alguien te lleva a aguantar más de la cuenta o a vivir en tensión constante, en <strong>Cuidado Emocional</strong> (presencial en Girona y Online) tienes un espacio seguro para trabajarlo.
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
