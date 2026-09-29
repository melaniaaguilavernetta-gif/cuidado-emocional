// ... [Mismos imports de antes] ...
import { ArticleInvalidacion } from './ArticleInvalidacion';
import { ArticleMaltratoPsicologico } from './ArticleMaltratoPsicologico';
import { ArticleVivienda } from './ArticleVivienda'; // <-- Nuevo import

export default function App() {
  const path = window.location.pathname;

  // ... [El mismo código del useEffect] ...

  // RUTAS DE ARTÍCULOS
  if (path === '/ansiedad-trabajo') return <ArticleAnsiedad />;
  // ... [Mismas rutas de antes] ...
  if (path === '/maltrato-psicologico') return <ArticleMaltratoPsicologico />;
  
  // <-- Nueva ruta
  if (path === '/precariedad-vivienda') {
    return <ArticleVivienda />;
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

              {/* ARTÍCULO 18: Vivienda y Salud Mental (NUEVO DESTACADO) */}
              <a href="/precariedad-vivienda" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Sociedad y Salud Mental</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El impacto psicológico de la vivienda: Cuando tu casa no es un refugio seguro</h3>
                <p className="text-gray-700 mb-4">Descubre cómo la inestabilidad habitacional dispara tu estrés y aprende a desvincular tu valor personal de la crisis de la vivienda con TCC.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 17: Maltrato Psicológico (Pasó a gris) */}
              <a href="/maltrato-psicologico" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Relaciones y Trauma</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El maltrato invisible: Cuando las heridas no se ven pero destruyen tu identidad</h3>
                <p className="text-gray-700 mb-4">Descubre cómo identificar el abuso emocional (gaslighting, aislamiento) y cómo reconstruir tu autoestima y seguridad con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ... [Aquí seguirían los Artículos del 16 al 1 exactamente igual que los tenías] ... */}

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
