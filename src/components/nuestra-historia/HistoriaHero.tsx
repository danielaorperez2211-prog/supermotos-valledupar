import { heroContent } from "@/components/nuestra-historia/history-data";

/**
 * Banner superior de la página "Nuestra Historia".
 * Imagen de fondo (tanque cromado con logo SUZUKI) + título + introducción.
 * No incluye header, navegación ni redes sociales del sitio original.
 */
export function HistoriaHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroContent.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-105 object-cover object-center"
        />
        {/* Oscurecido para legibilidad del título */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto flex min-h-[360px] max-w-6xl flex-col justify-end px-6 pb-12 pt-40 sm:min-h-[420px] sm:px-8 md:min-h-[500px] md:pb-16">
        <h1
          className="hh-fade-up text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[0.95] tracking-tight text-white"
          style={{ fontFamily: "var(--font-historia-serif), Georgia, serif" }}
        >
          {heroContent.title}
        </h1>
        <p className="hh-fade-up hh-delay mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          {heroContent.intro}
        </p>
      </div>

      {/* Animación de entrada (CSS puro, sin dependencias) */}
      <style>{`
        .hh-fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: hhFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hh-delay { animation-delay: 0.18s; }
        @keyframes hhFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hh-fade-up { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
