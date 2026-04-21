// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#1890FF",
    accentHover: "#1478d4",
    background: "#FFFFFF",
    textPrimary: "#09090B",
  },
  dark: {
    accent: "#40A9FF",
    accentHover: "#69B9FF",
    background: "#1E293B",
    textPrimary: "#F9FAFB",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface GreetinghrHeaderProps {
  mode?: "light" | "dark";
  logoText?: string;
  loginText?: string;
  ctaText?: string;
  onLogin?: () => void;
  onCtaClick?: () => void;
}

const navItems = [
  { label: "왜 그리팅인가", href: "#" },
  { label: "제품", href: "#", hasDropdown: true },
  { label: "솔루션", href: "#", hasDropdown: true },
  { label: "고객 사례", href: "#", hasDropdown: true },
  { label: "가격", href: "#" },
  { label: "유용한 자료", href: "#", hasDropdown: true },
];

export default function GreetinghrHeader({
  mode = "light",
  logoText = "Greeting",
  loginText = "로그인",
  ctaText = "도입 문의",
  onLogin,
  onCtaClick,
}: GreetinghrHeaderProps) {
  const colors = COLORS[mode];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        backgroundColor: mode === "dark" ? `${colors.background}99` : `${colors.background}99`,
        borderColor: mode === "dark" ? "#3F3F46" : "#E5E7EB",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
            style={{ color: colors.accent }}
          >
            {logoText}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onLogin}
              className="hidden sm:block text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: colors.textPrimary }}
            >
              {loginText}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={onCtaClick}
              className="hidden sm:block rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.accent }}
            >
              {ctaText}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: colors.textPrimary }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
            style={{ borderColor: mode === "dark" ? "#3F3F46" : "#E5E7EB" }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
