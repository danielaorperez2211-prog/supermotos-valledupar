import { PhoneCall, MapPin, Store, Info } from "lucide-react";

const blocks = [
  {
    icon: PhoneCall,
    title: "SOLICITUD DE CONTACTO",
    text: "Déjanos tus datos y pronto nos pondremos en contacto contigo.",
    href: "/contactanos/que-motocicleta-deseas-comprar",
  },
  {
    icon: MapPin,
    title: "UBICA TU TALLER MÁS CERCANO",
    text: "Estés donde estés, encontramos taller más cercano para tus revisiones o emergencias.",
    href: "/mantenimiento",
  },
  {
    icon: Store,
    title: "STORE",
    text: "Permanece al día con todo sobre tu moto, piezas y accesorios para cada referencia.",
    href: "https://tienda.suzuki.com.co/",
  },
  {
    icon: Info,
    title: "MANTENTE INFORMADO",
    text: "Únete a la red Suzuki y actualízate sobre todas las novedades y productos para ti.",
    href: "#",
  },
];

export function InfoBlocks() {
  return (
    <section className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-neutral-200 xl:px-0">
        {blocks.map((b) => {
          const Icon = b.icon;
          return (
            <a
              key={b.title}
              href={b.href}
              className="group px-2 lg:px-6"
            >
              <Icon
                className="h-8 w-8 text-suzuki-ink transition-colors group-hover:text-suzuki-red"
                strokeWidth={1.5}
              />
              <h3 className="mt-4 font-display text-base font-semibold tracking-suzuki text-suzuki-ink transition-colors group-hover:text-suzuki-red">
                {b.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-neutral-500">
                {b.text}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
