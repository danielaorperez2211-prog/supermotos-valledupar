import Link from "next/link";
import { cn } from "@/lib/utils";

export function SuzukiSMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-auto", className)}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M17.369 19.995C13.51 22.39 12 24 12 24L.105 15.705s5.003-3.715 9.186-.87l5.61 3.882.683-.453L.106 7.321s2.226-.65 6.524-3.315C10.49 1.609 12 0 12 0l11.895 8.296s-5.003 3.715-9.187.87L9.1 5.281l-.683.454L23.893 16.68s-2.224.649-6.524 3.315Z"
      />
    </svg>
  );
}

export function SuzukiLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 text-suzuki-red", className)}
      aria-label="Supermotos Valledupar"
    >
      <SuzukiSMark className="h-7 sm:h-8" />

      <div className="flex flex-col leading-none">
        <span className="font-display text-[22px] font-extrabold tracking-[0.08em] text-suzuki-red sm:text-[27px]">
          SUPERMOTOS
        </span>

        <span className="font-display text-[15px] font-bold tracking-[0.22em] text-black sm:text-[18px]">
          VALLEDUPAR
        </span>
      </div>
    </Link>
  );
}