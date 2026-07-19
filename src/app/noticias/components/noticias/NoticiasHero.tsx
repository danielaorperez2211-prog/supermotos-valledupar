const HERO_IMAGE = "/motos/noticias/hero-racing.jpg"; 

export function NoticiasHero() {
  return (
    <section className="relative h-[280px] w-full overflow-hidden md:h-[380px]">
      {/* Fondo de carreras Suzuki */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      {/* Degradado para dar profundidad y resaltar la caja */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Caja NOTICIAS */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="bg-[#f6f4ef] px-12 py-6 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] md:px-24 md:py-8">
          <h1 className="font-[family-name:var(--font-oswald)] text-5xl font-bold uppercase leading-none tracking-tight text-[#E2001A] md:text-[86px]">
            Noticias
          </h1>
        </div>
      </div>
    </section>
  );
}
