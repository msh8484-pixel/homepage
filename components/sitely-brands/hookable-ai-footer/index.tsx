// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ExternalLink, Link } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  tagline: "Octavo",
  description: "AI 기반 이커머스 상세페이지 자동생성 서비스",
  links: {
    features: [
      { label: "상세페이지 기획", href: "#" },
      { label: "상세페이지 디자인", href: "#" },
      { label: "카피라이팅", href: "#" },
      { label: "쉬운 수정", href: "#" },
    ],
    company: [
      { label: "회사소개", href: "#" },
      { label: "블로그", href: "#" },
      { label: "뉴스", href: "#" },
      { label: "채용", href: "#" },
    ],
  },
  company: {
    name: "옥타보",
    ceo: "CEO. 김철수",
    businessNumber: "사업자번호. 123-45-67890",
    address: "서울시 강남구 테헤란로 123",
    phone: "02-1234-5678",
  },
  legal: [
    { label: "이용약관", href: "#" },
    { label: "개인정보처리방침", href: "#" },
  ],
  social: [
    { icon: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
    { icon: "instagram", url: "https://instagram.com", label: "Link" },
  ],
};

const COLORS = {
  background: "#111111",
  text: "#FFFFFF",
  textMuted: "#808080",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================


interface HookableAiFooterProps {
  mode?: "light" | "dark";
  tagline?: string;
  description?: string;
  companyInfo?: typeof CONTENT.company;
  socialLinks?: typeof CONTENT.social;
}

export default function HookableAiFooter({
  mode = "dark",
  tagline = CONTENT.tagline,
  description = CONTENT.description,
  companyInfo = CONTENT.company,
  socialLinks = CONTENT.social,
}: HookableAiFooterProps) {
  return (
    <footer
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.text }}>
              {tagline}
            </h3>
            <p style={{ color: COLORS.textMuted }} className="text-sm">
              {description}
            </p>
          </motion.div>

          {/* Features Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
              기능
            </h4>
            <ul className="space-y-2">
              {CONTENT.links.features.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: COLORS.textMuted }}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
              회사
            </h4>
            <ul className="space-y-2">
              {CONTENT.links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: COLORS.textMuted }}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
              팔로우
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon === "linkedin" && <ExternalLink className="w-5 h-5" />}
                  {social.icon === "instagram" && <Link className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Company Info */}
          <div className="space-y-1 text-sm" style={{ color: COLORS.textMuted }}>
            <p>{companyInfo.name} | {companyInfo.ceo}</p>
            <p>{companyInfo.businessNumber}</p>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.phone}</p>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4">
            {CONTENT.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: COLORS.textMuted }}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ color: COLORS.textMuted }} className="text-sm">
            Copyright 2024 Octavo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
