import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" isScrolled={false} />
              <span className="text-2xl font-semibold">Cuidado Emocional</span>
            </div>
            <p className="text-gray-300 mb-6">
              Acompañamiento emocional profesional para tu bienestar y transformación personal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61589322338702"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Cuidado Emocional en Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/emocionalcuidado/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Cuidado Emocional en Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/cuidado-emocional-7a6a66409/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conectar con Cuidado Emocional en LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/cuidaemocion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Cuidado Emocional en X (Twitter)"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://drive.google.com/file/d/1IIObYyoKq5NgJxDjULXg4sHwFZvS8KRk/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ZutzEm87EP8-Lu6pa3xk3Rg0ukX8Y_Hq/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1SmXRKZW8AovEHoOsBrFVPw_mopdayNso/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Código ético
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1jJzcx_qi436RRhbMU2CPBcFUg8cNTfPe/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Cuidado Emocional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
