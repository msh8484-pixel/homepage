// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBg: "#F9FAFB",
    textPrimary: "#000000",
    textSecondary: "#666666",
    accentBg: "#84cc16",
    accentText: "#1d232a",
    borderColor: "#E5E7EB",
  },
  dark: {
    background: "#0A0A0A",
    cardBg: "#1F2937",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    accentBg: "#84cc16",
    accentText: "#1d232a",
    borderColor: "#374151",
  },
} as const;

interface Plan {
  name: string;
  originalPrice: number;
  price: number;
  description: string;
  buttonText: string;
  features: Array<{ label: string; included: boolean }>;
  highlighted?: boolean;
}

interface ShipfaStPricing6Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: Plan[];
}

const defaultPlans: Plan[] = [
  {
    name: "Starter",
    originalPrice: 299,
    price: 199,
    description: "Perfect for launching your first startup",
    buttonText: "Get Started",
    highlighted: false,
    features: [
      { label: "Email Integration", included: true },
      { label: "Payment Processing", included: true },
      { label: "Authentication", included: true },
      { label: "Database Setup", included: true },
      { label: "Email Support", included: false },
    ],
  },
  {
    name: "All-in",
    originalPrice: 399,
    price: 249,
    description: "Everything you need to scale",
    buttonText: "Get Started",
    highlighted: true,
    features: [
      { label: "Email Integration", included: true },
      { label: "Payment Processing", included: true },
      { label: "Authentication", included: true },
      { label: "Database Setup", included: true },
      { label: "Email Support", included: true },
    ],
  },
  {
    name: "Bundle",
    originalPrice: 498,
    price: 299,
    description: "ShipFast + CodeFast together",
    buttonText: "Get Started",
    highlighted: false,
    features: [
      { label: "All ShipFast Features", included: true },
      { label: "CodeFast License", included: true },
      { label: "Priority Support", included: true },
      { label: "Lifetime Updates", included: true },
      { label: "Email Support", included: true },
    ],
  },
];

export default function ShipfaStPricing6({
  mode = "light",
  title = "Simple, Transparent Pricing",
  plans = defaultPlans,
}: ShipfaStPricing6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: colors.textPrimary }}
        >
          {title}
        </motion.h2>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border-2 transition-all ${
                plan.highlighted ? "md:scale-105" : ""
              }`}
              style={{
                backgroundColor: colors.cardBg,
                borderColor: plan.highlighted ? colors.accentBg : colors.borderColor,
              }}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full font-semibold text-sm"
                  style={{
                    backgroundColor: colors.accentBg,
                    color: colors.accentText,
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className="text-sm mb-6"
                style={{ color: colors.textSecondary }}
              >
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.accentBg }}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className="text-sm line-through opacity-50"
                    style={{ color: colors.textSecondary }}
                  >
                    ${plan.originalPrice}
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{ color: colors.textSecondary }}
                >
                  One-time payment
                </p>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-3 rounded-lg font-semibold mb-8 transition-all hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: plan.highlighted
                    ? colors.accentBg
                    : colors.borderColor,
                  color: plan.highlighted ? colors.accentText : colors.textPrimary,
                }}
              >
                {plan.buttonText}
              </button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check
                        className="w-5 h-5"
                        style={{ color: colors.accentBg }}
                      />
                    ) : (
                      <X
                        className="w-5 h-5 opacity-30"
                        style={{ color: colors.textSecondary }}
                      />
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: feature.included
                          ? colors.textPrimary
                          : colors.textSecondary,
                        opacity: feature.included ? 1 : 0.5,
                      }}
                    >
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
