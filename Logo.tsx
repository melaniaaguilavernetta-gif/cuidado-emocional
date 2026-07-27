interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export function Logo({ className = "h-12 w-auto", isScrolled = false }: LogoProps) {
  return (
    <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: '40px', height: '40px' }}>
      <img
        src="/logo.webp"
        alt="Cuidado Emocional"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
