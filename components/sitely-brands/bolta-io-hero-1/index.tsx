// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    background: "#FDF6EE",
  },
  dark: {
    accent: "#FB923C",
    background: "#1C1917",
  },
} as const;

const CONTENT = {
  badge: "재무 AI 어시스턴트",
  title: "볼타",
  subtitle: "세금계산서부터 미수금까지 반복되는 재무업무를 자동화하세요.",
  ctaPrimary: "재무 AI 체험하기",
  ctaSecondary: "문의하기",
  videoUrl: "/videos/bolta-demo.mp4",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface BoltaIoHero1Props {
  mode?: "light" | "dark";
}

export default function BoltaIoHero1({
  mode = "light",
}: BoltaIoHero1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full min-h-screen py-20 flex items-center"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: colors.accent + "20",
                color: colors.accent,
              }}
            >
              {CONTENT.badge}
            </motion.span>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ color: colors.accent }}
            >
              {CONTENT.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              {CONTENT.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium"
                style={{ backgroundColor: colors.accent }}
                whileHover={{ scale: 1.05 }}
              >
                {CONTENT.ctaPrimary}
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-400 text-gray-700 font-medium hover:border-gray-600 transition-colors"
              >
                {CONTENT.ctaSecondary}
              </motion.a>
            </div>
          </motion.div>

          {/* Video/Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: colors.accent }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-gray-600">Demo Video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
