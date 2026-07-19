import type { Highlight } from "@/data/motorcycles";
import { Icon } from "../icons";

export function HighlightRow({ highlights }: { highlights: Highlight[] }) {
  return (
    <section className="border-b border-slate-100 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="group flex flex-col items-center text-center md:items-start md:text-left"
          >
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-suzuki-navy/5 text-suzuki-navy transition-colors duration-300 group-hover:bg-suzuki-blue group-hover:text-white">
              <Icon name={h.icon} className="h-7 w-7" />
            </span>
            <h3 className="font-heading text-xl font-bold italic text-suzuki-ink">
              {h.title}
            </h3>
            <p className="mt-2 max-w-xs text-slate-500">{h.description}</p>
            <span className="mt-4 h-0.5 w-16 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-24 group-hover:bg-suzuki-blue" />
          </div>
        ))}
      </div>
    </section>
  );
}
