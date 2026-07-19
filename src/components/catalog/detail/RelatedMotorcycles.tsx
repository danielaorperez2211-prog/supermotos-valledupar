import type { Motorcycle } from "@/data/motorcycles";
import { MotorcycleCard } from "../MotorcycleCard";

export function RelatedMotorcycles({ bikes }: { bikes: Motorcycle[] }) {
  if (bikes.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-suzuki-blue">
            Descubre más
          </p>
          <h2 className="mt-1 font-heading text-3xl font-extrabold italic text-suzuki-ink sm:text-4xl">
            También te puede interesar
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bikes.map((bike, i) => (
            <MotorcycleCard key={bike.slug} motorcycle={bike} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
