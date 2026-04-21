import Link from "next/link";
import { notFound } from "next/navigation";

import A5gHero from "@/components/sitely-hero/a5g-hero";
import AgencyHero from "@/components/sitely-hero/agency-hero-with-showcase";
import AhrefsHero from "@/components/sitely-hero/ahrefs-hero-section";
import AlignuiHero from "@/components/sitely-hero/alignui-design-system-hero";
import AntimetalHero from "@/components/sitely-hero/antimetal-home-hero";
import AntlerHero from "@/components/sitely-hero/antler-co-hero-0";
import ArtboardHero from "@/components/sitely-hero/artboard-team-hero";
import AsconHero from "@/components/sitely-hero/ascon-hero";
import AttioHero from "@/components/sitely-hero/attio-crm-hero";
import AuctionHero from "@/components/sitely-hero/auction-hero-skyline";

const components: Record<string, { name: string; component: React.ComponentType }> = {
  "a5g-hero": { name: "A5G 대문", component: A5gHero },
  "agency-hero-with-showcase": { name: "에이전시 대문", component: AgencyHero },
  "ahrefs-hero-section": { name: "Ahrefs 스타일", component: AhrefsHero },
  "alignui-design-system-hero": { name: "AlignUI 스타일", component: AlignuiHero },
  "antimetal-home-hero": { name: "Antimetal 스타일", component: AntimetalHero },
  "antler-co-hero-0": { name: "Antler 스타일", component: AntlerHero },
  "artboard-team-hero": { name: "Artboard 스타일", component: ArtboardHero },
  "ascon-hero": { name: "Ascon 스타일", component: AsconHero },
  "attio-crm-hero": { name: "Attio 스타일", component: AttioHero },
  "auction-hero-skyline": { name: "Skyline 대문", component: AuctionHero },
};

export default async function HeroPreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = components[id];
  if (!entry) notFound();

  const Component = entry.component;

  return (
    <div className="min-h-screen">
      {/* 상단 바 */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white border-b border-[#e5e5e5]">
        <Link href="/gallery" className="text-sm text-[#666] hover:text-black transition-colors">← 목록으로</Link>
        <span className="text-sm font-medium">{entry.name}</span>
        <a href="mailto:contact@sitely.kr" className="text-sm px-4 py-1.5 bg-black text-white rounded-md hover:opacity-80 transition-opacity">
          이 디자인으로 문의
        </a>
      </div>

      {/* 컴포넌트 미리보기 */}
      <div className="pt-12">
        <Component />
      </div>
    </div>
  );
}
