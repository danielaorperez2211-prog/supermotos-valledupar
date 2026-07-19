import type { NewsItem } from "./news-data";
import { DiscoverMore, NewsDate, ShareIcons } from "./NewsControls";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="grid grid-cols-1 gap-5 py-9 sm:grid-cols-[220px_1fr] md:grid-cols-[260px_1fr] md:gap-9">
      {/* Imagen (no navega) */}
      <div className="overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col">
        <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold leading-tight text-[#1a1c1e] md:text-[22px]">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-justify font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[#6b6d6e]">
          {item.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-end gap-3 pt-5">
          <NewsDate>{item.date}</NewsDate>
          <ShareIcons />
        </div>

        <div className="mt-3">
          <DiscoverMore />
        </div>
      </div>
    </article>
  );
}
