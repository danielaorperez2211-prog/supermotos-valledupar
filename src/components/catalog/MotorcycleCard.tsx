import Link from "next/link";
import type { Motorcycle } from "@/data/motorcycles";
import { ArrowRight } from "./icons";

export function MotorcycleCard({
  motorcycle,
  index = 0,
}: {
  motorcycle: Motorcycle;
  index?: number;
}) {
  return (
    <Link
      href={`/catalogo/catalogo/${motorcycle.slug}`} 
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-suzuki-blue/40 hover:shadow-[0_24px_48px_-24px_rgba(0,26,112,0.45)] animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      {/* image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="pointer-events-none absolute -right-6 -top-10 h-32 w-32 rounded-full bg-suzuki-blue/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          src={motorcycle.images[0]}
          alt={motorcycle.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-suzuki-navy/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
          {motorcycle.categoryName}
        </span>
      </div>

      {/* body */}
      <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-5 py-4">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-lg font-bold italic text-suzuki-ink">
            {motorcycle.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-slate-500">
            Desde <span className="text-suzuki-blue">{motorcycle.price}</span>
          </p>
        </div>
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-100 text-suzuki-navy transition-all duration-300 group-hover:bg-suzuki-blue group-hover:text-white">
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
