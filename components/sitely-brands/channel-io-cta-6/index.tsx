// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "지금 바로 시작하세요",
  subheadline: "무료로 가입하고 고객 경험을 혁신하세요",
  cta: {
    primary: { label: "무료 시작하기", href: "/signup" },
    secondary: { label: "데모 보기", href: "/demo" },
  },
  backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoCta6Props {
  mode?: "light" | "dark";
}

export default function ChannelIoCta6({ mode = "light" }: ChannelIoCta6Props) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50" />
      <div className="w-full max-w-[1440px] mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{CONTENT.headline}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{CONTENT.subheadline}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTENT.cta.primary.href}
              className="px-8 py-3 rounded-lg font-semibold transition-colors text-white"
              style={{ backgroundColor: colors.accent }}
            >
              {CONTENT.cta.primary.label}
            </a>
            <a
              href={CONTENT.cta.secondary.href}
              className="px-8 py-3 rounded-lg font-semibold border-2 text-gray-900 transition-colors hover:bg-gray-50"
              style={{ borderColor: colors.accent, color: colors.accent }}
            >
              {CONTENT.cta.secondary.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
