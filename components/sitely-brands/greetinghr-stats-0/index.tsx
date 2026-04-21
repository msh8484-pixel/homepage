// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#09090B",
    textSecondary: "#71717A",
    cardBg: "#F3F4F6",
    accent: "#1890FF",
  },
  dark: {
    background: "#0F172A",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    cardBg: "#1E293B",
    accent: "#40A9FF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

interface GreetinghrStats0Props {
  mode?: "light" | "dark";
  headline?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { label: "고객 만족도", value: "98", suffix: "%" },
  { label: "채용 시간 단축", value: "50", suffix: "%" },
  { label: "활성 고객사", value: "1000", suffix: "+" },
  { label: "누적 채용 인원", value: "50000", suffix: "+" },
];

export default function GreetinghrStats0({
  mode = "light",
  headline = "그리팅이 자랑하는 수치들",
  stats = defaultStats,
}: GreetinghrStats0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          style={{ color: colors.textPrimary }}
        >
          {headline}
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Value */}
              <div className="mb-3">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: colors.accent }}
                >
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span
                    className="text-lg md:text-xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="text-sm md:text-base" style={{ color: colors.textSecondary }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
