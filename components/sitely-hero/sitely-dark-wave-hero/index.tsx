"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    accent: "#60A5FA",          // 라이트 블루
    accentHover: "#3B82F6",     // 블루 호버
    wave: "#0EA5E9",            // 사이안
    waveSecondary: "#06B6D4",   // 진한 사이안
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    wave: "#0EA5E9",
    waveSecondary: "#06B6D4",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IMAGES = {
  // 예시:
  // hero: {
  //   path: "/registry/sitely-dark-wave-hero/hero.jpg",
  //   alt: "Hero image description",
  //   prompt: `Detailed image generation prompt...`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface SitelyDarkWaveHeroProps {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export default function SitelyDarkWaveHero({
  mode = "dark",
  headline = "Unleash the Power of",
  subheadline = "Intelligent Automation",
  description = "Revolutionize your business processes by incorporating AI solutions, propelling your organization into the future.",
  ctaText = "Start free trial",
  ctaHref = "#",
  onCtaClick,
}: SitelyDarkWaveHeroProps) {
  const colors = COLORS[mode];

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref && ctaHref !== "#") {
      window.location.href = ctaHref;
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Wave Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* SVG Wave Animation */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={colors.wave} stopOpacity="0.6" />
              <stop offset="100%" stopColor={colors.waveSecondary} stopOpacity="0.3" />
            </linearGradient>

            <linearGradient
              id="waveGradient2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={colors.waveSecondary} stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
            </linearGradient>

            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* Primary Wave */}
          <motion.path
            d="M0,400 Q480,300 960,350 T1920,400 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient1)"
            initial={{ d: "M0,400 Q480,300 960,350 T1920,400 L1920,1080 L0,1080 Z" }}
            animate={{
              d: [
                "M0,400 Q480,300 960,350 T1920,400 L1920,1080 L0,1080 Z",
                "M0,380 Q480,320 960,330 T1920,380 L1920,1080 L0,1080 Z",
                "M0,420 Q480,280 960,370 T1920,420 L1920,1080 L0,1080 Z",
                "M0,400 Q480,300 960,350 T1920,400 L1920,1080 L0,1080 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary Wave */}
          <motion.path
            d="M0,450 Q480,350 960,400 T1920,450 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient2)"
            initial={{ d: "M0,450 Q480,350 960,400 T1920,450 L1920,1080 L0,1080 Z" }}
            animate={{
              d: [
                "M0,450 Q480,350 960,400 T1920,450 L1920,1080 L0,1080 Z",
                "M0,430 Q480,370 960,380 T1920,430 L1920,1080 L0,1080 Z",
                "M0,470 Q480,330 960,420 T1920,470 L1920,1080 L0,1080 Z",
                "M0,450 Q480,350 960,400 T1920,450 L1920,1080 L0,1080 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </svg>

        {/* Additional Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, rgba(15, 165, 233, 0.15) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Headline */}
          <h1 className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            {headline}
          </h1>

          {/* Subheadline - Italicized */}
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white italic">
            {subheadline}
          </h2>

          {/* Description */}
          <motion.p
            className="mb-10 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 group"
              style={{
                backgroundColor: "white",
              }}
            >
              {ctaText}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer Text */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-xs sm:text-sm text-gray-500">
          Join 50,000+ companies already automated.
        </p>
      </motion.div>
    </section>
  );
}
