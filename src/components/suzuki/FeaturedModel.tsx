import Link from "next/link";
import { Search } from "lucide-react";
import { getMotorcycleBySlug } from "@/data/motorcycles";

const features = [
  "MOTOR MONOCILÍNDRICO",
  "DISEÑO CLÁSICO Y RESISTENTE",
  "BAJO COSTO DE OPERACIÓN",
];

export function Disclaimer() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[760px] px-4 text-center">
        <p className="text-[15px] leading-7 text-neutral-500">
          Suzuki Motor de Colombia S.A. informa que unilateralmente podrá
          modificar la oferta de productos en cuanto, y sin limitarse a:
          especificaciones, colores, materiales, entre otras características de
          acuerdo a inventarios y procesos productivos, de atención de mercado al
          consumidor final. Cada modelo podrá ser descontinuado sin notificación
          previa. Sugerimos consultar a través de la red de distribuidores
          autorizados de la marca o almacenes directos, los detalles de los
          cambios que se lleguen a realizar.
        </p>
      </div>
    </section>
  );
}

export function FeaturedModel() {
  const motorcycle = getMotorcycleBySlug("gn125h");

  if (!motorcycle) {
    return null;
  }

  const mainImage = motorcycle.images?.[0];

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">

          {/* Moto */}
          <div className="order-2 lg:order-1">
            {mainImage && (
              <img
                src={mainImage}
                alt={motorcycle.name}
                className="mx-auto w-full max-w-[560px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)]"
              />
            )}
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">

            {/* Buscar modelo */}
            <div className="mb-8 flex items-center justify-end gap-4">
              <span className="font-display text-sm font-medium tracking-suzuki text-neutral-700">
                BUSCAR MODELO
              </span>

              <div className="flex flex-1 items-center gap-2 border-b border-neutral-400 pb-1 sm:max-w-[240px]">
                <input
                  type="text"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
                  placeholder=""
                />

                <Search className="h-4 w-4 text-neutral-500" />
              </div>
            </div>

            {/* Nombre */}
            <h2 className="font-display text-4xl font-bold tracking-tight text-suzuki-ink sm:text-5xl">
              {motorcycle.name}
            </h2>

            {/* Subtítulo */}
            <p className="mt-4 text-[18px] font-semibold italic text-neutral-600">
              {motorcycle.tagline}
            </p>

            {/* Descripción */}
            <p className="mt-4 text-[15px] leading-7 text-neutral-600">
              La {motorcycle.name} es una motocicleta clásica, confiable y
              económica, reconocida por su resistencia y bajo costo de
              operación. Su diseño atemporal y su mecánica sencilla la
              convierten en una excelente opción tanto para el trabajo como
              para el uso diario.
            </p>

            {/* Características */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-suzuki-ink px-2">
                    <span className="text-center text-[9px] font-bold leading-tight text-white">
                      SUZUKI
                    </span>
                  </div>

                  <span className="mt-2 text-[9px] font-semibold leading-tight tracking-wide text-neutral-500">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#"
                className="bg-suzuki-ink px-10 py-3 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-suzuki-red"
              >
                COTIZAR
              </a>

              <Link
                href="/catalogo/catalogo/gn125h"
                className="bg-suzuki-ink px-10 py-3 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-suzuki-red"
              >
                MÁS INFORMACIÓN
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}