// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#111111",
    textMuted: "#666666",
    cardBg: "#F8F8F8",
    border: "#E5E5E5",
    accentButton: "#111111",
  },
};

/**
 * FAQ 콘텐츠
 */
const FAQ_DATA = {
  badge: "자주 묻는 질문",
  heading: "할 일 없는 '질문 먹이기'의 시대",
  description: "후커블 AI에 대해 자주 묻는 질문들을 정리했습니다.",
  leftColumn: [
    {
      question: "정말 AI만으로 품질있는 상세페이지를 만들 수 있나요?",
      answer:
        "네, 가능합니다. 후커블 AI는 수만 개의 고매출 상세페이지를 학습한 AI 모델입니다. 전문 디자이너 수준의 결과물을 자동으로 생성하고, 필요시 수정이나 재생성을 통해 원하는 결과를 얻을 수 있습니다.",
    },
    {
      question: "생성된 디자인이 내 상품에 맞지 않으면 어떻게 해요?",
      answer:
        "채팅 방식의 수정 요청을 통해 언제든지 수정할 수 있습니다. 특정 부분을 클릭한 후 원하는 수정사항을 입력하면 AI가 바로 반영해줍니다.",
    },
    {
      question: "저작권 문제는 없나요?",
      answer:
        "네, 모든 생성 결과물은 100% 오리지널입니다. 기존 디자인을 그대로 복사하는 것이 아니라 AI가 패턴을 학습한 후 새로운 이미지와 문구를 생성합니다.",
    },
  ],
  rightColumn: [
    {
      question: "얼마나 빨리 상세페이지를 완성할 수 있나요?",
      answer:
        "기본 생성은 5분 이내에 완료됩니다. 수정이 필요하더라도 추가 5~10분이면 충분합니다. 기존 외주 방식의 1/10 수준으로 단축됩니다.",
    },
    {
      question: "비용은 어떻게 되나요?",
      answer:
        "월간 구독형과 사용량 기반 과금 방식 중 선택할 수 있습니다. 상세페이지 1개당 평균 10,000원 정도로 매우 저렴합니다.",
    },
    {
      question: "계약 조건이나 제약은 없나요?",
      answer:
        "최소 계약 기간은 없습니다. 언제든지 자유롭게 시작하고 중단할 수 있으며, 마음에 들지 않으면 즉시 환불해드립니다.",
    },
  ],
  cta: {
    text: "더 알아보기",
    contact: "contact@example.com",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface HookableAiFaq8Props {
  mode?: "light" | "dark";
}

function FAQItemComponent({
  item,
  index,
  colors,
}: {
  item: FAQItem;
  index: number;
  colors: typeof COLORS.light;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b"
      style={{ borderColor: colors.border }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-4 flex items-start justify-between gap-4 hover:bg-opacity-50 transition-colors"
        style={{
          backgroundColor: isOpen ? colors.cardBg : "transparent",
        }}
      >
        <span
          className="text-left font-semibold text-base md:text-lg"
          style={{ color: colors.text }}
        >
          {item.question}
        </span>
        <div className="flex-shrink-0 mt-0.5">
          {isOpen ? (
            <Minus className="w-5 h-5" style={{ color: colors.accentButton }} />
          ) : (
            <Plus className="w-5 h-5" style={{ color: colors.accentButton }} />
          )}
        </div>
      </button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4">
          <p style={{ color: colors.textMuted }} className="text-sm md:text-base leading-relaxed">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HookableAiFaq8({ mode = "light" }: HookableAiFaq8Props) {
  const colors = COLORS.light;

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: colors.cardBg, color: colors.text }}
          >
            {FAQ_DATA.badge}
          </span>
          <h2
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: colors.text }}
          >
            {FAQ_DATA.heading}
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            {FAQ_DATA.description}
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* Left Column */}
          <div
            className="rounded-lg border"
            style={{ borderColor: colors.border, backgroundColor: colors.background }}
          >
            {FAQ_DATA.leftColumn.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                index={index}
                colors={colors}
              />
            ))}
          </div>

          {/* Right Column */}
          <div
            className="rounded-lg border"
            style={{ borderColor: colors.border, backgroundColor: colors.background }}
          >
            {FAQ_DATA.rightColumn.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                index={index + 3}
                colors={colors}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="mb-6 text-lg"
            style={{ color: colors.textMuted }}
          >
            아직도 궁금한 점이 있으신가요?
          </p>
          <a
            href={`mailto:${FAQ_DATA.cta.contact}`}
            className="inline-block px-8 py-3 rounded-lg font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: colors.accentButton,
              color: "#FFFFFF",
            }}
          >
            {FAQ_DATA.cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
