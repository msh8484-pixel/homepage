// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    cardBg: "#f5f5f5",
    title: "#1f2937",
    description: "#6b7280",
  },
  dark: {
    background: "#1f2937",
    cardBg: "#111827",
    title: "#f9fafb",
    description: "#9ca3af",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LanorxComFeature1Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  features?: Array<{ title: string; icon?: React.ReactNode }>;
}

export default function LanorxComFeature1({
  mode = "light",
  title = "Three powerful features",
  description = "Everything you need to launch your landing page",
  features = [
    { title: "Landing pages" },
    { title: "Email collections" },
    { title: "Analytics" },
  ],
}: LanorxComFeature1Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

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
          className="mb-16 text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight mb-4"
            style={{ color: colors.title }}
          >
            {title}
          </h2>
          <p
            className="text-lg font-light max-w-2xl mx-auto"
            style={{ color: colors.description }}
          >
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border p-8"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: isDark ? "#374151" : "#e5e7eb",
              }}
            >
              <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500" />
              <h3 className="text-lg font-medium" style={{ color: colors.title }}>
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
