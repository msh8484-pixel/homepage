import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

const brandMeta: Record<string, { name: string; desc: string }> = {
  "antler-co": { name: "Antler", desc: "투자사·스타트업 스타일" },
  "bolta-io": { name: "Bolta", desc: "SaaS 스타일" },
  "cap-so": { name: "Cap", desc: "SaaS 스타일" },
  "channel-io": { name: "Channel.io", desc: "한국 고객센터 SaaS" },
  "clerk-com": { name: "Clerk", desc: "인증 SaaS 스타일" },
  "codefa-st": { name: "CodeFast", desc: "개발자 툴 스타일" },
  "coderabbit-ai": { name: "CodeRabbit AI", desc: "AI 코드리뷰 스타일" },
  "cursor-com": { name: "Cursor", desc: "AI 에디터 스타일" },
  "datafa-st": { name: "DataFast", desc: "데이터 SaaS 스타일" },
  "greetinghr": { name: "GreetingHR", desc: "HR SaaS 스타일" },
  "hookable-ai": { name: "Hookable AI", desc: "AI SaaS 스타일" },
  "imweb-me": { name: "아임웹", desc: "한국 홈페이지빌더 스타일" },
  "lanorx-com": { name: "Lanorx", desc: "기업 SaaS 스타일" },
  "loops-so": { name: "Loops", desc: "이메일 마케팅 스타일" },
  "relate-kr": { name: "릴레잇", desc: "한국 CRM 스타일" },
  "runwayml-com": { name: "RunwayML", desc: "AI 영상 스타일" },
  "shipfa-st": { name: "ShipFast", desc: "개발자 보일러플레이트 스타일" },
  "superbilling-io": { name: "SuperBilling", desc: "결제 SaaS 스타일" },
  "trackit-so": { name: "Trackit", desc: "프로젝트 관리 스타일" },
  "vooster-ai-ko": { name: "부스터AI", desc: "한국 AI SaaS 스타일" },
  "whattime": { name: "WhatTime", desc: "스케줄링 스타일" },
};

const sectionLabels: Record<string, string> = {
  hero: "대문",
  feature: "기능소개",
  footer: "푸터",
  header: "헤더",
  cta: "CTA",
  pricing: "가격",
  testimonial: "후기",
  faq: "FAQ",
  "logo-cloud": "로고",
  stats: "통계",
  "how-it-works": "사용방법",
  showcase: "쇼케이스",
  "social-proof": "소셜증명",
  biography: "소개",
  trust: "신뢰",
  contact: "문의",
  roadmap: "로드맵",
  "target-user": "타겟",
};

function getSectionLabel(name: string, brand: string): string {
  const suffix = name.replace(brand + "-", "");
  const type = suffix.replace(/-[\d]+$/, "").replace(/-\d+$/, "");
  return sectionLabels[type] || type;
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const meta = brandMeta[brand];
  if (!meta) notFound();

  const brandsDir = path.join(process.cwd(), "components", "sitely-brands");
  const allDirs = fs.readdirSync(brandsDir).sort();
  const sections = allDirs.filter((d) => d.startsWith(brand + "-") || d === brand);

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white border-b border-[#e5e5e5]">
        <Link href="/gallery" className="text-sm text-[#666] hover:text-black transition-colors">← 목록으로</Link>
        <span className="text-sm font-medium">{meta.name}</span>
        <a href="mailto:contact@sitely.kr" className="text-sm px-4 py-1.5 bg-black text-white rounded-md hover:opacity-80 transition-opacity">
          이 스타일로 문의
        </a>
      </div>

      <div className="pt-20 pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">{meta.name}</h1>
          <p className="text-[#888] text-sm">{meta.desc} · {sections.length}개 섹션</p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section} className="group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-[#999] uppercase tracking-wide">
                  {getSectionLabel(section, brand)}
                </span>
                <span className="text-xs text-[#ccc]">{section}</span>
              </div>
              <div className="aspect-video border border-[#e5e5e5] rounded-xl overflow-hidden group-hover:border-[#ccc] group-hover:shadow-md transition-all relative bg-[#f9f9f9]">
                <iframe
                  src={`/gallery/preview/${section}`}
                  className="w-full h-full"
                  style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%", pointerEvents: "none" }}
                  loading="lazy"
                  title={section}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
