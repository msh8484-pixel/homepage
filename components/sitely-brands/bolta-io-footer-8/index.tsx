// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    background: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    border: "#e5e7eb",
  },
  dark: {
    accent: "#FB923C",
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
    border: "#262626",
  },
} as const;

const FOOTER_LINKS = {
  features: [
    { name: "주요 기능", href: "#features" },
    { name: "API 연동", href: "#api" },
    { name: "가격 안내", href: "#pricing" },
  ],
  content: [
    { name: "블로그", href: "#blog" },
    { name: "가이드", href: "#guide" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "회사 소개", href: "#about" },
    { name: "채용", href: "#careers" },
    { name: "문의", href: "#contact" },
  ],
};

const CTA = {
  title: "쉽고 빠른 전자세금계산서 발행·관리 서비스 볼타",
  buttonText: "무료로 시작하기",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoFooter8Props {
  mode?: "light" | "dark";
}

export default function BoltaIoFooter8({ mode = "light" }: BoltaIoFooter8Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* CTA Section */}
      <motion.div
        className="border-t border-b px-4 sm:px-6 lg:px-8 py-12"
        style={{ borderColor: colors.border }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            {CTA.title}
          </h2>
          <motion.a
            href="#start"
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-medium"
            style={{ backgroundColor: colors.accent }}
            whileHover={{ opacity: 0.9 }}
          >
            {CTA.buttonText}
          </motion.a>
        </div>
      </motion.div>

      {/* Links Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Features */}
          <div>
            <h3
              className="font-bold mb-4 text-sm"
              style={{ color: colors.text }}
            >
              주요 기능
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.features.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-75 transition-opacity"
                    style={{ color: colors.textMuted }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div>
            <h3
              className="font-bold mb-4 text-sm"
              style={{ color: colors.text }}
            >
              콘텐츠
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.content.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-75 transition-opacity"
                    style={{ color: colors.textMuted }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="font-bold mb-4 text-sm"
              style={{ color: colors.text }}
            >
              회사
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-75 transition-opacity"
                    style={{ color: colors.textMuted }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-8"
          style={{ borderColor: colors.border }}
        >
          <p
            className="text-sm"
            style={{ color: colors.textMuted }}
          >
            2024 Bolta. All rights reserved. |
            <a href="#privacy" className="hover:opacity-75"> Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
