// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface TrackitSoLogoCloud1Props {
  mode?: "light" | "dark";
}

const logos = [
  { name: "KT", logo: "🏢" },
  { name: "SK magic", logo: "✨" },
  { name: "GEMS", logo: "💎" },
  { name: "Health Boy Gym", logo: "💪" },
];

const problems = [
  {
    title: "데이터 없이 감에 의존해 매출을 예측하는 기업",
    icon: "📊",
  },
  {
    title: "성공한 영업 패턴을 다시 만들지 못하는 기업",
    icon: "🔄",
  },
  {
    title: "인사 이동으로 고객 관계가 끊어지는 기업",
    icon: "👥",
  },
  {
    title: "이전 CRM 도입이 실패했던 기업",
    icon: "❌",
  },
];

export default function TrackitSoLogoCloud1({
  mode = "dark",
}: TrackitSoLogoCloud1Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            성공한 기업들의 선택
          </h2>
          <p className="text-white/70 text-lg">
            Trackit과 함께 성공하세요
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center px-6 py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors"
            >
              <span className="text-4xl mr-3">{logo.logo}</span>
              <span className="text-white font-semibold">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem cards */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-white mb-12 text-lg">
            이런 상황에 해당한다면?
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex gap-4"
              >
                <span className="text-3xl flex-shrink-0">{problem.icon}</span>
                <p className="text-white/80">{problem.title}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 font-semibold rounded-lg hover:shadow-lg transition-shadow">
              무료로 시작하기
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
