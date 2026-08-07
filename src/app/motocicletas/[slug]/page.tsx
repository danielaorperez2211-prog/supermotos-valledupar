import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MotorcycleRedirectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  redirect(`/catalogo/catalogo/${slug}`);
}