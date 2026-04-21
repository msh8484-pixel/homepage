// @ts-nocheck
"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#000000",
    accentBg: "#84cc16",
    accentText: "#1d232a",
  },
  dark: {
    background: "#1d232a",
    textPrimary: "#FFFFFF",
    accentBg: "#84cc16",
    accentText: "#1d232a",
  },
} as const;

interface Feature {
  icon: string;
  label: string;
  description: string;
}

interface ShipfaStFeature3Props {
  mode?: "light" | "dark";
  title?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { icon: "✉️", label: "Emails", description: "Transactional emails with Mailgun or Resend" },
  { icon: "💳", label: "Payments", description: "Stripe and LemonSqueezy integration" },
  { icon: "🔐", label: "Login", description: "NextAuth with magic links and OAuth" },
  { icon: "🗄️", label: "Database", description: "MongoDB or Supabase setup" },
  { icon: "🔍", label: "SEO", description: "Built-in SEO optimization" },
  { icon: "🎨", label: "Style", description: "20+ responsive UI components" },
  { icon: "⚙️", label: "More", description: "TypeScript, error handling, and more" },
];

export default function ShipfaStFeature3({
  mode = "dark",
  title = "Supercharge your app instantly, launch faster, make money",
  features = defaultFeatures,
}: ShipfaStFeature3Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border-2 hover:shadow-lg transition-all"
              style={{
                borderColor: colors.accentBg,
                backgroundColor: colors.background,
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {feature.label}
              </h3>
              <p style={{ color: colors.textPrimary, opacity: 0.7 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
