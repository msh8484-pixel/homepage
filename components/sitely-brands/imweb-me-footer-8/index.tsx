// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ChevronDown, Globe, Link, Play } from "lucide-react";
import { useState } from "react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#111111",
    textMuted: "#666666",
    border: "#E5E5E5",
    tagBg: "#F5F5F5",
    tagText: "#111111",
  },
};

const FOOTER_LINKS = {
  features: [
    { label: "웹사이트 빌더", href: "#", tag: null },
    { label: "템플릿", href: "#", tag: null },
    { label: "쇼핑몰", href: "#", tag: null },
    { label: "도메인", href: "#", tag: null },
  ],
  business: [
    { label: "아임웹 비즈니스", href: "#", tag: "NEW" },
    { label: "전문가 찾기", href: "#", tag: null },
    { label: "마케팅", href: "#", tag: null },
    { label: "고객지원", href: "#", tag: null },
  ],
  company: [
    { label: "회사소개", href: "#", tag: null },
    { label: "채용", href: "#", tag: "HIRING" },
    { label: "뉴스", href: "#", tag: null },
    { label: "제휴", href: "#", tag: null },
  ],
  legal: [
    { label: "이용약관", href: "#" },
    { label: "개인정보처리방침", href: "#" },
    { label: "쿠키정책", href: "#" },
  ],
};

const COMPANY_INFO = {
  name: "아임웹",
  ceo: "CEO. 김태우, 주윤영",
  businessNumber: "사업자등록번호 106-87-00829",
  address: "서울시 강남구 테헤란로 123 아임웹 빌딩",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================


interface ImwebMeFooter8Props {
  mode?: "light" | "dark";
}

export default function ImwebMeFooter8({ mode = "light" }: ImwebMeFooter8Props) {
  const colors = COLORS.light;
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="w-full" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: colors.text }}>
              기능
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.features.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:underline transition-colors flex items-center gap-2"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                    {link.tag && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: colors.tagBg,
                          color: colors.tagText,
                        }}
                      >
                        {link.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: colors.text }}>
              비즈니스
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.business.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:underline transition-colors flex items-center gap-2"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                    {link.tag && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: colors.tagBg,
                          color: colors.tagText,
                        }}
                      >
                        {link.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: colors.text }}>
              회사
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:underline transition-colors flex items-center gap-2"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                    {link.tag && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: colors.tagBg,
                          color: colors.tagText,
                        }}
                      >
                        {link.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4" style={{ color: colors.text }}>
              소셜
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                style={{ color: colors.textMuted }}
                className="hover:text-black transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                style={{ color: colors.textMuted }}
                className="hover:text-black transition-colors"
              >
                <Link className="w-5 h-5" />
              </a>
              <a
                href="#"
                style={{ color: colors.textMuted }}
                className="hover:text-black transition-colors"
              >
                <Play className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px"
          style={{ backgroundColor: colors.border }}
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
          <div className="space-y-1 text-sm" style={{ color: colors.textMuted }}>
            <p>{COMPANY_INFO.name}</p>
            <p>{COMPANY_INFO.ceo}</p>
            <p>{COMPANY_INFO.businessNumber}</p>
            <p>{COMPANY_INFO.address}</p>
          </div>

          {/* Expandable Terms */}
          <button
            onClick={() => setIsTermsOpen(!isTermsOpen)}
            className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: colors.textMuted }}
          >
            약관 및 정책
            <ChevronDown
              className="w-4 h-4 transition-transform"
              style={{ transform: isTermsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {isTermsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-4 text-sm"
            >
              {FOOTER_LINKS.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ color: colors.textMuted }}
                  className="hover:underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}

          {/* Copyright */}
          <p style={{ color: colors.textMuted }} className="text-sm">
            Copyright 2024 Imweb Inc. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
