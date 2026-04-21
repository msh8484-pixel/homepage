// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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

interface SuperbillingIoCta7Props {
  mode?: "light" | "dark";
}

export default function SuperbillingIoCta7({
  mode = "dark",
}: SuperbillingIoCta7Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            구독 결제 시스템을 구축하기 위해 더 이상 복잡한 과정은 필요 없습니다.
            슈퍼빌링과 함께 간단하게 시작하세요.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-gray-950 transition-all"
            style={{ backgroundColor: COLORS[mode].accent }}
          >
            사전예약 신청
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
