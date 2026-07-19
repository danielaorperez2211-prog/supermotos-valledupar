import type { KeySpec, Motorcycle } from "@/data/motorcycles";
import { Icon } from "../icons";

function StatCard({ spec }: { spec: KeySpec }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-suzuki-blue/40 hover:shadow-xl">
      <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-suzuki-blue/10 text-suzuki-blue">
        <Icon name={spec.icon} className="h-6 w-6" />
      </span>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        {spec.label}
      </p>
      <p className="mt-2 font-heading text-4xl font-extrabold italic leading-none text-suzuki-navy">
        {spec.value}
        <span className="ml-1 align-baseline text-lg font-bold text-suzuki-blue">
          {spec.unit}
        </span>
      </p>
    </div>
  );
}

export function KeySpecs({ motorcycle }: { motorcycle: Motorcycle }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-suzuki-blue">
          {motorcycle.description.heading}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold italic text-suzuki-ink sm:text-4xl">
          {motorcycle.description.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          {motorcycle.description.body}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {motorcycle.keySpecs.map((spec) => (
          <StatCard key={spec.label} spec={spec} />
        ))}
      </div>
    </section>
  );
}
