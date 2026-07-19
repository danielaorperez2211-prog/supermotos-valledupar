import type { Feature } from "@/data/motorcycles";
import { Icon } from "../icons";

export function FeaturesSection({
  features,
  name,
}: {
  features: Feature[];
  name: string;
}) {
  return (
    <section className="relative overflow-hidden bg-suzuki-navy-dark py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(0,160,233,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(0,160,233,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-suzuki-blue">
            Características
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold italic text-white sm:text-4xl">
            Todo lo que hace única a la {name}
          </h2>
          <p className="mt-4 text-white/60">
            Tecnología, diseño y rendimiento pensados para elevar cada
            experiencia de conducción.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:border-suzuki-blue/50 hover:bg-white/[0.07]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-suzuki-blue/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-suzuki-blue/15 text-suzuki-blue transition-colors duration-300 group-hover:bg-suzuki-blue group-hover:text-white">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="relative font-heading text-lg font-bold italic text-white">
                {f.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/60">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
