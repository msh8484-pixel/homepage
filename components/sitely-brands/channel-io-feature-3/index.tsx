// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "AI로 반복 문의 해결하고 중요한 일에 집중하세요",
  subheadline: "Channel.io의 AI 기능으로 고객 지원을 자동화하세요",
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoFeature3Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFeature3({ mode = "light" }: ChannelIoFeature3Props) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;
  const highlightColor = colors.accent;

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span
              style={{ color: highlightColor }}
            >
              AI로 해결
            </span>
            하고 중요한 일에 집중하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{CONTENT.subheadline}</p>
        </motion.div>
      </div>
    </section>
  );
}
