// @ts-nocheck
"use client";

const CONTENT = {
  logo: "Channel.io",
  sections: [
    {
      title: "제품",
      links: [
        { label: "기능", href: "/features" },
        { label: "가격", href: "/pricing" },
        { label: "다운로드", href: "/download" },
        { label: "블로그", href: "/blog" },
      ],
    },
    {
      title: "리소스",
      links: [
        { label: "자료실", href: "/resources" },
        { label: "고객 사례", href: "/cases" },
        { label: "지원", href: "/support" },
        { label: "커뮤니티", href: "/community" },
      ],
    },
    {
      title: "회사",
      links: [
        { label: "소개", href: "/about" },
        { label: "채용중", href: "/careers", badge: "채용중" },
        { label: "문의", href: "/contact" },
      ],
    },
  ],
  legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
  social: [
    { name: "Globe", href: "https://facebook.com/channelio" },
    { name: "YouTube", href: "https://youtube.com/channelio" },
    { name: "Link", href: "https://instagram.com/channelio" },
  ],
  copyright: "© 2024 Channel Corp. All rights reserved.",
  company: "사업자등록번호: 123-45-67890 | 통신판매신고: 제 2024-서울강남-0001호",
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoFooter7Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFooter7({ mode = "light" }: ChannelIoFooter7Props) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="w-full max-w-[1440px] mx-auto px-5 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xl text-gray-900 mb-2">{CONTENT.logo}</div>
            <div className="flex items-center gap-2">
              <select className="text-sm text-gray-600 bg-transparent border border-gray-300 rounded px-2 py-1">
                <option>한국어</option>
                <option>English</option>
              </select>
            </div>
          </div>

          {/* Links */}
          {CONTENT.sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-medium text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <div className="flex items-center gap-2">
                      <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        {link.label}
                      </a>
                      {link.badge && (
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded text-white"
                          style={{ backgroundColor: colors.accent }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-600">{CONTENT.copyright}</p>
            <p className="text-xs text-gray-500 mt-2">{CONTENT.company}</p>
          </div>
          <div className="flex gap-4">
            {CONTENT.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={social.name}
              >
                {social.name === "Globe" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social.name === "YouTube" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
                {social.name === "Link" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.948a6.247 6.247 0 01-10.896-.001 6.242 6.242 0 01.003-10.896 6.245 6.245 0 0110.895.001 6.241 6.241 0 01-.002 10.896zm2.331-11.527a1.457 1.457 0 110-2.914 1.457 1.457 0 010 2.914z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
