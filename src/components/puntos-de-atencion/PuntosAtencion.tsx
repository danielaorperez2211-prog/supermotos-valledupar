import {
  ctaCards,
  finder,
  mapData,
} from "@/components/puntos-de-atencion/puntos-data";

/** Une clases condicionales sin dependencias externas. */
const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

/**
 * Contenido principal de la página "Red Suzuki".
 * 1. Bloque "Encuentra tu red cercana" (texto + botones + mapa estático).
 * 2. Bloque de accesos rápidos (pre-footer, 4 columnas).
 *
 * Todo es una maqueta 100% visual: el mapa es una imagen estática con
 * marcadores decorativos y el "chrome" de Google Maps simulado; los botones
 * y controles se ven igual pero no ejecutan ninguna acción.
 */
export function PuntosAtencion() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Encuentra tu red cercana                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:gap-10 md:py-20">
          {/* Columna izquierda: buscador (decorativo) */}
          <div className="rs-fade flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-neutral-100 shadow-sm">
              <img
                src={finder.icon}
                alt=""
                aria-hidden="true"
                className="h-14 w-auto"
              />
            </div>

            <h2 className="mt-7 text-2xl font-bold uppercase tracking-tight text-[#2e2f30] sm:text-[32px]">
              {finder.title}
            </h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-neutral-500">
              {finder.subtitle}
            </p>

            <div className="mt-8 flex w-full max-w-[300px] flex-col gap-3">
              {finder.buttons.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="border border-[#2e2f30] px-5 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-[#2e2f30] transition-colors duration-200 hover:bg-[#2e2f30] hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Columna derecha: mapa estático (maqueta de Google Maps) */}
          <div className="rs-fade rs-fade-2">
            <div className="relative mx-auto aspect-[44/47] w-full max-w-[520px] overflow-hidden bg-[#a5d0f0] shadow-[0_1px_4px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
              {/* Terreno */}
              <img
                src={mapData.image}
                alt="Mapa de la red de talleres Suzuki en Colombia"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />

              {/* Marcadores rojos (decorativos) */}
              {mapData.markers.map((m, i) => (
                <span
                  key={`${m.top}-${m.left}-${i}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute"
                  style={{
                    top: `${m.top}%`,
                    left: `${m.left}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <img
                    src={mapData.marker}
                    alt=""
                    className="rs-pin h-5 w-auto drop-shadow"
                    style={{ animationDelay: `${i * 35}ms` }}
                  />
                </span>
              ))}

              {/* Chrome de Google Maps (estático) */}
              {/* Toggle Map / Satellite */}
              <div className="absolute left-2 top-2 flex overflow-hidden rounded-sm bg-white text-[11px] font-medium shadow">
                <span className="px-3 py-1.5 text-[#3c4043]">Map</span>
                <span className="px-3 py-1.5 text-[#5f6368]">Satellite</span>
              </div>

              {/* Botón pantalla completa */}
              <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-sm bg-white shadow">
                <svg
                  viewBox="0 0 18 18"
                  className="h-4 w-4 fill-[#666]"
                  aria-hidden="true"
                >
                  <path d="M0 0h7v2H2v5H0V0zm11 0h7v7h-2V2h-5V0zM16 11h2v7h-7v-2h5v-5zM2 11v5h5v2H0v-7h2z" />
                </svg>
              </div>

              {/* Controles de zoom */}
              <div className="absolute bottom-14 right-2 flex flex-col overflow-hidden rounded-sm bg-white shadow">
                <span className="flex h-8 w-8 items-center justify-center border-b border-neutral-200 text-lg leading-none text-[#666]">
                  +
                </span>
                <span className="flex h-8 w-8 items-center justify-center text-lg leading-none text-[#666]">
                  −
                </span>
              </div>

              {/* Logo Google */}
              <img
                src={mapData.googleLogo}
                alt="Google"
                className="absolute bottom-2 left-2 h-[17px] w-auto opacity-90 drop-shadow-[0_0_2px_rgba(255,255,255,0.9)]"
                draggable={false}
              />

              {/* Atribución */}
              <span className="absolute bottom-1 right-2 text-[9px] leading-tight text-[#5f6368] [text-shadow:0_0_2px_rgba(255,255,255,0.9)]">
                {mapData.attribution}
                <span className="ml-1 underline">Terms</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Accesos rápidos (pre-footer)                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-neutral-100 bg-white">
        <div className="mx-auto grid max-w-6xl gap-y-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
          {ctaCards.map((card, i) => (
            <div
              key={card.title}
              className={cx(
                "px-2 md:px-6",
                i > 0 && "md:border-l md:border-neutral-200",
              )}
            >
              <div className="flex items-start gap-3">
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-9 w-auto shrink-0"
                />
                <h3 className="text-[15px] font-bold uppercase leading-snug tracking-tight text-[#2e2f30]">
                  {card.title}
                </h3>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-500">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Animaciones (CSS puro, encapsuladas) */}
      <style>{`
        .rs-fade {
          opacity: 0;
          transform: translateY(24px);
          animation: rsFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .rs-fade-2 { animation-delay: 0.15s; }
        @keyframes rsFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .rs-pin {
          opacity: 0;
          transform: translateY(-14px);
          animation: rsPinDrop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes rsPinDrop {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rs-fade, .rs-pin {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
