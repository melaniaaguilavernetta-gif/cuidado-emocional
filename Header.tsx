import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.pathname !== '/') {
      if (id === 'contacto') {
        sessionStorage.setItem('scrollToContact', 'true');
      }
      window.location.href = id === 'inicio' ? '/' : `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-black/25 backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
            aria-label="Cuidado Emocional - Ir al inicio"
          >
            <Logo className="h-10 w-auto" isScrolled={isScrolled} />
            <span
              className={`text-2xl font-semibold ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-sm'
              }`}
            >
              Cuidado Emocional
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Navegación principal" className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-1 py-0.5 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-emerald-700'
                    : 'text-white hover:text-emerald-200 drop-shadow-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu (Panel flotante con fondo blanco sólido y sombra) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl rounded-b-2xl py-4 px-6 mx-4">
            <nav aria-label="Menú móvil" className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 rounded-xl text-gray-800 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
