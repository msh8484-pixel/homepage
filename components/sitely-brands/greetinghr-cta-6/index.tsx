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
    accent: "#1890FF",
  },
  dark: {
    background: "#1E293B",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    accent: "#40A9FF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface GreetinghrCta6Props {
  mode?: "light" | "dark";
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function GreetinghrCta6({
  mode = "light",
  headline = "채용 관리를 넘어, 채용 성공으로",
  description = "그리팅과 함께 시작해보세요",
  buttonText = "무료 시작하기",
  buttonHref = "#",
}: GreetinghrCta6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-12 text-center"
          style={{
            backgroundColor: mode === "dark" ? "#273449" : "#F0F7FF",
          }}
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8"
            style={{ color: colors.textSecondary }}
          >
            {description}
          </motion.p>

          {/* Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            href={buttonHref}
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
