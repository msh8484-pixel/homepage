// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#111111",
    textSecondary: "#666666",
    badge: "#F5F5F5",
    buttonBg: "#111111",
    buttonText: "#FFFFFF",
  },
};

const GRADIENTS = {
  ellipse1: "rgba(138, 67, 225, 0.3)",
  ellipse2: "rgba(213, 17, 253, 0.2)",
  ellipse3: "rgba(239, 123, 22, 0.2)",
  ellipse4: "rgba(255, 47, 47, 0.15)",
};

const DEFAULT_CONTENT = {
  badge: "20K+ 사용자",
  headline: "팔리는 상품 상세페이지, 이제 AI로",
  subheadline: "수만 개의 히트상품 분석 데이터로 AI가 당신의 상품에 맞는 최고의 상세페이지를 자동 생성합니다",
  ctaText: "지금 시작하기",
  ctaHref: "#",
  rating: {
    stars: 5,
    score: 4.9,
    count: 1200,
  },
  videoUrl: "https://example.com/demo.mp4",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface HookableAiHero0Props {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  rating?: {
    stars: number;
    score: number;
    count: number;
  };
  videoUrl?: string;
}

export default function HookableAiHero0({
  mode = "light",
  badge = DEFAULT_CONTENT.badge,
  headline = DEFAULT_CONTENT.headline,
  subheadline = DEFAULT_CONTENT.subheadline,
  ctaText = DEFAULT_CONTENT.ctaText,
  ctaHref = DEFAULT_CONTENT.ctaHref,
  rating = DEFAULT_CONTENT.rating,
  videoUrl = DEFAULT_CONTENT.videoUrl,
}: HookableAiHero0Props) {
  const colors = COLORS.light;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      style={{ backgroundColor: colors.background }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ellipse 1 */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            backgroundColor: GRADIENTS.ellipse1,
            top: "10%",
            left: "10%",
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Ellipse 2 */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300,
            height: 300,
            backgroundColor: GRADIENTS.ellipse2,
            top: "50%",
            right: "10%",
          }}
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Ellipse 3 */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 350,
            height: 350,
            backgroundColor: GRADIENTS.ellipse3,
            bottom: "10%",
            left: "50%",
          }}
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        {/* Ellipse 4 */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 250,
            height: 250,
            backgroundColor: GRADIENTS.ellipse4,
            top: "30%",
            right: "30%",
          }}
          animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full px-4 py-2 text-sm font-medium mb-6"
          style={{
            backgroundColor: colors.badge,
            color: colors.text,
          }}
        >
          {badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          style={{ color: colors.text }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
          style={{ color: colors.textSecondary }}
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <a
            href={ctaHref}
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            {ctaText}
          </a>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="flex gap-1">
            {Array.from({ length: rating.stars }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5"
                fill="#FFA500"
                color="#FFA500"
              />
            ))}
          </div>
          <span style={{ color: colors.text }} className="font-semibold">
            {rating.score}
          </span>
          <span style={{ color: colors.textSecondary }}>
            ({rating.count.toLocaleString()} reviews)
          </span>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-2xl border"
          style={{ borderColor: colors.badge }}
        >
          <div
            className="w-full aspect-video flex items-center justify-center"
            style={{ backgroundColor: colors.badge }}
          >
            <span style={{ color: colors.textSecondary }}>
              Demo Video (1280 x 720)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
