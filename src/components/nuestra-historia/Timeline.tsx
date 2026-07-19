"use client";

import { useEffect, useRef, useState } from "react";
import {
  historyData,
  type HistoryEntry,
} from "@/components/nuestra-historia/history-data";

/** Une clases condicionales sin dependencias externas. */
const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const SERIF = "var(--font-historia-serif), Georgia, serif";

function TimelineRow({
  entry,
  isLeft,
}: {
  entry: HistoryEntry;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const media = entry.image ? (
    <div className="shrink-0">
      <img
        src={entry.image}
        alt={entry.alt}
        loading="lazy"
        className="w-[160px] object-contain md:w-[250px]"
      />
    </div>
  ) : null;

  const text = (
    <div className="space-y-3 text-[15px] leading-[1.8] text-zinc-700">
      {entry.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );

  return (
    <li
      ref={ref}
      className="relative pb-20 pl-12 md:grid md:grid-cols-2 md:gap-0 md:pb-24 md:pl-0"
    >
      <span
        aria-hidden="true"
        className="absolute top-[18px] left-[15px] z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400 md:left-1/2"
      />

      {isLeft ? (
        <span
          aria-hidden="true"
          className="absolute top-[20px] right-1/2 hidden w-16 items-center md:flex"
        >
          <span className="h-0 w-0 border-y-4 border-r-[7px] border-y-transparent border-r-zinc-400" />
          <span className="h-px flex-1 border-t border-dashed border-zinc-300" />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="absolute top-[20px] left-1/2 hidden w-16 items-center md:flex"
        >
          <span className="h-px flex-1 border-t border-dashed border-zinc-300" />
          <span className="h-0 w-0 border-y-4 border-l-[7px] border-y-transparent border-l-zinc-400" />
        </span>
      )}

      <div
        className={cx(
          "md:min-w-0",
          isLeft
            ? "md:col-start-1 md:flex md:justify-start"
            : "md:col-start-2 md:flex md:justify-end"
        )}
      >
        <div
          className={cx(
            "w-full transition-all duration-700 ease-out will-change-transform md:w-[620px]",
            shown
              ? "translate-x-0 translate-y-0 opacity-100"
              : cx(
                  "translate-y-4 opacity-0",
                  isLeft ? "md:-translate-x-8" : "md:translate-x-8"
                )
          )}
        >
          <div
            className={cx(
              "oldstyle-nums leading-none tracking-tight text-zinc-900",
              isLeft ? "text-left" : "text-left md:text-right"
            )}
            style={{ fontFamily: SERIF }}
          >
            <span className="text-[clamp(4rem,8vw,6rem)]">
              {entry.year}
            </span>
          </div>

          <div
            className={cx(
              "mt-6 flex items-start gap-8",
              isLeft ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {media}
            {text}
          </div>
        </div>
      </div>
    </li>
  );
}

export function Timeline() {
  return (
    <section
      className="relative py-20 md:py-28"
      style={{
        background: `
          linear-gradient(to right,
            #f3f3f3 0%,
            #ffffff 15%,
            #ffffff 85%,
            #f3f3f3 100%
          ),
          url('/textures/aluminum.jpg')
        `,
        backgroundBlendMode: "lighten",
        backgroundSize: "cover",
      }}
    >
      <ol className="relative mx-auto max-w-[1700px] px-10">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[15px] w-px border-l border-dashed border-zinc-300 md:left-1/2 md:-translate-x-1/2"
        />

        {historyData.map((entry, index) => (
          <TimelineRow
            key={entry.id}
            entry={entry}
            isLeft={index % 2 === 0}
          />
        ))}
      </ol>
    </section>
  );
}