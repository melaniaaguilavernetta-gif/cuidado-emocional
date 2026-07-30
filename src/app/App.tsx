import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// 1. Importamos tu nuevo artículo
import { ArticleAnsiedad } from './components/ArticleAnsiedad';

export default function App() {
  // 2. Leemos la dirección web que está visitando el usuario
  const path = window.location.pathname;

  // 3. Si la dirección es la del artículo, mostramos solo el artículo
  if (path === '/ansiedad-trabajo') {
    return <ArticleAnsiedad />;
  }

  // 4. Si no, mostramos tu página de inicio habitual
  return (
    <div className="size-full">
      <Header />
      <main id="inicio">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
