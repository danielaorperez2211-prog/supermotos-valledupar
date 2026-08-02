import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL("https://motosantarosa.com"),

  title: {
    default: "Motocenter Santa Rosa | Venta de Motocicletas Suzuki",
    template: "%s | Motocenter Santa Rosa",
  },

  description:
    "Motocenter Santa Rosa, en Santa Rosa del Sur, Bolívar. Venta de motocicletas Suzuki, repuestos originales y servicio técnico especializado.",

  keywords: [
    "Suzuki Santa Rosa del Sur",
    "Motocenter Santa Rosa",
    "Motos Suzuki Bolívar",
    "Venta de motos Suzuki",
    "Motocicletas Suzuki Colombia",
    "Repuestos Suzuki",
    "Servicio técnico Suzuki",
  ],

  authors: [{ name: "Motocenter Santa Rosa" }],
  creator: "Motocenter Santa Rosa",
  publisher: "Motocenter Santa Rosa",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://motosantarosa.com",
    siteName: "Motocenter Santa Rosa",
    title: "Motocenter Santa Rosa | Venta de Motocicletas Suzuki",
    description:
      "Venta de motocicletas Suzuki, repuestos originales y servicio técnico especializado en Santa Rosa del Sur, Bolívar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Motocenter Santa Rosa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Motocenter Santa Rosa | Venta de Motocicletas Suzuki",
    description:
      "Venta de motocicletas Suzuki en Santa Rosa del Sur, Bolívar.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://motosantarosa.com",
  },
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

      <GoogleAnalytics gaId="G-V6F79ZNYXN" />
    </html>
  );
}