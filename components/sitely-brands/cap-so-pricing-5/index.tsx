// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Simple, transparent pricing",
  description: "Choose the plan that works best for you.",
  plans: [
    {
      name: "Cap Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Unlimited local recordings",
        "Basic editing tools",
        "Community support",
        "Up to 100MB per recording",
      ],
      cta: { label: "Get Started", href: "/download" },
      popular: false,
    },
    {
      name: "Cap Pro",
      price: "$9",
      period: "/month",
      description: "For creators and teams",
      features: [
        "Unlimited cloud storage",
        "AI-powered features",
        "Priority support",
        "Custom branding",
        "Team collaboration",
        "Advanced analytics",
      ],
      cta: { label: "Start Free Trial", href: "/pricing" },
      popular: true,
    },
    {
      name: "Cap Commercial",
      price: "Custom",
      description: "For enterprises",
      features: [
        "Self-hosted option",
        "SSO / SAML",
        "Dedicated support",
        "Custom integrations",
        "Compliance certifications",
        "Volume discounts",
      ],
      cta: { label: "Contact Sales", href: "/contact" },
      popular: false,
    },
  ],
} as const;

interface CapSoPricingProps {
  mode?: "light" | "dark";
}

export default function CapSoPricing({ mode = "light" }: CapSoPricingProps) {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{CONTENT.headline}</h2>
          <p className="text-xl text-gray-600">{CONTENT.description}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 transition-all ${
                plan.popular
                  ? "bg-gray-900 text-white ring-2 ring-blue-500 md:scale-105"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {(plan as any).period && <span className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>{(plan as any).period}</span>}
              </div>

              {/* CTA Button */}
              <a
                href={plan.cta.href}
                className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors mb-8 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta.label}
              </a>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
