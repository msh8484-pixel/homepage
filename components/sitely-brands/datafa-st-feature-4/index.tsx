// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    labelColor: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    labelColor: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  hasVideo?: boolean;
}

interface DatafaStFeature4Props {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Web analytics",
    description: "Get meaningful insights like Google Analytics, but 10x simpler-focused only on what drives growth, not vanity metrics.",
    linkText: "See live demo",
    linkHref: "#",
    hasVideo: true,
  },
  {
    title: "Revenue attribution",
    description: "Discover marketing channels drive PAYING customers, customer segments with the highest LTV, and patterns that directly influence purchase decisions.",
    linkText: "See live demo",
    linkHref: "#",
    hasVideo: true,
  },
];

export default function DatafaStFeature4({
  mode = "dark",
  label = "FEATURES",
  headline = "Analytics that bring customers, not confusion",
  features = defaultFeatures,
}: DatafaStFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block text-sm font-medium tracking-wider"
            style={{ color: colors.labelColor }}
          >
            {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold md:text-5xl"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="rounded-xl border border-gray-700/50 p-6"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h3
                className="mb-2 text-xl font-semibold"
                style={{ color: colors.textPrimary }}
              >
                {feature.title}
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {feature.description}
                {feature.linkText && (
                  <a
                    href={feature.linkHref}
                    className="ml-1 font-medium"
                    style={{ color: colors.accent }}
                  >
                    {feature.linkText}
                  </a>
                )}
              </p>

              {feature.hasVideo && (
                <div className="relative h-48 overflow-hidden rounded-lg bg-gray-800">
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
