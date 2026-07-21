const CDN = "https://ext.same-assets.com/2688876731";

export type HeroBanner = {
  name: string;
  img: string;
  href: string;
};

export const heroBanners: HeroBanner[] = [
  { name: "VIVA FI ABS", img: `${CDN}/707243330.jpeg`, href: "/motocicletas/semiautomaticas/viva-fi-abs" },
  { name: "Burgman 15", img: `${CDN}/185489846.jpeg`, href: "/motocicletas/automaticas/burgman-15" },
  { name: "GIXXER FI 150 ABS", img: `${CDN}/337916454.jpeg`, href: "/motocicletas/sport/gixxer-fi-150-abs" },
  { name: "GN160", img: `${CDN}/1153786289.jpeg`, href: "/motocicletas/sport/gn-160" },
  { name: "GN125 ABS", img: `${CDN}/2778294658.jpeg`, href: "/motocicletas/sport/gn-125-abs" },
  { name: "AX4 ABS", img: `${CDN}/1425179629.jpeg`, href: "/motocicletas/sport/ax4-abs" },
  { name: "GIXXER 250", img: `${CDN}/1446820350.jpeg`, href: "/motocicletas/sport/gixxer-250" },
  { name: "GSX-R150", img: `${CDN}/2051661338.jpeg`, href: "/motocicletas/sport/gsx-r150-abs" },
  { name: "GSX-S150 ABS", img: `${CDN}/1280234935.jpeg`, href: "/motocicletas/sport/gsx-s150-abs" },
  { name: "Address NM", img: `${CDN}/2186773048.jpeg`, href: "/motocicletas/automaticas/address-nm" },
  { name: "V-STROM 160", img: `${CDN}/2448781735.jpeg`, href: "/motocicletas/aventura/v-strom-160" },
  { name: "DR 150 ABS", img: `${CDN}/2062561816.jpeg`, href: "/motocicletas/enduro/dr-150-abs" },
  { name: "DR 160X", img: `${CDN}/1725891129.jpeg`, href: "/motocicletas/enduro/dr-160x" },
  { name: "Reporte de sostenibilidad", img: `${CDN}/1720190636.jpeg`, href: "#" },
  { name: "Movemos Colombia", img: `${CDN}/3690550550.jpeg`, href: "#" },
  { name: "Alerta de pagos fraudulentos", img: `${CDN}/2979629927.jpeg`, href: "#" },
];

export type Promo = {
  name: string;
  price: string;
  img: string;
  href: string;
  description: string;
};

