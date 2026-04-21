// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#3366FF",
  },
  dark: {
    accent: "#4D7AFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface RelateKrTestimonial8Props {
  mode?: "light" | "dark";
}

export default function RelateKrTestimonial8({
  mode = "light",
}: RelateKrTestimonial8Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <section
      className={`py-24 md:py-36 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-4xl font-bold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            고객 추천사
          </h2>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Relate를 사용하는 고객들의 이야기
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              company: "Publy",
              quote: "영업 효율이 대폭 증가했습니다",
              role: "CPO",
            },
            {
              company: "Manatee",
              quote: "수십 시간을 절약했습니다",
              role: "CEO",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-lg border p-8 ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : idx === 1
                  ? "bg-blue-50 border-blue-200"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3
                className={`font-semibold mb-2 ${
                  isDark || idx === 1
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {testimonial.company}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  isDark || idx === 1
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {testimonial.quote}
              </p>
              <p
                className={`text-xs ${
                  isDark || idx === 1
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
