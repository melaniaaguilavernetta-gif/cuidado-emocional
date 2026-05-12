import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Logo y Redes */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Logo className="w-10 h-10" isScrolled={false} />
              </div>
              <span className="text-2xl">Cuidado Emocional</span>
            </div>
            <p className="text-gray-400 mb-4">
              Acompañamiento emocional profesional para tu bienestar y transformación personal.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61589322338702" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/emocionalcuidado/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/cuidado-emocional-7a6a66409/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/cuidaemocion" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Legal */}
         <div>
            <h4 className="text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/politica-privacidad.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de privacidad</a></li>
<li><a href="/terminos-condiciones.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Términos y condiciones</a></li>
<li><a href="/codigo-etico.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Código ético</a></li>
<li><a href="/preguntas-frecuentes.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

        {/* Línea inferior Copyright */}
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
          <p>&copy; 2026 Cuidado Emocional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
