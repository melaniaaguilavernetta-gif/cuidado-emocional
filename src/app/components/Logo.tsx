import logoImage from "figma:asset/d1400fe5cc33ab3455df45b33b2d19796a8b6201.png";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export function Logo({ className = "h-12 w-auto", isScrolled = false }: LogoProps) {
  return (
    <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: '40px', height: '40px' }}>
      <img
        src={logoImage}
        alt="Cuidado Emocional"
        className="w-full h-full object-cover"
      />
    </div>
  );
}