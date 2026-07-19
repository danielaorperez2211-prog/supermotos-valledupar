import { Phone, Mail } from "lucide-react";
import { footerColumns, socials } from "@/lib/suzuki-data";
import { socialIconMap } from "./icons";
import { SuzukiSMark } from "./SuzukiLogo";

export function Footer() {
  const { ayuda, politicas, empresa } = footerColumns;

  return (
    <footer className="bg-suzuki-ink text-neutral-300">
      <div className="mx-auto max-w-[1200px] px-4 py-12 xl:px-0">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* AYUDA */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold tracking-suzuki text-white">
              {ayuda.title}
            </h4>
            <p className="mb-3 text-xs font-semibold tracking-suzuki text-neutral-400">
              LÍNEA DE ATENCIÓN
            </p>
            <ul className="space-y-2">
              {ayuda.phones.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[13px]">
                  <Phone className="h-3.5 w-3.5 text-suzuki-red" />
                  {p}
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-3">
              {ayuda.emails.map((e) => (
                <li key={e.href} className="flex items-start gap-2 text-[13px]">
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-suzuki-red" />
                  <a href={e.href} className="hover:text-white">
                    {e.label}
                  </a>
                </li>
              ))}
              <li className="text-[13px]">
                <a
                  href="https://sedeelectronica.sic.gov.co"
                  className="hover:text-white"
                >
                  SIC
                </a>
              </li>
            </ul>
          </div>

          {/* POLÍTICAS */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold tracking-suzuki text-white">
              {politicas.title}
            </h4>
            <ul className="space-y-3">
              {politicas.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[12.5px] leading-5 text-neutral-300 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* EMPRESA */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold tracking-suzuki text-white">
              {empresa.title}
            </h4>
            <ul className="space-y-3">
              {empresa.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[12.5px] leading-5 text-neutral-300 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SÍGUENOS */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold tracking-suzuki text-white">
              SÍGUENOS
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = socialIconMap[s.label as keyof typeof socialIconMap];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-suzuki-red hover:bg-suzuki-red hover:text-white"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left xl:px-0">
          <div className="flex items-center gap-3">
            <SuzukiSMark className="h-6 text-suzuki-red" />
            <p className="text-[11px] leading-4 text-neutral-400">
              SUZUKI MOTOR DE COLOMBIA S.A Nit. 891.410.137-2.
              <br />
              Valledupar Calle 17 No. 11-138 centro 
            </p>
          </div>
          <p className="text-[11px] text-neutral-500">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
