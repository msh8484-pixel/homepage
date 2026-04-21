// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBg: "#FFFFFF",
    text: "#111111",
    textMuted: "#666666",
    accentColor: "#111111",
    border: "#E5E5E5",
    buttonBg: "#111111",
    buttonText: "#FFFFFF",
  },
};

const PRICING_PLANS = [
  {
    name: "Starter",
    price: 29900,
    description: "개인/소상공인용",
    features: [
      "월 5개 상세페이지 생성",
      "기본 AI 수정 무제한",
      "고객 지원 (이메일)",
      "기본 템플릿 라이브러리",
    ],
    cta: "시작하기",
    highlighted: false,
  },
  {
    name: "Growth",
    price: 79900,
    description: "중소 쇼핑몰용",
    features: [
      "월 20개 상세페이지 생성",
      "고급 AI 수정 무제한",
      "우선 고객 지원 (전화/채팅)",
      "전체 템플릿 라이브러리",
      "A/B 테스트 도구",
      "판매 데이터 분석",
    ],
    cta: "시작하기",
    highlighted: true,
  },
  {
    name: "Pro",
    price: 199900,
    description: "대규모 쇼핑몰용",
    features: [
      "월 100개 상세페이지 생성",
      "커스텀 AI 모델 트레이닝",
      "24/7 전담 지원",
      "API 접근",
      "고급 분석 & 리포팅",
      "팀 협업 도구",
    ],
    cta: "상담하기",
    highlighted: false,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface HookableAiPricing5Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingCard = ({
  plan,
  index,
  colors,
}: {
  plan: PricingPlan;
  index: number;
  colors: typeof COLORS.light;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative rounded-2xl p-8 transition-all hover:shadow-lg"
    style={{
      backgroundColor: plan.highlighted ? colors.accentColor : colors.cardBg,
      borderColor: plan.highlighted ? colors.accentColor : colors.border,
      border: `2px solid`,
      transform: plan.highlighted ? "scale(1.05)" : "scale(1)",
    }}
  >
    {/* Gradient Accent for Highlighted Plan */}
    {plan.highlighted && (
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, #FF2F2F, #EF7B16, #8A43E1, #D511FD)",
        }}
      />
    )}

    {/* Plan Name */}
    <h3
      className="text-2xl font-bold mb-2"
      style={{
        color: plan.highlighted ? colors.buttonText : colors.text,
      }}
    >
      {plan.name}
    </h3>

    {/* Description */}
    <p
      className="text-sm mb-6"
      style={{
        color: plan.highlighted ? "rgba(255, 255, 255, 0.8)" : colors.textMuted,
      }}
    >
      {plan.description}
    </p>

    {/* Price */}
    <div className="mb-6">
      <span
        className="text-4xl font-bold"
        style={{
          color: plan.highlighted ? colors.buttonText : colors.text,
        }}
      >
        ₩{(plan.price / 1000).toFixed(0)}k
      </span>
      <span
        style={{
          color: plan.highlighted ? "rgba(255, 255, 255, 0.7)" : colors.textMuted,
        }}
        className="text-sm ml-2"
      >
        / 월
      </span>
    </div>

    {/* CTA Button */}
    <button
      className="w-full py-3 rounded-lg font-semibold mb-8 transition-all hover:opacity-90"
      style={{
        backgroundColor: plan.highlighted ? colors.buttonText : colors.buttonBg,
        color: plan.highlighted ? colors.accentColor : colors.buttonText,
      }}
    >
      {plan.cta}
    </button>

    {/* Features */}
    <div className="space-y-4">
      {plan.features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
          viewport={{ once: true }}
          className="flex items-start gap-3"
        >
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{
              color: plan.highlighted
                ? colors.buttonText
                : colors.accentColor,
            }}
          />
          <span
            className="text-sm"
            style={{
              color: plan.highlighted
                ? "rgba(255, 255, 255, 0.9)"
                : colors.text,
            }}
          >
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function HookableAiPricing5({
  mode = "light",
  badge = "요금제",
  heading = "투명한 가격 정책",
  description = "당신의 비즈니스 규모에 맞는 완벽한 플랜을 선택하세요",
  plans = PRICING_PLANS,
}: HookableAiPricing5Props) {
  const colors = COLORS.light;

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
          className="text-center mb-16"
        >
          <div
            className="inline-block rounded-full px-4 py-2 text-sm font-medium mb-4"
            style={{
              backgroundColor: colors.cardBg,
              color: colors.accentColor,
            }}
          >
            {badge}
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            {heading}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            {description}
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              colors={colors}
            />
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-12"
          style={{ color: colors.textMuted }}
        >
          모든 플랜에는 14일 무료 체험이 포함되어 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
