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
  },
  dark: {
    background: "#0F172A",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface Logo {
  name: string;
  src?: string;
}

interface GreetinghrLogoCloud1Props {
  mode?: "light" | "dark";
  heading?: string;
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  { name: "Company 1" },
  { name: "Company 2" },
  { name: "Company 3" },
  { name: "Company 4" },
  { name: "Company 5" },
  { name: "Company 6" },
  { name: "Company 7" },
  { name: "Company 8" },
  { name: "Company 9" },
  { name: "Company 10" },
  { name: "Company 11" },
  { name: "Company 12" },
  { name: "Company 13" },
  { name: "Company 14" },
  { name: "Company 15" },
  { name: "Company 16" },
  { name: "Company 17" },
  { name: "Company 18" },
  { name: "Company 19" },
  { name: "Company 20" },
  { name: "Company 21" },
  { name: "Company 22" },
  { name: "Company 23" },
  { name: "Company 24" },
  { name: "Company 25" },
  { name: "Company 26" },
  { name: "Company 27" },
  { name: "Company 28" },
];

export default function GreetinghrLogoCloud1({
  mode = "light",
  heading = "국내 1000+ 기업이 그리팅을 선택했습니다",
  logos = defaultLogos,
}: GreetinghrLogoCloud1Props) {
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
          {heading}
        </motion.h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 7) * 0.05 }}
              className="flex items-center justify-center rounded-lg p-4 transition-all hover:opacity-80"
              style={{
                backgroundColor: mode === "dark" ? "#1E293B" : "#F3F4F6",
                border: `1px solid ${colors.textSecondary}30`,
              }}
            >
              <span
                className="text-center text-xs sm:text-sm font-medium"
                style={{ color: colors.textSecondary }}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
