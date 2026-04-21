// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "고객 상담의 미래는 AI 입니다",
  description: "Channel.io의 AI 메신저로 고객 경험을 혁신하세요",
  cta: {
    primary: { label: "무료 시작하기", href: "/signup" },
    secondary: { label: "데모 예약", href: "/demo" },
  },
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoHeroProps {
  mode?: "light" | "dark";
}

export default function ChannelIoHero({ mode = "light" }: ChannelIoHeroProps) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <section className="w-full pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">{CONTENT.headline}</h1>
            <p className="text-xl text-gray-600">{CONTENT.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={CONTENT.cta.primary.href}
                className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
                style={{ backgroundColor: colors.accent }}
              >
                {CONTENT.cta.primary.label}
              </a>
              <a
                href={CONTENT.cta.secondary.href}
                className="px-6 py-3 border-2 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                {CONTENT.cta.secondary.label}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center relative"
          >
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={CONTENT.videoUrl}
                title="Channel.io Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Gradient blur background */}
            <div
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: colors.accent }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
