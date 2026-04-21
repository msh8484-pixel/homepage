// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

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

interface LanorxComHero0Props {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  signInText?: string;
}

export default function LanorxComHero0({
  mode = "light",
  headline = "No-code landing pages",
  subheadline = "Launch a beautiful landing page in minutes. No code required.",
  ctaText = "Get started",
  signInText = "Sign in",
}: LanorxComHero0Props) {
  const isDark = mode === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-sm ${
          isDark
            ? "bg-neutral-950/80 border-neutral-800"
            : "bg-white/80 border-neutral-200"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className={`text-xl font-light ${isDark ? "text-white" : "text-neutral-900"}`}>
            Lanorx
          </h1>
          <div className="flex items-center gap-4">
            <button
              className={`text-sm font-light ${
                isDark ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {signInText}
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                isDark
                  ? "bg-white text-black hover:bg-neutral-100"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className={`text-4xl md:text-6xl font-light tracking-tight mb-6 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            {headline}
          </h2>

          <p
            className={`text-xl font-light mb-12 max-w-2xl mx-auto ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {subheadline}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all ${
              isDark
                ? "bg-white text-black hover:shadow-lg hover:shadow-white/20"
                : "bg-neutral-900 text-white hover:shadow-lg hover:shadow-neutral-900/20"
            }`}
          >
            Get started
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 rounded-2xl border overflow-hidden shadow-2xl"
          style={{
            borderColor: isDark ? "#374151" : "#e5e7eb",
            backgroundColor: isDark ? "#1f2937" : "#f9fafb",
          }}
        >
          <div className="h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 flex items-center justify-center">
            <p className={`text-center ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
              Dashboard Preview
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
