import { CatalogHero } from "@/components/catalog/CatalogHero";
import { CategorySection } from "@/components/catalog/CategorySection";
import { QuoteBanner } from "@/components/catalog/QuoteBanner";
import { getCategoriesWithBikes } from "@/data/motorcycles";

export default function CatalogoPage() {
  const categories = getCategoriesWithBikes();

  return (
    <main className="bg-white">
      <CatalogHero />

      {/* intro */}
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-14 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl font-extrabold italic tracking-tight text-suzuki-navy sm:text-5xl">
          ELIGE TU ESTILO
        </h2>
        <p className="mt-3 font-heading text-xl font-bold italic text-suzuki-ink/70 sm:text-2xl">
          Hay una Suzuki esperando por ti
        </p>
        <span className="mx-auto mt-5 block h-1 w-24 rounded-full bg-suzuki-blue" />
      </section>

      {/* categories */}
      <div className="divide-y divide-slate-100">
        {categories.map((category, i) => (
          <CategorySection
            key={category.slug}
            category={category}
            reversed={i % 2 === 1}
          />
        ))}
      </div>

      <div className="mt-4">
        <QuoteBanner />
      </div>
    </main>
  );
}
