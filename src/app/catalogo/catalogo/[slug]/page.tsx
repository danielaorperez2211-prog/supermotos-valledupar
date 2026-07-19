import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteBanner } from "@/components/catalog/QuoteBanner";
import { ColorSelector } from "@/components/catalog/detail/ColorSelector";
import { DetailHero } from "@/components/catalog/detail/DetailHero";
import { FeaturesSection } from "@/components/catalog/detail/FeaturesSection";
import { Gallery } from "@/components/catalog/detail/Gallery";
import { HighlightRow } from "@/components/catalog/detail/HighlightRow";
import { KeySpecs } from "@/components/catalog/detail/KeySpecs";
import { RelatedMotorcycles } from "@/components/catalog/detail/RelatedMotorcycles";
import { SpecsAccordion } from "@/components/catalog/detail/SpecsAccordion";
import {
  getAllSlugs,
  getMotorcycleBySlug,
  getRelatedMotorcycles,
} from "@/data/motorcycles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const motorcycle = getMotorcycleBySlug(slug);

  if (!motorcycle) {
    return { title: "Modelo no encontrado | Suzuki" };
  }

  return {
    title: `${motorcycle.name} | Suzuki`,
    description: motorcycle.description.body,
    openGraph: {
      title: `${motorcycle.name} | Suzuki`,
      description: motorcycle.description.body,
      images: [motorcycle.images[0]],
    },
  };
}

export default async function MotorcycleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const motorcycle = getMotorcycleBySlug(slug);

  if (!motorcycle) {
    notFound();
  }

  const related = getRelatedMotorcycles(slug, 3);

  return (
    <main className="bg-gradient-to-b from-suzuki-navy via-slate-950 to-slate-950 text-white"> 
      <DetailHero motorcycle={motorcycle} />
      <HighlightRow highlights={motorcycle.highlights} />
      <KeySpecs motorcycle={motorcycle} />
      <Gallery images={motorcycle.images} name={motorcycle.name} />
      <FeaturesSection features={motorcycle.features} name={motorcycle.name} />
      <ColorSelector colors={motorcycle.colors} />
      <SpecsAccordion motorcycle={motorcycle} />
      <RelatedMotorcycles bikes={related} />

      <div id="cotizar" className="scroll-mt-20">
        <QuoteBanner title={`COTIZA TU ${motorcycle.name.toUpperCase()} HOY`} />
      </div>
    </main>
  );
}
