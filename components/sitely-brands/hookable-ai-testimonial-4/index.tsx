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
    border: "#E5E5E5",
    accent: "#111111",
  },
};

const STATS = [
  {
    value: "10X",
    label: "빠른 제작",
    description: "기존 대비 10배 빠른 디자인 생성",
  },
  {
    value: "2X",
    label: "높은 전환율",
    description: "기존 디자인 대비 2배 높은 판매율",
  },
  {
    value: "5X",
    label: "비용 절감",
    description: "외주 비용 대비 1/5 수준으로 절감",
  },
];

const TESTIMONIALS = [
  {
    name: "박준호",
    company: "쌀 직거래 쇼핑몰",
    quote:
      "상세페이지 만드는 데 걸리던 일주일이 하루로 줄었어요. 품질도 예상보다 훨씬 좋습니다.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "김지은",
    company: "화장품 브랜드",
    quote:
      "AI가 생성한 카피라이팅이 정말 인상적이어요. 실제로 고객 리뷰 기반이라는 게 느껴져요.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "이민철",
    company: "패션 의류 회사",
    quote:
      "처음엔 AI가 만든 디자인이 불안했는데, 수정 시스템이 정말 간편해서 금방 익숙해졌어요.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
  {
    name: "정소영",
    company: "주방용품 전문점",
    quote:
      "ROI가 정말 좋아요. 상세페이지 하나당 충분히 매출이 오르니까요.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface StatCard {
  value: string;
  label: string;
  description: string;
}

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  image: string;
}

interface HookableAiTestimonial4Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  stats?: StatCard[];
  testimonials?: Testimonial[];
}

export default function HookableAiTestimonial4({
  mode = "light",
  badge = "사용자 후기",
  heading = "실제 사용자들의 반응",
  stats = STATS,
  testimonials = TESTIMONIALS,
}: HookableAiTestimonial4Props) {
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
              color: colors.accent,
            }}
          >
            {badge}
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: colors.text }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.border,
                border: `1px solid`,
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: colors.accent }}
              >
                {stat.value}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.text }}
              >
                {stat.label}
              </h3>
              <p style={{ color: colors.textMuted }} className="text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.border,
                border: `1px solid`,
              }}
            >
              {/* Quote */}
              <p
                className="text-lg mb-6 flex-1 italic"
                style={{ color: colors.text }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: colors.border }}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.text }}>
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
