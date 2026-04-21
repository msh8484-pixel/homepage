// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface SuperbillingIoPricing6Props {
  mode?: "light" | "dark";
}

const plans = [
  {
    name: "Personal",
    price: "$40",
    period: "월",
    description: "개인 개발자를 위한 플랜",
    features: [
      "월 10개의 구독",
      "기본 대시보드",
      "이메일 지원",
    ],
  },
  {
    name: "Pro",
    price: "$120",
    period: "월",
    description: "스타트업을 위한 플랜",
    features: [
      "무제한 구독",
      "고급 분석",
      "API 접근",
      "우선 지원",
    ],
    badge: "추천",
  },
  {
    name: "Enterprise",
    price: "맞춤",
    period: "가격",
    description: "대규모 서비스를 위한 플랜",
    features: [
      "모든 기능",
      "전담 관리자",
      "SLA 보장",
      "맞춤 개발",
    ],
  },
];

export default function SuperbillingIoPricing6({
  mode = "dark",
}: SuperbillingIoPricing6Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            간단한 요금제
          </h2>
          <p className="text-white/70 text-lg">
            당신의 서비스 규모에 맞는 플랜을 선택하세요
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 relative ${
                plan.badge
                  ? "border-pink-500 bg-pink-950/20"
                  : "border-gray-700 bg-gray-900"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-white/70 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-white/70 ml-2">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.badge
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "border border-gray-600 text-white hover:bg-gray-800"
                }`}
              >
                신청하기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
