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
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface DatafaStHowItWorks2Props {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  steps?: Step[];
  ctaText?: string;
  ctaHref?: string;
  trialText?: string;
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: "Add our script",
    description: "Copy one line of code to your website. That's it. No complex setup.",
  },
  {
    number: 2,
    title: "Connect payment providers",
    description: "Link Stripe, Gumroad, Shopify or any payment processor to track revenue.",
  },
  {
    number: 3,
    title: "Track revenue growth",
    description: "See which channels drive paying customers and watch your revenue grow.",
  },
];

export default function DatafaStHowItWorks2({
  mode = "dark",
  label = "HOW IT WORKS",
  headline = "Get started in 3 simple steps",
  steps = defaultSteps,
  ctaText = "Start free trial",
  ctaHref = "#",
  trialText = "14-day free trial. No card required",
}: DatafaStHowItWorks2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block text-sm font-medium tracking-wider"
            style={{ color: colors.accent }}
          >
            {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative rounded-xl border border-gray-700/50 p-8"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Step Number */}
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: colors.accent }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                className="mb-3 text-xl font-semibold"
                style={{ color: colors.textPrimary }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {step.description}
              </p>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 md:flex">
                  <ArrowRight
                    className="h-6 w-6"
                    style={{ color: colors.accent }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href={ctaHref}
            className="flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p style={{ color: colors.textSecondary }}>{trialText}</p>
        </motion.div>
      </div>
    </section>
  );
}
