import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { HistoriaHero } from "@/components/nuestra-historia/HistoriaHero";
import { Timeline } from "@/components/nuestra-historia/Timeline";

/**
 * Fuente serif (años y título) cargada de forma local a esta página mediante
 * next/font. Se expone como variable CSS `--font-historia-serif` y NO altera
 * el layout global ni globals.css del proyecto.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-historia-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuestra Historia | Suzuki",
  description:
    "Continuamente evolucionando a lo largo de las décadas, Suzuki tiene una historia rica y orgullosa que no conoce límites.",
};

export default function NuestraHistoriaPage() {
  return (
    <main
      className={playfair.variable}
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      <HistoriaHero />
      <Timeline />
    </main>
  );
}
