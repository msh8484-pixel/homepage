// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    background: "#ffffff",
  },
  dark: {
    accent: "#FF6B35",
    background: "#1f2937",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LoopsSoCta5Props {
  mode?: "light" | "dark";
}

export default function LoopsSoCta5({
  mode = "light",
}: LoopsSoCta5Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border p-12 text-center"
          style={{
            backgroundColor: colors.background,
            borderColor: isDark ? "#374151" : "#e5e7eb",
          }}
        >
          <h2
            className="text-3xl font-semibold tracking-tight mb-4"
            style={{ color: isDark ? "#f3f4f6" : "#111827" }}
          >
            Email shouldn't be complicated
          </h2>

          <p
            className="text-lg mb-8"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
          >
            Works for designers. Works for engineers. Works for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: colors.accent,
                color: "white",
              }}
            >
              Give it a try
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-medium transition-all"
              style={{
                color: colors.accent,
              }}
            >
              let us know
            </a>
          </div>

          <p
            className="mt-8 italic"
            style={{ color: isDark ? "#6b7280" : "#9ca3af" }}
          >
            — Loops Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
