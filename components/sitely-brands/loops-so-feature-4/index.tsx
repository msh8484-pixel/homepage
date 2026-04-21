// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
  },
  dark: {
    accent: "#FF6B35",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LoopsSoFeature4Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFeature4({
  mode = "light",
}: LoopsSoFeature4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Zero-effort deliverability
          </h2>
          <p
            className={`mt-2 text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We handle the technical details so you can focus on your message
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Intelligent Queueing", description: "Smart scheduling to avoid spam filters" },
            { title: "DNS Handling", description: "Automatic configuration for compliance" },
            { title: "Deliverability Checker", description: "Free diagnostic tool for your emails" },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl border p-8 ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div
                className="h-16 w-16 rounded-lg mb-4"
                style={{ backgroundColor: colors.accent + "20" }}
              />
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
