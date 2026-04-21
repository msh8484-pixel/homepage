// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Globe, ArrowRight } from "lucide-react";

interface DatafaStHero0Props {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  userCount?: number;
}

export default function DatafaStHero0({
  mode = "dark",
  headline = "Analytics that brings customers, not confusion",
  subheadline = "Discover which marketing channels drive revenue. Track goals, funnels, and customer journeys in real-time.",
  ctaText = "Start free trial",
  ctaHref = "#",
  userCount = 15000,
}: DatafaStHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full min-h-screen py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Content */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl md:text-6xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-xl max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Input + Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
          >
            <div className="flex items-center gap-2 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-3 py-3">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="yoursite.com"
                className="bg-gray-800 px-3 py-3 text-white placeholder-gray-500 outline-none w-48"
              />
            </div>
            <a
              href={ctaHref}
              className="flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: colors.accent }}
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* User Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-gray-800 bg-gradient-to-br from-gray-600 to-gray-700"
                />
              ))}
            </div>
            <p style={{ color: colors.textSecondary }}>
              Trusted by {userCount.toLocaleString()} users
            </p>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-gray-700/50 overflow-hidden bg-gray-800 aspect-video"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-600 mb-4">Dashboard Preview</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
