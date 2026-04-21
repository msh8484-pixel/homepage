// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#1890FF",
    description: "#E4E4E7",
    buttonBorder: "#E4E4E7",
  },
  dark: {
    accent: "#1890FF",
    description: "#E4E4E7",
    buttonBorder: "#E4E4E7",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface GreetinghrCta2Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function GreetinghrCta2({
  mode = "light",
  badge = "국내 1위 채용 관리 솔루션",
  heading = "그리팅을 처음 들어보셨나요?",
  description = "그리팅으로 복잡한 채용 과정을 더 쉽고 단순하게 바꿔보세요.",
  buttonText = "서비스 소개서 다운로드",
  buttonHref = "#",
}: GreetinghrCta2Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full py-8 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl"
        style={{
          backgroundColor: colors.accent,
          boxShadow: "rgba(255, 255, 255, 0.2) 0.5625px 0.5625px 0.5625px 0px inset, rgba(0, 0, 0, 0.05) -0.5625px -0.5625px 0.5625px 0px inset",
        }}
      >
        <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 md:px-12 lg:px-16 py-12 lg:py-16">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-xl z-10">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-medium"
              style={{ color: colors.description }}
            >
              {badge}
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
            >
              {heading}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg"
              style={{ color: colors.description }}
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              href={buttonHref}
              className="group inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-900 font-medium text-sm md:text-base rounded transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              style={{
                border: `1px solid ${colors.buttonBorder}`,
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
