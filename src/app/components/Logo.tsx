import logoImage from "figma:asset/d1400fe5cc33ab3455df45b33b2d19796a8b6201.png";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export function Logo({ className = "h-12 w-auto", isScrolled = false }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="Cuidado Emocional" 
      className={className}
    />
  );
}