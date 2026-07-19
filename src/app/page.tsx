import { Header } from "@/components/suzuki/Header";
import { HeroCarousel } from "@/components/suzuki/HeroCarousel";
import { Disclaimer, FeaturedModel } from "@/components/suzuki/FeaturedModel";
import { Promotions } from "@/components/suzuki/Promotions";
import { Lubricantes } from "@/components/suzuki/Lubricantes";
import { PostVenta } from "@/components/suzuki/PostVenta";
import { InfoBlocks } from "@/components/suzuki/InfoBlocks";
import { CookieBanner, WhatsAppFab } from "@/components/suzuki/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroCarousel />
        <Disclaimer />
        <FeaturedModel />
        <Promotions />
        <Lubricantes />
        <PostVenta />
        <InfoBlocks />
      </main>
    </div>
  );
}
