// @ts-nocheck
"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    accent: "#00D9FF",
    primary: "#1a1a1a",
  },
  dark: {
    accent: "#00D9FF",
    primary: "#ffffff",
  },
} as const;

const CONTENT = {
  badge: "엔터프라이즈 CRM",
  title: "엔터프라이즈를 위한 커스텀 영업 CRM",
  subtitle: "예측 가능한 수익과 반복 가능한 성장을 위한 완벽한 솔루션",
  description:
    "Trackit은 당신의 영업 팀을 위해 설계된 강력한 CRM입니다. 예측 가능한 수익을 만들고 반복 가능한 성장을 실현하세요.",
  cta1: "무료로 시작하기",
  cta2: "문의하기",
};

interface TrackitSoHero0Props {
  mode?: "light" | "dark";
}

export default function TrackitSoHero0({
  mode = "dark",
}: TrackitSoHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16"
      style={{
        background:
          mode === "dark"
            ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a3a 100%)"
            : "#ffffff",
      }}
    >
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border border-gray-700"
            style={{
              width: `${200 * ring}px`,
              height: `${200 * ring}px`,
              left: `calc(-50% + ${-100 * ring}px)`,
              top: `calc(-50% + ${-100 * ring}px)`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  color: colors.accent,
                  backgroundColor: `${colors.accent}20`,
                }}
              >
                {CONTENT.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              {CONTENT.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-4"
              style={{ color: colors.primary, opacity: 0.7 }}
            >
              {CONTENT.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg mb-8"
              style={{ color: colors.primary, opacity: 0.6 }}
            >
              {CONTENT.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold text-gray-950 transition-all"
                style={{ backgroundColor: colors.accent }}
              >
                {CONTENT.cta1}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold border-2 transition-all"
                style={{
                  borderColor: colors.accent,
                  color: colors.accent,
                }}
              >
                {CONTENT.cta2}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Video/Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              <div className="relative text-white/50 text-lg">
                video or image
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
