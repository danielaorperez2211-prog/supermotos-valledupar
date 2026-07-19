import { assets } from "@/lib/suzuki-data";

function TechRing() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 h-full w-full text-neutral-300"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="200"
        cy="200"
        r="165"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.75" />
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i / 60) * Math.PI * 2;
        const r1 = 150;
        const r2 = i % 5 === 0 ? 138 : 144;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * r1}
            y1={200 + Math.sin(a) * r1}
            x2={200 + Math.cos(a) * r2}
            y2={200 + Math.sin(a) * r2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
      <line x1="35" y1="200" x2="120" y2="200" stroke="currentColor" strokeWidth="1" />
      <line x1="280" y1="200" x2="365" y2="200" stroke="currentColor" strokeWidth="1" />
      <circle cx="35" cy="200" r="4" fill="currentColor" />
      <circle cx="365" cy="200" r="4" fill="currentColor" />
    </svg>
  );
}

export function PostVenta() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-4 lg:grid-cols-2 xl:px-0">
        {/* Engine + ring */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          <TechRing />
          <img
            src={assets.engine}
            alt="Motor Suzuki"
            className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-6 inline-block border border-neutral-300 px-8 py-3 lg:mx-0">
            <p className="font-display text-3xl font-black leading-none tracking-tight text-[color:var(--suzuki-blue)]">
              SUZUKI
            </p>
            <p className="font-display text-2xl font-light leading-none tracking-widest text-suzuki-ink">
              POST VENTA
            </p>
            <p className="mt-1 text-xs italic text-neutral-500">
              más de lo que esperas
            </p>
          </div>

          <p className="font-display text-xl font-semibold leading-snug text-[color:var(--suzuki-blue)] sm:text-2xl">
            Para conocer más detalles acerca de estas campañas, por favor
            comunícate con nuestra
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="hidden h-px flex-1 border-t-2 border-dashed border-neutral-400 sm:block" />
            <span className="bg-neutral-700 px-4 py-1.5 font-display text-lg font-semibold tracking-tight text-white">
              línea gratuita de atención
            </span>
          </div>

          <p className="mt-3 font-display text-4xl font-bold tracking-tight text-suzuki-ink sm:text-5xl">
            01 8000117898
          </p>

          <a
            href="/seguridad"
            className="mt-6 inline-block bg-suzuki-ink px-10 py-3 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-suzuki-red"
          >
            VER TODAS
          </a>
        </div>
      </div>
    </section>
  );
}
