import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Benefits } from './Benefits';
import { Contact } from './Contact';
import { Footer } from './Footer';
// Importamos tu nuevo artículo directamente desde la misma carpeta
import { ArticleAnsiedad } from './ArticleAnsiedad';

export default function App() {
  const path = window.location.pathname;

  // Si la dirección es la del artículo, mostramos solo el artículo
  if (path === '/ansiedad-trabajo') {
    return <ArticleAnsiedad />;
  }

  // Si no, mostramos tu página de inicio habitual
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
            
            <div className="max-w-3xl mx-auto">
              <a href="/ansiedad-trabajo" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Gestión de la Ansiedad</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cómo calmar la ansiedad en el trabajo: 5 técnicas prácticas</h3>
                <p className="text-gray-700 mb-4">Descubre herramientas de gestión emocional y TCC que puedes aplicar sin moverte de tu silla para recuperar la calma.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
