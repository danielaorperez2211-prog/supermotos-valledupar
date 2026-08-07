import Link from "next/link";
import { Search } from "lucide-react";
import { assets } from "@/lib/suzuki-data";

const features = [
  "SISTEMA ANTIBLOQUEO DE FRENOS",
  "SISTEMA DE ENCENDIDO AUTOMÁTICO DE LUCES",
  "SISTEMA DE LUCES DE CIRCULACIÓN DIURNA",
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
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
          {/* Bike */}
          <div className="order-2 lg:order-1">
            <img
              src={assets.drz4s}
              alt="Suzuki DR-Z4S"
              className="mx-auto w-full max-w-[560px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
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

            <h2 className="font-display text-4xl font-bold tracking-tight text-suzuki-ink sm:text-5xl">
              DR-Z4S
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-neutral-600">
              La aventura está en tu ADN. La Suzuki DR-Z4S honra el legado de la
              legendaria familia DR-Z, reconocida por su resistencia y espíritu
              indomable. Con un diseño robusto y prestaciones confiables, está
              lista para conquistar tanto la ciudad como los terrenos más
              desafiantes. Su herencia off-road y su carácter versátil te
              garantizan potencia, control y seguridad en cada ruta.
            </p>

            {/* Feature icons */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {assets.featureIcons.map((icon, i) => (
                <div
                  key={icon}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={icon}
                    alt=""
                    className="h-16 w-16 object-contain"
                  />

                  <span className="mt-2 text-[9px] font-semibold leading-tight tracking-wide text-neutral-500">
                    {features[i]}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-suzuki-ink px-10 py-3 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-suzuki-red"
              >
                COTIZAR
              </a>

              <Link
                href="/motocicletas/enduro/dr-z4s"
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