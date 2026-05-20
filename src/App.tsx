import { Header } from './app/components/Header';
import { Hero } from './app/components/Hero';
import { About } from './app/components/About';
import { Services } from './app/components/Services';
import { Benefits } from './app/components/Benefits';
import { Contact } from './app/components/Contact';
import { Footer } from './app/components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
