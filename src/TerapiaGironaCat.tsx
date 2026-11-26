import { useEffect } from 'react';
import { MapPin, CheckCircle2, Clock, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';

const temes = [
  'Ansietat, estrès laboral i excés de rumiació mental',
  'Autoestima, inseguretat i diàleg intern exigent',
  'Relacions de parella, límits sans i dependència emocional',
  'Blocatges personals, presa de decisions i gestió de canvis vitals',
  'Esgotament emocional, insomni i regulació de l’estat d’ànim',
  'Creixement personal i eines pràctiques per al dia a dia',
];

const faqs = [
  {
    pregunta: 'Com són les sessions de teràpia presencial a Girona?',
    respuesta:
      'Són sessions individuals, confidencials i adaptades a la teva situació actual. Treballem en un espai tranquil a Girona on analitzem què et genera malestar i apliquem eines pràctiques des del primer dia.',
  },
  {
    pregunta: 'Què aporta combinar TCC i PNL?',
    respuesta:
      'La Teràpia Cognitivoconductual (TCC) t’ajuda a identificar i modificar pensaments i hàbits que mantenen el malestar, mentre que la Programació Neurolingüística (PNL) facilita treballar patrons emocionals, comunicació interna i blocatges d’una manera pràctica i orientada al canvi.',
  },
  {
    pregunta: 'Puc combinar sessions presencials a Girona amb sessions en línia?',
    respuesta:
      'Sí. Si per horaris, desplaçaments o comoditat algun dia prefereixes fer la sessió per videotrucada, podem alternar la modalitat presencial a Girona i en línia sense perdre continuïtat.',
  },
  {
    pregunta: 'En quina llengua es poden fer les sessions?',
    respuesta:
      'Pots fer les sessions tant en català com en castellà, segons la llengua en què et sentis més còmoda o còmode per expressar-te.',
  },
];

export function TerapiaGironaCat() {
  useEffect(() => {
    document.title = 'Teràpia a Girona (TCC i PNL) | Cuidado Emocional';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Acompanyament terapèutic presencial a Girona i en línia amb Teràpia Cognitivoconductual (TCC) i PNL. Gestió de l’ansietat, autoestima, relacions i benestar emocional.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.cuidadoemocional.com/terapia-girona-cat');

    const scriptId = 'faq-schema-terapia-girona-cat';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.pregunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.respuesta,
        },
      })),
    });

    window.scrollTo(0, 0);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50/70 via-white to-emerald-50/50">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Presencial a Girona i modalitat en línia</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Acompanyament terapèutic a Girona amb TCC i PNL
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Un espai proper, confidencial i pràctic per gestionar l’ansietat, enfortir
              l’autoestima i desbloquejar situacions que avui et pesen, amb eines de{' '}
              <strong>Teràpia Cognitivoconductual (TCC)</strong> i{' '}
              <strong>Programació Neurolingüística (PNL)</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 text-base transition-colors"
              >
                Sol·licitar primera sessió a Girona
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

          <section className="mb-16">
            <div className="bg-white rounded-xl border border-emerald-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                En què et puc acompanyar?
              </h2>
              <p className="text-gray-700 mb-6">
                Cada procés s’adapta al teu ritme i als teus objectius concrets, abordant tant el
                malestar puntual com patrons que es repeteixen en el temps:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {temes.map((tema, index) => (
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

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Com treballem a Cuidado Emocional
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Claredat des de l’inici
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analitzem què et preocupa avui i definim objectius realistes sense judicis ni
                  etiquetes innecessàries.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-6">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Eines de TCC i PNL
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Apliquem tècniques pràctiques per regular pensaments repetitius, emocions
                  intenses i blocatges en el dia a dia.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-6">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Autonomia i seguiment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  L’objectiu és que incorporis recursos propis per sentir-te més segura o segur i
                  amb més benestar a mitjà i llarg termini.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-emerald-700" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                Preguntes freqüents sobre teràpia a Girona
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

          <section className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-2xl p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              En parlem?
            </h2>
            <p className="text-emerald-50 max-w-2xl mx-auto mb-6">
              Atenció presencial a Girona i en línia de dilluns a divendres de 9:00 a 20:00.
              Escriu-me o truca’m sense compromís per resoldre qualsevol dubte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-md bg-white text-emerald-800 hover:bg-emerald-50 font-semibold px-6 py-3 transition-colors"
              >
                Anar al formulari de contacte
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
              <span>Sessions en català i castellà</span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
