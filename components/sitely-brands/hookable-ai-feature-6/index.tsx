// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  dark: {
    background: "#0a0a0a",
    text: "#ffffff",
    textSecondary: "#999999",
    border: "#2a2a2a",
    buttonBg: "#ffffff",
    buttonText: "#000000",
  },
};

const FEATURES = [
  {
    icon: "sparkles",
    title: "AI 기반 자동 생성",
    description: "프롬프트만으로 전문가 수준의 상세페이지 생성",
  },
  {
    icon: "palette",
    title: "무제한 커스터마이징",
    description: "브랜드에 맞는 색상, 폰트, 레이아웃 자유롭게 변경",
  },
  {
    icon: "zap",
    title: "초고속 수정",
    description: "클릭 후 채팅으로 간단하게 원하는 대로 수정",
  },
  {
    icon: "trending-up",
    title: "판매 데이터 기반",
    description: "수만 개의 고매출 상품 분석으로 증명된 전략",
  },
];

const DEFAULT_CONTENT = {
  badge: "서비스 소개",
  heading: "팔리는 상품의 법칙을 아세요?",
  description:
    "후커블 AI는 수만 개의 히트상품 판매 데이터를 분석해 AI가 당신의 상품에 맞는 최고의 상세페이지를 만들어줍니다",
  ctaText: "지금 시작하기",
  screenshotUrl: "/registry/hookable-ai-feature-6/screenshot.png",
  marqueeItems: [
    "자동화된 디자인 생성",
    "AI 기반 카피라이팅",
    "이미지 최적화",
    "모바일 반응형",
    "SEO 최적화",
    "A/B 테스트",
    "판매 데이터 분석",
    "빠른 수정 시스템",
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface HookableAiFeature6Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  screenshotUrl?: string;
  features?: typeof FEATURES;
  marqueeItems?: string[];
}

function Marquee({
  items,
  colors,
}: {
  items: string[];
  colors: typeof COLORS.dark;
}) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="relative overflow-hidden py-8">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${colors.background}, transparent)`,
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${colors.background}, transparent)`,
        }}
      />

      <motion.div
        ref={marqueeRef}
        className="flex gap-8"
        animate={{ x: isAnimating ? [0, -1000] : 0 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        onMouseEnter={() => setIsAnimating(false)}
        onMouseLeave={() => setIsAnimating(true)}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="px-6 py-3 rounded-full border flex-shrink-0 whitespace-nowrap"
            style={{
              borderColor: colors.border,
              color: colors.textSecondary,
            }}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HookableAiFeature6({
  mode = "dark",
  badge = DEFAULT_CONTENT.badge,
  heading = DEFAULT_CONTENT.heading,
  description = DEFAULT_CONTENT.description,
  ctaText = DEFAULT_CONTENT.ctaText,
  screenshotUrl = DEFAULT_CONTENT.screenshotUrl,
  features = FEATURES,
  marqueeItems = DEFAULT_CONTENT.marqueeItems,
}: HookableAiFeature6Props) {
  const colors = COLORS.dark;

  return (
    <section
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div
            className="inline-block rounded-full px-4 py-2 text-sm font-medium border"
            style={{ borderColor: colors.border, color: colors.textSecondary }}
          >
            {badge}
          </div>
          <h2
            className="mt-8 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: colors.text }}
          >
            {heading}
          </h2>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {description}
          </p>
          <div className="mt-8">
            <Button
              className="rounded-full px-8 py-6 text-base font-medium"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              {ctaText}
            </Button>
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20 rounded-xl overflow-hidden border"
          style={{ borderColor: colors.border }}
        >
          <div
            className="w-full h-96 md:h-[500px] flex items-center justify-center"
            style={{ backgroundColor: colors.border }}
          >
            <span style={{ color: colors.textSecondary }}>
              Product Screenshot
            </span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border"
              style={{ borderColor: colors.border }}
            >
              <h3 className="font-semibold text-lg mb-2" style={{ color: colors.text }}>
                {feature.title}
              </h3>
              <p style={{ color: colors.textSecondary }} className="text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Marquee Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Marquee items={marqueeItems} colors={colors} />
        </motion.div>
      </div>
    </section>
  );
}
