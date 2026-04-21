"use client";

import Link from "next/link";

const brands = [
  { id: "antler-co", name: "Antler", hero: "antler-co-hero-0", sections: 11, desc: "투자사·스타트업" },
  { id: "bolta-io", name: "Bolta", hero: "bolta-io-hero-1", sections: 9, desc: "SaaS" },
  { id: "cap-so", name: "Cap", hero: "cap-so-hero-1", sections: 9, desc: "SaaS" },
  { id: "channel-io", name: "Channel.io", hero: "channel-io-hero-1", sections: 7, desc: "한국 · 고객센터" },
  { id: "clerk-com", name: "Clerk", hero: "clerk-com-hero-1", sections: 10, desc: "인증 SaaS" },
  { id: "codefa-st", name: "CodeFast", hero: "codefa-st-hero-0", sections: 10, desc: "개발자 툴" },
  { id: "coderabbit-ai", name: "CodeRabbit AI", hero: "coderabbit-ai-hero-1", sections: 11, desc: "AI 코드리뷰" },
  { id: "cursor-com", name: "Cursor", hero: "cursor-com-hero-0", sections: 7, desc: "AI 에디터" },
  { id: "datafa-st", name: "DataFast", hero: "datafa-st-hero-0", sections: 10, desc: "데이터 SaaS" },
  { id: "greetinghr", name: "GreetingHR", hero: "greetinghr-hero-0", sections: 9, desc: "HR SaaS" },
  { id: "hookable-ai", name: "Hookable AI", hero: "hookable-ai-hero-0", sections: 10, desc: "AI SaaS" },
  { id: "imweb-me", name: "아임웹", hero: "imweb-me-hero-0", sections: 7, desc: "한국 · 홈페이지빌더" },
  { id: "lanorx-com", name: "Lanorx", hero: "lanorx-com-hero-0", sections: 7, desc: "기업 SaaS" },
  { id: "loops-so", name: "Loops", hero: "loops-so-hero-0", sections: 8, desc: "이메일 마케팅" },
  { id: "relate-kr", name: "릴레잇", hero: "relate-kr-hero-1", sections: 10, desc: "한국 · CRM" },
  { id: "runwayml-com", name: "RunwayML", hero: "runwayml-com-hero-0", sections: 7, desc: "AI 영상" },
  { id: "shipfa-st", name: "ShipFast", hero: "shipfa-st-hero-0", sections: 9, desc: "개발자 보일러플레이트" },
  { id: "superbilling-io", name: "SuperBilling", hero: "superbilling-io-hero-0", sections: 9, desc: "결제 SaaS" },
  { id: "trackit-so", name: "Trackit", hero: "trackit-so-hero-0", sections: 10, desc: "프로젝트 관리" },
  { id: "vooster-ai-ko", name: "부스터AI", hero: "vooster-ai-ko-hero-0", sections: 8, desc: "한국 · AI SaaS" },
  { id: "whattime", name: "WhatTime", hero: "whattime-hero-0", sections: 9, desc: "스케줄링" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-white/90 backdrop-blur-sm">
        <Link href="/" className="text-lg font-bold tracking-tight">Sitely</Link>
        <span className="text-sm text-[#666]">홈페이지 스타일 — {brands.length}종</span>
      </nav>

      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">홈페이지 스타일</h1>
          <p className="text-[#888] text-sm">마음에 드는 스타일을 골라보세요. 각 스타일은 대문·소개·후기·가격 등 전체 섹션이 세트로 구성되어 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link href={`/gallery/brand/${brand.id}`} key={brand.id} className="group block">
              <div className="aspect-video border border-[#e5e5e5] rounded-xl mb-3 overflow-hidden group-hover:border-[#ccc] group-hover:shadow-lg transition-all relative bg-[#f9f9f9]">
                <iframe
                  src={`/gallery/preview/${brand.hero}`}
                  className="w-full h-full"
                  style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%", pointerEvents: "none" }}
                  loading="lazy"
                  title={brand.name}
                />
                <div className="absolute inset-0 group-hover:bg-black/5 transition-all" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-3 py-1 rounded-full">
                  전체보기 →
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-[#666]">
                  {brand.sections}개 섹션
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">{brand.name}</span>
                <span className="text-[11px] text-[#999] border border-[#e5e5e5] px-2 py-0.5 rounded-full">{brand.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
