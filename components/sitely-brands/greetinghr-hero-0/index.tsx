// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#1890FF",
    accentHover: "#40A9FF",
    background: "linear-gradient(180deg, #F1F5F9 0%, #E8F4FD 50%, #D4E8F9 100%)",
    navBg: "#FFFFFF",
    cardBg: "#1890FF",
    cardShadow: "rgba(24, 144, 255, 0.2)",
    textPrimary: "#27272A",
    textSecondary: "#71717A",
    border: "#E4E4E7",
    buttonPrimary: "#0F0F0F",
    buttonSecondary: "#FFFFFF",
  },
  dark: {
    accent: "#40A9FF",
    accentHover: "#69B9FF",
    background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
    navBg: "#1E293B",
    cardBg: "#1890FF",
    cardShadow: "rgba(24, 144, 255, 0.3)",
    textPrimary: "#F4F4F5",
    textSecondary: "#A1A1AA",
    border: "#3F3F46",
    buttonPrimary: "#FFFFFF",
    buttonSecondary: "#27272A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface GreetinghrHero0Props {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  titleAccent?: string;
  titleEnd?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  stat1Label?: string;
  stat1Value?: string;
  stat2Label?: string;
  stat2Value?: string;
}

export default function GreetinghrHero0({
  mode = "light",
  badge = "국내 1위 채용 관리 솔루션",
  title = "채용 관리를 넘어 ",
  titleAccent = "채용 성공",
  titleEnd = "으로",
  description = "모집부터 선발까지, 수시부터 대규모 채용까지\n그리팅 하나로 모든 채용 문제를 해결하세요.",
  primaryCta = "도입 문의하기",
  secondaryCta = "무료 체험하기",
  stat1Label = "채용 속도 향상",
  stat1Value = "2X",
  stat2Label = "소싱 효율 개선",
  stat2Value = "67%",
}: GreetinghrHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center rounded-full border px-4 py-2"
            style={{
              backgroundColor: colors.navBg,
              borderColor: colors.border,
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: colors.textPrimary }}
            >
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: colors.textPrimary }}
          >
            {title}
            <span style={{ color: colors.accent }}>
              {titleAccent}
            </span>
            {titleEnd}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 max-w-xl whitespace-pre-line text-base sm:text-lg"
            style={{ color: colors.textSecondary }}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-3 sm:flex-row"
          >
            <button
              className="rounded-md border px-6 py-3 text-sm font-medium transition-all hover:bg-opacity-80"
              style={{
                backgroundColor: colors.buttonSecondary,
                borderColor: colors.border,
                color: colors.textPrimary,
              }}
            >
              {secondaryCta}
            </button>
            <button
              className="flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.buttonPrimary }}
            >
              {primaryCta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image Section with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mt-12 flex items-end justify-center"
        >
          {/* Left Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-24 left-0 z-20 sm:left-4 md:left-8 lg:left-16"
          >
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                backgroundColor: colors.cardBg,
                boxShadow: `9px 10px 22px ${colors.cardShadow}`,
              }}
            >
              <p className="mb-1 text-sm font-bold text-white sm:text-base">
                {stat1Label}
              </p>
              <p className="text-5xl font-medium text-white sm:text-6xl md:text-7xl">
                {stat1Value}
              </p>
            </div>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute right-0 top-8 z-20 sm:right-4 sm:top-12 md:right-8 lg:right-16"
          >
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                backgroundColor: colors.cardBg,
                boxShadow: `9px 10px 22px ${colors.cardShadow}`,
              }}
            >
              <p className="mb-1 text-sm font-bold text-white sm:text-base">
                {stat2Label}
              </p>
              <p className="text-5xl font-medium text-white sm:text-6xl md:text-7xl">
                {stat2Value}
              </p>
            </div>
          </motion.div>

          {/* Placeholder for image */}
          <div className="relative h-[300px] w-[280px] sm:h-[380px] sm:w-[350px] md:h-[450px] md:w-[420px] lg:h-[500px] lg:w-[480px] flex items-center justify-center">
            <div
              className="w-full h-full rounded-lg flex items-center justify-center text-gray-500"
              style={{ backgroundColor: mode === "dark" ? "#1E293B" : "#F0F7FF" }}
            >
              Hero Image
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
