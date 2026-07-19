"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./icons";

const prefs = [
  {
    label: "Funcionales",
    locked: true,
    text: "El almacenamiento o acceso técnico es estrictamente necesario para el fin legítimo de permitir el uso de un servicio específico solicitado explícitamente por el abonado o usuario.",
  },
  {
    label: "Analíticas anónimas",
    locked: false,
    text: "Estas cookies nos permiten contar las visitas y fuentes de circulación para poder medir y mejorar el desempeño de nuestro sitio.",
  },
  {
    label: "Marketing",
    locked: false,
    text: "Las cookies de marketing se utilizan para rastrear a los visitantes en las páginas web con el fin de mostrar anuncios relevantes.",
  },
];

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t-2 border-suzuki-red bg-suzuki-ink/98 text-white shadow-2xl backdrop-blur">
      <div className="mx-auto max-h-[70vh] max-w-[1100px] overflow-y-auto px-4 py-5">
        <p className="text-[13px] leading-5 text-neutral-200">
          Este sitio emplea cookies, por lo tanto, el ingreso y la navegación
          dentro del portal, implicarán aceptación por parte del usuario de su
          utilización. La aceptación de las cookies no es un requisito para
          visitar EL PORTAL{" "}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="font-semibold text-suzuki-red underline"
          >
            Más información
          </button>
        </p>

        {expanded && (
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {prefs.map((p) => (
              <div key={p.label} className="rounded-sm bg-white/5 p-3">
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <input
                    type="checkbox"
                    defaultChecked
                    disabled={p.locked}
                    className="accent-[color:var(--suzuki-red)]"
                  />
                  {p.label}
                </label>
                <p className="mt-2 text-[11px] leading-4 text-neutral-400">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="bg-suzuki-red px-6 py-2.5 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-[color:var(--suzuki-red-dark)]"
          >
            Guardar preferencias
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="bg-suzuki-red px-6 py-2.5 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-[color:var(--suzuki-red-dark)]"
          >
            Aceptar todas las cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/573024937142"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Suzuki"
      className="fixed bottom-5 right-5 z-[65] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
