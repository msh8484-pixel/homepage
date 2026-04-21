// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "AI로 반복되는 고객 문의를 자동으로 해결하세요",
  description: "고객 지원을 자동화하고 팀의 생산성을 높이세요",
  features: [
    {
      title: "AI가 고객 문제를 직접 해결합니다",
      description: "반복되는 질문은 AI가 자동으로 답변합니다",
      size: "large",
    },
    {
      title: "풍부해진 지식 기반",
      description: "고객이 원하는 정보를 더 빨리 찾을 수 있습니다",
      size: "small",
    },
    {
      title: "5분 만에 AI 에이전트 설정",
      description: "복잡한 설정 없이 바로 시작하세요",
      size: "small",
    },
  ],
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoFeature5Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFeature5({ mode = "light" }: ChannelIoFeature5Props) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{CONTENT.headline}</h2>
          <p className="text-xl text-gray-600">{CONTENT.description}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large card spanning 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:row-span-2 rounded-xl p-8 bg-gradient-to-br"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.accent}05 100%)`,
              border: `1px solid ${colors.accent}30`,
            }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">{CONTENT.features[0].title}</h3>
            <p className="text-gray-600 mb-8">{CONTENT.features[0].description}</p>
            <div className="h-48 bg-gray-200 rounded-lg" />
            <div className="mt-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              ALF Knowledge
            </div>
          </motion.div>

          {/* Small cards */}
          {CONTENT.features.slice(1).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="rounded-xl p-8 border border-gray-200 bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="h-32 bg-gray-200 rounded-lg" />
              <div className="mt-4 inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                ALF Rules
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
