"use client";

import Link from "next/link";

const heroes = [
  { id: "a5g-hero", name: "A5G 대문", tags: ["미니멀", "중앙정렬"] },
  { id: "agency-hero-with-showcase", name: "에이전시 대문", tags: ["쇼케이스", "다크"] },
  { id: "ahrefs-hero-section", name: "Ahrefs 스타일", tags: ["밝음", "CTA"] },
  { id: "alignui-design-system-hero", name: "AlignUI 스타일", tags: ["디자인", "그리드"] },
  { id: "antimetal-home-hero", name: "Antimetal 스타일", tags: ["다크", "그라디언트"] },
  { id: "antler-co-hero-0", name: "Antler 스타일", tags: ["밝음", "투자사"] },
  { id: "artboard-team-hero", name: "Artboard 스타일", tags: ["팀", "협업"] },
  { id: "ascon-hero", name: "Ascon 스타일", tags: ["기업", "전문"] },
  { id: "attio-crm-hero", name: "Attio 스타일", tags: ["SaaS", "모던"] },
  { id: "auction-hero-skyline", name: "Skyline 대문", tags: ["풀스크린", "임팩트"] },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-white/90 backdrop-blur-sm">
        <Link href="/" className="text-lg font-bold tracking-tight">Sitely</Link>
        <span className="text-sm text-[#666]">대문 섹션 — 10종</span>
      </nav>

      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">대문 섹션</h1>
          <p className="text-[#888] text-sm">홈페이지 첫 화면에 들어갈 대문 스타일을 골라보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heroes.map((hero) => (
            <Link href={`/gallery/hero/${hero.id}`} key={hero.id} className="group block">
              {/* iframe 미리보기 */}
              <div className="aspect-video border border-[#e5e5e5] rounded-xl mb-3 overflow-hidden group-hover:border-[#ccc] group-hover:shadow-lg transition-all relative bg-[#f9f9f9]">
                <iframe
                  src={`/gallery/hero/${hero.id}`}
                  className="w-full h-full"
                  style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%", pointerEvents: "none" }}
                  loading="lazy"
                  title={hero.name}
                />
                <div className="absolute inset-0 group-hover:bg-black/5 transition-all" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-3 py-1 rounded-full">
                  전체보기 →
                </div>
              </div>
              {/* 정보 */}
              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">{hero.name}</span>
                <div className="flex gap-1.5">
                  {hero.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[#999] border border-[#e5e5e5] px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
