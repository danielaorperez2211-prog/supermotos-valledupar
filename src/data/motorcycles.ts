import type { IconName } from "@/components/catalog/icons";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export type SpecItem = { label: string; value: string };
export type SpecGroup = { group: string; items: SpecItem[] };
export type ColorOption = { name: string; hex: string; hex2?: string };
export type Feature = { title: string; description: string; icon: IconName };
export type Highlight = { title: string; description: string; icon: IconName };
export type KeySpec = { label: string; value: string; unit: string; icon: IconName };

export type Motorcycle = {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  subtitle: string; // small eyebrow label in hero
  tagline: string; // hero secondary headline
  price: string;
  images: string[]; // first image is the primary/hero image
  description: { heading: string; title: string; body: string };
  highlights: Highlight[];
  keySpecs: KeySpec[];
  features: Feature[];
  colors: ColorOption[];
  specifications: SpecGroup[];
};

export type Category = {
  slug: string;
  name: string;
  banner: string;
  tagline: string;
};

/* -------------------------------------------------------------------------- */
/*  Asset helpers                                                              */
/* -------------------------------------------------------------------------- */

/**
 * All catalog imagery is bundled locally in `public/motos/` so the feature is
 * fully self-contained and requires no `next.config.js` image domains.
 * Drop the `public/motos` folder into your project alongside this data file.
 */
const img = (id: string) => `/motos/${id}`;

/* -------------------------------------------------------------------------- */
/*  Categories                                                                 */
/* -------------------------------------------------------------------------- */

