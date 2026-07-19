import { contactLinks } from "@/data/motorcycles";
import { Phone, WhatsApp } from "./icons";

export function QuoteBanner({
  title = "COTIZA TU SUZUKI HOY",
}: {
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-suzuki-blue">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_120%,rgba(255,255,255,0.25),transparent_45%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <h2 className="text-center font-heading text-3xl font-extrabold italic tracking-tight text-white sm:text-4xl md:text-left">
          {title}
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={contactLinks.phone}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-suzuki-navy shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <Phone className="h-5 w-5" />
            Llámenos
          </a>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-suzuki-whatsapp px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <WhatsApp className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
