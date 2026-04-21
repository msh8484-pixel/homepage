// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "motion/react";

const CONTENT = {
  logo: "Channel.io",
  navigation: [
    { label: "서비스", href: "/services" },
    { label: "AI 에이전트 ALF", href: "/alf", isNew: true },
    { label: "가격안내", href: "/pricing" },
    { label: "고객사례", href: "/cases" },
    { label: "블로그", href: "/blog" },
  ],
  cta: {
    login: { label: "로그인", href: "/login" },
    signup: { label: "무료 시작하기", href: "/signup" },
  },
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoHeaderProps {
  mode?: "light" | "dark";
}

export default function ChannelIoHeader({ mode = "light" }: ChannelIoHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="m-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-bold text-xl text-gray-900">
            {CONTENT.logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {CONTENT.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium flex items-center gap-2"
              >
                {item.label}
                {item.isNew && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    NEW
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTENT.cta.login.href}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {CONTENT.cta.login.label}
            </a>
            <a
              href={CONTENT.cta.signup.href}
              className="px-4 py-2 rounded-lg font-medium text-white text-sm"
              style={{ backgroundColor: colors.accent }}
            >
              {CONTENT.cta.signup.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <motion.div animate={{ rotate: mobileMenuOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200"
          >
            <div className="px-5 py-4 space-y-4">
              {CONTENT.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {item.label}
                  {item.isNew && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded text-white ml-2"
                      style={{ backgroundColor: colors.accent }}
                    >
                      NEW
                    </span>
                  )}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <a
                  href={CONTENT.cta.login.href}
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {CONTENT.cta.login.label}
                </a>
                <a
                  href={CONTENT.cta.signup.href}
                  className="block px-4 py-2 rounded-lg font-medium text-white text-sm text-center"
                  style={{ backgroundColor: colors.accent }}
                >
                  {CONTENT.cta.signup.label}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