export const categories: Category[] = [
  {
    slug: "aventura",
    name: "Aventura",
    banner: img("3565799801.webp"),
    tagline: "Domina cualquier terreno y llega más lejos.",
  },
  {
    slug: "sport",
    name: "Sport",
    banner: img("4077681619.webp"),
    tagline: "Adrenalina, potencia y diseño deportivo.",
  },
  {
    slug: "doble-proposito",
    name: "Doble Propósito",
    banner: img("3416860072.webp"),
    tagline: "Igual de capaz en la ciudad que fuera de ella.",
  },
  {
    slug: "motocross",
    name: "Motocross",
    banner: img("3208597830.webp"),
    tagline: "Rendimiento de competencia para el circuito.",
  },
  {
    slug: "trabajo",
    name: "Trabajo",
    banner: img("2830512712.png"),
    tagline: "Resistencia y economía para cada jornada.",
  },
  {
    slug: "scooters",
    name: "Scooters",
    banner: img("3162098059.png"),
    tagline: "Movilidad urbana práctica y con estilo.",
  },
  {
    slug: "cuadras",
    name: "Cuadraciclos",
    banner: img("226362598.png"),
    tagline: "Fuerza todo terreno para el trabajo y la aventura.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Spec builder (keeps per-bike data concise)                                 */
/* -------------------------------------------------------------------------- */

type SpecInput = {
  engineType: string;
  displacement: string;
  transmission: string;
  bore?: string;
  startSystem?: string;
  fuelSystem?: string;
  frontSusp: string;
  rearSusp: string;
  frontBrake: string;
  rearBrake: string;
  wheels?: string;
  length: string;
  seatHeight: string;
  width: string;
  groundClearance?: string;
  wheelbase: string;
  frontTire: string;
  rearTire: string;
  weight: string;
  tank: string;
};

function buildSpecs(s: SpecInput): SpecGroup[] {
  return [
    {
      group: "Motor",
      items: [
        { label: "Tipo de motor", value: s.engineType },
        { label: "Sistema de arranque", value: s.startSystem ?? "Eléctrico" },
        { label: "Desplazamiento", value: s.displacement },
        { label: "Transmisión", value: s.transmission },
        ...(s.bore ? [{ label: "Diámetro por carrera", value: s.bore }] : []),
        { label: "Sistema de combustible", value: s.fuelSystem ?? "Inyección electrónica" },
      ],
    },
    {
      group: "Chasis",
      items: [
        { label: "Suspensión delantera", value: s.frontSusp },
        { label: "Suspensión trasera", value: s.rearSusp },
        { label: "Freno frontal", value: s.frontBrake },
        { label: "Freno trasero", value: s.rearBrake },
        { label: "Rines", value: s.wheels ?? "Aleación de aluminio" },
      ],
    },
    {
      group: "Dimensiones",
      items: [
        { label: "Largo total", value: s.length },
        { label: "Altura del asiento", value: s.seatHeight },
        { label: "Ancho total", value: s.width },
        ...(s.groundClearance ? [{ label: "Distancia al suelo", value: s.groundClearance }] : []),
        { label: "Distancia entre ejes", value: s.wheelbase },
        { label: "Neumático delantero", value: s.frontTire },
        { label: "Neumático trasero", value: s.rearTire },
        { label: "Peso", value: s.weight },
        { label: "Tanque de combustible", value: s.tank },
      ],
    },
  ];
}

const key = (
  power: string,
  cc: string,
  weight: string,
  tank: string,
): KeySpec[] => [
  { label: "Potencia", value: power, unit: "CV", icon: "bolt" },
  { label: "Motor", value: cc, unit: "CC", icon: "engine" },
  { label: "Peso", value: weight, unit: "KG", icon: "weight" },
  { label: "Tanque de combustible", value: tank, unit: "LT", icon: "fuel" },
];

/* -------------------------------------------------------------------------- */
/*  Reusable feature / highlight sets per category                             */
/* -------------------------------------------------------------------------- */

const highlightSets: Record<string, Highlight[]> = {
  aventura: [
    { icon: "compass", title: "Lista para la aventura", description: "Diseñada para recorrer largas distancias con máximo confort y control." },
    { icon: "shield", title: "Electrónica avanzada", description: "Control de tracción, modos de manejo y ABS que elevan tu seguridad." },
    { icon: "mountain", title: "Capacidad todo terreno", description: "Suspensión de largo recorrido para dominar el asfalto y la tierra." },
  ],
  sport: [
    { icon: "gauge", title: "Ergonomía optimizada", description: "Diseño pensado para maximizar el control y confort en cada ruta." },
    { icon: "shield", title: "Sistemas electrónicos avanzados", description: "Modos de conducción y asistencias que elevan la seguridad y el rendimiento." },
    { icon: "wind", title: "Aerodinámica y estilo", description: "Carrocería diseñada para eficiencia y estabilidad a alta velocidad." },
  ],
  "doble-proposito": [
    { icon: "road", title: "Versatilidad total", description: "Igual de eficaz en la ciudad que en los caminos de tierra." },
    { icon: "mountain", title: "Robustez comprobada", description: "Chasis y suspensión preparados para el uso más exigente." },
    { icon: "fuel", title: "Gran autonomía", description: "Rendimiento de combustible ideal para las jornadas más largas." },
  ],
  motocross: [
    { icon: "bolt", title: "Potencia de competencia", description: "Motor de altas revoluciones afinado para el circuito." },
    { icon: "settings", title: "Suspensión de carreras", description: "Amortiguación totalmente ajustable para cada tipo de pista." },
    { icon: "weight", title: "Ligereza extrema", description: "Chasis liviano para máxima agilidad y control en el aire." },
  ],
  trabajo: [
    { icon: "shield", title: "Durabilidad a toda prueba", description: "Construida para responder día tras día sin fallar." },
    { icon: "fuel", title: "Máxima economía", description: "Bajo consumo de combustible para reducir tus costos." },
    { icon: "settings", title: "Mantenimiento sencillo", description: "Mecánica confiable y fácil de mantener en cualquier lugar." },
  ],
  scooters: [
    { icon: "road", title: "Movilidad urbana", description: "Ágil, práctica y perfecta para moverte por la ciudad." },
    { icon: "fuel", title: "Bajo consumo", description: "Eficiencia de combustible que rinde en cada trayecto." },
    { icon: "star", title: "Confort y espacio", description: "Asiento cómodo y amplio espacio de almacenamiento." },
  ],
  cuadras: [
    { icon: "mountain", title: "Fuerza todo terreno", description: "Tracción 4x4 para superar los terrenos más difíciles." },
    { icon: "shield", title: "Resistencia superior", description: "Construcción robusta lista para el trabajo pesado." },
    { icon: "settings", title: "Control preciso", description: "Dirección asistida y transmisión pensadas para el máximo dominio." },
  ],
};

const featureSets: Record<string, Feature[]> = {
  aventura: [
    { icon: "engine", title: "Motor de alto torque", description: "Entrega de potencia progresiva ideal para viajar y para el off-road." },
    { icon: "display", title: "Panel TFT a color", description: "Instrumentación digital con información clara en tiempo real." },
    { icon: "shield", title: "Frenos ABS", description: "Sistema antibloqueo para un frenado seguro y controlado." },
    { icon: "settings", title: "Modos de conducción", description: "Ajusta la respuesta del motor según el terreno y tu estilo." },
    { icon: "compass", title: "Ergonomía de viaje", description: "Posición erguida y protección aerodinámica para largas rutas." },
    { icon: "wheel", title: "Ruedas de aventura", description: "Neumáticos y llantas preparados para todo tipo de superficie." },
  ],
  sport: [
    { icon: "engine", title: "Motor de alto desempeño", description: "Combina fuerza, suavidad y eficiencia para todo tipo de manejo." },
    { icon: "display", title: "Panel LCD completo", description: "Pantalla a color con información clara sobre todos los sistemas." },
    { icon: "shield", title: "Frenos anti-bloqueo", description: "Pinzas de freno de alto rendimiento con ABS para máxima seguridad." },
    { icon: "wind", title: "Diseño aerodinámico", description: "Carrocería streetfighter que marca tendencia y mejora el control." },
    { icon: "settings", title: "Control de tracción", description: "Asistencias electrónicas que elevan la seguridad y el rendimiento." },
    { icon: "wheel", title: "Manillares de aluminio", description: "Componentes ligeros y deportivos para un estilo agresivo." },
  ],
  "doble-proposito": [
    { icon: "engine", title: "Motor confiable", description: "Mecánica sencilla y resistente, lista para cualquier aventura." },
    { icon: "mountain", title: "Suspensión de largo recorrido", description: "Absorbe los golpes del terreno más irregular con facilidad." },
    { icon: "wheel", title: "Neumáticos mixtos", description: "Agarre óptimo tanto en asfalto como en tierra." },
    { icon: "fuel", title: "Gran autonomía", description: "Tanque y consumo pensados para recorrer largas distancias." },
    { icon: "shield", title: "Protección reforzada", description: "Componentes protegidos para el uso más rudo." },
    { icon: "settings", title: "Fácil mantenimiento", description: "Diseñada para un servicio rápido y económico." },
  ],
  motocross: [
    { icon: "engine", title: "Motor de competencia", description: "Alto régimen de revoluciones para el máximo rendimiento en pista." },
    { icon: "settings", title: "Suspensión ajustable", description: "Horquilla y monoamortiguador regulables para cada circuito." },
    { icon: "weight", title: "Chasis ultraligero", description: "Estructura de aluminio para una agilidad excepcional." },
    { icon: "bolt", title: "Respuesta inmediata", description: "Inyección afinada para una aceleración explosiva." },
    { icon: "wheel", title: "Neumáticos de taco", description: "Máxima tracción en tierra, barro y arena." },
    { icon: "shield", title: "Frenos de disco", description: "Potencia de frenado precisa para el control total." },
  ],
  trabajo: [
    { icon: "engine", title: "Motor económico", description: "Bajo consumo y gran durabilidad para el uso diario intensivo." },
    { icon: "weight", title: "Capacidad de carga", description: "Estructura robusta preparada para el trabajo de cada día." },
    { icon: "fuel", title: "Rendimiento superior", description: "Kilómetros extra por cada tanque de combustible." },
    { icon: "settings", title: "Mantenimiento simple", description: "Mecánica confiable y repuestos accesibles en todo el país." },
    { icon: "wheel", title: "Comodidad de manejo", description: "Postura ergonómica para largas jornadas sin fatiga." },
    { icon: "shield", title: "Resistencia probada", description: "Construida para responder en las condiciones más exigentes." },
  ],
  scooters: [
    { icon: "engine", title: "Motor suave y ágil", description: "Aceleración lineal perfecta para el tráfico de la ciudad." },
    { icon: "fuel", title: "Bajo consumo", description: "Eficiencia de combustible que cuida tu bolsillo." },
    { icon: "star", title: "Amplio almacenamiento", description: "Espacio bajo el asiento para guardar tus pertenencias." },
    { icon: "display", title: "Tablero informativo", description: "Instrumentación clara y fácil de leer de un vistazo." },
    { icon: "wheel", title: "Manejo cómodo", description: "Plataforma amplia y asiento confortable para dos personas." },
    { icon: "shield", title: "Frenado seguro", description: "Sistema de frenos combinado para detenciones estables." },
  ],
  cuadras: [
    { icon: "engine", title: "Motor de gran torque", description: "Fuerza de sobra para el trabajo pesado y la aventura." },
    { icon: "mountain", title: "Tracción 4x4", description: "Sistema de tracción seleccionable para superar todo terreno." },
    { icon: "settings", title: "Dirección asistida", description: "Control preciso y sin esfuerzo, incluso a baja velocidad." },
    { icon: "weight", title: "Alta capacidad de carga", description: "Parrillas y enganche listos para transportar y remolcar." },
    { icon: "wheel", title: "Suspensión independiente", description: "Estabilidad y confort en los caminos más irregulares." },
    { icon: "shield", title: "Frenos confiables", description: "Sistema de frenado potente para el máximo control." },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Motorcycle factory                                                         */
/* -------------------------------------------------------------------------- */

type BikeInput = {
  slug: string;
  name: string;
  categorySlug: keyof typeof highlightSets;
  categoryName: string;
  subtitle: string;
  tagline: string;
  price: string;
  images: string[];
  description: { heading: string; title: string; body: string };
  keySpecs: KeySpec[];
  colors: ColorOption[];
  specs: SpecInput;
  highlights?: Highlight[];
  features?: Feature[];
};

function bike(b: BikeInput): Motorcycle {
  const cat = categories.find((c) => c.slug === b.categorySlug)!;
  return {
    slug: b.slug,
    name: b.name,
    categorySlug: b.categorySlug,
    categoryName: b.categoryName ?? cat.name,
    subtitle: b.subtitle,
    tagline: b.tagline,
    price: b.price,
    images: b.images,
    description: b.description,
    highlights: b.highlights ?? highlightSets[b.categorySlug],
    keySpecs: b.keySpecs,
    features: b.features ?? featureSets[b.categorySlug],
    colors: b.colors,
    specifications: buildSpecs(b.specs),
  };
}

/* -------------------------------------------------------------------------- */
/*  The motorcycles                                                            */
/* -------------------------------------------------------------------------- */

export const motorcycles: Motorcycle[] = [
  /* ----------------------------- AVENTURA ----------------------------- */
  bike({
    slug: "v-strom-1050-de",
    name: "V-Strom 1050 DE",
    categorySlug: "aventura",
    categoryName: "Aventura",
    subtitle: "La aventura no tiene límites",
    tagline: "Nacida para explorar",
    price: "$18.995",
    images: [img("409459384.jpeg")],
    description: {
      heading: "AVENTURA SIN FRONTERAS",
      title: "Domina cualquier camino",
      body: "La V-Strom 1050 DE lleva la aventura a otro nivel con su motor bicilíndrico en V de 1037 cm³, rueda delantera de 21\" y suspensión de largo recorrido. Su completo paquete electrónico te da el control total, ya sea en asfalto o en los senderos más exigentes.",
    },
    keySpecs: key("107", "1037", "252", "20"),
    colors: [
      { name: "Champion Yellow", hex: "#f4c500" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Vigor Blue", hex: "#1f3a93" },
    ],
    specs: {
      engineType: "4-tiempos, 2-cilindros en V, refr. líquida, DOHC",
      displacement: "1037 cm³",
      transmission: "6 velocidades",
      bore: "100 mm x 66 mm",
      frontSusp: "Telescópica invertida, ajustable",
      rearSusp: "Tipo enlace, muelle helicoidal, ajustable",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2265 mm",
      seatHeight: "880 mm",
      width: "940 mm",
      groundClearance: "190 mm",
      wheelbase: "1595 mm",
      frontTire: "90/90-21 M/C",
      rearTire: "150/70R17 M/C",
      weight: "252 kg",
      tank: "20 lts",
    },
  }),
  bike({
    slug: "v-strom-1050-tech",
    name: "V-Strom 1050 TECH",
    categorySlug: "aventura",
    categoryName: "Aventura",
    subtitle: "Tecnología para viajar más lejos",
    tagline: "El turismo perfecto",
    price: "$19.495",
    images: [img("405484273.webp")],
    description: {
      heading: "TURISMO DE ALTA GAMA",
      title: "Confort y tecnología en cada kilómetro",
      body: "La V-Strom 1050 TECH combina el legendario motor en V de 1037 cm³ con un completo paquete tecnológico: control de crucero, plataforma inercial de 6 ejes y modos de manejo. Diseñada para devorar carreteras con el máximo confort y seguridad.",
    },
    keySpecs: key("107", "1037", "247", "20"),
    colors: [
      { name: "Pearl Brilliant White", hex: "#f3f3f3" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Champion Yellow", hex: "#f4c500" },
    ],
    specs: {
      engineType: "4-tiempos, 2-cilindros en V, refr. líquida, DOHC",
      displacement: "1037 cm³",
      transmission: "6 velocidades",
      bore: "100 mm x 66 mm",
      frontSusp: "Telescópica invertida, ajustable",
      rearSusp: "Tipo enlace, muelle helicoidal, ajustable",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2265 mm",
      seatHeight: "855 mm",
      width: "940 mm",
      groundClearance: "160 mm",
      wheelbase: "1555 mm",
      frontTire: "110/80R19 M/C",
      rearTire: "150/70R17 M/C",
      weight: "247 kg",
      tank: "20 lts",
    },
  }),
  bike({
    slug: "v-strom-800-de",
    name: "V-Strom 800 DE",
    categorySlug: "aventura",
    categoryName: "Aventura",
    subtitle: "El equilibrio perfecto",
    tagline: "Aventura de media cilindrada",
    price: "$13.995",
    images: [img("1308711749.jpeg")],
    description: {
      heading: "AVENTURA VERSÁTIL",
      title: "Tan capaz como divertida",
      body: "La V-Strom 800 DE estrena un motor bicilíndrico paralelo de 776 cm³ con cigüeñal de 270°, rueda delantera de 21\" y suspensión de largo recorrido. Es la compañera ideal para quienes buscan versatilidad total dentro y fuera del asfalto.",
    },
    keySpecs: key("84", "776", "230", "20"),
    colors: [
      { name: "Champion Yellow", hex: "#f4c500" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Tech White", hex: "#eaeaea" },
    ],
    specs: {
      engineType: "4-tiempos, 2-cilindros paralelo, refr. líquida, DOHC",
      displacement: "776 cm³",
      transmission: "6 velocidades",
      bore: "84 mm x 70 mm",
      frontSusp: "Telescópica invertida, ajustable",
      rearSusp: "Tipo enlace, muelle helicoidal, ajustable",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2345 mm",
      seatHeight: "855 mm",
      width: "975 mm",
      groundClearance: "220 mm",
      wheelbase: "1570 mm",
      frontTire: "90/90-21 M/C",
      rearTire: "150/70R17 M/C",
      weight: "230 kg",
      tank: "20 lts",
    },
  }),
  bike({
    slug: "v-strom-800-tech",
    name: "V-Strom 800 TECH",
    categorySlug: "aventura",
    categoryName: "Aventura",
    subtitle: "Aventura con estilo urbano",
    tagline: "Lista para la ruta",
    price: "$13.495",
    images: [img("3030399620.webp")],
    description: {
      heading: "VERSATILIDAD PREMIUM",
      title: "Ideal para el viaje y la ciudad",
      body: "La V-Strom 800 TECH aprovecha el ágil motor bicilíndrico de 776 cm³ con una configuración orientada al turismo y al uso diario. Ruedas de aleación, ergonomía cómoda y tecnología de asistencia para disfrutar cada trayecto.",
    },
    keySpecs: key("84", "776", "223", "20"),
    colors: [
      { name: "Metallic Matte Steel Green", hex: "#4b5a4a" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Brilliant White", hex: "#f3f3f3" },
    ],
    specs: {
      engineType: "4-tiempos, 2-cilindros paralelo, refr. líquida, DOHC",
      displacement: "776 cm³",
      transmission: "6 velocidades",
      bore: "84 mm x 70 mm",
      frontSusp: "Telescópica invertida, ajustable",
      rearSusp: "Tipo enlace, muelle helicoidal, ajustable",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2265 mm",
      seatHeight: "825 mm",
      width: "930 mm",
      groundClearance: "185 mm",
      wheelbase: "1520 mm",
      frontTire: "110/80R19 M/C",
      rearTire: "150/70R17 M/C",
      weight: "223 kg",
      tank: "20 lts",
    },
  }),
  bike({
    slug: "v-strom-250-sx",
    name: "V-Strom 250 SX",
    categorySlug: "aventura",
    categoryName: "Aventura",
    subtitle: "Tu primera gran aventura",
    tagline: "Aventura accesible",
    price: "$5.495",
    images: [img("852016478.png")],
    description: {
      heading: "AVENTURA PARA TODOS",
      title: "Ligera, ágil y lista para explorar",
      body: "La V-Strom 250 SX es la puerta de entrada al mundo de la aventura. Con su monocilíndrico de 249 cm³, bajo peso y postura cómoda, es perfecta tanto para la ciudad como para escapadas de fin de semana con un consumo excepcional.",
    },
    keySpecs: key("26", "249", "164", "12"),
    colors: [
      { name: "Champion Yellow", hex: "#f4c500" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Blaze Orange", hex: "#e8621f" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aceite, SOHC",
      displacement: "249 cm³",
      transmission: "6 velocidades",
      bore: "76 mm x 54.9 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Disco sencillo",
      length: "2150 mm",
      seatHeight: "835 mm",
      width: "880 mm",
      groundClearance: "205 mm",
      wheelbase: "1440 mm",
      frontTire: "100/80-17 M/C",
      rearTire: "140/70-17 M/C",
      weight: "164 kg",
      tank: "12 lts",
    },
  }),

  /* ------------------------------- SPORT ------------------------------ */
  bike({
    slug: "gsx-s1000gx",
    name: "GSX-S1000GX",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "El crossover deportivo definitivo",
    tagline: "Deportividad sin límites",
    price: "$21.995",
    images: [img("3166601295.jpeg")],
    description: {
      heading: "SPORT CROSSOVER",
      title: "La fusión de potencia y confort",
      body: "La GSX-S1000GX combina el legendario motor de 4 cilindros de 999 cm³ con suspensión electrónica y un completo paquete de asistencias. Un crossover deportivo que ofrece prestaciones de superbike con el confort de una tourer.",
    },
    keySpecs: key("152", "999", "232", "19"),
    colors: [
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Metallic Matte Steel Green", hex: "#4b5a4a" },
    ],
    specs: {
      engineType: "4-tiempos, 4-cilindros en línea, refr. líquida, DOHC",
      displacement: "999 cm³",
      transmission: "6 velocidades",
      bore: "73.4 mm x 59 mm",
      frontSusp: "Telescópica invertida electrónica",
      rearSusp: "Monoamortiguador electrónico",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2150 mm",
      seatHeight: "845 mm",
      width: "925 mm",
      groundClearance: "150 mm",
      wheelbase: "1470 mm",
      frontTire: "120/70ZR17 M/C",
      rearTire: "190/50ZR17 M/C",
      weight: "232 kg",
      tank: "19 lts",
    },
  }),
  bike({
    slug: "gsx-8r",
    name: "GSX-8R",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Un estilo que atrae al instante",
    tagline: "El nuevo estándar del deporte",
    price: "$12.495",
    images: [
      img("1085090108.webp"),
      img("962563984.webp"),
      img("2535154221.webp"),
      img("878469247.webp"),
      img("2264184470.webp"),
      img("2962754273.webp"),
      img("1993038834.webp"),
      img("2805454451.webp"),
      img("2826808226.webp"),
      img("2403004078.webp"),
      img("101083881.webp"),
      img("1542633267.webp"),
      img("940454281.webp"),
      img("3441955339.webp"),
    ],
    description: {
      heading: "LA NUEVA NAKED DEPORTIVA PARA TODOS LOS PILOTOS",
      title: "Tecnología para sentir la adrenalina",
      body: "La GSX-8R es un modelo totalmente nuevo, creado desde cero para destacar como una naked deportiva moderna para una nueva era de conducción emocionante. Fácil de controlar, ágil y lista para rodar, atrae a una amplia variedad de pilotos, sin importar su edad o experiencia.",
    },
    keySpecs: key("83", "776", "205", "14"),
    colors: [
      { name: "Pearl Ignite Yellow", hex: "#f4c500" },
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
    ],
    highlights: [
      { icon: "gauge", title: "Ergonomía Optimizada", description: "Diseño pensado para maximizar el control y confort en cada ruta." },
      { icon: "shield", title: "Sistemas Electrónicos Avanzados", description: "Modos de conducción, control de tracción y asistencias que elevan la seguridad y rendimiento." },
      { icon: "wind", title: "Aerodinámica y Estilo Vanguardista", description: "Carrocería diseñada para eficiencia y estabilidad a alta velocidad." },
    ],
    features: [
      { icon: "engine", title: "Motor bi-cilíndrico de alto desempeño", description: "El motor bicilíndrico de 776 cm³ combina fuerza, suavidad y eficiencia. Su cigüeñal de 270° entrega un par contundente y un sonido tipo V-Twin." },
      { icon: "settings", title: "Manillares de aluminio forjado", description: "Manillares deportivos y parabrisas aerodinámico que mejoran el control y el estilo agresivo." },
      { icon: "display", title: "Panel de instrumentos LCD completo", description: "Pantalla TFT LCD a color de 5\" con información clara y en tiempo real sobre todos los sistemas de la motocicleta." },
      { icon: "shield", title: "Sistema de frenos anti-bloqueo", description: "Pinzas de freno NISSIN de 4 pistones y anclaje radial con ABS y doble disco de freno flotante para un frenado controlado." },
      { icon: "wind", title: "Diseño streetfighter", description: "Un diseño streetfighter completamente moderno que marca tendencia para una nueva y excitante generación de motocicletas Suzuki." },
      { icon: "bolt", title: "Respuesta inmediata", description: "Inyección electrónica y transmisión de 6 velocidades para una aceleración ágil en todo momento." },
    ],
    specs: {
      engineType: "4-tiempos, 2-cilindros, refr. líquida, DOHC",
      displacement: "776 cm³",
      transmission: "6 velocidades",
      bore: "84 mm x 70 mm",
      frontSusp: "Telescópica invertida, muelle helicoidal, amortiguado por aceite",
      rearSusp: "Tipo enlace, muelle helicoidal, amortiguado por aceite",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2115 mm",
      seatHeight: "810 mm",
      width: "775 mm",
      groundClearance: "145 mm",
      wheelbase: "1465 mm",
      frontTire: "120/70ZR17 M/C sin cámara de aire",
      rearTire: "180/55ZR17 M/C sin cámara de aire",
      weight: "205 kg",
      tank: "14 lts",
    },
  }),
  bike({
    slug: "gsx-8s",
    name: "GSX-8S",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Naked deportiva de nueva generación",
    tagline: "Domina la ciudad",
    price: "$11.995",
    images: [img("3697759251.jpeg")],
    description: {
      heading: "NAKED DEPORTIVA MODERNA",
      title: "Agilidad y carácter urbano",
      body: "La GSX-8S es una naked totalmente nueva impulsada por el motor bicilíndrico de 776 cm³ con cigüeñal de 270°. Ligera, ágil y con un completo paquete electrónico, es la definición del placer de conducir en la ciudad y la carretera.",
    },
    keySpecs: key("83", "776", "202", "14"),
    colors: [
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Pearl Cosmic Blue", hex: "#20304f" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
    ],
    specs: {
      engineType: "4-tiempos, 2-cilindros, refr. líquida, DOHC",
      displacement: "776 cm³",
      transmission: "6 velocidades",
      bore: "84 mm x 70 mm",
      frontSusp: "Telescópica invertida, amortiguado por aceite",
      rearSusp: "Tipo enlace, muelle helicoidal",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2115 mm",
      seatHeight: "810 mm",
      width: "775 mm",
      groundClearance: "145 mm",
      wheelbase: "1465 mm",
      frontTire: "120/70ZR17 M/C",
      rearTire: "180/55ZR17 M/C",
      weight: "202 kg",
      tank: "14 lts",
    },
  }),
  bike({
    slug: "gsx-s1000",
    name: "GSX-S1000",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "La naked más radical",
    tagline: "Potencia superbike",
    price: "$16.995",
    images: [img("1540027756.jpeg")],
    description: {
      heading: "HYPER NAKED",
      title: "El corazón de una superbike",
      body: "La GSX-S1000 lleva el legendario motor de 4 cilindros de 999 cm³ derivado de la GSX-R a un chasis naked agresivo. Con 152 CV, control de tracción y un diseño intimidante, ofrece emociones puras en cada acelerada.",
    },
    keySpecs: key("152", "999", "214", "19"),
    colors: [
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Metallic Matte Mechanical Gray", hex: "#5a5f66" },
    ],
    specs: {
      engineType: "4-tiempos, 4-cilindros en línea, refr. líquida, DOHC",
      displacement: "999 cm³",
      transmission: "6 velocidades",
      bore: "73.4 mm x 59 mm",
      frontSusp: "Telescópica invertida, totalmente ajustable",
      rearSusp: "Tipo enlace, totalmente ajustable",
      frontBrake: "Disco doble",
      rearBrake: "Disco sencillo",
      length: "2115 mm",
      seatHeight: "810 mm",
      width: "810 mm",
      groundClearance: "140 mm",
      wheelbase: "1460 mm",
      frontTire: "120/70ZR17 M/C",
      rearTire: "190/50ZR17 M/C",
      weight: "214 kg",
      tank: "19 lts",
    },
  }),
  bike({
    slug: "gsx-r600",
    name: "GSX-R600",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "La leyenda de las pistas",
    tagline: "Pura sangre deportiva",
    price: "$15.495",
    images: [img("1239279977.jpeg")],
    description: {
      heading: "SUPERSPORT",
      title: "Nacida para la pista",
      body: "La GSX-R600 es una superdeportiva pura con un motor de 4 cilindros de 599 cm³ de altas revoluciones. Su chasis compacto, aerodinámica afilada y frenos Brembo la convierten en una máquina de rendimiento diseñada para dominar el circuito.",
    },
    keySpecs: key("124", "599", "187", "16.5"),
    colors: [
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Brilliant White / Blue", hex: "#1f3a93" },
      { name: "Metallic Matte Black", hex: "#2a2a2a" },
    ],
    specs: {
      engineType: "4-tiempos, 4-cilindros en línea, refr. líquida, DOHC",
      displacement: "599 cm³",
      transmission: "6 velocidades",
      bore: "67 mm x 42.5 mm",
      frontSusp: "Telescópica invertida Showa BPF, ajustable",
      rearSusp: "Tipo enlace, ajustable",
      frontBrake: "Disco doble Brembo",
      rearBrake: "Disco sencillo",
      length: "2030 mm",
      seatHeight: "810 mm",
      width: "710 mm",
      groundClearance: "130 mm",
      wheelbase: "1385 mm",
      frontTire: "120/70ZR17 M/C",
      rearTire: "180/55ZR17 M/C",
      weight: "187 kg",
      tank: "16.5 lts",
    },
  }),
  bike({
    slug: "gixxer-150-sf",
    name: "Gixxer 150 SF",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Deportividad accesible",
    tagline: "Estilo carenado",
    price: "$3.295",
    images: [img("3158698859.jpeg")],
    description: {
      heading: "DEPORTIVA URBANA",
      title: "Diseño carenado, alma de pista",
      body: "La Gixxer 150 SF combina un carenado deportivo inspirado en la GSX-R con un eficiente motor monocilíndrico de 155 cm³. Ligera, económica y con un estilo agresivo, es perfecta para quienes buscan emoción en el día a día.",
    },
    keySpecs: key("13.6", "155", "140", "12"),
    colors: [
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Mira Red", hex: "#b11616" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "155 cm³",
      transmission: "5 velocidades",
      bore: "56 mm x 62.9 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Disco sencillo",
      length: "2020 mm",
      seatHeight: "795 mm",
      width: "800 mm",
      groundClearance: "165 mm",
      wheelbase: "1335 mm",
      frontTire: "100/80-17 M/C",
      rearTire: "140/60-17 M/C",
      weight: "140 kg",
      tank: "12 lts",
    },
  }),
  bike({
    slug: "gixxer-150-se",
    name: "Gixxer 150 SE",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Naked ágil y económica",
    tagline: "Estilo streetfighter",
    price: "$3.095",
    images: [img("3088234712.jpeg")],
    description: {
      heading: "NAKED URBANA",
      title: "Agilidad y diseño musculoso",
      body: "La Gixxer 150 SE es una naked de estilo streetfighter con un motor monocilíndrico de 155 cm³ muy eficiente. Su bajo peso y manejo ágil la hacen ideal para desplazarte por la ciudad con estilo y economía.",
    },
    keySpecs: key("13.6", "155", "139", "12"),
    colors: [
      { name: "Metallic Matte Black", hex: "#2a2a2a" },
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Pearl Mira Red", hex: "#b11616" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "155 cm³",
      transmission: "5 velocidades",
      bore: "56 mm x 62.9 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Disco sencillo",
      length: "2005 mm",
      seatHeight: "795 mm",
      width: "805 mm",
      groundClearance: "160 mm",
      wheelbase: "1330 mm",
      frontTire: "100/80-17 M/C",
      rearTire: "140/60-17 M/C",
      weight: "139 kg",
      tank: "12 lts",
    },
  }),
  bike({
    slug: "gixxer-250-abs",
    name: "Gixxer 250 ABS",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Más potencia, más emoción",
    tagline: "Naked de media cilindrada",
    price: "$4.795",
    images: [img("1914721769.jpeg")],
    description: {
      heading: "NAKED DEPORTIVA 250",
      title: "El siguiente nivel de la Gixxer",
      body: "La Gixxer 250 ABS eleva la experiencia con un motor monocilíndrico de 249 cm³ refrigerado por aceite. Con ABS, panel digital y un diseño naked agresivo, ofrece el equilibrio perfecto entre potencia, control y economía.",
    },
    keySpecs: key("26", "249", "156", "12"),
    colors: [
      { name: "Metallic Sonic Silver", hex: "#b9bcc0" },
      { name: "Pearl Mira Red", hex: "#b11616" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aceite, SOHC",
      displacement: "249 cm³",
      transmission: "6 velocidades",
      bore: "76 mm x 54.9 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo con ABS",
      rearBrake: "Disco sencillo",
      length: "2010 mm",
      seatHeight: "800 mm",
      width: "805 mm",
      groundClearance: "170 mm",
      wheelbase: "1345 mm",
      frontTire: "110/70-17 M/C",
      rearTire: "150/60-17 M/C",
      weight: "156 kg",
      tank: "12 lts",
    },
  }),
  bike({
    slug: "gixxer-250-sf",
    name: "Gixxer 250 SF",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Deportiva carenada 250",
    tagline: "Aerodinámica y potencia",
    price: "$4.995",
    images: [img("4010246850.jpeg")],
    description: {
      heading: "SPORT CARENADA",
      title: "Estilo GSX-R en cada detalle",
      body: "La Gixxer 250 SF viste un carenado completo de inspiración GSX-R sobre el potente monocilíndrico de 249 cm³ refrigerado por aceite. Aerodinámica, cómoda y equipada con ABS, es ideal para viajar y disfrutar la carretera.",
    },
    keySpecs: key("26", "249", "161", "12"),
    colors: [
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Metallic Sonic Silver", hex: "#b9bcc0" },
      { name: "Pearl Mira Red", hex: "#b11616" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aceite, SOHC",
      displacement: "249 cm³",
      transmission: "6 velocidades",
      bore: "76 mm x 54.9 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo con ABS",
      rearBrake: "Disco sencillo",
      length: "2020 mm",
      seatHeight: "805 mm",
      width: "740 mm",
      groundClearance: "165 mm",
      wheelbase: "1350 mm",
      frontTire: "110/70-17 M/C",
      rearTire: "150/60-17 M/C",
      weight: "161 kg",
      tank: "12 lts",
    },
  }),
  bike({
    slug: "gsx-125",
    name: "GSX 125",
    categorySlug: "sport",
    categoryName: "Sport",
    subtitle: "Deportividad de entrada",
    tagline: "Pequeña pero feroz",
    price: "$2.695",
    images: [img("1352208548.jpeg")],
    description: {
      heading: "DEPORTIVA 125",
      title: "El primer paso al mundo GSX",
      body: "La GSX 125 ofrece el estilo deportivo de la familia GSX en un formato ligero y económico. Su motor monocilíndrico de 124 cm³ es eficiente y confiable, perfecto para quienes se inician en el mundo de las dos ruedas.",
    },
    keySpecs: key("11", "124", "118", "11"),
    colors: [
      { name: "Metallic Triton Blue", hex: "#1f3a93" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
      { name: "Pearl Mira Red", hex: "#b11616" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "124 cm³",
      transmission: "5 velocidades",
      bore: "62 mm x 41.2 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Tambor",
      length: "2000 mm",
      seatHeight: "785 mm",
      width: "740 mm",
      groundClearance: "160 mm",
      wheelbase: "1320 mm",
      frontTire: "90/80-17 M/C",
      rearTire: "120/80-17 M/C",
      weight: "118 kg",
      tank: "11 lts",
    },
  }),

  /* ------------------------- DOBLE PROPÓSITO -------------------------- */
  bike({
    slug: "dr-150",
    name: "DR-150",
    categorySlug: "doble-proposito",
    categoryName: "Doble Propósito",
    subtitle: "Ciudad y aventura sin límites",
    tagline: "Tan versátil como tú",
    price: "$3.495",
    images: [img("1640400433.webp")],
    description: {
      heading: "DOBLE PROPÓSITO LIGERA",
      title: "Igual de capaz dentro y fuera del asfalto",
      body: "La DR-150 es una moto doble propósito ligera y robusta, ideal para quienes buscan versatilidad total. Con su motor monocilíndrico de 150 cm³, suspensión de largo recorrido y bajo peso, domina la ciudad y los caminos de tierra.",
    },
    keySpecs: key("13", "150", "132", "13"),
    colors: [
      { name: "Pearl Brilliant White / Blue", hex: "#1f3a93" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "150 cm³",
      transmission: "5 velocidades",
      bore: "62 mm x 48.8 mm",
      frontSusp: "Telescópica de largo recorrido",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Tambor",
      length: "2100 mm",
      seatHeight: "870 mm",
      width: "830 mm",
      groundClearance: "245 mm",
      wheelbase: "1375 mm",
      frontTire: "2.75-21 M/C",
      rearTire: "4.10-18 M/C",
      weight: "132 kg",
      tank: "13 lts",
    },
  }),
  bike({
    slug: "dr650se",
    name: "DR650SE",
    categorySlug: "doble-proposito",
    categoryName: "Doble Propósito",
    subtitle: "La leyenda todo terreno",
    tagline: "Robustez legendaria",
    price: "$8.495",
    images: [img("3738158314.jpeg")],
    description: {
      heading: "DOBLE PROPÓSITO GRANDE",
      title: "Indestructible dentro y fuera del camino",
      body: "La DR650SE es una leyenda del doble propósito. Su robusto motor monocilíndrico de 644 cm³ ofrece torque de sobra y una fiabilidad legendaria. Simple, resistente y lista para llevarte a cualquier rincón del planeta.",
    },
    keySpecs: key("43", "644", "166", "13"),
    colors: [
      { name: "Solid Special White", hex: "#f3f3f3" },
      { name: "Glass Sparkle Black", hex: "#1c1c1e" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire/aceite, SOHC",
      displacement: "644 cm³",
      transmission: "5 velocidades",
      bore: "100 mm x 82 mm",
      frontSusp: "Telescópica de largo recorrido, ajustable",
      rearSusp: "Tipo enlace, ajustable",
      frontBrake: "Disco sencillo",
      rearBrake: "Disco sencillo",
      length: "2255 mm",
      seatHeight: "885 mm",
      width: "865 mm",
      groundClearance: "265 mm",
      wheelbase: "1490 mm",
      frontTire: "90/90-21 M/C",
      rearTire: "120/90-17 M/C",
      weight: "166 kg",
      tank: "13 lts",
    },
  }),

  /* ----------------------------- MOTOCROSS --------------------------- */
  bike({
    slug: "rm-z250",
    name: "RM-Z250",
    categorySlug: "motocross",
    categoryName: "Motocross",
    subtitle: "Rendimiento de competencia",
    tagline: "Domina el circuito",
    price: "$8.999",
    images: [img("3116067957.jpeg")],
    description: {
      heading: "MOTOCROSS 250",
      title: "Agilidad y potencia de campeonato",
      body: "La RM-Z250 es una máquina de motocross pura, con un motor de 249 cm³ de altas revoluciones y un chasis de aluminio ultraligero. Su suspensión de competencia y respuesta inmediata la hacen imbatible en la pista.",
    },
    keySpecs: key("39", "249", "106", "6.6"),
    colors: [{ name: "Champion Yellow No. 2", hex: "#f4c500" }],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. líquida, DOHC",
      displacement: "249 cm³",
      transmission: "5 velocidades",
      bore: "77 mm x 53.6 mm",
      startSystem: "Pedal",
      frontSusp: "Horquilla invertida Showa, totalmente ajustable",
      rearSusp: "Monoamortiguador Showa, totalmente ajustable",
      frontBrake: "Disco sencillo",
      rearBrake: "Disco sencillo",
      length: "2170 mm",
      seatHeight: "960 mm",
      width: "830 mm",
      groundClearance: "330 mm",
      wheelbase: "1475 mm",
      frontTire: "80/100-21 M/C",
      rearTire: "100/90-19 M/C",
      weight: "106 kg",
      tank: "6.6 lts",
    },
  }),
  bike({
    slug: "rm-z450",
    name: "RM-Z450",
    categorySlug: "motocross",
    categoryName: "Motocross",
    subtitle: "La reina del motocross",
    tagline: "Potencia absoluta",
    price: "$9.999",
    images: [img("3090410632.jpeg")],
    description: {
      heading: "MOTOCROSS 450",
      title: "Máxima potencia para el podio",
      body: "La RM-Z450 es la punta de lanza de Suzuki en motocross. Su motor de 449 cm³ entrega una potencia explosiva y controlable, mientras que su chasis y suspensión de competencia ofrecen la tracción y agilidad para ganar carreras.",
    },
    keySpecs: key("54", "449", "112", "6.6"),
    colors: [{ name: "Champion Yellow No. 2", hex: "#f4c500" }],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. líquida, DOHC",
      displacement: "449 cm³",
      transmission: "5 velocidades",
      bore: "96 mm x 62.1 mm",
      startSystem: "Pedal",
      frontSusp: "Horquilla invertida Showa, totalmente ajustable",
      rearSusp: "Monoamortiguador Showa, totalmente ajustable",
      frontBrake: "Disco sencillo",
      rearBrake: "Disco sencillo",
      length: "2185 mm",
      seatHeight: "960 mm",
      width: "830 mm",
      groundClearance: "330 mm",
      wheelbase: "1495 mm",
      frontTire: "80/100-21 M/C",
      rearTire: "110/90-19 M/C",
      weight: "112 kg",
      tank: "6.6 lts",
    },
  }),

  /* ------------------------------ TRABAJO ---------------------------- */
  bike({
    slug: "ax4",
    name: "AX4",
    categorySlug: "trabajo",
    categoryName: "Trabajo",
    subtitle: "La aliada del trabajo diario",
    tagline: "Resistencia y economía",
    price: "$1.995",
    images: [img("422148486.webp")],
    description: {
      heading: "MOTO DE TRABAJO",
      title: "Confiable jornada tras jornada",
      body: "La AX4 está diseñada para el trabajo duro de cada día. Su motor monocilíndrico de 113 cm³ es extremadamente económico y confiable, mientras que su estructura robusta soporta el uso más exigente sin fallar.",
    },
    keySpecs: key("8.5", "113", "105", "10.5"),
    colors: [
      { name: "Black", hex: "#1c1c1e" },
      { name: "Blue", hex: "#1f3a93" },
      { name: "Red", hex: "#b11616" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "113 cm³",
      transmission: "4 velocidades",
      bore: "51 mm x 55.2 mm",
      startSystem: "Eléctrico y pedal",
      fuelSystem: "Carburador",
      frontSusp: "Telescópica",
      rearSusp: "Doble amortiguador",
      frontBrake: "Tambor",
      rearBrake: "Tambor",
      wheels: "Rayos",
      length: "1930 mm",
      seatHeight: "770 mm",
      width: "730 mm",
      groundClearance: "160 mm",
      wheelbase: "1215 mm",
      frontTire: "2.50-17",
      rearTire: "2.75-17",
      weight: "105 kg",
      tank: "10.5 lts",
    },
  }),
  bike({
    slug: "gn125h",
    name: "GN125H",
    categorySlug: "trabajo",
    categoryName: "Trabajo",
    subtitle: "El clásico que nunca falla",
    tagline: "Estilo atemporal",
    price: "$2.295",
    images: [img("1073099159.jpeg")],
    description: {
      heading: "CLÁSICA DE TRABAJO",
      title: "Un ícono confiable y económico",
      body: "La GN125H es un clásico atemporal, reconocido por su fiabilidad y bajo costo de operación. Su motor monocilíndrico de 124 cm³ y su estilo custom la hacen ideal tanto para el trabajo como para el uso personal diario.",
    },
    keySpecs: key("12", "124", "122", "10.5"),
    colors: [
      { name: "Black", hex: "#1c1c1e" },
      { name: "Red", hex: "#b11616" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "124 cm³",
      transmission: "5 velocidades",
      bore: "57 mm x 48.8 mm",
      startSystem: "Eléctrico y pedal",
      fuelSystem: "Carburador",
      frontSusp: "Telescópica",
      rearSusp: "Doble amortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Tambor",
      wheels: "Rayos",
      length: "2005 mm",
      seatHeight: "735 mm",
      width: "800 mm",
      groundClearance: "160 mm",
      wheelbase: "1275 mm",
      frontTire: "2.75-18",
      rearTire: "3.50-16",
      weight: "122 kg",
      tank: "10.5 lts",
    },
  }),

  /* ------------------------------ SCOOTERS --------------------------- */
  bike({
    slug: "burgman-street-125",
    name: "Burgman Street 125",
    categorySlug: "scooters",
    categoryName: "Scooters",
    subtitle: "El maxi-scooter urbano",
    tagline: "Confort de gran turismo",
    price: "$3.195",
    images: [img("3880843727.jpeg")],
    description: {
      heading: "SCOOTER PREMIUM",
      title: "Estilo maxi-scooter para la ciudad",
      body: "El Burgman Street 125 trae el ADN de los grandes maxi-scooters a un formato urbano. Con un motor de 124 cm³ suave y eficiente, amplio espacio de almacenamiento y una postura de conducción relajada, es la máxima expresión del confort urbano.",
    },
    keySpecs: key("8.7", "124", "110", "5.5"),
    colors: [
      { name: "Metallic Matte Black", hex: "#2a2a2a" },
      { name: "Pearl Mirage White", hex: "#f3f3f3" },
      { name: "Metallic Sonic Silver", hex: "#b9bcc0" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "124 cm³",
      transmission: "Automática CVT",
      bore: "52.5 mm x 57.4 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Tambor",
      wheels: "Aleación de aluminio",
      length: "1880 mm",
      seatHeight: "780 mm",
      width: "700 mm",
      groundClearance: "160 mm",
      wheelbase: "1265 mm",
      frontTire: "90/90-12",
      rearTire: "90/100-10",
      weight: "110 kg",
      tank: "5.5 lts",
    },
  }),
  bike({
    slug: "access-125",
    name: "Access 125",
    categorySlug: "scooters",
    categoryName: "Scooters",
    subtitle: "Practicidad para toda la familia",
    tagline: "Elegante y funcional",
    price: "$2.795",
    images: [img("1053132481.jpeg")],
    description: {
      heading: "SCOOTER FAMILIAR",
      title: "Comodidad y estilo clásico",
      body: "El Access 125 es un scooter elegante y práctico, ideal para la movilidad diaria de toda la familia. Su motor de 124 cm³ ofrece un consumo excepcional, mientras que su diseño clásico y su comodidad lo hacen perfecto para la ciudad.",
    },
    keySpecs: key("8.7", "124", "104", "5"),
    colors: [
      { name: "Pearl Mirage White", hex: "#f3f3f3" },
      { name: "Metallic Sonic Silver", hex: "#b9bcc0" },
      { name: "Metallic Matte Black", hex: "#2a2a2a" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire, SOHC",
      displacement: "124 cm³",
      transmission: "Automática CVT",
      bore: "52.5 mm x 57.4 mm",
      frontSusp: "Telescópica",
      rearSusp: "Monoamortiguador",
      frontBrake: "Disco sencillo",
      rearBrake: "Tambor",
      wheels: "Aleación de aluminio",
      length: "1870 mm",
      seatHeight: "773 mm",
      width: "690 mm",
      groundClearance: "160 mm",
      wheelbase: "1265 mm",
      frontTire: "90/90-12",
      rearTire: "90/100-10",
      weight: "104 kg",
      tank: "5 lts",
    },
  }),

  /* ------------------------------ CUADRAS ---------------------------- */
  bike({
    slug: "kingquad-400",
    name: "KingQuad 400",
    categorySlug: "cuadras",
    categoryName: "Cuadraciclos",
    subtitle: "Fuerza y agilidad todo terreno",
    tagline: "El compañero de trabajo",
    price: "$8.499",
    images: [img("1958553876.jpeg")],
    description: {
      heading: "CUADRACICLO 4x4",
      title: "Potencia confiable para cada tarea",
      body: "El KingQuad 400 combina un robusto motor de 376 cm³ con tracción 4x4 seleccionable. Ideal para el trabajo en el campo y la aventura, ofrece la fiabilidad legendaria de la familia KingQuad en un formato ágil y manejable.",
    },
    keySpecs: key("26", "376", "270", "17"),
    colors: [
      { name: "Flame Red", hex: "#c0281f" },
      { name: "Terra Green", hex: "#4b5a3a" },
      { name: "True Black", hex: "#1c1c1e" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire/aceite, SOHC",
      displacement: "376 cm³",
      transmission: "Semiautomática 5 vel. + reversa",
      startSystem: "Eléctrico",
      frontSusp: "Independiente doble A",
      rearSusp: "Basculante / eje rígido",
      frontBrake: "Disco doble",
      rearBrake: "Sellado tipo baño de aceite",
      wheels: "Acero",
      length: "1850 mm",
      seatHeight: "885 mm",
      width: "1150 mm",
      groundClearance: "255 mm",
      wheelbase: "1250 mm",
      frontTire: "25 x 8-12",
      rearTire: "25 x 10-12",
      weight: "270 kg",
      tank: "17 lts",
    },
  }),
  bike({
    slug: "kingquad-500",
    name: "KingQuad 500",
    categorySlug: "cuadras",
    categoryName: "Cuadraciclos",
    subtitle: "Potencia y tecnología 4x4",
    tagline: "Domina cualquier terreno",
    price: "$10.499",
    images: [img("4150393847.jpeg")],
    description: {
      heading: "CUADRACICLO 4x4 AVANZADO",
      title: "Fuerza y control de nivel superior",
      body: "El KingQuad 500 AXi ofrece un potente motor de 493 cm³ con inyección electrónica, dirección asistida y tracción 4x4. Diseñado para el trabajo pesado y las aventuras más exigentes con la máxima comodidad y control.",
    },
    keySpecs: key("34", "493", "300", "17.5"),
    colors: [
      { name: "Terra Green", hex: "#4b5a3a" },
      { name: "Flame Red", hex: "#c0281f" },
      { name: "Metallic Matte Gray", hex: "#5a5f66" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. por aire/aceite, SOHC",
      displacement: "493 cm³",
      transmission: "Semiautomática con reversa",
      startSystem: "Eléctrico",
      frontSusp: "Independiente doble A",
      rearSusp: "Independiente doble A",
      frontBrake: "Disco doble",
      rearBrake: "Disco sellado",
      wheels: "Acero",
      length: "2130 mm",
      seatHeight: "925 mm",
      width: "1215 mm",
      groundClearance: "265 mm",
      wheelbase: "1285 mm",
      frontTire: "25 x 8-12",
      rearTire: "25 x 10-12",
      weight: "300 kg",
      tank: "17.5 lts",
    },
  }),
  bike({
    slug: "kingquad-750",
    name: "KingQuad 750",
    categorySlug: "cuadras",
    categoryName: "Cuadraciclos",
    subtitle: "El rey de los cuadraciclos",
    tagline: "Máxima fuerza todo terreno",
    price: "$12.499",
    images: [img("327709186.jpeg")],
    description: {
      heading: "CUADRACICLO 4x4 TOPE DE GAMA",
      title: "Poder indomable para todo terreno",
      body: "El KingQuad 750 AXi es el tope de gama, con un potente motor de 722 cm³ con inyección electrónica, dirección asistida y tracción 4x4. La máxima expresión de fuerza, tecnología y durabilidad para conquistar cualquier reto.",
    },
    keySpecs: key("48", "722", "305", "17.5"),
    colors: [
      { name: "Terra Green", hex: "#4b5a3a" },
      { name: "Flame Red", hex: "#c0281f" },
      { name: "True Black", hex: "#1c1c1e" },
    ],
    specs: {
      engineType: "4-tiempos, 1-cilindro, refr. líquida, SOHC",
      displacement: "722 cm³",
      transmission: "Semiautomática con reversa",
      startSystem: "Eléctrico",
      frontSusp: "Independiente doble A",
      rearSusp: "Independiente doble A",
      frontBrake: "Disco doble",
      rearBrake: "Disco sellado",
      wheels: "Aluminio",
      length: "2130 mm",
      seatHeight: "925 mm",
      width: "1215 mm",
      groundClearance: "265 mm",
      wheelbase: "1285 mm",
      frontTire: "25 x 8-12",
      rearTire: "25 x 10-12",
      weight: "305 kg",
      tank: "17.5 lts",
    },
  }),
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function getMotorcycleBySlug(slug: string): Motorcycle | undefined {
  return motorcycles.find((m) => m.slug === slug);
}

export function getAllSlugs(): string[] {
  return motorcycles.map((m) => m.slug);
}

export function getMotorcyclesByCategory(categorySlug: string): Motorcycle[] {
  return motorcycles.filter((m) => m.categorySlug === categorySlug);
}

export type CategoryWithBikes = Category & { bikes: Motorcycle[] };

export function getCategoriesWithBikes(): CategoryWithBikes[] {
  return categories.map((c) => ({
    ...c,
    bikes: getMotorcyclesByCategory(c.slug),
  }));
}

export function getRelatedMotorcycles(slug: string, limit = 3): Motorcycle[] {
  const current = getMotorcycleBySlug(slug);
  if (!current) return [];
  const sameCat = motorcycles.filter(
    (m) => m.categorySlug === current.categorySlug && m.slug !== slug,
  );
  const others = motorcycles.filter(
    (m) => m.categorySlug !== current.categorySlug && m.slug !== slug,
  );
  return [...sameCat, ...others].slice(0, limit);
}

/** Central contact links — edit these to match your dealership. */
export const contactLinks = {
  whatsapp: "https://wa.me/573019852150",
  phone: "tel:+573019852150",
}; 