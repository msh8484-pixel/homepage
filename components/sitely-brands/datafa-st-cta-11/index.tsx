// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DatafaStCta11Props {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  userCount?: number;
}

export default function DatafaStCta11({
  mode = "dark",
  headline = "Find revenue hiding in your traffic",
  subheadline = "DataFast reveals which marketing channels drive revenue, not just clicks",
  ctaText = "Start free trial",
  ctaHref = "#",
  userCount = 10546,
}: DatafaStCta11Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ backgroundColor: colors.cardBg }}
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl md:text-4xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-lg"
            style={{ color: colors.textSecondary }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href={ctaHref}
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white mb-8 transition-all hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
          </motion.a>

          {/* User Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-gray-800 bg-gradient-to-br from-gray-600 to-gray-700"
                />
              ))}
            </div>

            <p style={{ color: colors.textSecondary }}>
              Loved by {userCount.toLocaleString()} users
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
