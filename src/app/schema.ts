export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",

  name: "Motocenter Santa Rosa",

  url: "https://motosantarosa.com",

  logo: "https://motosantarosa.com/logo.png",

  image: "https://motosantarosa.com/logo.png",

  description:
    "Motocenter Santa Rosa es una empresa especializada en la venta de motocicletas Suzuki, repuestos, accesorios y lubricantes en Santa Rosa del Sur, Bolívar.",

  telephone: "+57 3024937142",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Rosa del Sur",
    addressRegion: "Bolívar",
    addressCountry: "CO",
  },

  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },

  brand: {
    "@type": "Brand",
    name: "Suzuki",
  },
};