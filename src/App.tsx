import { lazy, Suspense, useEffect } from 'react';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { About } from '../About';
import { Services } from '../Services';
import { Benefits } from '../Benefits';
import { Contact } from '../Contact';
import { Footer } from '../Footer';

const ArticleAnsiedad = lazy(() =>
  import('./ArticleAnsiedad').then((m) => ({ default: m.ArticleAnsiedad }))
);
const ArticleDialogoInterno = lazy(() =>
  import('./ArticleDialogoInterno').then((m) => ({ default: m.ArticleDialogoInterno }))
);
const ArticleDependencia = lazy(() =>
  import('./ArticleDependencia').then((m) => ({ default: m.ArticleDependencia }))
);
const ArticleAgorafobia = lazy(() =>
  import('./ArticleAgorafobia').then((m) => ({ default: m.ArticleAgorafobia }))
);
const ArticlePresionEstetica = lazy(() =>
  import('./ArticlePresionEstetica').then((m) => ({ default: m.ArticlePresionEstetica }))
);
const ArticleInsomnio = lazy(() =>
  import('./ArticleInsomnio').then((m) => ({ default: m.ArticleInsomnio }))
);
const ArticleMiedoCambio = lazy(() =>
  import('./ArticleMiedoCambio').then((m) => ({ default: m.ArticleMiedoCambio }))
);
const ArticleSomatizacion = lazy(() =>
  import('./ArticleSomatizacion').then((m) => ({ default: m.ArticleSomatizacion }))
);
const ArticleEclipseEmocional = lazy(() =>
  import('./ArticleEclipseEmocional').then((m) => ({ default: m.ArticleEclipseEmocional }))
);
const ArticleConvivencia = lazy(() =>
  import('./ArticleConvivencia').then((m) => ({ default: m.ArticleConvivencia }))
);
const ArticleSobrepensar = lazy(() =>
  import('./ArticleSobrepensar').then((m) => ({ default: m.ArticleSobrepensar }))
);
const ArticleDepresionSonriente = lazy(() =>
  import('./ArticleDepresionSonriente').then((m) => ({ default: m.ArticleDepresionSonriente }))
);
const ArticleEvitacion = lazy(() =>
  import('./ArticleEvitacion').then((m) => ({ default: m.ArticleEvitacion }))
);
const ArticlePensamientosIntrusivos = lazy(() =>
  import('./ArticlePensamientosIntrusivos').then((m) => ({
    default: m.ArticlePensamientosIntrusivos,
  }))
);
const ArticleAdiccionMovil = lazy(() =>
  import('./ArticleAdiccionMovil').then((m) => ({ default: m.ArticleAdiccionMovil }))
);
const ArticleInvalidacion = lazy(() =>
  import('./ArticleInvalidacion').then((m) => ({ default: m.ArticleInvalidacion }))
);
const ArticleMaltratoPsicologico = lazy(() =>
  import('./ArticleMaltratoPsicologico').then((m) => ({
    default: m.ArticleMaltratoPsicologico,
  }))
);
const ArticleVivienda = lazy(() =>
  import('./ArticleVivienda').then((m) => ({ default: m.ArticleVivienda }))
);
const ArticleCuandoIrATerapia = lazy(() =>
  import('./ArticleCuandoIrATerapia').then((m) => ({ default: m.ArticleCuandoIrATerapia }))
);
const TerapiaGirona = lazy(() =>
  import('./TerapiaGirona').then((m) => ({ default: m.TerapiaGirona }))
);

