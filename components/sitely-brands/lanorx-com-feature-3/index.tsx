// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#3b82f6",
    background: "#ffffff",
    text: "#1f2937",
    subtext: "#6b7280",
  },
  dark: {
    accent: "#60a5fa",
    background: "#1f2937",
    text: "#f9fafb",
    subtext: "#d1d5db",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LanorxComFeature3Props {
  mode?: "light" | "dark";
}

export default function LanorxComFeature3({
  mode = "light",
}: LanorxComFeature3Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`py-24 md:py-36 ${isDark ? "bg-neutral-900" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight mb-4"
            style={{ color: colors.text }}
          >
            Find your 40%+ converting headline
          </h2>
          <p
            className="text-lg font-light"
            style={{ color: colors.subtext }}
          >
            Run A/B tests to discover what resonates with your audience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border p-8"
          style={{
            backgroundColor: isDark ? "#111827" : "#f9fafb",
            borderColor: isDark ? "#374151" : "#e5e7eb",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4" style={{ color: colors.text }}>
                Test Variants
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg" style={{ backgroundColor: isDark ? "#1f2937" : "#ffffff" }}>
                  <p className="font-medium mb-1" style={{ color: colors.text }}>
                    Launch your waitlist fast
                  </p>
                  <p className="text-sm" style={{ color: colors.subtext }}>
                    Conversion: 18.7%
                  </p>
                </div>
                <div className="p-4 rounded-lg border-2" style={{ backgroundColor: isDark ? "#065f46" : "#ecfdf5", borderColor: colors.accent }}>
                  <p className="font-medium mb-1" style={{ color: "#059669" }}>
                    Validate demand before you build
                  </p>
                  <p className="text-sm" style={{ color: "#059669" }}>
                    Conversion: 23.7% (+35%)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4" style={{ color: colors.text }}>
                Analytics
              </h3>
              <div className="h-40 rounded-lg" style={{ backgroundColor: isDark ? "#1f2937" : "#f0f9ff" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
