import Link from "next/link";
import type { Motorcycle } from "@/data/motorcycles";
import { contactLinks } from "@/data/motorcycles";
import { ChevronRight, Send, WhatsApp } from "../icons";
import GoogleAdsButton from "@/components/GoogleAdsButton";

export function DetailHero({ motorcycle }: { motorcycle: Motorcycle }) {
  return (
    <section className="relative overflow-hidden bg-[#04142b]">
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04142b] via-[#072a57] to-[#0b4f8a]" />

      {/* Brillos */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />

      {/* Texto gigante de fondo */}
      <div className="absolute right-[-80px] top-1/2 hidden -translate-y-1/2 text-[180px] font-black italic uppercase text-white/5 xl:block">
        {motorcycle.categoryName}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Breadcrumb */}
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/60">
          <Link href="/catalogo" className="hover:text-white">
            Catálogo
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href={`/catalogo#${motorcycle.categorySlug}`}
            className="hover:text-white"
          >
            {motorcycle.categoryName}
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="text-white">{motorcycle.name}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Información */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-sky-400">
              {motorcycle.subtitle}
            </p>

            <h1 className="text-5xl font-black italic text-white md:text-6xl lg:text-7xl">
              {motorcycle.name}
            </h1>

            <p className="mt-4 text-2xl font-semibold italic text-white/80">
              {motorcycle.tagline}
            </p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[4px] text-white/50">
                Desde
              </p>

              <p className="mt-2 text-5xl font-black italic text-white">
                {motorcycle.price}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
<GoogleAdsButton
  href={contactLinks.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
>
  <WhatsApp className="h-5 w-5" />
  COTIZÁ TU SUZUKI
</GoogleAdsButton>

              <a
                href="#cotizar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white/20"
              >
                <Send className="h-5 w-5" />
                FORMULARIO
              </a>
            </div>
          </div>

          {/* Moto */}
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[120px]" />

            <img
              src={motorcycle.images[0]}
              alt={motorcycle.name}
              className="relative z-10 mx-auto w-full max-w-xl object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 h-20 w-full bg-white [clip-path:polygon(0_100%,100%_100%,100%_40%,0_100%)]" />
    </section>
  );
}