// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentLight: "#FFF7ED",
    accentText: "#F97316",
  },
  dark: {
    accent: "#FB923C",
    accentLight: "#431407",
    accentText: "#FDBA74",
  },
} as const;

const CONTENT = {
  badge: "주요 기능",
  title: "볼타 AI를 사용하면",
  titleHighlight: "어떤 변화를 경험",
  titleEnd: "하게 될까요?",
};

const AUTO_SWITCH_INTERVAL = 5000;

const FEATURES = [
  {
    icon: "calendar",
    title: "미래 날짜를 선택하면, 볼타가 자동으로 발행해 드려요.",
    description: "예약 발행으로 편리하게 세금계산서를 관리하세요.",
    link: "자세히 보기",
  },
  {
    icon: "link",
    title: "입출금 내역을 볼타 AI가 자동으로 연결해 미수금, 미지급 건을 한눈에 볼 수 있어요.",
    description: "쉽고 간편하게 매출 매입 관리할 수 있어요.",
    link: "자세히 보기",
  },
  {
    icon: "document",
    title: "번거로운 지출결의는 그만. 한 번에 작성하고 승인까지 완료하세요.",
    description: "간편한 지출결의 프로세스로 업무 효율을 높이세요.",
    link: "자세히 보기",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BoltaIoFeature3Props {
  mode?: "light" | "dark";
}

export default function BoltaIoFeature3({
  mode = "light",
}: BoltaIoFeature3Props) {
  const colors = COLORS[mode];
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNextFeature = useCallback(() => {
    setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    setProgress(0);
  }, []);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setProgress(0);
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return prev;
        }
        return prev + 100 / (AUTO_SWITCH_INTERVAL / 50);
      });
    }, 50);

    const switchInterval = setInterval(() => {
      goToNextFeature();
    }, AUTO_SWITCH_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearInterval(switchInterval);
    };
  }, [goToNextFeature, activeFeature]);

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: colors.accentLight,
              color: colors.accentText,
            }}
          >
            {CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-normal"
          >
            {CONTENT.title}
            <br />
            <span style={{ color: colors.accent }}>
              {CONTENT.titleHighlight}
            </span>
            {CONTENT.titleEnd}
          </motion.h2>
        </div>

        {/* Feature Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div>
            {FEATURES.map((feature, index) => {
              const isActive = activeFeature === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 cursor-pointer transition-all ${
                    isActive
                      ? "bg-white border-l-2"
                      : "hover:bg-white/50 border-l-2 border-l-gray-200"
                  }`}
                  style={isActive ? { borderLeftColor: colors.accent } : {}}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full flex-shrink-0 ${
                        isActive ? "bg-orange-50" : "bg-gray-100"
                      }`}
                    >
                      <div className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {feature.description && isActive && (
                        <p className="text-gray-600 text-base mb-3">
                          {feature.description}
                        </p>
                      )}
                      {feature.link && isActive && (
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-base font-medium text-gray-400"
                        >
                          {feature.link}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    stroke="#D1D5DB"
                    fill="none"
                    strokeWidth="1"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="#D1D5DB"
                    fill="none"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="space-y-4 text-center text-gray-500">
                    <p>Feature {activeFeature + 1} preview</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
