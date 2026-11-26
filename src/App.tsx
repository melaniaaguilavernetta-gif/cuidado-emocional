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
const TerapiaOnline = lazy(() =>
  import('./TerapiaOnline').then((m) => ({ default: m.TerapiaOnline }))
);
const TerapiaGironaCat = lazy(() =>
  import('./TerapiaGironaCat').then((m) => ({ default: m.TerapiaGironaCat }))
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
      case '/terapia-online':
        return <TerapiaOnline />;
      case '/terapia-girona-cat':
        return <TerapiaGironaCat />;
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
            Cargando contenido...
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
            <div className="text-center