export default function App() {
  const path = window.location.pathname;

  useEffect(() => {
    if (path === '/' || path === '') {
      document.title = 'Cuidado Emocional | Terapeuta en Girona y Terapia Online (TCC y PNL)';

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Terapia presencial en Girona y online con enfoque en Terapia Cognitivo-Conductual (TCC) y PNL. Gestión de ansiedad, autoestima, dependencia emocional y estrés.'
        );
      }

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', 'https://www.cuidadoemocional.com/');

      const shouldScroll = sessionStorage.getItem('scrollToContact');
      if (shouldScroll === 'true') {
        sessionStorage.removeItem('scrollToContact');
        setTimeout(() => {
          const contactElement = document.getElementById('contacto');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    }
  }, [path]);

  // RUTAS DE ARTÍCULOS Y PÁGINAS (CARGA DIFERIDA)
  const renderArticle = () => {
    switch (path) {
      case '/ansiedad-trabajo':
        return <ArticleAnsiedad />;
      case '/dialogo-interno':
        return <ArticleDialogoInterno />;
      case '/dependencia':
        return <ArticleDependencia />;
      case '/agorafobia':
        return <ArticleAgorafobia />;
      case '/presion-estetica':
        return <ArticlePresionEstetica />;
      case '/insomnio':
        return <ArticleInsomnio />;
      case '/miedo-cambio':
        return <ArticleMiedoCambio />;
      case '/somatizacion':
        return <ArticleSomatizacion />;
      case '/eclipse-emocional':
        return <ArticleEclipseEmocional />;
      case '/convivencia':
        return <ArticleConvivencia />;
      case '/sobrepensar':
        return <ArticleSobrepensar />;
      case '/depresion-sonriente':
        return <ArticleDepresionSonriente />;
      case '/falsos-limites':
        return <ArticleEvitacion />;
      case '/pensamientos-intrusivos':
        return <ArticlePensamientosIntrusivos />;
      case '/adiccion-movil':
        return <ArticleAdiccionMovil />;
      case '/invalidacion-emocional':
        return <ArticleInvalidacion />;
      case '/maltrato-psicologico':
        return <ArticleMaltratoPsicologico />;
      case '/precariedad-vivienda':
        return <ArticleVivienda />;
      case '/cuando-ir-a-terapia':
        return <ArticleCuandoIrATerapia />;
      case '/terapia-girona':
        return <TerapiaGirona />;
      default:
        return null;
    }
  };

  const articleComponent = renderArticle();
  if (articleComponent) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white text-gray-700">
            Cargando artículo...
          </div>
        }
      >
        {articleComponent}
      </Suspense>
    );
  }

  return (
    <div className="size-full">
      <Header />
      <main id="inicio">
        <Hero />
        <About />
        <Services />
        <Benefits />

        {/* SECCIÓN DE BLOG Y RECURSOS */}
        <section id="blog" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog y Recursos</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Artículos y herramientas clínicas de TCC y PNL para tu bienestar emocional, en Girona y online.
              </p>
              <div className="mt-4">
                <a
                  href="/terapia-girona"
                  className="inline-block text-emerald-700 font-semibold hover:underline"
                >
                  Conoce nuestra terapia presencial en Girona (TCC y PNL) →
                </a>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {/* ARTÍCULO 19: Cuándo ir a terapia (NUEVO DESTACADO) */}
              <a
                href="/cuando-ir-a-terapia"
                className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">
                  Acompañamiento Emocional
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Cuándo ir a terapia: señales de que es buen momento para pedir apoyo
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubre cuándo empezar terapia sin esperar a tocar fondo y qué esperar en las primeras sesiones con TCC y PNL, en Girona y online.
                </p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 18: Vivienda y Salud Mental */}
              <a
                href="/precariedad-vivienda"
                className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">
                  Sociedad y Salud Mental
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  El impacto psicológico de la vivienda: Cuando tu casa no es un refugio seguro
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubre cómo la inestabilidad habitacional dispara tu estrés y aprende a desvincular tu valor personal de la crisis de la vivienda con TCC.
                </p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 17: Maltrato Psicológico */}
              <a
                href="/maltrato-psicologico"
                className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">
                  Relaciones y Trauma
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  El maltrato invisible: Cuando las heridas no se ven pero destruyen tu identidad
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubre cómo identificar el abuso emocional (gaslighting, aislamiento) y cómo reconstruir tu autoestima y seguridad con TCC y PNL.
                </p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 16: Invalidación Emocional */}
              <a
                href="/invalidacion-emocional"
                className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">
                  Autoestima y Autoconocimiento
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  El daño de ser "demasiado sensible": Cómo la invalidación emocional destruye tu seguridad
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubre qué pasa en tu cerebro cuando te dicen constantemente que "estás exagerando" y cómo volver a confiar en tu criterio con TCC y PNL.
                </p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>
            </div>

            {/* RESTO DE ARTÍCULOS DEL BLOG */}
            <div className="max-w-3xl mx-auto mt-12 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Todos los artículos publicados</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li>
                  <a
                    href="/adiccion-movil"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Bienestar Digital
                    </span>
                    <span className="font-semibold text-gray-900">Adicción al móvil y scroll infinito →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/pensamientos-intrusivos"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Ansiedad
                    </span>
                    <span className="font-semibold text-gray-900">Pensamientos intrusivos →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/falsos-limites"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Relaciones
                    </span>
                    <span className="font-semibold text-gray-900">Límites sanos vs. evitación →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/depresion-sonriente"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Bienestar
                    </span>
                    <span className="font-semibold text-gray-900">Depresión sonriente →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/sobrepensar"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Gestión mental
                    </span>
                    <span className="font-semibold text-gray-900">Cómo dejar de sobrepensar →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/convivencia"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Vínculos
                    </span>
                    <span className="font-semibold text-gray-900">Sobredosis de convivencia →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/eclipse-emocional"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Autoestima
                    </span>
                    <span className="font-semibold text-gray-900">El eclipse emocional →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/somatizacion"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Cuerpo y mente
                    </span>
                    <span className="font-semibold text-gray-900">Somatización del estrés →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/miedo-cambio"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Transiciones
                    </span>
                    <span className="font-semibold text-gray-900">Miedo al cambio e incertidumbre →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/insomnio"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Descanso
                    </span>
                    <span className="font-semibold text-gray-900">Insomnio y ansiedad nocturna →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/presion-estetica"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Autoimagen
                    </span>
                    <span className="font-semibold text-gray-900">Presión estética y espejo →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/agorafobia"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Fobias
                    </span>
                    <span className="font-semibold text-gray-900">Agorafobia y zona de seguridad →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/dependencia"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Relaciones
                    </span>
                    <span className="font-semibold text-gray-900">Dependencia emocional →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/dialogo-interno"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Crecimiento
                    </span>
                    <span className="font-semibold text-gray-900">Reprogramar tu voz crítica →</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ansiedad-trabajo"
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                      Estrés laboral
                    </span>
                    <span className="font-semibold text-gray-900">Ansiedad en el trabajo →</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE CONTACTO */}
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
