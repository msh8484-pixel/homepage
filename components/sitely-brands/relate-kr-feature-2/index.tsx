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

interface RelateKrFeature2Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature2({
  mode = "light",
}: RelateKrFeature2Props) {
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
            영업 파이프라인 관리
          </h2>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            B2B 팀이 매일 사용하는 CRM 소프트웨어
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl border p-8 ${
            isDark
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div
            className={`h-96 rounded-lg flex items-center justify-center ${
              isDark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <p
              className={`text-center ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Sales Pipeline Dashboard
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