export const promos: Promo[] = [
  {
    name: "GIXXER FI 150 ABS",
    price: "$11.390.000",
    img: `${CDN}/122235066.jpeg`,
    href: "/promociones/gixxer-fi-150-abs",
    description:
      "La promoción del SOAT Gratis aplica del 1 al 31 de julio de 2026, únicamente para la motocicleta Gixxer 150 FI ABS modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta Gixxer 150 FI ABS está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
  {
    name: "BURGMAN 15",
    price: "$15.550.000",
    img: `${CDN}/4135707013.jpeg`,
    href: "/promociones/burgman-15",
    description:
      "El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta Burgman 15 está sujeto a disponibilidad del inventario de cada distribuidor autorizado. Válido del 1 al 31 de julio de 2026.",
  },
  {
    name: "GN 160",
    price: "$10.630.000",
    img: `${CDN}/626275356.jpeg`,
    href: "/promociones/gn-160",
    description:
      "El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta GN 160 está sujeto a disponibilidad del inventario de cada distribuidor autorizado. Válido del 1 al 31 de julio de 2026.",
  },
  {
    name: "GN 125 ABS",
    price: "$7.419.000",
    img: `${CDN}/3069058019.jpeg`,
    href: "/promociones/gn-125-abs",
    description:
      "La promoción del SOAT Gratis aplica del 1 al 31 de julio de 2026, únicamente para la motocicleta GN125 ABS modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta GN125 ABS está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
  {
    name: "AX4 ABS",
    price: "$6.350.000",
    img: `${CDN}/2174012363.jpeg`,
    href: "/promociones/ax4-abs",
    description:
      "La promoción del SOAT Gratis aplica del 1 al 31 de julio de 2026, únicamente para la motocicleta AX4 ABS modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta AX4 ABS está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
  {
    name: "Gixxer 250",
    price: "$14.990.000",
    img: `${CDN}/1930183306.jpeg`,
    href: "/promociones/gixxer-250",
    description:
      "El bono de $400.000 es válido del 1 al 31 de julio de 2026 y es redimible únicamente en el precio de la motocicleta Gixxer 250 modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta Gixxer 250 está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
  {
    name: "GSX-R150 ABS",
    price: "$14.990.000",
    img: `${CDN}/3725480108.jpeg`,
    href: "/promociones/gsx-r150-abs",
    description:
      "La promoción del SOAT Gratis aplica del 1 al 31 de julio de 2026, únicamente para la motocicleta GSX-R 150 ABS modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta GSX-R 150 ABS está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
  {
    name: "GSX-S 150 ABS",
    price: "$12.990.000",
    img: `${CDN}/599473116.jpeg`,
    href: "/promociones/gsx-s-150-abs",
    description:
      "La promoción del SOAT Gratis aplica del 1 al 31 de julio de 2026, únicamente para la motocicleta GSX-S 150 ABS modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta GSX-S 150 ABS está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
  {
    name: "ADDRESS NM",
    price: "$8.590.000",
    img: `${CDN}/3070634033.jpeg`,
    href: "/promociones/address-nm",
    description:
      "La promoción del SOAT Gratis aplica del 1 al 31 de julio de 2026, únicamente para la motocicleta Address NM modelo 2027 en los distribuidores autorizados Suzuki voluntariamente participantes de la promoción. El precio de venta es sugerido al público incluido impuestos (IVA e Ipoconsumo si aplica) y no incluye valores relacionados con SOAT ni matrícula. El modelo 2027 de la motocicleta Address NM está sujeto a disponibilidad del inventario de cada distribuidor autorizado.",
  },
];

export const lubricantes = [
  { name: "ECSTAR R9000", spec: "10W-40", price: "$61.800" },
  { name: "ECSTAR R7000", spec: "10W-40", price: "$46.700" },
  { name: "ECSTAR R5000", spec: "20W-50", price: "$42.500" },
  { name: "ECSTAR R5000", spec: "10W-40", price: "$43.600" },
];

export const assets = {
  drz4s: `${CDN}/163617964.png`,
  featureIcons: [
    `${CDN}/3564773529.png`,
    `${CDN}/1963766796.png`,
    `${CDN}/1029119891.png`,
  ],
  recall: `${CDN}/1401622533.jpeg`,
  engine:
    "https://static.vecteezy.com/system/resources/thumbnails/072/238/299/small/silver-motorcycle-engine-isolated-on-transparent-background-a-powerful-machine-png.png",
};

export const topNav: NavItem[] = [];

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "INICIO",
    href: "/",
  },
  {
    label: "MOTOCICLETAS",
    href: "/motocicletas",
  },
  {
    label: "NUESTRA HISTORIA",
    href: "/nuestra-historia", 
  },
  {
    label: "COLONIA SUZUKI",
    href: "/noticias",
  },
  {
    label: "PUNTOS DE ATENCIÓN",
    href: "/puntos-de-atencion",
  },
];

export const secondaryNav: NavItem[] = [
];

export const socials = [
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const footerColumns = {
  ayuda: {
    title: "AYUDA",
    phones: ["+57 301 985 2150"],
    emails: [
      { label: "PQRS: motocentersantarosa@gmail.com.com", href: "mailto:motocentersantarosa@gmail.com" },
      { label: "Notificaciones judiciales: motocentersantarosa@gmail.com", href: "mailto:motocentersantarosa@gmail.com" },
    ],
  },
  politicas: {
    title: "POLÍTICAS",
    links: [
      { label: "TRATAMIENTO DE DATOS", href: "#" },
      { label: "TÉRMINOS Y CONDICIONES – TRATAMIENTO COOKIES", href: "#" },
      { label: "PROCEDIMIENTO DE ATENCIÓN DE SOLICITUDES Y SUPRESIÓN DE DATOS PERSONALES", href: "#" },
      { label: "CERTIFICACIONES COMERCIALES", href: "/certificaciones-comerciales" },
      { label: "CERTIFICACIONES TRIBUTARIAS", href: "/certificaciones-tributarias" },
      { label: "CANAL DE DENUNCIAS", href: "/canal-denuncias" },
    ],
  },
  empresa: {
    title: "EMPRESA",
    links: [
      { label: "CARTILLA SAGRILAFT-PTEE", href: "#" },
      { label: "MANUAL SAGRILAFT", href: "#" },
      { label: "ÉTICA EMPRESARIAL PTEE", href: "#" },
      { label: "MANUAL PLCE", href: "#" },
      { label: "INFORME ANUAL DE GESTIÓN", href: "#" },
      { label: "DERECHOS HUMANOS", href: "#" },
      { label: "TRATAMIENTO PQR´S ALMACENES DIRECTOS", href: "#" },
      { label: "TRABAJA CON NOSOTROS", href: "/trabaja-con-nosotros" },
    ],
  },
};
