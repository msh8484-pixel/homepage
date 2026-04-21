// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ChevronRight, Gift } from "lucide-react";

const COLORS = {
  light: {
    background: "#181818",
    textPrimary: "#FFFFFF",
    accentBg: "#FBBD23",
    accentText: "#1D232A",
  },
  dark: {
    background: "#181818",
    textPrimary: "#FFFFFF",
    accentBg: "#FBBD23",
    accentText: "#1D232A",
  },
} as const;

interface ShipfaStHero0Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  discountText?: string;
}

const TechStack = [
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "◆" },
  { name: "Resend", icon: "✉" },
  { name: "Stripe", icon: "$" },
  { name: "NextAuth", icon: "🔐" },
  { name: "MongoDB", icon: "🗄" },
];

export default function ShipfaStHero0({
  mode = "dark",
  title = "Ship your startup in days, not weeks",
  description = "Get to market faster with ShipFast. Pre-built templates, payment processing, authentication, and more.",
  buttonText = "Get Started",
  buttonLink = "#get-started",
  discountText = "Limited time: 50% off",
}: ShipfaStHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Discount Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
          style={{ backgroundColor: colors.accentBg, color: colors.accentText }}
        >
          <Gift className="w-4 h-4" />
          <span className="font-semibold text-sm">{discountText}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: colors.textPrimary }}
        >
          Ship your{" "}
          <span
            className="px-4 py-2 rounded-lg"
            style={{ backgroundColor: colors.accentBg, color: colors.accentText }}
          >
            startup
          </span>
          <br />
          in days, not weeks
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto"
          style={{ color: colors.textPrimary }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={buttonLink}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:scale-105"
          style={{ backgroundColor: colors.accentBg, color: colors.accentText }}
        >
          {buttonText}
          <ChevronRight className="w-5 h-5" />
        </motion.a>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 flex flex-wrap justify-center gap-8"
        >
          {TechStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                style={{ backgroundColor: colors.accentBg, color: colors.accentText }}
              >
                {tech.icon}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: colors.textPrimary }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold"
                  style={{
                    backgroundColor: colors.accentBg,
                    color: colors.accentText,
                    borderColor: colors.background,
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
            <div>
              <p
                className="font-semibold"
                style={{ color: colors.textPrimary }}
              >
                7,890 makers
              </p>
              <p style={{ color: colors.textPrimary, opacity: 0.7 }}>
                ship faster
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: colors.accentBg }}>
                ★
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
