"use client";

import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";

export function Gallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const many = images.length > 1;

  const go = useCallback(
    (dir: number) => {
      setActive((prev) => (prev + dir + images.length) % images.length);
    },
    [images.length],
  );

  return (
    <section className="bg-[#020817] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Galería
          </p>

          <h2 className="mt-1 font-heading text-3xl font-extrabold italic text-white sm:text-4xl">
            Explórala de cerca
          </h2>
        </div>

        {/* Imagen principal */}
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,140,255,0.15),transparent_60%)]" />

          <img
            key={active}
            src={images[active]}
            alt={`${name} — imagen ${active + 1}`}
            className="absolute inset-0 h-full w-full animate-fade-in object-contain p-6"
          />

          {many && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg transition-all hover:bg-sky-500"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg transition-all hover:bg-sky-500"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white">
                {active + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {many && (
          <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-7">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver imagen ${i + 1}`}
                className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-slate-900 transition-all ${
                  active === i
                    ? "border-sky-500 ring-2 ring-sky-500/30"
                    : "border-slate-700 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-2"
                />
              </button>
            ))}
          </div>
        )}

        <p className="mt-6 text-center text-sm italic text-slate-400">
          *Los colores de nuestros modelos son ilustrativos y pueden cambiar sin
          previo aviso.
        </p>
      </div>
    </section>
  );
}