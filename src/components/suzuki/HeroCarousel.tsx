"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroBanners } from "@/lib/suzuki-data";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const count = heroBanners.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative mx-auto aspect-[1280/633] max-h-[640px] w-full max-w-[1280px]">
        {heroBanners.map((b, i) => (
          <a
            key={b.name}
            href={b.href}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              i === index ? "z-10 opacity-100" : "z-0 opacity-0",
            )}
          >
            <img
              src={b.img}
              alt={`${b.name} banner`}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </a>
        ))}

        {/* Arrows */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-black/25 text-white transition-colors hover:bg-black/50 sm:left-4"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-black/25 text-white transition-colors hover:bg-black/50 sm:right-4"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[90%] -translate-x-1/2 flex-wrap justify-center gap-1.5">
          {heroBanners.map((b, i) => (
            <button
              key={b.name}
              type="button"
              aria-label={`Ir al banner ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                i === index ? "w-5 bg-suzuki-red" : "bg-white/60 hover:bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
