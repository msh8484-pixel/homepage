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
    accentGreen: "#10B981",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    accentGreen: "#10B981",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  highlighted?: boolean;
}

interface DatafaStPricing8Props {
  mode?: "light" | "dark";
  headline?: string;
  plans?: Plan[];
  userCount?: number;
}

const defaultPlans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 9,
    yearlyPrice: 90,
    description: "Perfect for solo creators",
    features: [
      { text: "Up to 10k events/month", included: true },
      { text: "Basic analytics", included: true },
      { text: "Up to 1 team member", included: true },
      { text: "Email support", included: true },
      { text: "Revenue tracking", included: false },
      { text: "Team collaboration", included: false },
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: "For growing businesses",
    features: [
      { text: "Up to 100k events/month", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Up to 30 team members", included: true },
      { text: "Priority support", included: true },
      { text: "Revenue tracking", included: true },
      { text: "Team collaboration", included: true },
    ],
    cta: "Start free trial",
    highlighted: true,
  },
];

export default function DatafaStPricing8({
  mode = "dark",
  headline = "Simple, transparent pricing",
  plans = defaultPlans,
  userCount = 10546,
}: DatafaStPricing8Props) {
  const colors = COLORS[mode];
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-3xl md:text-5xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "text-white"
                  : "text-gray-500"
              }`}
              style={{
                backgroundColor: billingPeriod === "monthly" ? colors.accent : "transparent",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-lg font-medium transition-all relative ${
                billingPeriod === "yearly"
                  ? "text-white"
                  : "text-gray-500"
              }`}
              style={{
                backgroundColor: billingPeriod === "yearly" ? colors.accent : "transparent",
              }}
            >
              Yearly
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Save 2 months
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-gray-600 scale-105"
                  : "border-gray-700/50"
              }`}
              style={{
                backgroundColor: plan.highlighted
                  ? "rgba(224, 123, 57, 0.1)"
                  : colors.cardBg,
              }}
            >
              {/* Plan Name */}
              <h3
                className="mb-2 text-2xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className="mb-6 text-sm"
                style={{ color: colors.textSecondary }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span style={{ color: colors.textSecondary }}>
                  /{billingPeriod === "monthly" ? "month" : "year"}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className="w-full rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90 mb-8"
                style={{
                  backgroundColor: plan.highlighted
                    ? colors.accent
                    : "transparent",
                  border: plan.highlighted ? "none" : `1px solid ${colors.accent}`,
                  color: plan.highlighted ? "white" : colors.accent,
                }}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check
                        className="h-5 w-5 flex-shrink-0 mt-0.5"
                        style={{ color: colors.accentGreen }}
                      />
                    ) : (
                      <X
                        className="h-5 w-5 flex-shrink-0 mt-0.5 text-gray-600"
                      />
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: feature.included
                          ? colors.textPrimary
                          : colors.textSecondary,
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p style={{ color: colors.textSecondary }}>
            Loved by {userCount.toLocaleString()} users
          </p>
        </motion.div>
      </div>
    </section>
  );
}
