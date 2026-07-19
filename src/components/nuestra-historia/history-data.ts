/**
 * Fuente única de datos de la línea de tiempo "Nuestra Historia" de Suzuki.
 * El componente <Timeline /> recorre este arreglo y renderiza automáticamente
 * cada año. No existe un componente por año: todo se construye desde aquí.
 */

export interface HistoryEntry {
  /** Identificador único (varios años se repiten, ej. 1971, 1976, 2005). */
  id: string;
  /** Año que se muestra en grande. */
  year: string;
  /** Ruta local de la imagen dentro de /public. `null` si el año no tiene imagen. */
  image: string | null;
  /** Texto alternativo de la imagen. */
  alt: string;
  /** Uno o más párrafos de la descripción. */
  paragraphs: string[];
}

/** Contenido del banner / hero superior. */
export const heroContent = {
  image: "/nuestra-historia/hero.jpeg",
  title: "NUESTRA HISTORIA",
  intro:
    "Continuamente evolucionando a lo largo de las décadas, Suzuki tiene una historia rica y orgullosa que no conoce límites,",
};

export const historyData: HistoryEntry[] = [
  {
    id: "1909",
    year: "1909",
    image: "/nuestra-historia/1909.jpeg",
    alt: "Telar Suzuki Loom Works, 1909",
    paragraphs: [
      'Michio Suzuki abre el "Suzuki Loom Works" en el pequeño pueblo costero de Hamamatsu, Prefectura de Shizuoka, Japón. La nueva fábrica elabora telares para la industria de algodón masiva de Japón y la intención de Michio es simple: construir mejores telares ergonómicos que cualquier otro que esté disponible actualmente.',
    ],
  },
  {
    id: "1920",
    year: "1920",
    image: "/nuestra-historia/1920.jpeg",
    alt: "Michio Suzuki, presidente de la compañía, 1920",
    paragraphs: [
      'La fábrica en crecimiento se reorganiza, se incorpora bajo el nombre "Suzuki Loom Manufacturing Co.", con Michio Suzuki asumiendo el papel de presidente de la compañía. Éste es el inicio de Suzuki Motor Corporation.',
    ],
  },
  {
    id: "1952",
    year: "1952",
    image: "/nuestra-historia/1952.jpeg",
    alt: 'Suzuki "Power Free", 1952',
    paragraphs: [
      'Suzuki construye su primera bicicleta motorizada, la "Power Free". Diseñada para ser económica y fácil de mantener, ésta utiliza un motor de dos tiempos de 36 cc sujeto al marco de una bicicleta convencional. El exclusivo sistema de engranaje de doble piñón que incorpora la "Power Free" permite a los usuarios pedalear sin ayuda del motor, con la asistencia del motor, o viajar completamente con sólo la potencia del motor.',
    ],
  },
  {
    id: "1953",
    year: "1953",
    image: "/nuestra-historia/1953.jpeg",
    alt: 'Suzuki "Diamond Free", 1953',
    paragraphs: [
      'Suzuki produce su segunda bicicleta motorizada. La muy mejorada "Diamond Free" utiliza un motor más grande de 60 cc y se lleva la primera de las innumerables victorias de Suzuki cuando gana en su clase en el Monte Fuji Hill Climb de 1953.',
    ],
  },
  {
    id: "1954",
    year: "1954",
    image: "/nuestra-historia/1954.jpeg",
    alt: 'Suzuki "Colleda", 1954',
    paragraphs: [
      'La compañía cambia su nombre a Suzuki Motor Co., Ltd y construye su primera motocicleta completa. La "Colleda" es una motocicleta monocilíndrica de 90cc, cuatro tiempos y su nombre, traducido, significa "¡Esto es todo!" O "¡Este es la única!" Suzuki inscribe su nueva motocicleta en el Monte Fuji Hill Climb y triunfa sobre 86 rivales.',
    ],
  },
  {
    id: "1958",
    year: "1958",
    image: "/nuestra-historia/1958.jpeg",
    alt: 'Logo Suzuki "S", 1958',
    paragraphs: ['La ahora famosa Suzuki "S" hace su primera aparición.'],
  },
  {
    id: "1962",
    year: "1962",
    image: "/nuestra-historia/1962.jpeg",
    alt: "Ernst Degner, campeón mundial de 50cc, 1962",
    paragraphs: [
      "¡Campeones del mundo! El piloto de Alemania del Este, Ernst Degner, se lleva la primera victoria de Suzuki en TT al ganar la carrera de 50cc. Él va a ganar el campeonato mundial de 50 cc en el mismo año, dando a Suzuki su primer título mundial. Cinco títulos más en la categoría de 50cc seguirán en los próximos seis años.",
    ],
  },
  {
    id: "1963",
    year: "1963",
    image: "/nuestra-historia/1963.jpeg",
    alt: "Hugh Anderson en carrera, 1963",
    paragraphs: [
      "Hugh Anderson de Nueva Zelanda gana los títulos mundiales de 50cc y 125cc, el primer doble de Suzuki. Mitsuo Itoh gana el 50cc TT en una Suzuki. Él sigue siendo el único piloto japonés que ha ganado una carrera TT.",
    ],
  },
  {
    id: "1965",
    year: "1965",
    image: "/nuestra-historia/1965.jpeg",
    alt: "Suzuki T20 Super Six, 1965",
    paragraphs: [
      "La sensacional T20 Super Six realmente pone a Suzuki en el mapa internacional. La T20 de 250 cc, dos tiempos con caja de cambios de seis velocidades y una velocidad máxima de 160 km / h, la T20 es un gran éxito de ventas.",
    ],
  },
  {
    id: "1968",
    year: "1968",
    image: "/nuestra-historia/1968.jpeg",
    alt: "Suzuki T500, 1968",
    paragraphs: [
      "Hans-Georg Anscheidt retiene el tercer título mundial consecutivo de 50 cc. Suzuki entra en el mercado de las motocicletas grandes por primera vez con el motor gemelo paralelo T500. Produce 47PS, tiene una velocidad máxima de 181 km / h, y es tan popular que permanece en producción durante los próximos diez años.",
    ],
  },
  {
    id: "1971-gt750",
    year: "1971",
    image: "/nuestra-historia/1971-gt750.jpeg",
    alt: "Suzuki GT750, 1971",
    paragraphs: [
      "El primer verdadero Superbike de Suzuki se revela. El GT750 es un motor de tres cilindros y dos tiempos refrigerado por líquido que alcanza rápidamente un estado legendario. La confiabilidad del GT750 y sus capacidades generales lo convierten en una de las motos más populares de la década de 1970.",
    ],
  },
  {
    id: "1971-motocross",
    year: "1971",
    image: "/nuestra-historia/1971-motocross.jpeg",
    alt: "Suzuki RN71 de motocross, 1971",
    paragraphs: [
      "Joel Robert retiene la corona mundial de motocross de 250cc. Roger De Coster se convierte en el Campeón del Mundo de Motocross de 500 cc en su Suzuki RN71.",
    ],
  },
  {
    id: "1975",
    year: "1975",
    image: "/nuestra-historia/1975.jpeg",
    alt: "Suzuki RM125, 1975",
    paragraphs: [
      "La RM125 se presenta como una versión de producción de la máquina RA75.",
    ],
  },
  {
    id: "1976-rg500",
    year: "1976",
    image: "/nuestra-historia/1976-rg500.jpeg",
    alt: "Barry Sheene en la Suzuki RG500, 1976",
    paragraphs: [
      "Barry Sheene gana su primer título mundial de 500 cc y el de Suzuki en la RG500. La mítica motocicleta se llevó los seis primeros lugares en el campeonato.",
    ],
  },
  {
    id: "1976-gs750",
    year: "1976",
    image: "/nuestra-historia/1976-gs750.jpeg",
    alt: "Suzuki GS750, 1976",
    paragraphs: [
      "Mientras tanto, se lanza la GS750, la primera motocicleta grande de cuatro cilindros de Suzuki.",
    ],
  },
  {
    id: "1978",
    year: "1978",
    image: "/nuestra-historia/1978.jpeg",
    alt: "Suzuki GS1000, 1978",
    paragraphs: [
      "La Suzuki GS1000 se lanza a la aclamación universal. Por fin, una motocicleta de cuatro cilindros y 1000 cc que tiene el manejo para igualar su potencia. La GS1000 establece nuevos estándares para Superbikes.",
      "Los pilotos estadounidenses Wes Cooley y Mike Baldwin montan la motocicleta hasta la victoria en la carrera inaugural de 8 horas de Suzuka, considerada entre los fabricantes japoneses como la carrera más importante del calendario.",
    ],
  },
  {
    id: "1981-rg500",
    year: "1981",
    image: "/nuestra-historia/1981-rg500.jpeg",
    alt: "Marco Lucchinelli en la RG500, 1981",
    paragraphs: [
      "Marco Lucchinelli, de Italia, gana el campeonato mundial de 500 cc con una RG500.",
    ],
  },
  {
    id: "1981-katana",
    year: "1981",
    image: "/nuestra-historia/1981-katana.jpeg",
    alt: "Suzuki GSX1100S Katana, 1981",
    paragraphs: [
      "Suzuki aturde al mundo del motociclismo con su futurista GSX1100S Katana. El estilo agresivo de la Moocicleta y su excelente rendimiento lo convierten en un gran éxito de ventas.",
    ],
  },
  {
    id: "1983",
    year: "1983",
    image: "/nuestra-historia/1983.jpeg",
    alt: 'Suzuki "QuadRunner 125", 1983',
    paragraphs: [
      'El primer ATV de cuatro ruedas del mundo, el "QuadRunner 125" es lanzado.',
    ],
  },
  {
    id: "1985",
    year: "1985",
    image: "/nuestra-historia/1985.jpeg",
    alt: "Suzuki GSX-R750, 1985",
    paragraphs: [
      "Llega la moto que va a cambiar la faz del motociclismo. La GSX-R750 de Suzuki siempre será recordado como la primera máquina de carrera verdadera. Con una potencia de 100 caballos de fuerza y un peso de 176 kg, creó una nueva categoría de motos de alto rendimiento. La GSX-R750 logra un resultado de 1-2 en su carrera de debut en el Campeonato del Mundo de Resistencia, la carrera de resistencia de 24 horas de Le Mans.",
    ],
  },
  {
    id: "1988",
    year: "1988",
    image: "/nuestra-historia/1988.jpeg",
    alt: "Suzuki DR-BIG, 1988",
    paragraphs: [
      "El reinicio completo de la acción de GP de mundo funciona. Kevin Schwantz, una nueva estrella de Suzuki, gana el primer GP de 500cc en Suzuka en su primer año completo de carreras de GP. Suzuki presentó la DR-BIG.",
    ],
  },
  {
    id: "1989",
    year: "1989",
    image: "/nuestra-historia/1989.jpeg",
    alt: "Suzuki RGV250, 1989",
    paragraphs: [
      "Suzuki lanza la icónica RGV250, una de las réplicas de carreras de dos tiempos más populares de todos los tiempos.",
    ],
  },
  {
    id: "1993",
    year: "1993",
    image: null,
    alt: "",
    paragraphs: [
      "Kevin Schwantz gana el campeonato mundial de 500 cc en el RGV-γ500 y asegura que su nombre siempre será recordado entre los grandes de todos los tiempos.",
    ],
  },
  {
    id: "1995",
    year: "1995",
    image: "/nuestra-historia/1995.jpeg",
    alt: "Suzuki Bandit 1200, 1995",
    paragraphs: [
      "La Bandit 1200 se estrena. El motor refrigerado por aire / aceite de 16 válvulas y 1156 cc, basado en el probada GSX-R1100, montado en un chasis de doble cuna.",
    ],
  },
  {
    id: "1996",
    year: "1996",
    image: null,
    alt: "",
    paragraphs: [
      "Suzuki reinventó el modelo GSX-R750 en 1996 con un motor y un chasis completamente nuevos.",
    ],
  },
  {
    id: "1998",
    year: "1998",
    image: "/nuestra-historia/1998.jpeg",
    alt: "Suzuki Burgman 400, 1998",
    paragraphs: ["Debuta la Burgman 400"],
  },
  {
    id: "1999",
    year: "1999",
    image: "/nuestra-historia/1999.jpeg",
    alt: "Suzuki GSX1300R Hayabusa, 1999",
    paragraphs: [
      'Suzuki rompe el molde una vez más con la presentación de la GSX1300R Hayabusa. La motocicleta establece nuevos estándares en la categoría "hyper-sports".',
    ],
  },
  {
    id: "2001",
    year: "2001",
    image: "/nuestra-historia/2001.jpeg",
    alt: "Suzuki GSX-R1000, 2001",
    paragraphs: [
      "Un año inolvidable que vio el lanzamiento de la motocicleta deportiva definitiva: la Suzuki GSX-R1000. La nueva incorporación a la familia GSX-R tuvo el mismo impacto que la original desde su lanzamiento en 1985 y reescribió los libros de reglas sobre rendimiento, peso, manejo y estilo. Pronto estaría dominando las pistas de carreras y las ceremonias de entrega de premios en todo el mundo.",
    ],
  },
  {
    id: "2002",
    year: "2002",
    image: "/nuestra-historia/2002.jpeg",
    alt: "Suzuki Burgman 650, 2002",
    paragraphs: [
      "Se lanza la scooter de mayor capacidad del mundo, la Burgman 650. El motor de 638cc maxi-scooter crea una nueva clase de scooters de alto rendimiento para giros y vueltas capaces de realizar recorridos de larga distancia.",
    ],
  },
  {
    id: "2003",
    year: "2003",
    image: "/nuestra-historia/2003.jpeg",
    alt: "Suzuki QuadSport Z400, 2003",
    paragraphs: ["Suzuki presenta la QuadSport Z400, un ATV deportivo."],
  },
  {
    id: "2005-corser",
    year: "2005",
    image: "/nuestra-historia/2005-corser.jpeg",
    alt: "Troy Corser en la GSX-R1000, 2005",
    paragraphs: [
      "Los corredores australianos Troy Corser y Matt Mladin completan un excelente año para el GSX-R1000. Corser se asegura el campeonato mundial de Superbikes mientras que Mladin se lleva un sexto título sin precedentes de AMA Superbike.",
    ],
  },
  {
    id: "2005-gsxr1000",
    year: "2005",
    image: "/nuestra-historia/2005-gsxr1000.jpeg",
    alt: "Suzuki GSX-R1000 tercera generación, 2005",
    paragraphs: ["Suzuki presenta la tercera generación de la GSX-R1000."],
  },
  {
    id: "2005-rmz450",
    year: "2005",
    image: "/nuestra-historia/2005-rmz450.jpeg",
    alt: "Suzuki RM-Z450, 2005",
    paragraphs: [
      "Suzuki presenta la RM-Z450, la primera motocicleta Suzuki de motocross de 4 tiempos.",
    ],
  },
  {
    id: "2005-carmichael",
    year: "2005",
    image: "/nuestra-historia/2005-carmichael.jpeg",
    alt: "Ricky Carmichael campeón, 2005",
    paragraphs: [
      "Ricky Carmichael monta su RM250 al título del Campeonato de Supercross de la AMA, y su RM-Z450 al título nacional de Motocross de los Estados Unidos.",
    ],
  },
  {
    id: "2006-boulevard",
    year: "2006",
    image: "/nuestra-historia/2006-boulevard.jpeg",
    alt: "Suzuki Boulevard M109R, 2006",
    paragraphs: ["SUZUKI BOULEVARD M109R (INTRUDER M1800R) se estrena."],
  },
  {
    id: "2006-makita",
    year: "2006",
    image: "/nuestra-historia/2006-makita.jpeg",
    alt: "Equipo Makita Suzuki, 2006",
    paragraphs: [
      "El equipo Makita Suzuki, Ricky Carmichael, gana el Supercross de AMA y el Campeonato de Motocross de AMA a bordo de la RM-Z450.",
    ],
  },
  {
    id: "2007",
    year: "2007",
    image: "/nuestra-historia/2007.jpeg",
    alt: "Chris Vermeulen en MotoGP, 2007",
    paragraphs: [
      "Chris Vermeulen, de Australia, logra la primera victoria de Suzuki en la era de cuatro tiempos de MotoGP con la victoria en el Gran Premio de Francia en Le Mans. Yukio Kagayama y Kosuke Akiyoshi llevan la GSX-R1000 a la victoria en la carrera de 8 horas de Suzuka y el belga Steve Ramon gana el campeonato mundial de motocross MX1.",
      "Vincent Philippe, Matthieu Lagrive y Julien da Costa también ganaron el campeonato mundial de resistencia con una GSX-R1000: es el sexto título mundial de resistencia para la moto deportiva insignia de Suzuki.",
    ],
  },
  {
    id: "2008",
    year: "2008",
    image: "/nuestra-historia/2008.jpeg",
    alt: "Suzuki B-King, 2008",
    paragraphs: [
      'Llega la Suzuki B-King, una moto muscular tipo "naked" con actitud, mostrada por primera vez como un modelo conceptual en 2001. Suzuki lanza la primera moto de motocross con inyección de combustible de producción del mundo: la RM-Z450. En el mismo año, Suzuki lanza los nuevos modelos GSX-R600 y 750: las motos deportivas más inteligentes. Suzuki presenta la 2da generación de la Hayabusa 1300.',
    ],
  },
  {
    id: "2010",
    year: "2010",
    image: "/nuestra-historia/2010.jpeg",
    alt: "50 años de carreras Suzuki, 2010",
    paragraphs: [
      "25 años de la GSX-R. En el Campeonato Mundial de Resistencia, el equipo Suzuki Endurance Racing ganó el campeonato en la GSX-R1000.",
    ],
  },
  {
    id: "2011",
    year: "2011",
    image: "/nuestra-historia/2011.jpeg",
    alt: "Suzuki V-Strom 650 ABS, 2011",
    paragraphs: [
      "La 2012 V-Strom 650 ABS se lanzó a excelentes críticas. Con actualizaciones en todo para una mayor comodidad, rendimiento y economía. A su vez, es presentada la GSX-R750.",
    ],
  },
  {
    id: "2012-gsxr",
    year: "2012",
    image: "/nuestra-historia/2012-gsxr.jpeg",
    alt: "Serie GSX-R alcanza 1 millón, 2012",
    paragraphs: [
      "La producción total de la serie GSX-R alcanza 1 millón de unidades.",
    ],
  },
  {
    id: "2012-inazuma",
    year: "2012",
    image: "/nuestra-historia/2012-inazuma.jpeg",
    alt: 'Suzuki "Inazuma", 2012',
    paragraphs: [
      'Se lanza la "Inazuma". Con un rendimiento amigable con el usuario y eficiencia de combustible, sin comprometer las características de estilo y la calidad del acabado.',
    ],
  },
  {
    id: "2013-sert",
    year: "2013",
    image: "/nuestra-historia/2013-sert.jpeg",
    alt: "Suzuki Endurance Racing Team, 2013",
    paragraphs: [
      "El Suzuki Endurance Racing Team (SERT) gana su 4º Campeonato del Mundo de Resistencia consecutivo y su 13º título en general.",
    ],
  },
  {
    id: "2013-vstrom",
    year: "2013",
    image: "/nuestra-historia/2013-vstrom.jpeg",
    alt: "Suzuki V-Strom 1000 ABS, 2013",
    paragraphs: ["Se lanza la V-Strom 1000 ABS."],
  },
  {
    id: "2020",
    year: "2020",
    image: "/nuestra-historia/2020.jpeg",
    alt: "Joan Mir campeón de MotoGP, 2020",
    paragraphs: [
      "Después de una larga espera de 20 años desde el último título con Kenny Roberts Jr. en 2000, Joan Mir ha devuelto el título del Campeonato del Mundo de MotoGP a Suzuki de manera enfática.",
    ],
  },
  {
    id: "2024",
    year: "2024",
    image: "/nuestra-historia/2024.jpeg",
    alt: "Yoshimura SERT Motul Suzuki, 2024",
    paragraphs: [
      "El equipo Yoshimura SERT Motul Suzuki se corona campeón del Endurance World Championship (EWC), a bordo de la imparable Suzuki GSX-R1000R, con este sería el título número 18 en general siendo la marca más galardonada en la historia del campeonato.",
    ],
  },
];
