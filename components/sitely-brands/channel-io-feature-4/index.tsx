// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "채널톡은 고객과 팀을 위한 올인원 AI 메신저입니다",
  features: [
    {
      title: "통합 상담 관리",
      description: "모든 채널의 고객 문의를 한곳에서 관리하세요",
      size: "large",
    },
    {
      title: "AI 전화 상담",
      description: "AI가 전화 상담을 자동으로 처리합니다",
      size: "medium",
    },
    {
      title: "문서 & 지식관리",
      description: "고객이 필요한 정보를 빠르게 찾을 수 있습니다",
      size: "medium",
    },
    {
      title: "CRM 마케팅",
      description: "고객 데이터 기반 개인화된 마케팅을 하세요",
      size: "medium",
    },
    {
      title: "AI 팀 메신저",
      description: "팀 소통을 더욱 효율적으로 만들어보세요",
      size: "medium",
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

interface ChannelIoFeature4Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFeature4({ mode = "light" }: ChannelIoFeature4Props) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{CONTENT.headline}</h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large card - featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-xl p-8 bg-gradient-to-br"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.accent}05 100%)`,
              border: `1px solid ${colors.accent}30`,
            }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">{CONTENT.features[0].title}</h3>
            <p className="text-gray-600">{CONTENT.features[0].description}</p>
            <div className="mt-8 h-40 bg-gray-200 rounded-lg" />
          </motion.div>

          {/* Medium cards */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
