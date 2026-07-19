import type { ReactNode } from "react";

const SUZUKI_RED = "#E2001A";

/**
 * Íconos de compartir (solo visuales). No navegan a ningún sitio.
 */
export function ShareIcons() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3b5998] text-white transition-transform duration-200 hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.6H6.61v3.56h3.07V22h3.68v-9.14h3.06l.46-3.56h-3.52V7.05c0-1.03.29-1.73 1.76-1.73z" />
        </svg>
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
          <path d="M18.9 1.6h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-6 6.8H1.6l7.7-8.8L1.1 1.6h6.8l4.7 6.2 5.3-6.2zm-1.2 18.6h1.8L7.1 3.4H5.2l12.5 16.8z" />
        </svg>
      </span>
    </div>
  );
}

/**
 * "DESCUBRIR MÁS" — elemento visual (no crea enlaces ni navega a detalle).
 */
export function DiscoverMore() {
  return (
    <span
      className="group inline-flex select-none items-center gap-2 font-[family-name:var(--font-barlow)] text-[13px] font-semibold uppercase tracking-[0.08em]"
      style={{ color: SUZUKI_RED }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="currentColor"
      >
        <path d="M13 4l8 8-8 8v-5H3v-6h10V4z" />
      </svg>
      Descubrir más
    </span>
  );
}

/** Fecha en el estilo del portal Suzuki. */
export function NewsDate({ children }: { children: ReactNode }) {
  return (
    <time className="font-[family-name:var(--font-barlow)] text-sm text-[#3b3d3f]">
      {children}
    </time>
  );
}
