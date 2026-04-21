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

interface RelateKrFeature4Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature4({
  mode = "light",
}: RelateKrFeature4Props) {
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
            판매 단계 관리
          </h2>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            각 단계별로 거래를 추적하고 관리합니다
          </p>
        </motion.div>

        {/* Pipeline Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {["Potential", "Pending", "Closed Won", "Lost"].map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-lg border p-4 ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3
                className={`font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {stage}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                거래 관리
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
