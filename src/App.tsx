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
import { ArticleAgorafobia } from './ArticleAgorafobia'; // <-- 1. Importamos el nuevo artículo

export default function App() {
  const path = window.location.pathname;

  // Esto detecta si venimos del botón del artículo y baja automáticamente al contacto
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

  // RUTAS DE TUS ARTÍCULOS
  if (path === '/ansiedad-trabajo') {
    return <ArticleAnsiedad />;
  }
  
  if (path === '/dialogo-interno') {
    return <ArticleDialogoInterno />;
  }

  if (path === '/dependencia') {
    return <ArticleDependencia />;
  }

  // <-- 2. Añadimos la ruta de tu nuevo artículo
  if (path === '/agorafobia') {
    return <ArticleAgorafobia />;
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
                Artículos y herramientas prácticas para tu bienestar emocional.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6"> 
              
              {/* 3. ARTÍCULO 4: Agorafobia (NUEVO) */}
              <a href="/agorafobia" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Fobias y Ansiedad</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Sientes que no puedes alejarte "demasiado" de tu zona de seguridad?</h3>
                <p className="text-gray-700 mb-4">Descubre cómo la agorafobia se esconde en el miedo a viajar o alejarte, y cómo recuperar tu libertad combinando TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 3: Dependencia Emocional (Pasó a gris) */}
              <a href="/dependencia" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Relaciones y Dependencia</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Confundir apego con amor: Por qué poner límites no aleja a las personas (te salva a ti)</h3>
                <p className="text-gray-700 mb-4">Aprende a diferenciar el amor sano de la dependencia emocional y descubre cómo la TCC y la PNL pueden ayudarte a recuperar tu identidad.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>
              
              {/* ARTÍCULO 2: Diálogo Interno */}
              <a href="/dialogo-interno" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Crecimiento Personal</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Le hablarías a un amigo como te hablas a ti mismo/a?</h3>
                <p className="text-gray-700 mb-4">Descubre cómo reprogramar tu voz crítica y transformar tu diálogo interno utilizando herramientas prácticas de TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 1: Ansiedad */}
              <a href="/ansiedad-trabajo" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Gestión de la Ansiedad</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cómo calmar la ansiedad en el trabajo: 5 técnicas prácticas</h3>
                <p className="text-gray-700 mb-4">Descubre herramientas de gestión emocional y TCC que puedes aplicar sin moverte de tu silla para recuperar la calma.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

            </div>
          </div>
        </section>

        {/* SECCIÓN DE CONTACTO CON SU ID */}
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
