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
    gradientStart: "#FF2F2F",
    gradientMid1: "#EF7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D511FD",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    textMuted: "#B3B3B3",
    gradientStart: "#FF2F2F",
    gradientMid1: "#EF7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D511FD",
  },
} as const;

/**
 * 콘텐츠
 */
const CONTENT = {
  heading: "Say Goodbye to",
  painPoints: [
    "시간이 오래 걸리는 디자인 프로세스",
    "일관성 없는 브랜드 가이드라인",
    "반복되는 수정 요청과 피드백",
    "높은 디자인 외주 비용",
    "제한적인 디자인 선택지",
    "복잡한 협업 프로세스",
    "빠르게 변하는 트렌드 적용",
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface HookableAiCta3Props {
  mode?: "light" | "dark";
  heading?: string;
  painPoints?: string[];
}

// Arrow SVG Component
function CurvedArrowSVG({ color }: { color: string }) {
  return (
    <svg
      className="h-16 w-16 md:h-20 md:w-20"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 20 40 Q 50 20, 80 40"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 70 30 L 80 40 L 70 50"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function HookableAiCta3({
  mode = "light",
  heading = CONTENT.heading,
  painPoints = CONTENT.painPoints,
}: HookableAiCta3Props) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % painPoints.length);
      setAnimationKey((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [painPoints.length]);

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: colors.text }}
            >
              {heading}
            </h2>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CurvedArrowSVG color={colors.gradientStart} />
          </motion.div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-2xl">
            {/* Fade Top */}
            <div
              className="absolute top-0 left-0 right-0 h-12 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, ${colors.background}, transparent)`,
              }}
            />

            {/* Carousel */}
            <div className="relative h-32 md:h-40 flex items-center justify-center overflow-hidden">
              <motion.div
                key={animationKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center px-4"
              >
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                  style={{
                    background: `linear-gradient(90deg, ${colors.gradientStart}, ${colors.gradientMid1}, ${colors.gradientMid2}, ${colors.gradientEnd})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {painPoints[currentIndex]}
                </h3>
              </motion.div>
            </div>

            {/* Fade Bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-12 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${colors.background}, transparent)`,
              }}
            />
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 justify-center">
            {painPoints.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAnimationKey((prev) => prev + 1);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor:
                    index === currentIndex ? colors.gradientStart : colors.textMuted,
                  width: index === currentIndex ? 24 : 8,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div
          className="mt-16 md:mt-20 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.gradientStart}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
