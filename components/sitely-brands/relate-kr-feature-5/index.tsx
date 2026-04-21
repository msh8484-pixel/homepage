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

interface RelateKrFeature5Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature5({
  mode = "light",
}: RelateKrFeature5Props) {
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
            고객 관리
          </h2>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            활성 고객과 이탈 고객을 체계적으로 관리합니다
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {["Active Customers", "Churned Customers"].map((section, idx) => (
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
                className={`h-40 rounded ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
