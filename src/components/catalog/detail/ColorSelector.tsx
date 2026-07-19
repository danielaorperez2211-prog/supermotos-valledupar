"use client";

import { useState } from "react";
import type { ColorOption } from "@/data/motorcycles";
import { Check } from "../icons";

export function ColorSelector({ colors }: { colors: ColorOption[] }) {
  const [selected, setSelected] = useState(0);
  const active = colors[selected];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <div className="grid items-center gap-8 p-8 sm:p-12 md:grid-cols-2">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-suzuki-blue">
                Colores disponibles
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold italic text-suzuki-ink sm:text-4xl">
                Elige tu estilo
              </h2>
              <p className="mt-4 text-slate-500">
                Selecciona el color que mejor va contigo. Cada acabado está
                pensado para resaltar el carácter de tu Suzuki.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {colors.map((color, i) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-label={color.name}
                    aria-pressed={selected === i}
                    title={color.name}
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-offset-2 transition-all ${
                      selected === i
                        ? "ring-suzuki-blue"
                        : "ring-slate-200 hover:ring-slate-300"
                    }`}
                    style={{
                      background: color.hex2
                        ? `linear-gradient(135deg, ${color.hex} 50%, ${color.hex2} 50%)`
                        : color.hex,
                    }}
                  >
                    {selected === i && (
                      <Check
                        className="h-5 w-5 drop-shadow"
                        style={{
                          color: isLight(color.hex) ? "#14225c" : "#ffffff",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-suzuki-navy p-10 text-center">
              <span
                className="mb-5 h-24 w-24 rounded-full ring-4 ring-white/20"
                style={{
                  background: active.hex2
                    ? `linear-gradient(135deg, ${active.hex} 50%, ${active.hex2} 50%)`
                    : active.hex,
                }}
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-suzuki-blue">
                Color seleccionado
              </p>
              <p className="mt-1 font-heading text-2xl font-bold italic text-white">
                {active.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Rough luminance check so the check-mark stays legible on light swatches. */
function isLight(hex: string): boolean {
  const c = hex.replace("#", "");
  if (c.length !== 6) return false;
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}
