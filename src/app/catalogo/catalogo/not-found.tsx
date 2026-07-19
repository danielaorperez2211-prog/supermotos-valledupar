import Link from "next/link";
import { ArrowLeft } from "@/components/catalog/icons";

export default function CatalogoNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-suzuki-navy px-4">
      <div className="text-center">
        <p className="font-heading text-7xl font-extrabold italic text-suzuki-blue">
          404
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold italic text-white">
          Modelo no encontrado
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          La motocicleta que buscas no está disponible o el enlace es
          incorrecto. Vuelve al catálogo para explorar toda la gama Suzuki.
        </p>
        <Link
          href="/catalogo"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-suzuki-blue px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.03]"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver al catálogo
        </Link>
      </div>
    </main>
  );
}
