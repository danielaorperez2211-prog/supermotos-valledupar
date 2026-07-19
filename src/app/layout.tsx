import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

import { Header } from "@/components/suzuki/Header";
import { Footer } from "@/components/suzuki/Footer";
import { WhatsAppFab } from "@/components/suzuki/CookieBanner";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Motocicletas | Suzuki Motor de Colombia SA",
  description:
    "Suzuki Colombia, Motos, nuevas motos, precio de motos, motocicletas, motores fuera de borda, repuestos de motos, Suzuki Hayate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${roboto.variable}`}
    >
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>

      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Header />

          {children}

          <Footer />

          <WhatsAppFab />
        </ClientBody>
      </body>
    </html>
  );
}