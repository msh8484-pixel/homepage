import Link from "next/link";

const categories = [
  { id: "all", name: "전체" },
  { id: "daemun", name: "대문" },
  { id: "company", name: "회사소개" },
  { id: "business", name: "사업분야" },
  { id: "product", name: "제품/서비스" },
  { id: "tech", name: "기술/R&D" },
  { id: "portfolio", name: "납품실적" },
  { id: "quality", name: "품질/인증" },
  { id: "support", name: "고객센터" },
  { id: "recruit", name: "채용정보" },
];

const components = [
  { id: 1, category: "daemun", name: "대문 — 전체 배경형", tags: ["이미지", "중앙 정렬"] },
  { id: 2, category: "daemun", name: "대문 — 좌우 분할형", tags: ["이미지", "텍스트"] },
  { id: 3, category: "daemun", name: "대문 — 동영상 배경형", tags: ["영상", "어두운 오버레이"] },
  { id: 4, category: "daemun", name: "대문 — 슬라이드형", tags: ["슬라이드", "자동재생"] },
  { id: 5, category: "company", name: "회사소개 — CEO 인사말", tags: ["텍스트", "사진"] },
  { id: 6, category: "company", name: "회사소개 — 연혁 타임라인", tags: ["타임라인"] },
  { id: 7, category: "company", name: "회사소개 — 핵심 수치", tags: ["숫자", "통계"] },
  { id: 8, category: "business", name: "사업분야 — 카드형", tags: ["카드", "그리드"] },
  { id: 9, category: "business", name: "사업분야 — 아이콘 리스트", tags: ["리스트"] },
  { id: 10, category: "portfolio", name: "납품실적 — 고객사 로고", tags: ["로고", "그리드"] },
  { id: 11, category: "portfolio", name: "납품실적 — 사례 카드", tags: ["카드", "사진"] },
  { id: 12, category: "support", name: "고객센터 — FAQ 아코디언", tags: ["FAQ", "아코디언"] },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <span className="text-sm font-semibold tracking-tight">Sitely</span>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#555]">
            <Link href="#gallery" className="hover:text-white transition-colors">컴포넌트</Link>
            <Link href="#how" className="hover:text-white transition-colors">이용방법</Link>
            <a href="mailto:contact@sitely.kr" className="hover:text-white transition-colors">문의</a>
          </div>
        </div>
        <a href="mailto:contact@sitely.kr" className="text-xs px-4 py-2 bg-white text-black rounded-md font-medium hover:opacity-90 transition-opacity">
          제작 문의
        </a>
      </nav>

      {/* 히어로 */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-2 text-xs text-[#555] tracking-widest uppercase">AI Homepage Platform</div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight">
          기업 홈페이지,<br />원하는 대로.
        </h1>
        <p className="text-[#555] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          섹션을 고르고, 색상과 이미지를 올리면<br />AI가 완성된 홈페이지를 납품해드립니다.
        </p>
        <div className="flex items-center gap-3">
          <a href="#gallery" className="text-sm px-5 py-2.5 bg-white text-black rounded-md font-medium hover:opacity-90 transition-opacity">
            구성 보기
          </a>
          <a href="mailto:contact@sitely.kr" className="text-sm px-5 py-2.5 text-[#555] border border-[#222] rounded-md hover:border-[#444] hover:text-white transition-all">
            도입 문의
          </a>
        </div>

        <div className="flex items-center gap-10 mt-16 pt-10 border-t border-[#111]">
          {[
            { num: "73+", label: "컴포넌트" },
            { num: "8개", label: "페이지 유형" },
            { num: "3일", label: "평균 납품" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold">{s.num}</div>
              <div className="text-[#444] text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 갤러리 */}
      <section id="gallery" className="px-6 pb-24 max-w-7xl mx-auto">
        {/* 카테고리 탭 */}
        <div className="flex items-center gap-2 flex-wrap mb-8 pb-6 border-b border-[#111]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`text-xs px-3 py-1.5 rounded-md transition-all ${
                cat.id === "all"
                  ? "bg-white text-black font-medium"
                  : "text-[#555] hover:text-white border border-[#1a1a1a] hover:border-[#333]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 컴포넌트 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {components.map((comp) => (
            <div key={comp.id} className="group cursor-pointer">
              {/* 미리보기 영역 */}
              <div className="aspect-[4/3] bg-[#111] border border-[#1a1a1a] rounded-lg mb-3 overflow-hidden group-hover:border-[#333] transition-all flex items-center justify-center">
                <span className="text-[#2a2a2a] text-xs">미리보기</span>
              </div>
              {/* 정보 */}
              <div className="px-0.5">
                <p className="text-sm text-white mb-1.5">{comp.name}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {comp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[#444] border border-[#1a1a1a] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 추가 예정 카드 */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`placeholder-${i}`} className="group cursor-default opacity-30">
              <div className="aspect-[4/3] bg-[#0d0d0d] border border-dashed border-[#1a1a1a] rounded-lg mb-3 flex items-center justify-center">
                <span className="text-[#222] text-xs">준비중</span>
              </div>
              <div className="h-4 bg-[#111] rounded w-2/3 mb-2" />
              <div className="h-3 bg-[#0d0d0d] rounded w-1/3" />
            </div>
          ))}
        </div>
      </section>

      {/* 이용방법 */}
      <section id="how" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#111]">
        <div className="text-xs text-[#555] tracking-widest uppercase mb-4">How it works</div>
        <h2 className="text-3xl font-bold mb-12">4단계로 완성</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "섹션 선택", desc: "필요한 페이지와 섹션을 골라 구성하세요." },
            { step: "02", title: "디자인 설정", desc: "브랜드 색상과 이미지를 업로드하세요." },
            { step: "03", title: "견적 확인", desc: "선택한 구성으로 견적을 확인하세요." },
            { step: "04", title: "납품 완료", desc: "AI가 완성된 홈페이지를 배포해드립니다." },
          ].map((s) => (
            <div key={s.step}>
              <div className="text-xs text-[#333] font-mono mb-3">{s.step}</div>
              <h3 className="text-sm font-semibold mb-2">{s.title}</h3>
              <p className="text-[#444] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">지금 시작해보세요</h2>
          <p className="text-[#444] text-sm mb-8">구성 선택부터 견적까지 무료로 확인하실 수 있습니다.</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#gallery" className="text-sm px-5 py-2.5 bg-white text-black rounded-md font-medium hover:opacity-90 transition-opacity">
              구성 보기
            </a>
            <a href="mailto:contact@sitely.kr" className="text-sm px-5 py-2.5 text-[#555] border border-[#222] rounded-md hover:border-[#444] hover:text-white transition-all">
              이메일 문의
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-[#111] py-6 px-6 flex items-center justify-between text-[#333] text-xs">
        <span>Sitely</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
