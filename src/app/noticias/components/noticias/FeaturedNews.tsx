import type { NewsItem } from "./news-data";
import { DiscoverMore, NewsDate, ShareIcons } from "./NewsControls";

export function FeaturedNews({ item }: { item: NewsItem }) {
  return (
    <article>
      <div className="overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-auto w-full object-cover"
        />
      </div>

      <h2 className="mt-7 font-[family-name:var(--font-oswald)] text-2xl font-semibold leading-tight text-[#1a1c1e] md:text-[28px]">
        {item.title}
      </h2>

      <p className="mt-4 text-justify font-[family-name:var(--font-barlow)] text-[15px] leading-relaxed text-[#6b6d6e] md:text-base">
        {item.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-end gap-3">
        <NewsDate>{item.date}</NewsDate>
        <ShareIcons />
      </div>

      <div className="mt-4">
        <DiscoverMore />
      </div>
    </article>
  );
}
