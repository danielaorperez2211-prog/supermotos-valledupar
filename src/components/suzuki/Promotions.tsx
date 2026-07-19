"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { promos } from "@/lib/suzuki-data";

export function Promotions() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="promociones" className="scroll-mt-32 bg-white py-14">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <h2 className="mb-10 text-center font-display text-3xl font-bold tracking-tight text-suzuki-ink sm:text-4xl">
          PROMOCIONES &amp; NOVEDADES
        </h2>

        <div className="relative">
          {/* Arrows */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scroll(-1)}
            className="absolute -left-2 top-[130px] z-20 hidden h-12 w-12 items-center justify-center text-neutral-300 transition-colors hover:text-suzuki-red lg:flex xl:-left-10"
          >
            <ChevronLeft className="h-10 w-10" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => scroll(1)}
            className="absolute -right-2 top-[130px] z-20 hidden h-12 w-12 items-center justify-center text-neutral-300 transition-colors hover:text-suzuki-red lg:flex xl:-right-10"
          >
            <ChevronRight className="h-10 w-10" strokeWidth={1.4} />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {promos.map((p) => (
              <article
                key={p.name}
                data-card
                className="flex w-[85%] shrink-0 snap-start flex-col sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-[747/622] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-suzuki-ink">
                  {p.name}
                </h3>

                <div className="mt-2 text-right">
                  <p className="text-[11px] font-medium tracking-suzuki text-neutral-500">
                    PRECIO COP
                  </p>
                  <p className="font-display text-3xl font-bold leading-none text-suzuki-ink">
                    {p.price}
                  </p>
                  <p className="text-[11px] tracking-suzuki text-neutral-500">
                    IVA Incluido
                  </p>
                </div>

                <p className="mt-4 text-justify text-[12.5px] leading-6 text-neutral-500">
                  {p.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="mb-3 h-px w-full bg-neutral-300" />
                  <a
                    href={p.href}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-suzuki text-suzuki-ink transition-colors hover:text-suzuki-red"
                  >
                    <span className="text-suzuki-red">&rarr;</span> DESCUBRIR MÁS
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-neutral-400">
          Precio de venta sugerido al público. Vigencia del Válido del 1 al 31 de
          julio del 2026.
        </p>
      </div>
    </section>
  );
}
