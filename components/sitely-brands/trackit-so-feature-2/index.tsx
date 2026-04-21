// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface TrackitSoFeature2Props {
  mode?: "light" | "dark";
}

const sections = [
  {
    title: "단계별 구현",
    items: [
      "쉬운 도입과 학습",
      "조직의 특성에 맞게 커스터마이징",
      "사업 운영 확대",
    ],
  },
  {
    title: "자동화된 고객 데이터 수집",
    features: [
      "연락처 자동 설정",
      "회사 정보 자동 보강",
      "통합된 고객 프로필",
    ],
  },
];

export default function TrackitSoFeature2({ mode = "dark" }: TrackitSoFeature2Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Step buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {["쉬운 도입", "커스터마이징", "사업 확대"].map((step, index) => (
            <motion.button
              key={step}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                index === 0
                  ? "bg-cyan-500 text-gray-950"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {step}
            </motion.button>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                기능 {item}
              </h3>
              <p className="text-white/70">
                Trackit의 강력한 기능으로 영업 프로세스를 개선하세요.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-12 text-center"
        >
          <div className="text-5xl font-bold text-white mb-2">
            218,000,000
          </div>
          <p className="text-white/70">월별 거래액 추적</p>
        </motion.div>
      </div>
    </section>
  );
}
