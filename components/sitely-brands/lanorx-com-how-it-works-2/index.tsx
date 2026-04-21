// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#171717",
    background: "#ffffff",
  },
  dark: {
    accent: "#FAFAFA",
    background: "#1f2937",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LanorxComHowItWorks2Props {
  mode?: "light" | "dark";
}

export default function LanorxComHowItWorks2({
  mode = "light",
}: LanorxComHowItWorks2Props) {
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
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Build with code or clicks
          </h2>
          <p
            className={`text-lg font-light ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Choose your approach: visual builder or SDK
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Code/SDK Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl border ${
              isDark
                ? "bg-neutral-800 border-neutral-700"
                : "bg-neutral-50 border-neutral-200"
            }`}
          >
            <h3
              className={`text-lg font-medium mb-6 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              SDK for Developers
            </h3>
            <div
              className={`p-4 rounded-lg mb-6 font-mono text-sm ${
                isDark
                  ? "bg-neutral-900 text-blue-300"
                  : "bg-white text-blue-700"
              }`}
            >
              <p>npm install @lanorx/sdk</p>
              <p className="mt-2">
                import Lanorx from '@lanorx/sdk'
              </p>
            </div>
            <p
              className={`text-sm font-light ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Integrate with your favorite framework. Full control with our TypeScript SDK.
            </p>
          </motion.div>

          {/* Visual Builder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-8 rounded-2xl border ${
              isDark
                ? "bg-neutral-800 border-neutral-700"
                : "bg-neutral-50 border-neutral-200"
            }`}
          >
            <h3
              className={`text-lg font-medium mb-6 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Visual Builder
            </h3>
            <div
              className={`h-32 rounded-lg mb-6 flex items-center justify-center ${
                isDark ? "bg-neutral-900" : "bg-white"
              }`}
            >
              <p
                className={`text-sm ${
                  isDark ? "text-neutral-500" : "text-neutral-400"
                }`}
              >
                Visual Preview
              </p>
            </div>
            <p
              className={`text-sm font-light ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Drag and drop components. No coding required. Perfect for designers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
