import { useEffect } from 'react';
import { MapPin, CheckCircle2, Clock, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from './button.tsx';
import { Card, CardContent } from './card.tsx';

export function TerapiaGirona() {
  useEffect(() => {
    document.title = 'Terapia en Girona (TCC y PNL) | Cuidado Emocional';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Acompañamiento terapéutico presencial en Girona y online con Terapia Cognitivo-Conductual (TCC) y PNL. Gestión de ansiedad, autoestima, relaciones y bienestar emocional.'
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
      pregunta: '¿Cómo son las sesiones de terapia presencial en Girona?',
      respuesta:
        'Son sesiones individuales, confidenciales y adaptadas a tu situación actual. Trabajamos en un espacio tranquilo en Girona donde analizamos qué te está generando malestar y aplicamos herramientas prácticas desde el primer día.',
    },
    {
      pregunta: '¿Qué diferencia aporta combinar TCC y PNL?',
      respuesta:
        'La Terapia Cognitivo-Conductual (TCC) te ayuda a identificar y modificar pensamientos y hábitos que mantienen el malestar, mientras que la Programación Neurolingüística (PNL) facilita trabajar sobre patrones emocionales, comunicación interna y bloqueos de forma muy práctica y orientada al cambio.',
    },
    {
      pregunta: '¿Puedo combinar sesiones presenciales en Girona con sesiones online?',
      respuesta:
        'Sí. Si por horarios, desplazamientos o comodidad algún día prefieres hacer la sesión por videollamada, podemos alternar la modalidad presencial en Girona y online sin perder continuidad en tu proceso.',
    },
    {
      pregunta: '¿En qué idioma se realizan las sesiones?',
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
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Presencial en Girona y modalidad Online</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Acompañamiento terapéutico en Girona con TCC y PNL
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Un espacio cercano, confidencial y práctico para gestionar la ansiedad, fortalecer tu
            autoestima y desbloquear situaciones que hoy te pesan, con herramientas de{' '}
            <strong>Terapia Cognitivo-Conductual (TCC)</strong> y{' '}
            <strong>Programación Neurolingüística (PNL)</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contacto">
              <Button className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-6 text-base">
                Solicitar primera sesión en Girona
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="tel:+34696682277">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-semibold px-8 py-6 text-base"
              >
                <Phone className="mr-2 w-4 h-4" aria-hidden="true" />
                +34 696 68 22 77
              </Button>
            </a>
          </div>
        </header>

        {/* Bloque de áreas de acompañamiento */}
        <section className="mb-16">
          <Card className="border-emerald-100 shadow-sm">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ¿En qué puedo acompañarte?
              </h2>
              <p className="text-gray-700 mb-6">
                Cada proceso se adapta a tu ritmo y a tus objetivos concretos, abordando tanto el
                malestar puntual como patrones que se repiten en el tiempo:
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
            </CardContent>
          </Card>
        </section>

        {/* Cómo trabajamos paso a paso */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Cómo trabajamos en Cuidado Emocional
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-teal-100">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Claridad desde el inicio
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analizamos qué te preocupa hoy y definimos objetivos realistas sin juicios ni
                  etiquetas innecesarias.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Herramientas de TCC y PNL
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Aplicamos técnicas prácticas para regular pensamientos repetitivos, emociones
                  intensas y bloqueos en tu vida cotidiana.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Autonomía y seguimiento
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  El objetivo es que incorpores recursos propios para sentirte más segura/o y con
                  mayor bienestar a medio y largo plazo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preguntas frecuentes (FAQ SEO) */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-emerald-700" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Preguntas frecuentes sobre terapia en Girona
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.pregunta}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.respuesta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Llamada a la acción final */}
        <section className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            ¿Hablamos sobre tu caso?
          </h2>
          <p className="text-emerald-50 max-w-2xl mx-auto mb-6">
            Atención presencial en Girona y online de lunes a viernes de 9:00 a 20:00. Escríbeme o
            llámame sin compromiso para resolver cualquier duda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#contacto">
              <Button className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold px-6">
                Ir al formulario de contacto
              </Button>
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
