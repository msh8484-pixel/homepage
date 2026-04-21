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

import { motion } from "motion/react";

interface RelateKrHero1Props {
  mode?: "light" | "dark";
}

export default function RelateKrHero1({
  mode = "light",
}: RelateKrHero1Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <section
      className={`py-24 md:py-32 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-2 rounded-full mb-6 text-sm"
            style={{
              backgroundColor: colors.accent + "20",
              color: colors.accent,
            }}
          >
            Y Combinator
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            심플한 B2B 영업 CRM
          </h1>

          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            심플한 B2B 세일즈 CRM 소프트웨어입니다
          </p>

          <button
            className="px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: colors.accent }}
          >
            무료로 시작하기
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`rounded-2xl border overflow-hidden ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/10 flex items-center justify-center">
            <p
              className={`${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              Dashboard Preview
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
