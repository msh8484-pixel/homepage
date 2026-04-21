// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF5C35",
    accentHover: "#E55A2B",
  },
  dark: {
    accent: "#FF5C35",
    accentHover: "#FF8555",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Icon components
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

interface LoopsSoFeature3Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFeature3({
  mode = "light",
}: LoopsSoFeature3Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
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
          <span
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Marketers
          </span>
          <h2
            className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Craft a respectful customer journey
          </h2>
        </motion.div>

        {/* Build Your Loop Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-6 rounded-2xl border p-8 ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          <div className="text-center">
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Build your Loop
            </h3>
            <p
              className={`mx-auto mt-2 max-w-md text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              From onboarding emails to engaging users who haven't explored your app,
              automate it all with Loops.
            </p>
          </div>

          {/* Loop Builder Steps */}
          <div className="relative mt-10">
            <div className="grid gap-4 lg:grid-cols-3">
              {[1, 2, 3].map((step) => (
                <div key={step} className="relative">
                  <div
                    className={`h-full rounded-xl border p-5 ${
                      isDark
                        ? "border-gray-700 bg-gray-800/50"
                        : "border-gray-100 bg-gray-50/50"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {step}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Step {step}
                      </span>
                    </div>
                    <div
                      className={`rounded-lg border p-4 ${
                        isDark
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Step content here
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Segment Your Audience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-2xl border p-8 ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          <h3
            className={`text-lg font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Segment your audience
          </h3>
          <p
            className={`mt-3 max-w-sm text-sm leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Create dynamic audience segments that continually improve over time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
