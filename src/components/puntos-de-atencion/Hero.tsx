import { heroBanner } from "@/components/puntos-de-atencion/puntos-data";

/**
 * Banner superior de la página "Red Suzuki".
 * El texto ("RED SUZUKI / LO QUE NECESITAS / A TU ALCANCE") viene incrustado
 * en la propia imagen, tal como en el sitio original. Se muestra el banner
 * ancho en escritorio y el vertical en móvil. No incluye header, navegación
 * ni la barra social del sitio original.
 */
export function Hero() {
  return (
    <section className="rs-hero w-full overflow-hidden bg-black">
      {/* Escritorio */}
      <img
        src={heroBanner.desktop}
        alt={heroBanner.alt}
        className="rs-hero-img hidden w-full select-none md:block"
        draggable={false}
      />
      {/* Móvil */}
      <img
        src={heroBanner.mobile}
        alt={heroBanner.alt}
        className="rs-hero-img block w-full select-none md:hidden"
        draggable={false}
      />

      {/* Animación de entrada (CSS puro, encapsulada) */}
      <style>{`
        .rs-hero-img {
          opacity: 0;
          transform: scale(1.03);
          animation: rsHeroIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes rsHeroIn {
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rs-hero-img { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
