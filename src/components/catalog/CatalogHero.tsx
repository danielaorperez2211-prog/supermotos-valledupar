export function CatalogHero() {
  return (
    <section className="relative overflow-hidden bg-suzuki-navy">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/motos/3565799801.webp"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      {/* gradients + motion streaks */}
      <div className="absolute inset-0 bg-gradient-to-r from-suzuki-navy via-suzuki-navy/85 to-suzuki-blue-dark/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(0,160,233,0.35),transparent_55%)]" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[380px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 md:min-h-[440px] lg:px-8">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur animate-fade-up">
          Catálogo 2026
        </span>
        <h1 className="font-heading text-5xl font-extrabold italic tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up [animation-delay:120ms]">
          MOTOCICLETAS
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg animate-fade-up [animation-delay:220ms]">
          Descubre la gama completa Suzuki. Encuentra la moto perfecta para tu
          estilo de vida, desde la ciudad hasta la aventura más extrema.
        </p>
      </div>

      {/* angled bottom edge */}
<div
  aria-hidden
  className="absolute inset-x-0 bottom-0 h-10 bg-slate-950 [clip-path:polygon(0_100%,100%_100%,100%_0)]"
/>
    </section>
  );
}
