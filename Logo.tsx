interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export function Logo({ className = "h-12 w-auto", isScrolled = false }: LogoProps) {
  return (
    <div
      className={`rounded-full overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: "40px", height: "40px" }}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <img
        src="/logo.webp"
        alt=""
        width={40}
        height={40}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
