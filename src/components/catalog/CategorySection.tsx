import type { CategoryWithBikes } from "@/data/motorcycles";
import { MotorcycleCard } from "./MotorcycleCard";

export function CategorySection({
  category,
  reversed = false,
}: {
  category: CategoryWithBikes;
  reversed?: boolean;
}) {
  return (
    <section
      id={category.slug}
      className="scroll-mt-24 py-8 md:py-12"
      aria-labelledby={`heading-${category.slug}`}
    >
      {/* category banner */}
      <div
        className={`mx-auto mb-8 flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 md:mb-12 md:gap-8 lg:px-8 ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative aspect-[16/10] w-full max-w-md flex-none md:w-2/5">
          <img
            src={category.banner}
            alt={category.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
          />
        </div>

        <div className={`flex-1 text-center ${reversed ? "md:text-right" : "md:text-left"}`}>
          <h2
            id={`heading-${category.slug}`}
            className="bg-gradient-to-br from-suzuki-navy via-suzuki-navy to-suzuki-blue bg-clip-text font-heading text-5xl font-extrabold uppercase italic tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            {category.name}
          </h2>
          <p className="mt-2 text-base font-medium text-slate-500 sm:text-lg">
            {category.tagline}
          </p>
          <span className="mt-3 inline-block text-sm font-semibold uppercase tracking-widest text-suzuki-blue">
            {category.bikes.length}{" "}
            {category.bikes.length === 1 ? "modelo" : "modelos"}
          </span>
        </div>
      </div>

      {/* cards grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {category.bikes.map((bike, i) => (
          <MotorcycleCard key={bike.slug} motorcycle={bike} index={i} />
        ))}
      </div>
    </section>
  );
}
