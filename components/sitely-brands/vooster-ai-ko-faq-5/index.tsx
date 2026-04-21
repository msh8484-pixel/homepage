// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface VoosterAiKoFaq5Props {
  mode?: "light" | "dark";
}

const faqs = [
  {
    question: "Vooster는 어떤 서비스인가요?",
    answer:
      "Vooster는 AI 기반 프로젝트 관리 서비스입니다. PRD 작성부터 구현 계획 도출, 코드베이스 구조화까지 바이브코딩에 필요한 모든 과정을 AI가 도와드립니다.",
  },
  {
    question: "Cursor가 없어도 사용할 수 있나요?",
    answer:
      "네, Cursor 없이도 Vooster를 사용하실 수 있습니다. Vooster는 독립적인 서비스로, 다양한 개발 환경에서 활용 가능합니다.",
  },
  {
    question: "베타 기간은 언제까지인가요?",
    answer:
      "현재 정식 출시되었습니다. 모든 기능을 자유롭게 이용하실 수 있습니다.",
  },
  {
    question: "기존 프로젝트도 임포트할 수 있나요?",
    answer:
      "네, 기존 프로젝트를 Vooster에 임포트하여 관리하실 수 있습니다. 프로젝트 설정에서 임포트 기능을 이용해주세요.",
  },
  {
    question: "팀 협업 기능은 언제 출시되나요?",
    answer:
      "팀 협업 기능은 로드맵에 포함되어 있으며, 곧 출시될 예정입니다. Discord 커뮤니티에서 최신 업데이트를 확인해주세요.",
  },
  {
    question: "데이터는 안전하게 보호되나요?",
    answer:
      "네, 모든 데이터는 암호화되어 안전하게 저장됩니다. 개인정보보호정책에 따라 철저하게 관리됩니다.",
  },
];

export default function VoosterAiKoFaq5({
  mode = "light",
}: VoosterAiKoFaq5Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-sans text-4xl font-medium tracking-tight text-gray-950 md:text-5xl">
            자주 묻는 질문
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-gray-600">
            Vooster에 대해 궁금한 점을 해결해 드립니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg ${
                  openIndex === index ? "border-gray-300" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-all duration-300 group-hover:text-gray-700"
                >
                  <div className="flex w-full items-center gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="flex-1 text-base font-medium text-gray-950">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`pointer-events-none h-4 w-4 shrink-0 translate-y-0.5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="ml-12 text-sm text-gray-600">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}