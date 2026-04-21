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
  badge: "CRM 솔루션",
  title: "지금 바로 시작하세요",
  description:
    "Trackit의 강력한 기능으로 당신의 영업 프로세스를 혁신하세요",
  cta1: "무료로 시작하기",
  cta2: "문의하기",
};

interface TrackitSoCta8Props {
  mode?: "light" | "dark";
}

export default function TrackitSoCta8({ mode = "dark" }: TrackitSoCta8Props) {
  const colors = COLORS[mode];

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: colors.accent }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "rgba(139, 92, 246, 0.5)" }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span
                className="px-3 py-1 rounded-full text-sm font-semibold bg-opacity-20"
                style={{
                  color: colors.accent,
                  backgroundColor: colors.accent,
                }}
              >
                {CONTENT.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              {CONTENT.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg mb-8"
            >
              {CONTENT.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
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
                className="px-8 py-3 rounded-lg font-semibold text-white border-2 transition-all"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                {CONTENT.cta2}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
