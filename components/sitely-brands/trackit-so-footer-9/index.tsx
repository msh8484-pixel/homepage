// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { Share2, ExternalLink } from "lucide-react";


const COLORS = {
  light: {
    bg: "#FFFFFF",
    text: "#1a1a1a",
    textMuted: "#666666",
    border: "#E5E5E5",
  },
  dark: {
    bg: "#1a1a1a",
    text: "#FFFFFF",
    textMuted: "#a0a0a0",
    border: "#333333",
  },
} as const;

interface TrackitSoFooter9Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFooter9({
  mode = "dark",
}: TrackitSoFooter9Props) {
  const colors = COLORS[mode];

  const sections = [
    {
      title: "제품",
      links: ["기능", "가격", "보안", "로드맵"],
    },
    {
      title: "자료",
      links: ["문서", "블로그", "가이드", "커뮤니티"],
    },
    {
      title: "회사",
      links: ["소개", "채용", "블로그", "연락처"],
    },
    {
      title: "법적",
      links: ["이용약관", "개인정보처리방침", "쿠키 정책"],
    },
    {
      title: "팔로우",
      links: [],
      social: true,
    },
  ];

  return (
    <footer
      className="border-t py-16"
      style={{ backgroundColor: colors.bg, borderColor: colors.border }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
              <span className="text-white font-bold">T</span>
            </div>
            <h3
              className="font-bold text-lg"
              style={{ color: colors.text }}
            >
              Trackit
            </h3>
            <p
              className="text-sm mt-2"
              style={{ color: colors.textMuted }}
            >
              엔터프라이즈 CRM 솔루션
            </p>
          </motion.div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4
                className="font-semibold mb-4"
                style={{ color: colors.text }}
              >
                {section.title}
              </h4>
              {section.social ? (
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:bg-gray-800"
                    style={{ borderColor: colors.border }}
                  >
                    <Share2 className="w-5 h-5" style={{ color: colors.text }} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:bg-gray-800"
                    style={{ borderColor: colors.border }}
                  >
                    <ExternalLink className="w-5 h-5" style={{ color: colors.text }} />
                  </a>
                </div>
              ) : (
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{ color: colors.textMuted }}
                        className="text-sm hover:opacity-80 transition-opacity"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t pt-8"
          style={{ borderColor: colors.border }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p style={{ color: colors.textMuted }} className="text-sm">
              Copyright 2025 Trackit. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
