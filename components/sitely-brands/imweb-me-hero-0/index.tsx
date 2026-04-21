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
    badge: "#E8F4FF",
    badgeText: "#00BEFD",
    buttonBg: "#00BEFD",
    buttonText: "#FFFFFF",
  },
};

const DEFAULT_FEATURES = [
  {
    icon: "zap",
    title: "빠른 구축",
    description: "드래그 앤 드롭으로 쉽게",
  },
  {
    icon: "palette",
    title: "아름다운 디자인",
    description: "600+ 템플릿 제공",
  },
  {
    icon: "shopping-cart",
    title: "쇼핑몰 기능",
    description: "완벽한 판매 솔루션",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Zap, Palette, ShoppingCart, Play } from "lucide-react";

interface HeroFeature {
  icon: string;
  title: string;
  description: string;
}

interface ImwebMeHero0Props {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  features?: HeroFeature[];
}

export default function ImwebMeHero0({
  mode = "light",
  badge = "아임웹으로 시작하세요",
  headline = "누구나 쉽게",
  subheadline = "만드는 웹사이트 빌더",
  ctaText = "무료로 시작하기",
  features = DEFAULT_FEATURES,
}: ImwebMeHero0Props) {
  const colors = COLORS.light;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <Zap className="w-6 h-6" />;
      case "palette":
        return <Palette className="w-6 h-6" />;
      case "shopping-cart":
        return <ShoppingCart className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div
              className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: colors.badge,
                color: colors.badgeText,
              }}
            >
              {badge}
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: colors.text }}
            >
              {headline}
              <br />
              {subheadline}
            </h1>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              {ctaText}
            </motion.button>

            {/* Features List */}
            <div className="space-y-4 pt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: colors.badge }}
                  >
                    <div style={{ color: colors.badgeText }}>
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: colors.text }}
                    >
                      {feature.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer"
              style={{ backgroundColor: colors.badge }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full transition-all"
                style={{ backgroundColor: colors.buttonBg }}
              >
                <Play
                  className="w-8 h-8"
                  style={{ color: colors.buttonText }}
                  fill="white"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
