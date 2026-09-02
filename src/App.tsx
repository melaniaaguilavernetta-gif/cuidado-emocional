import { useEffect } from 'react';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { About } from '../About';
import { Services } from '../Services';
import { Benefits } from '../Benefits';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { ArticleAnsiedad } from './ArticleAnsiedad';
import { ArticleDialogoInterno } from './ArticleDialogoInterno';
import { ArticleDependencia } from './ArticleDependencia';
import { ArticleAgorafobia } from './ArticleAgorafobia';
import { ArticlePresionEstetica } from './ArticlePresionEstetica'; 
import { ArticleInsomnio } from './ArticleInsomnio';
import { ArticleMiedoCambio } from './ArticleMiedoCambio';
import { ArticleSomatizacion } from './ArticleSomatizacion';
import { ArticleEclipseEmocional } from './ArticleEclipseEmocional';
import { ArticleConvivencia } from './ArticleConvivencia';
import { ArticleSobrepensar } from './ArticleSobrepensar';
import { ArticleDepresionSonriente } from './ArticleDepresionSonriente';
import { ArticleEvitacion } from './ArticleEvitacion';
import { ArticlePensamientosIntrusivos } from './ArticlePensamientosIntrusivos';
import { ArticleAdiccionMovil } from './ArticleAdiccionMovil';
import { ArticleInvalidacion } from './ArticleInvalidacion';
import { ArticleMaltratoPsicologico } from './ArticleMaltratoPsicologico'; // <-- Nuevo import

export default function App() {
  const path = window.location.pathname;

  useEffect(() => {
    if (path === '/') {
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

  // RUTAS DE ARTÍCULOS
  if (path === '/ansiedad-trabajo') return <ArticleAnsiedad />;
  if (path === '/dialogo-interno') return <ArticleDialogoInterno />;
  if (path === '/dependencia') return <ArticleDependencia />;
  if (path === '/agorafobia') return <ArticleAgorafobia />;
  if (path === '/presion-estetica') return <ArticlePresionEstetica />;
  if (path === '/insomnio') return <ArticleInsomnio />;
  if (path === '/miedo-cambio') return <ArticleMiedoCambio />;
  if (path === '/somatizacion') return <ArticleSomatizacion />;
  if (path === '/eclipse-emocional') return <ArticleEclipseEmocional />;
  if (path === '/convivencia') return <ArticleConvivencia />;
  if (path === '/sobrepensar') return <ArticleSobrepensar />;
  if (path === '/depresion-sonriente') return <ArticleDepresionSonriente />;
  if (path === '/falsos-limites') return <ArticleEvitacion />;
  if (path === '/pensamientos-intrusivos') return <ArticlePensamientosIntrusivos />;
  if (path === '/adiccion-movil') return <ArticleAdiccionMovil />;
  if (path === '/invalidacion-emocional') return <ArticleInvalidacion />;
  
  // <-- Nueva ruta
  if (path === '/maltrato-psicologico') {
    return <ArticleMaltratoPsicologico />;
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
                Artículos y herramientas clínicas para tu bienestar emocional.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6"> 

              {/* ARTÍCULO 17: Maltrato Psicológico (NUEVO DESTACADO) */}
              <a href="/maltrato-psicologico" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Relaciones y Trauma</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El maltrato invisible: Cuando las heridas no se ven pero destruyen tu identidad</h3>
                <p className="text-gray-700 mb-4">Descubre cómo identificar el abuso emocional (gaslighting, aislamiento) y cómo reconstruir tu autoestima y seguridad con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 16: Invalidación Emocional (Pasó a gris) */}
              <a href="/invalidacion-emocional" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Autoestima y Autoconocimiento</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El daño de ser "demasiado sensible": Cómo la invalidación emocional destruye tu seguridad</h3>
                <p className="text-gray-700 mb-4">Descubre qué pasa en tu cerebro cuando te dicen constantemente que "estás exagerando" y cómo volver a confiar en tu criterio con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* Los demás artículos se mantienen debajo con formato gris estándar... */}
              <a href="/adiccion-movil" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Hábitos y Bienestar Digital</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El "chupete" de los adultos: Por qué usas el móvil para huir de tus propios pensamientos</h3>
                <p className="text-gray-700 mb-4">Descubre cómo el scroll infinito de las redes sociales actúa como un anestésico temporal y aprende a frenarlo con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>
              
              {/* Nota: Asegúrate de mantener aquí el resto de tus artículos (14 al 1) como en los códigos anteriores para no perderlos de la vista de la web */}

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
