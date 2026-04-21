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
    buttonBg: "#00BEFD",
    buttonText: "#FFFFFF",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    textSecondary: "#B3B3B3",
    buttonBg: "#00BEFD",
    buttonText: "#FFFFFF",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ImwebMeCta7Props {
  mode?: "light" | "dark";
  title?: string;
  titleLine2?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function ImwebMeCta7({
  mode = "light",
  title = "지금 바로",
  titleLine2 = "시작하세요",
  buttonText = "무료로 시작하기",
  onButtonClick,
}: ImwebMeCta7Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: colors.text }}
          >
            {title}
            <br />
            {titleLine2}
          </h2>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
