export type NewsCategory = "Novedades" | "Moto GP" | "Clubes";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: NewsCategory;
}

export const categories = ["Todas", "Novedades", "Moto GP", "Clubes"] as const;
export type CategoryFilter = (typeof categories)[number];

/** Noticia destacada tal como aparece en la primera carga */
export const featuredNews: NewsItem = {
  id: "44-anos-rodando-junto-colombia",
  title: "44 años rodando junto a Colombia",
  excerpt:
    "Suzuki Motor de Colombia celebra 44 años rodando junto a generaciones de motociclistas. En 1982 comenzó una historia que hoy cumple 44 años. Una historia construida sobre esfuerzo, evolución y pasión por las motocicletas. Desde la fundación de la compañía, Suzuki Motor de Colombia ha sido parte del desarrollo del país, acompañando a generaciones de motociclistas con modelos que marcaron época…",
  date: "28 de Enero 2026",
  image: "/motos/noticias/44-anos.jpeg",
  category: "Novedades",
};

/** Últimas noticias visibles en la primera carga (página 1) */
export const latestNews: NewsItem[] = [
  {
    id: "mejores-scooters-de-lujo-para-la-ciudad-en-colombia",
    title:
      "Mejores scooters de lujo para la ciudad en Colombia. ¿Qué moto elegir para moverse con comodidad y estatus en Colombia?",
    excerpt:
      "La nueva Suzuki Burgman 15 llega a Colombia como una evolución de la familia Burgman, pensada para quienes buscan un scooter más potente, más equipado y más capaz para el uso diario. Es una alternativa superior a una scooter 125cc para quienes quiere…",
    date: "08 de Julio 2026",
    image: "/motos/noticias/burgman.jpeg",
    category: "Novedades",
  },
  {
    id: "es-la-nueva-suzuki-viva-fi-abs-la-mejor-moto-semiautomatica-del-mercado",
    title:
      "¿Es la nueva Suzuki VIVA FI ABS la mejor moto semiautomática del mercado?",
    excerpt:
      "La nueva Suzuki VIVA FI ABS llega como una evolución de la reconocida VIVA R STYLE, una moto que durante años se ha ganado un lugar especial entre quienes buscan una semiautomática práctica, ágil y fácil de manejar. Con esta actuali…",
    date: "17 de Junio 2026",
    image: "/motos/noticias/viva-fi-abs.jpeg",
    category: "Novedades",
  },
  {
    id: "mejores-motos-urbanas-para-la-ciudad-en-colombia",
    title:
      "Mejores motos urbanas para la ciudad en Colombia. ¿Qué moto elegir para trabajar en Colombia?",
    excerpt:
      "La nueva Suzuki GN160 llega a Colombia como una evolución de la familia GN, pensada para quienes buscan una moto más potente, más equipada y más capaz para el uso diario. Es una alternativa superior a la GN125 ABS para quienes quieren may…",
    date: "16 de Junio 2026",
    image: "/motos/noticias/gn160.jpeg",
    category: "Novedades",
  },
  {
    id: "roczen-conquista-filadelfia-y-se-aduena-del-liderato",
    title: "Roczen conquista Filadelfia y se adueña del liderato",
    excerpt:
      "En una noche marcada por la lluvia y la exigencia extrema, Ken Roczen demostró por qué es uno de los grandes del campeonato. En la ronda 15 del SMX 2026, el piloto de Suzuki se impuso con autoridad en Filadelfia, firmando una victoria clave en el mom…",
    date: "28 de Abril 2026",
    image: "/motos/noticias/roczen.jpeg",
    category: "Moto GP",
  },
  {
    id: "suzuki-se-suma-al-gp-colombia-2026-con-la-monomarca-gsx-rs-150",
    title:
      "¡Suzuki se suma al GP Colombia 2026 con la Monomarca GSX R/S 150!",
    excerpt:
      "En Suzuki seguimos apostándole al crecimiento del motociclismo en Colombia. En alianza con la Federación Colombiana de Motociclismo, anunciamos nuestra participación en el GP Colombia 2026 con una nueva categoría: la Monomarca GSX R/S 150. Esta ca…",
    date: "08 de Abril 2026",
    image: "/motos/noticias/gp-colombia.jpeg",
    category: "Moto GP",
  },
  {
    id: "suzuki-campeon-del-campeonato-mundial-de-supercross-fim-2025",
    title:
      "Suzuki campeón del Campeonato Mundial de Supercross FIM 2025 y confirma su potente alineación para 2026.",
    excerpt:
      "Jason Anderson, Campeón Mundial de Supercross SX1. El piloto Jason Anderson se coronó Campeón Mundial de Supercross SX1 tras lograr una victoria perfecta en la ronda final del Gran Premio de Sudáfrica, a bordo de su RM-Z450…",
    date: "16 de Diciembre 2025",
    image: "/motos/noticias/supercross.jpeg",
    category: "Moto GP",
  },
  {
    id: "alerta-recaudos-y-metodos-de-pago-web-fraudulento",
    title:
      "ALERTA - RECAUDOS Y MÉTODOS DE PAGO WEB FRAUDULENTO CLIENTE Y PÚBLICO EN GENERAL",
    excerpt:
      "Para SUZUKI MOTOR DE COLOMBIA S.A. es muy importante cuidar la seguridad y velar por el bienestar de nuestros usuarios, por esto se realiza un comunicado en el que se da a conocer una alerta de fraude haciendo una serie de recomendaciones desde la ma…",
    date: "09 de Diciembre 2025",
    image: "/motos/noticias/alerta-fraude.jpeg",
    category: "Novedades",
  },
];