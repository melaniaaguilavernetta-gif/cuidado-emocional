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
import { ArticleAdiccionMovil } from './ArticleAdiccionMovil'; // <-- Nuevo import

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
  
  // <-- Nueva ruta
  if (path === '/adiccion-movil') {
    return <ArticleAdiccionMovil />;
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

              {/* ARTÍCULO 15: Adicción al móvil (NUEVO DESTACADO) */}
              <a href="/adiccion-movil" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Hábitos y Bienestar Digital</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El "chupete" de los adultos: Por qué usas el móvil para huir de tus propios pensamientos</h3>
                <p className="text-gray-700 mb-4">Descubre cómo el scroll infinito de las redes sociales actúa como un anestésico temporal y aprende a frenarlo con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 14: Pensamientos Intrusivos (Pasó a gris) */}
              <a href="/pensamientos-intrusivos" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Ansiedad Severa y Fobias</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cuando tu propia mente te aterroriza: El sufrimiento de los pensamientos intrusivos</h3>
                <p className="text-gray-700 mb-4">Descubre por qué la ansiedad severa provoca imágenes mentales aterradoras y cómo usar la defusión cognitiva (TCC) para quitarles el poder.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 13: Falsos Límites / Evitación */}
              <a href="/falsos-limites" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Relaciones y Comunicación</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">La trampa de "cortar por lo sano": Por qué huir del conflicto no es poner límites</h3>
                <p className="text-gray-700 mb-4">Descubre por qué bloquear o alejarte a la mínima no es autocuidado, sino pura evitación emocional, y cómo entrenar tu comunicación asertiva.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>
              
              {/* ARTÍCULO 12: Depresión Sonriente */}
              <a href="/depresion-sonriente" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Bienestar y Emociones</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El peso de la "depresión sonriente": Cuando fingir que estás bien te deja sin fuerzas</h3>
                <p className="text-gray-700 mb-4">Descubre por qué las personas altamente funcionales esconden su dolor, y cómo TCC y PNL te ayudan a quitarte la máscara de la autoexigencia.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 11: Sobrepensar */}
              <a href="/sobrepensar" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Gestión de la Ansiedad</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">La trampa de sobrepensar: Por qué darle mil vueltas a todo no te ayuda a decidir mejor</h3>
                <p className="text-gray-700 mb-4">Descubre cómo la parálisis por análisis drena tu energía y cómo romper el bucle de la rumiación utilizando técnicas de TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 10: Convivencia */}
              <a href="/convivencia" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Relaciones y Comunicación</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">La sobredosis de convivencia: Por qué pedir espacio en vacaciones no significa quererse menos</h3>
                <p className="text-gray-700 mb-4">Descubre cómo el exceso de tiempo juntos sin límites asfixia las relaciones, y cómo usar TCC y PNL para comunicar tus necesidades sin culpa.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 9: Eclipse Emocional */}
              <a href="/eclipse-emocional" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Autoestima y Autoconocimiento</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El "Eclipse Emocional": Qué hacer cuando la ansiedad oculta tu claridad</h3>
                <p className="text-gray-700 mb-4">Descubre cómo tus miedos pueden ocultar temporalmente tu verdadero potencial y cómo despejar esa sombra utilizando TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 8: Somatización */}
              <a href="/somatizacion" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Bienestar Físico y Emocional</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cuando tu cuerpo grita lo que tu boca calla: Entendiendo la somatización</h3>
                <p className="text-gray-700 mb-4">Descubre cómo el dolor físico recurrente puede ser una señal de emociones reprimidas y cómo sanarlo desde la raíz con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 7: Miedo al Cambio */}
              <a href="/miedo-cambio" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Crecimiento Personal</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">El vértigo de saltar: Por qué nos aterra el cambio (y cómo superarlo)</h3>
                <p className="text-gray-700 mb-4">Descubre por qué tu cerebro prefiere el malestar conocido antes que la incertidumbre y cómo perder el miedo con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 6: Insomnio */}
              <a href="/insomnio" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Descanso y Bienestar</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Por qué no puedes dormir (y cómo apagar tu mente por la noche)</h3>
                <p className="text-gray-700 mb-4">Descubre por qué tu mente se activa de madrugada y cómo reprogramar tu descanso reeducando a tu sistema nervioso con TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 5: Presión Estética */}
              <a href="/presion-estetica" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Autoestima y Autoimagen</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Cuánta energía mental gastas al día peleándote con el espejo?</h3>
                <p className="text-gray-700 mb-4">Descubre cómo la presión estética agota tu energía y cómo hacer las paces con tu imagen usando TCC y gestión emocional.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 4: Agorafobia */}
              <a href="/agorafobia" className="block bg-emerald-50 rounded-2xl p-8 border-l-4 border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-emerald-700 font-semibold mb-2 tracking-wide uppercase text-sm">Fobias y Ansiedad</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Sientes que no puedes alejarte "demasiado" de tu zona de seguridad?</h3>
                <p className="text-gray-700 mb-4">Descubre cómo la agorafobia se esconde en el miedo a viajar o alejarte, y cómo recuperar tu libertad combinando TCC y PNL.</p>
                <span className="text-emerald-700 font-medium hover:underline">Leer artículo completo →</span>
              </a>

              {/* ARTÍCULO 3: Dependencia Emocional */}
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

        {/* SECCIÓN DE CONTACTO */}
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
