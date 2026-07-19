import type { ReactElement, SVGProps } from "react";

/**
 * Lightweight, dependency-free icon set for the Suzuki catalog.
 * Every icon inherits `currentColor` so it can be styled with Tailwind text-* utilities.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Minus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const Send = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...p}
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.28.86 5.84 2.42a8.22 8.22 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.26 8.25a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.55 3.7-8.25 8.25-8.25Zm-4.53 4.5c-.21 0-.56.08-.85.39-.29.31-1.11 1.09-1.11 2.65s1.14 3.07 1.29 3.28c.16.21 2.2 3.36 5.34 4.71.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.15-.19.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.7-.96-2.32-.25-.61-.51-.53-.71-.54-.18-.01-.39-.01-.6-.01Z" />
  </svg>
);

/* ---- feature / spec icons ---- */

export const Engine = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9V7a1 1 0 0 1 1-1h3l2-2h2v3h3l2 2v2h2v4h-2v2l-2 2h-3v-3h-3l-2 2H7a1 1 0 0 1-1-1v-2H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2Z" />
  </svg>
);

export const Gauge = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="m13.4 10.6 3.6-3.6" />
    <path d="M4.6 19a9 9 0 1 1 14.8 0" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />
  </svg>
);

export const Weight = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5" r="2" />
    <path d="M9 7h6l3 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L9 7Z" />
  </svg>
);

export const Fuel = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M3 21h12M3 10h10" />
    <path d="M17 8l2 2v8a2 2 0 0 1-4 0" />
    <path d="M15 5l2 2" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Wheel = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
  </svg>
);

export const Display = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4M7 8h6M7 11h4" />
  </svg>
);

export const Wind = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h9a2.5 2.5 0 1 1-2.5 2.5" />
  </svg>
);

export const Settings = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
  </svg>
);

export const Road = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 3 4 21M16 3l4 18M12 4v2M12 10v2M12 16v2" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  </svg>
);

export const Mountain = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m3 20 6-11 4 6 2-3 6 8H3Z" />
    <circle cx="7" cy="6" r="2" />
  </svg>
);

export const Compass = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

export type IconName =
  | "engine"
  | "gauge"
  | "bolt"
  | "weight"
  | "fuel"
  | "shield"
  | "wheel"
  | "display"
  | "wind"
  | "settings"
  | "road"
  | "star"
  | "mountain"
  | "compass"
  | "sparkle";

export const iconMap: Record<IconName, (p: IconProps) => ReactElement> = {
  engine: Engine,
  gauge: Gauge,
  bolt: Bolt,
  weight: Weight,
  fuel: Fuel,
  shield: Shield,
  wheel: Wheel,
  display: Display,
  wind: Wind,
  settings: Settings,
  road: Road,
  star: Star,
  mountain: Mountain,
  compass: Compass,
  sparkle: Sparkle,
};

export function Icon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const Cmp = iconMap[name];
  return <Cmp {...props} />;
}
