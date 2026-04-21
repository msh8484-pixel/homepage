// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const CONTENT = {
  badge: "FAQ",
  title: "자주 묻는 질문",
  description: "Trackit에 대해 궁금한 점들을 확인해보세요",
  items: [
    {
      question: "어떤 규모의 기업에 적합한가요?",
      answer: "Trackit은 스타트업부터 대기업까지 모든 규모의 기업에 적합합니다.",
    },
    {
      question: "커스터마이징이 가능한가요?",
      answer: "네, 당신의 비즈니스에 맞게 완전히 커스터마이징할 수 있습니다.",
    },
    {
      question: "어떤 연동이 지원되나요?",
      answer: "Slack, Google Workspace, Salesforce 등 주요 도구들과 연동됩니다.",
    },
    {
      question: "모바일에서도 사용할 수 있나요?",
      answer: "네, iOS와 Android에서 모두 사용 가능한 앱을 제공합니다.",
    },
    {
      question: "구현에 얼마나 걸리나요?",
      answer: "보통 1-2주 내에 완전히 구현하고 운영을 시작할 수 있습니다.",
    },
  ],
};

interface TrackitSoFaq7Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFaq7({ mode = "dark" }: TrackitSoFaq7Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full">
              {CONTENT.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {CONTENT.title}
          </h2>
          <p className="text-white/70">{CONTENT.description}</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-4">
          {CONTENT.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white text-left">
                  {item.question}
                </h3>
                <Plus
                  className="w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform"
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-800/50 text-white/80">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
