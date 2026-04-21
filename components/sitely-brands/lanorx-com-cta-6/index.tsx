// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#171717",
  },
  dark: {
    accent: "#FAFAFA",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface LanorxComCta6Props {
  mode?: "light" | "dark";
}

export default function LanorxComCta6({
  mode = "light",
}: LanorxComCta6Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <section
      className={`relative py-20 md:py-32 ${
        isDark
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl border backdrop-blur-sm ${
            isDark
              ? "bg-neutral-900/50 border-neutral-800"
              : "bg-white/50 border-neutral-200"
          } p-12 text-center`}
        >
          <h2
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Get your first 100 signups now
          </h2>

          <p
            className={`text-lg font-light mb-8 ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Free plan available. No credit card. Launch in 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                isDark
                  ? "bg-white text-black hover:shadow-lg hover:shadow-white/20"
                  : "bg-neutral-900 text-white hover:shadow-lg hover:shadow-neutral-900/20"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                Launch in 5 minutes
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-3 rounded-lg font-medium border transition-all ${
                isDark
                  ? "border-neutral-700 text-white hover:bg-neutral-800"
                  : "border-neutral-300 text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              View pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
