import type { Metadata } from "next";
import { Karla, Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Catálogo de Motocicletas | Suzuki",
  description:
    "Explora la gama completa de motocicletas Suzuki: aventura, sport, doble propósito, motocross, trabajo, scooters y cuadraciclos.",
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${rubik.variable} ${karla.variable} font-body text-suzuki-ink antialiased`}
    >
      {children}
    </div>
  );
}
