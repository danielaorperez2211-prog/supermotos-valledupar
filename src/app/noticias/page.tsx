import { Barlow, Oswald } from "next/font/google";
import { NoticiasHero } from "./components/noticias/NoticiasHero";
import { NoticiasSection } from "./components/noticias/NoticiasSection";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata = {
  title: "Noticias | Suzuki Motor de Colombia SA",
  description:
    "Noticias de Suzuki Motor de Colombia: novedades, Moto GP y comunidad Suzuki.",
};

export default function NoticiasPage() {
  return (
    <main
      className={`${oswald.variable} ${barlow.variable} min-h-screen bg-white font-[family-name:var(--font-barlow)] text-neutral-900`}
    >
      <NoticiasHero />
      <NoticiasSection />
    </main>
  );
}