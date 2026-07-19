import type { Metadata } from "next";
import { Hero } from "@/components/puntos-de-atencion/Hero";
import { PuntosAtencion } from "@/components/puntos-de-atencion/PuntosAtencion";

export const metadata: Metadata = {
  title: "Puntos de Atención | Supermotos Valledupar",
  description:
    "Ubica tu punto de atención y servicio autorizado.",
};

export default function PuntosDeAtencionPage() {
  return (
    <>
      <Hero />
      <PuntosAtencion />
    </>
  );
}