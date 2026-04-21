// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "rgba(255, 255, 255, 0.95)",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    accent: "#E54B4B",
    border: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    background: "rgba(10, 10, 10, 0.95)",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
    accent: "#E54B4B",
    border: "rgba(255, 255, 255, 0.1)",
  },
} as const;

const NAV_ITEMS = [
  { label: "Locations", href: "#locations" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Investors", href: "#investors" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Residency", href: "#residency" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface AntlerCoHeader0Props {
  mode?: "light" | "dark";
}

export default function AntlerCoHeader0({
  mode = "light",
}: AntlerCoHeader0Props) {
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
          <a href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-sm"
              style={{ backgroundColor: colors.accent }}
            />
            <span
              className="font-bold text-lg"
              style={{ color: colors.text }}
            >
              NTLER
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors hover:text-opacity-70"
                style={{ color: colors.text }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.a
              href="#apply"
              className="px-6 py-2 rounded-full text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ opacity: 0.9 }}
            >
              Apply
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
                <motion.a
                  href="#apply"
                  className="block w-full text-center px-6 py-2 rounded-full text-white text-sm font-medium transition-colors"
                  style={{ backgroundColor: colors.accent }}
                >
                  Apply
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
