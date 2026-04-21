// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#3366FF",
  },
  dark: {
    accent: "#4D7AFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface RelateKrFeature3Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature3({
  mode = "light",
}: RelateKrFeature3Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <section
      className={`py-24 md:py-36 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className={`text-4xl font-bold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            영업 기회 발굴
          </h2>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            프로스펙팅 기능으로 새로운 기회를 찾으세요
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {["Contacts", "Messages", "Details"].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-lg border p-6 ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3
                className={`font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {section}
              </h3>
              <div
                className={`h-32 rounded ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
