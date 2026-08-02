export const metadata: Metadata = {
  metadataBase: new URL("https://motosantarosa.com"),

  title: {
    default: "Motocenter Santa Rosa | Venta de Motocicletas Suzuki",
    template: "%s | Motocenter Santa Rosa",
  },

  description:
    "Motocenter Santa Rosa. Venta de motocicletas Suzuki nuevas, asesoría personalizada y servicio para clientes en Santa Rosa del Sur, Bolívar y todo Colombia.",

  keywords: [
    "Suzuki Colombia",
    "Motocenter Santa Rosa",
    "Motocicletas Suzuki",
    "Venta de motos Suzuki",
    "Motos Santa Rosa del Sur",
    "Suzuki Bolívar",
    "V-Strom",
    "Gixxer",
    "GN125",
    "DR150",
    "Motos Colombia",
  ],

  authors: [{ name: "Motocenter Santa Rosa" }],

  creator: "Motocenter Santa Rosa",

  publisher: "Motocenter Santa Rosa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://motosantarosa.com",
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://motosantarosa.com",
    title: "Motocenter Santa Rosa | Venta de Motocicletas Suzuki",
    description:
      "Venta de motocicletas Suzuki nuevas. Atención personalizada para clientes en Santa Rosa del Sur y toda Colombia.",
    siteName: "Motocenter Santa Rosa",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Motocenter Santa Rosa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Motocenter Santa Rosa",
    description:
      "Venta de motocicletas Suzuki nuevas en Colombia.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};