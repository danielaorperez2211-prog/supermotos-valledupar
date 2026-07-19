"use client";

import { type ReactNode, useMemo, useState } from "react";
import { FeaturedNews } from "./FeaturedNews";
import { NewsCard } from "./NewsCard";
import {
  type CategoryFilter,
  categories,
  featuredNews,
  latestNews,
} from "./news-data";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <span className="inline-block bg-[#E2001A] px-6 py-2 font-[family-name:var(--font-oswald)] text-base font-semibold uppercase tracking-wide text-white md:text-lg">
        {children}
      </span>
    </div>
  );
}

export function NoticiasSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Todas");
  const [query, setQuery] = useState("");

  const q = normalize(query.trim());

  const matches = useMemo(() => {
    return (item: (typeof latestNews)[number]) => {
      const categoryOk =
        activeCategory === "Todas" || item.category === activeCategory;
      const queryOk =
        q === "" ||
        normalize(item.title).includes(q) ||
        normalize(item.excerpt).includes(q);
      return categoryOk && queryOk;
    };
  }, [activeCategory, q]);

  const featuredVisible = matches(featuredNews);
  const filtered = latestNews.filter(matches);
  const nothingFound = !featuredVisible && filtered.length === 0;

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6">
      {/* Barra de filtros (filtrado client-side, sin rutas ni navegación) */}
      <div className="flex flex-col gap-5 border-b border-neutral-200 py-7 md:flex-row md:items-center md:justify-between md:py-8">
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {categories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-1 font-[family-name:var(--font-barlow)] text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active
                    ? "text-[#E2001A]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {cat}
                {active && (
                  <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#E2001A]" />
                )}
              </button>
            );
          })}
        </nav>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-stretch"
          role="search"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar noticia…"
            aria-label="Buscar noticia"
            className="w-full border border-r-0 border-neutral-300 bg-white px-4 py-2 font-[family-name:var(--font-barlow)] text-sm text-neutral-800 outline-none transition-colors focus:border-neutral-500 md:w-56"
          />
          <button
            type="submit"
            className="shrink-0 bg-[#E2001A] px-5 py-2 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#c50016]"
          >
            Buscar
          </button>
        </form>
      </div>

      <div className="py-10 md:py-14">
        {featuredVisible && (
          <section>
            <SectionLabel>Noticia destacada</SectionLabel>
            <div className="mt-6">
              <FeaturedNews item={featuredNews} />
            </div>
          </section>
        )}

        {!nothingFound && (
          <section className={featuredVisible ? "mt-16" : ""}>
            <SectionLabel>Últimas noticias</SectionLabel>
            {filtered.length > 0 ? (
              <div className="mt-2 divide-y divide-neutral-200 border-t border-neutral-200">
                {filtered.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <p className="mt-10 text-center font-[family-name:var(--font-barlow)] text-neutral-500">
                No hay noticias en esta categoría.
              </p>
            )}
          </section>
        )}

        {nothingFound && (
          <p className="py-16 text-center font-[family-name:var(--font-barlow)] text-neutral-500">
            No se encontraron noticias para tu búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
