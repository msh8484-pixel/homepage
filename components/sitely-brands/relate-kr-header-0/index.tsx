// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#3366FF",
  },
  dark: {
    accent: "#4D7AFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

interface RelateKrHeader0Props {
  mode?: "light" | "dark";
}

export default function RelateKrHeader0({
  mode = "light",
}: RelateKrHeader0Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isDark
          ? "bg-gray-950/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      } backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-lg"
              style={{ backgroundColor: colors.accent }}
            />
            <span
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              relate
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["제품", "가격", "고객 사례", "블로그"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              로그인
            </button>
            <button
              className="text-sm px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: colors.accent }}
            >
              무료로 시작하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}
            >
              <div className="px-4 py-4 space-y-4">
                {["제품", "가격", "고객 사례", "블로그"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`block text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
