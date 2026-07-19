"use client";

import { useState } from "react";
import type { Motorcycle, SpecGroup } from "@/data/motorcycles";
import { Minus, Plus } from "../icons";

function AccordionItem({
  group,
  open,
  onToggle,
}: {
  group: SpecGroup;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`flex w-full items-center justify-between px-6 py-4 text-left transition-colors ${
          open ? "bg-suzuki-blue text-white" : "bg-white text-suzuki-navy hover:bg-slate-50"
        }`}
      >
        <span className="font-heading text-lg font-bold uppercase italic tracking-wide">
          {group.group}
        </span>
        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full ${
            open ? "bg-white/20 text-white" : "bg-slate-100 text-suzuki-navy"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <dl className="divide-y divide-slate-100 px-6 py-2">
            {group.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="font-heading text-sm font-bold italic text-suzuki-ink">
                  {item.label}
                </dt>
                <dd className="text-sm text-slate-500 sm:text-right">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export function SpecsAccordion({ motorcycle }: { motorcycle: Motorcycle }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-suzuki-blue">
            Especificaciones
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold italic text-suzuki-ink sm:text-4xl">
            La perfección a detalle
          </h2>
          <p className="mt-4 text-slate-500">
            Cada componente de la {motorcycle.name} ha sido diseñado con
            precisión para ofrecerte el máximo rendimiento y fiabilidad.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-suzuki-navy px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-suzuki-blue" />
            <span className="font-heading text-sm font-bold italic text-white">
              {motorcycle.name}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {motorcycle.specifications.map((group, i) => (
            <AccordionItem
              key={group.group}
              group={group}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
