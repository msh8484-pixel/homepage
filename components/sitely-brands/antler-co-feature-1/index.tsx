// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    text: "#1a1a1a",
    textMuted: "#6b7280",
  },
  dark: {
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoFeature1Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFeature1({
  mode = "light",
}: AntlerCoFeature1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
            style={{ color: colors.text }}
          >
            We believe Antler is the best place on the planet for people to launch
            category-defining companies.
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: colors.textMuted }}
          >
            Supporting founders in meaningful work that matters, not chasing trends or
            quick wins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
