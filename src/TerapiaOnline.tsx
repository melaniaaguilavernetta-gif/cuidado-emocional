import { useEffect } from 'react';
import { Video, CheckCircle2, Clock, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';

export function TerapiaOnline() {
  useEffect(() => {
    document.title = 'Terapia Online (TCC y PNL) en toda España | Cuidado Emocional';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Acompañamiento terapéutico online por videollamada con Terapia Cognitivo-Conductual (TCC) y PNL. Gestión de ansiedad, autoestima, relaciones y bienestar emocional.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const temas = [
    'Ansiedad, estrés laboral y sobrepensamiento (rumiación mental)',
    'Autoestima, inseguridad y diálogo interno exigente',
    'Relaciones de pareja, límites sanos y dependencia emocional',
    'Bloqueos personales, toma de decisiones y gestión de cambios vitales',
    'Agotamiento emocional, insomnio y regulación del estado de ánimo',
    'Desarrollo personal y adquisición de recursos prácticos para el día a día',
  ];

  const faqs = [
    {
      pregunta: '¿Cómo funcionan las sesiones de terapia online?',
      respuesta:
        'Nos conectamos por videollamada en un entorno privado y confidencial desde cualquier lugar. Trabajamos con la misma estructura, cercanía y rigor que en sesión presencial, aplicando herramientas prácticas de TCC y PNL adaptadas a tu situación.',
    },
    {
      pregunta: '¿La terapia online es igual de eficaz que la presencial?',
      respuesta:
        'Sí. Tanto la Terapia Cognitivo-Conductual (TCC) como la Programación Neurolingüística (PNL) se adaptan perfectamente al formato online, permitiéndote trabajar desde la comodidad de tu casa sin perder tiempo en desplazamientos y manteniendo la continuidad aunque viajes o cambies de horario.',
    },
    {
      pregunta: '¿Qué necesito para hacer una sesión por videollamada?',
      respuesta:
        'Solo necesitas un ordenador, tablet o teléfono móvil con buena conexión a internet, auriculares si lo prefieres y un espacio tranquilo donde puedas hablar con privacidad durante la sesión.',
    },
    {
      pregunta: '¿En qué idioma se realizan las sesiones online?',
      respuesta:
        'Puedes realizar tus sesiones tanto en castellano como en catalán, según el idioma en el que te sientas más cómoda o cómodo expresándote.',
    },
  ];

  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-teal-50/70 via-white to-emerald-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera SEO principal */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <Video className="w-4 h-4" aria-hidden="true" />
            <span>Videollamada confidencial en toda España</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Terapia Online con TCC y PNL
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Acompañamiento terapéutico cercano, estructurado y práctico desde casa para gestionar la
            ansiedad, fortalecer tu autoestima y superar bloqueos emocionales con herramientas de{' '}
            <strong>Terapia Cognitivo-Conductual (TCC)</strong> y{' '}
            <strong>Programación Neurolingüística (PNL)</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 text-base transition-colors"
            >
              Solicitar primera sesión online
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="tel:+34696682277"
              className="inline-flex items-center justify-center rounded-md border border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-semibold px-8 py-4 text-base transition-colors"
            >
              <Phone className="mr-2 w-4 h-4" aria-hidden="true" />
              +34 696 68 22 77
            </a>
          </div>
        </header>

        {/* Bloque de áreas de acompañamiento */}
        <section className="mb-16">
          <div className="bg-white rounded-xl border border-emerald-100 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Qué podemos trabajar en terapia online?
            </h2>
            <p className="text-gray-700 mb-6">
              Cada proceso se adapta a tu ritmo y a tus objetivos personales, combinando comprensión
              emocional con ejercicios concretos para aplicar entre sesiones:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {temas.map((tema, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-800">{tema}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas del formato online */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Ventajas de la terapia online en Cuidado Emocional
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sin desplazamientos
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Conéctate desde un espacio cómodo y seguro para ti, ahorrando tiempo y facilitando
                encajar las sesiones en tu rutina semanal.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enfoque práctico TCC y PNL
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Trabajamos sobre pensamientos repetitivos, gestión emocional y patrones de conducta
                con pautas claras desde las primeras sesiones.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexibilidad y continuidad
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mantén tu proceso activo estés donde estés, con posibilidad de alternar con sesiones
                presenciales en Girona si lo deseas.
              </p>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes (FAQ SEO) */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-emerald-700" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Preguntas frecuentes sobre terapia online
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.pregunta}</h3>
                <p className="text-gray-700 leading-relaxed">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Llamada a la acción final */}
        <section className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            ¿Empezamos tu proceso online?
          </h2>
          <p className="text-emerald-50 max-w-2xl mx-auto mb-6">
            Atención online de lunes a viernes de 9:00 a 20:00. Escríbeme o llámame sin compromiso
            para resolver tus dudas y agendar tu primera sesión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-md bg-white text-emerald-800 hover:bg-emerald-50 font-semibold px-6 py-3 transition-colors"
            >
              Ir al formulario de contacto
            </a>
            <a
              href="mailto:hola@cuidadoemocional.com"
              className="inline-flex items-center text-emerald-50 hover:text-white underline font-medium"
            >
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              hola@cuidadoemocional.com
            </a>
          </div>
          <div className="mt-4 text-xs text-emerald-100 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Sesiones en castellano y catalán</span>
          </div>
        </section>
      </div>
    </main>
  );
}
