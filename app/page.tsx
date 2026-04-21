import Link from "next/link";

const categories = [
  { name: "회사소개", desc: "CEO 인사말, 연혁, 비전, 조직도", count: 12, icon: "🏢" },
  { name: "사업분야", desc: "사업 영역, 핵심역량, 서비스 소개", count: 8, icon: "⚡" },
  { name: "제품/서비스", desc: "제품군, 스펙, 카탈로그", count: 15, icon: "📦" },
  { name: "기술/R&D", desc: "기술력, 특허, 연구개발 현황", count: 9, icon: "🔬" },
  { name: "납품실적", desc: "고객사, 포트폴리오, 적용사례", count: 11, icon: "🤝" },
  { name: "품질/인증", desc: "ISO, 각종 인증, 품질관리", count: 7, icon: "✅" },
  { name: "고객센터", desc: "FAQ, 온라인 문의, 오시는 길", count: 6, icon: "💬" },
  { name: "채용정보", desc: "채용공고, 복리후생, 입사지원", count: 5, icon: "👥" },
];

const steps = [
  { step: "01", title: "메뉴 선택", desc: "필요한 페이지를 골라 구성하세요. 이름도 자유롭게 변경 가능합니다." },
  { step: "02", title: "디자인 설정", desc: "브랜드 색상, 대표 이미지, 동영상을 업로드하세요." },
  { step: "03", title: "견적 & 주문", desc: "선택한 구성으로 견적을 확인하고 제작을 의뢰하세요." },
  { step: "04", title: "납품 완료", desc: "AI가 완성된 홈페이지를 귀사 도메인으로 바로 배포해드립니다." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">Sitely</span>
          <span className="badge">Beta</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-[#888]">
          <Link href="#categories" className="hover:text-white transition-colors">컴포넌트</Link>
          <Link href="#how" className="hover:text-white transition-colors">이용방법</Link>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:contact@sitely.kr" className="btn-ghost text-sm py-2 px-4">문의하기</a>
          <a href="#categories" className="btn-primary text-sm py-2 px-4">시작하기 →</a>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="pt-40 pb-24 px-6 text-center max-w-4xl mx-auto">
        <div className="badge mx-auto mb-6">✦ AI 기반 홈페이지 제작 플랫폼</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
          기업 홈페이지,<br />
          <span className="text-[#555]">이제 쉽게.</span>
        </h1>
        <p className="text-[#888] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          메뉴 구성부터 색상, 이미지까지 직접 선택하세요.<br />
          AI가 완성된 홈페이지를 빠르게 납품해드립니다.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#categories" className="btn-primary">구성 선택하기 →</a>
          <a href="mailto:contact@sitely.kr" className="btn-ghost">도입 문의</a>
        </div>

        {/* 스탯 */}
        <div className="flex items-center justify-center gap-12 mt-16 border-t border-[#1a1a1a] pt-12">
          {[
            { num: "73+", label: "컴포넌트" },
            { num: "8개", label: "페이지 유형" },
            { num: "3일", label: "평균 납품" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold">{s.num}</div>
              <div className="text-[#555] text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 카테고리 */}
      <section id="categories" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="badge mb-3">페이지 구성</div>
          <h2 className="text-3xl font-bold">필요한 페이지를 선택하세요</h2>
          <p className="text-[#888] mt-2">업종에 맞게 자유롭게 조합하고 이름도 변경할 수 있어요.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="card p-5 cursor-pointer">
              <div className="text-2xl mb-3">{cat.icon}</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{cat.name}</h3>
                <span className="text-xs text-[#555] bg-[#1a1a1a] px-2 py-1 rounded-full">{cat.count}종</span>
              </div>
              <p className="text-[#666] text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 커스텀 기능 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="badge mb-3">커스터마이징</div>
        <h2 className="text-3xl font-bold mb-12">원하는 대로 꾸미세요</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🎨", title: "브랜드 색상", desc: "대표 색상 하나만 선택하면 전체 사이트에 자동 적용됩니다." },
            { icon: "🖼️", title: "이미지 & 영상", desc: "배경 이미지, 제품 사진, 대표 동영상을 직접 업로드하세요." },
            { icon: "✏️", title: "텍스트 편집", desc: "회사명, 소개글, 연락처 등 모든 텍스트를 자유롭게 수정할 수 있어요." },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 이용방법 */}
      <section id="how" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge mx-auto mb-3">이용방법</div>
          <h2 className="text-3xl font-bold">4단계로 완성되는 홈페이지</h2>
        </div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.step} className="card p-6 flex items-start gap-6">
              <span className="text-3xl font-bold text-[#222] shrink-0">{s.step}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto border border-[#222] rounded-2xl p-12 bg-[#0f0f0f]">
          <h2 className="text-4xl font-bold mb-4">지금 시작해보세요</h2>
          <p className="text-[#888] mb-8">구성 선택부터 견적까지 무료로 확인하실 수 있습니다.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#categories" className="btn-primary">구성 선택하기 →</a>
            <a href="mailto:contact@sitely.kr" className="btn-ghost">이메일 문의</a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-[#1a1a1a] py-8 px-6 text-center text-[#444] text-sm">
        <p>© 2026 Sitely. All rights reserved.</p>
      </footer>
    </div>
  );
}
