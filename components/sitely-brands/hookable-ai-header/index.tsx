// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#111111",
    navText: "#666666",
    border: "#E5E5E5",
    hoverBg: "#F5F5F5",
    buttonBg: "#111111",
    buttonText: "#FFFFFF",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    navText: "#B3B3B3",
    border: "#2A2A2A",
    hoverBg: "#1A1A1A",
    buttonBg: "#FFFFFF",
    buttonText: "#111111",
  },
};

const NAVIGATION = [
  { label: "기능", href: "#features" },
  { label: "요금", href: "#pricing" },
  { label: "문서", href: "#docs" },
  { label: "블로그", href: "#blog" },
];

const BRAND_NAME = "Hookable";

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HookableAiHeaderProps {
  mode?: "light" | "dark";
  brandName?: string;
  navLinks?: typeof NAVIGATION;
  onStartClick?: () => void;
  onContactClick?: () => void;
}

export default function HookableAiHeader({
  mode = "light",
  brandName = BRAND_NAME,
  navLinks = NAVIGATION,
  onStartClick,
  onContactClick,
}: HookableAiHeaderProps) {
  const colors = COLORS[mode];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? colors.background
          : "transparent",
        borderBottom: isScrolled
          ? `1px solid ${colors.border}`
          : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-xl"
          style={{ color: colors.text }}
        >
          {brandName}
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ color: colors.navText }}
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={onContactClick}
            style={{
              color: colors.navText,
              borderColor: colors.border,
              border: `1px solid`,
            }}
            className="px-5 py-2 rounded-lg text-sm font-medium hover:bg-opacity-5 transition-colors"
          >
            문의하기
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={onStartClick}
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
            className="px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            시작하기
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: colors.text }}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{
              backgroundColor: colors.background,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ color: colors.navText }}
                  className="block text-sm font-medium hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-4">
                <button
                  onClick={onContactClick}
                  style={{
                    color: colors.navText,
                    borderColor: colors.border,
                    border: "1px solid",
                  }}
                  className="flex-1 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  문의하기
                </button>
                <button
                  onClick={onStartClick}
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                  className="flex-1 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  시작하기
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
