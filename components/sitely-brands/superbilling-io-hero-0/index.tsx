// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FFFFFF",
    hover: "#F3F4F6",
  },
  dark: {
    accent: "#FFFFFF",
    hover: "#F3F4F6",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface SuperbillingIoHero0Props {
  mode?: "light" | "dark";
}

export default function SuperbillingIoHero0({
  mode = "dark",
}: SuperbillingIoHero0Props) {
  return (
    <section className="relative w-full h-[600px] bg-gray-950 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              3분만에 연동하는<br />
              가장 쉬운 구독 결제
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-white/70 mb-8"
            >
              개발자 없이도 결제 시스템을 구축할 수 있습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-sm text-orange-400 font-semibold">
                최초 100명 한정 3개월 무료 사용권
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-gray-950 transition-all"
              style={{ backgroundColor: COLORS[mode].accent }}
            >
              사전예약 신청
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
