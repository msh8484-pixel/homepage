// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#171717",
  },
  dark: {
    accent: "#FAFAFA",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LanorxComTestimonial5Props {
  mode?: "light" | "dark";
}

export default function LanorxComTestimonial5({
  mode = "light",
}: LanorxComTestimonial5Props) {
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
          className="mb-16 text-center"
        >
          <h2
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Trusted by hundreds of builders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stat: "284",
              label: "Total Signups",
              target: "300",
            },
            {
              stat: "18.7%",
              label: "Conversion Rate",
              target: "Test Winner",
            },
            {
              stat: "487",
              label: "Commitments",
              target: "500 Goal",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${
                isDark
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-50 border-neutral-200"
              }`}
            >
              <p
                className={`text-3xl font-light mb-2 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                {item.stat}
              </p>
              <p
                className={`text-sm font-light mb-4 ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {item.label}
              </p>
              <div className="w-full bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
