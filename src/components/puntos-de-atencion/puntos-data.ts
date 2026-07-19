/**
 * Fuente única de datos de la página "Red Suzuki / Puntos de Atención".
 * Los componentes <Hero /> y <PuntosAtencion /> leen desde aquí; no existe un
 * componente por tarjeta ni por marcador: todo el contenido repetitivo vive
 * en este archivo. Todas las rutas apuntan a /public/puntos-de-atencion (locales).
 */

/* -------------------------------------------------------------------------- */
/* Banner superior (Hero)                                                     */
/* -------------------------------------------------------------------------- */

export const heroBanner = {
  /** Banner ancho para escritorio (el texto "RED SUZUKI…" viene incrustado). */
  desktop: "/puntos-de-atencion/hero-banner-1.png",
  /** Banner vertical para móvil. */
  mobile: "/puntos-de-atencion/hero-banner-2.png",
  alt: "Red Suzuki — Lo que necesitas a tu alcance",
};

/* -------------------------------------------------------------------------- */
/* Bloque "Encuentra tu red cercana"                                          */
/* -------------------------------------------------------------------------- */

export const finder = {
  icon: "/puntos-de-atencion/pin-navy.png",
  title: "ENCUENTRA TU RED CERCANA",
  subtitle:
    "Ubica tu taller más cercano y obtén el servicio profesional autorizado por suzuki",
  /** Botones puramente decorativos: se ven igual pero no realizan ninguna acción. */
  buttons: [
    "BUSCAR POR NOMBRE",
    "BUSCAR POR CIUDAD",
    "HAZ PARTE DE ÉSTA RED",
  ],
};

/* -------------------------------------------------------------------------- */
/* Mapa estático (maqueta visual, sin Google Maps ni APIs)                    */
/* -------------------------------------------------------------------------- */

export interface MapMarker {
  /** Posición vertical dentro del mapa, en %. */
  top: number;
  /** Posición horizontal dentro del mapa, en %. */
  left: number;
}

/**
 * Posiciones de los marcadores rojos sobre Colombia. Reproducen el patrón del
 * mapa original: gran densidad en el corredor andino (Costa → Medellín →
 * eje cafetero → Bogotá → Cali) y algunos puntos aislados hacia el oriente/sur.
 */
export const mapMarkers: MapMarker[] = [
  // Costa Caribe
  { top: 20, left: 46 },
  { top: 22, left: 40 },
  { top: 26, left: 27 },
  { top: 24, left: 43 },
  { top: 28, left: 33 },
  { top: 30, left: 30 },
  { top: 32, left: 44 },
  { top: 30, left: 52 },
  // Antioquia / Santanderes
  { top: 33, left: 37 },
  { top: 34, left: 33 },
  { top: 36, left: 40 },
  { top: 37, left: 36 },
  { top: 38, left: 46 },
  { top: 40, left: 31 },
  { top: 41, left: 50 },
  { top: 43, left: 35 },
  { top: 44, left: 40 },
  // Centro (Boyacá / Cundinamarca / eje cafetero)
  { top: 45, left: 44 },
  { top: 47, left: 47 },
  { top: 48, left: 39 },
  { top: 50, left: 40 },
  { top: 50, left: 47 },
  { top: 52, left: 37 },
  { top: 53, left: 43 },
  { top: 55, left: 46 },
  { top: 55, left: 34 },
  { top: 57, left: 38 },
  { top: 58, left: 42 },
  // Sur-occidente (Valle / Tolima / Huila / Cauca / Nariño)
  { top: 60, left: 45 },
  { top: 61, left: 31 },
  { top: 63, left: 34 },
  { top: 64, left: 38 },
  { top: 66, left: 42 },
  { top: 58, left: 30 },
  { top: 68, left: 36 },
  { top: 70, left: 40 },
  // Puntos aislados (oriente / sur)
  { top: 40, left: 60 },
  { top: 55, left: 55 },
  { top: 76, left: 44 },
];

export const mapData = {
  image: "/puntos-de-atencion/map.png",
  marker: "/puntos-de-atencion/pin.png",
  googleLogo: "/puntos-de-atencion/google-logo.svg",
  attribution: "Map data ©2026 Google, INEGI",
  markers: mapMarkers,
};

/* -------------------------------------------------------------------------- */
/* Bloque de accesos rápidos (pre-footer, 4 columnas)                         */
/* -------------------------------------------------------------------------- */

export interface CtaCard {
  icon: string;
  title: string;
  text: string;
}

export const ctaCards: CtaCard[] = [
  {
    icon: "/puntos-de-atencion/icon-contacto.png",
    title: "SOLICITUD DE CONTACTO",
    text: "Déjanos tus datos y pronto nos pondremos en contacto contigo.",
  },
  {
    icon: "/puntos-de-atencion/icon-taller.png",
    title: "UBICA TU TALLER MÁS CERCANO",
    text: "Estés donde estés, encontramos taller más cercano para tus revisiones o emergencias.",
  },
  {
    icon: "/puntos-de-atencion/icon-store.png",
    title: "STORE",
    text: "Permanece al día con todo sobre tu moto, piezas y accesorios para cada referencia.",
  },
  {
    icon: "/puntos-de-atencion/icon-info.png",
    title: "MANTENTE INFORMADO",
    text: "Únete a la red Suzuki y actualízate sobre todas las novedades y productos para ti.",
  },
];
