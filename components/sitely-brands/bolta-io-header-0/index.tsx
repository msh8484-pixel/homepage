// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "rgba(255, 255, 255, 0.95)",
    text: "#1a1a1a",
    accent: "#F97316",
    border: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    background: "rgba(10, 10, 10, 0.95)",
    text: "#f5f5f5",
    accent: "#FB923C",
    border: "rgba(255, 255, 255, 0.1)",
  },
} as const;

const NAV_ITEMS = [
  { label: "주요 기능", href: "#features" },
  { label: "API 연동", href: "#api" },
  { label: "가격 안내", href: "#pricing" },
  { label: "블로그", href: "#blog" },
  { label: "고객 사례", href: "#cases" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface BoltaIoHeader0Props {
  mode?: "light" | "dark";
}

export default function BoltaIoHeader0({
  mode = "light",
}: BoltaIoHeader0Props) {
  const colors = COLORS[mode];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: colors.text }}>
            Bolta
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors hover:opacity-70"
                style={{ color: colors.text }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: colors.text }}
            >
              로그인
            </a>
            <motion.a
              href="#start"
              className="px-6 py-2 rounded-full text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ opacity: 0.9 }}
            >
              무료로 시작하기
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: colors.text }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
              style={{ borderColor: colors.border }}
            >
              <div className="py-4 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm"
                    style={{ color: colors.text }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-3 pt-4">
                  <a href="#login" className="text-sm" style={{ color: colors.text }}>
                    로그인
                  </a>
                  <motion.a
                    href="#start"
                    className="flex-1 text-center px-4 py-2 rounded-full text-white text-sm font-medium"
                    style={{ backgroundColor: colors.accent }}
                  >
                    시작하기
                  </motion.a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
