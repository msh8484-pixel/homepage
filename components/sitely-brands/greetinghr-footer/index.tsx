// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#09090B",
    textSecondary: "#71717A",
    border: "#E5E7EB",
  },
  dark: {
    background: "#0F172A",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    border: "#374151",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface GreetinghrFooterProps {
  mode?: "light" | "dark";
  companyName?: string;
  sections?: FooterSection[];
  copyright?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: "제품",
    links: [
      { label: "주요 기능", href: "#" },
      { label: "가격", href: "#" },
      { label: "고객사례", href: "#" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "소개", href: "#" },
      { label: "블로그", href: "#" },
      { label: "문의", href: "#" },
    ],
  },
  {
    title: "법률",
    links: [
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
    ],
  },
];

export default function GreetinghrFooter({
  mode = "light",
  companyName = "Greeting HR",
  sections = defaultSections,
  copyright = "Copyright 2025 Greeting. All rights reserved.",
}: GreetinghrFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4" style={{ color: colors.textPrimary }}>
              {companyName}
            </h3>
          </motion.div>

          {/* Links */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h4
                className="font-medium mb-4 text-sm"
                style={{ color: colors.textPrimary }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t pt-8"
          style={{ borderColor: colors.border }}
        >
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
